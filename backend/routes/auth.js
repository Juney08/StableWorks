const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id, username',
      [username, email, hashedPassword]
    );
    const token = jwt.sign({ user: { id: user.rows[0].id } }, process.env.JWT_SECRET);
    res.json({ token, username: user.rows[0].username });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
    if (!user.rows.length) return res.status(400).send('User not found');
    const valid = await bcrypt.compare(password, user.rows[0].password);
    if (!valid) return res.status(400).send('Invalid password');
    const token = jwt.sign({ user: { id: user.rows[0].id } }, process.env.JWT_SECRET);
    res.json({ token, username: user.rows[0].username });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const { mood, intent } = req.body;
  const userId = req.user.id;
  try {
    const checkin = await pool.query(
      'INSERT INTO checkins (user_id, mood, intent, timestamp) VALUES ($1,$2,$3,NOW()) RETURNING *',
      [userId, mood, intent]
    );
    res.json(checkin.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

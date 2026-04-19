const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/auth');

// Chronological feed
router.get('/', auth, async (req, res) => {
  try {
    const posts = await pool.query(
      'SELECT id, author_id, content_text, content_type, timestamp FROM posts ORDER BY timestamp DESC LIMIT 20'
    );
    res.json(posts.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Create post
router.post('/', auth, async (req, res) => {
  const { content_text, content_type } = req.body;
  const userId = req.user.id;
  try {
    const post = await pool.query(
      'INSERT INTO posts (author_id, content_text, content_type, timestamp) VALUES ($1,$2,$3,NOW()) RETURNING *',
      [userId, content_text, content_type]
    );
    res.json(post.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/auth');

// Get a random reflection prompt
router.get('/random', auth, async (req, res) => {
  try {
    const prompt = await pool.query(
      'SELECT id, prompt_text, category FROM reflection_prompts ORDER BY RANDOM() LIMIT 1'
    );
    res.json(prompt.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all prompts
router.get('/all', auth, async (req, res) => {
  try {
    const prompts = await pool.query(
      'SELECT id, prompt_text, category FROM reflection_prompts'
    );
    res.json(prompts.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Submit a prompt response
router.post('/respond', auth, async (req, res) => {
  const { prompt_id, response_text } = req.body;
  const userId = req.user.id;
  
  try {
    const response = await pool.query(
      'INSERT INTO prompt_responses (user_id, prompt_id, response_text) VALUES ($1, $2, $3) RETURNING *',
      [userId, prompt_id, response_text]
    );
    res.json(response.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get user's past responses
router.get('/my-responses', auth, async (req, res) => {
  const userId = req.user.id;
  
  try {
    const responses = await pool.query(
      `SELECT pr.id, pr.response_text, pr.created_at, rp.prompt_text, rp.category
       FROM prompt_responses pr
       JOIN reflection_prompts rp ON pr.prompt_id = rp.id
       WHERE pr.user_id = $1
       ORDER BY pr.created_at DESC`,
      [userId]
    );
    res.json(responses.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

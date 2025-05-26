const express = require('express');
const router = express.Router();
const redis = require('redis');
const configs = require('../util/config');
const { getAsync } = require('../redis');

let visits = 0;

router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get('/statistics', async (req, res) => {
  const addedTodos = (await getAsync('added_todos')) || 0;
  res.json({ added_todos: Number(addedTodos) + 1 });
});

module.exports = router;

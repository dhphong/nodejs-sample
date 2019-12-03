const express = require('express');
const todo = require('../services/todo');

const router = new express.Router();


/**
 * List TODO
 */
router.get('/', async (req, res, next) => {
  const options = {
    limit: req.query['limit']
  };

  try {
    const result = await todo.getTodo(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Creates a TODO
 */
router.post('/', async (req, res, next) => {
  const options = {
    todo: req.body['todo']
  };

  try {
    const result = await todo.postTodo(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

router.get('/:id', async (req, res, next) => {
  const options = {
    id: req.params['id']
  };

  try {
    const result = await todo.getTodoById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Customers
 */
router.delete('/:id', async (req, res, next) => {
  const options = {
    id: req.params['id']
  };

  try {
    const result = await todo.deleteTodoById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;

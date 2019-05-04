const express = require('express');
const router = express.Router();
const db = require('../../../db');

router.get('/', (req, res) => {
  db.select()
    .from('task')
    .orderBy('id')
    .then(data => res.send(data));
});

router.get('/:id', (req, res) => {
  db('task')
    .where({
      id: req.params.id
    })
    .first()
    .then(data => res.send(data));
});

router.post('/', (req, res) => {
  db.insert(req.body)
    .returning('*')
    .into('task')
    .then(data => res.send(data));
});

router.patch('/:id', (req, res) => {
  db('task')
    .where({
      id: req.params.id
    })
    .update(req.body)
    .returning('*')
    .then(data => res.send(data));
});

router.put('/:id', (req, res) => {
  db('task')
    .where({
      id: req.params.id
    })
    .update({
      title: req.body.title || null,
      is_done: req.body.is_done || null
    })
    .returning('*')
    .then(data => res.send(data));
});

router.delete('/:id', (req, res) => {
  db('task')
    .where({
      id: req.params.id
    })
    .del()
    .then(() =>
      res.json({
        success: true
      })
    );
});

module.exports = router;

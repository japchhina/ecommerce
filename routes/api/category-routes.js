const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
  .then(categories)=> res.json(categories)
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then(category => res.json(category))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
  .then(category => res.json(category))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    }
  });

module.exports = router;

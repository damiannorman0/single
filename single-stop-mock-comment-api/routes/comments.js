var express = require('express')
var router = express.Router()
const commentsController = require('./../controllers/comments')

/* GET users listing. */
router.get('/', (req, res, next) => res.json(commentsController.getComments()))

router.post('/', (req, res, next) => {
  console.log(req.body.comment)
  const comment = commentsController.addComment(req.body.comment)
  res.json(comment)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  const comments = commentsController.removeComment(id)
  res.json(comments)
})

module.exports = router

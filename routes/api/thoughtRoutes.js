const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

//GET and POST All users
router.route('/').get(getAllThoughts).post(createThought);

//GET user id, PUT a update Thoughts id and DELETE  Thoughts.
router
.route('/:thoughtId')
.get(getThoughtsById)
.put(updateThoughtById)
.delete(deleteThought);

//POST reaction to a Thought 
router
.route('/:thoughtId/reactions/:reactionId')
.post(createReaction);

//DELETE reaction to a Thought
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


//Export router
module.exports = router; 

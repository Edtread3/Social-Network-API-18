const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require('../../controllers/userController.js');

//GET and POST All users
router.route('/').get(getAllUsers).post(createUser);

//GET user id, PUT a updated user id and DELETE a user by id.
router
.route('/:userId')
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById);

//POST add friend and DELETE (remove) a Frirnd.
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);


//Export router
module.exports = router; 

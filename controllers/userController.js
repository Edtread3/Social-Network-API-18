const {User} = require('../models');

const UserController = {
    getAllUsers(req, res) {
        User.find({})
         .then(userData => res.json(userData))
         .catch(err => res.status(500).json(err));
    },

    // get a user by Id
    getUserById(req, res) {
        User.findById(req.params.userId)
          .then(userData => res.json(userData))
          .catch(err => res.status(500).json(err));
    },

    //create a user
    createUser(req, res) {
        User.create(req.body)
          .then(userData => res.json(userData))
          .catch(err => res.status(500).json(err));
    },

    //update a user by Id
    updateUserById(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, {new: true})
          .then(userData => {
            if (!userData) {
                return res.status(404).json({message: 'Sorry User not found'});
            }
            res.json(userData);
          })
          .catch(err => res.status(500).json(err));
    },

    //delete user
    deleteUserById(req, res) {
        User.findOneAndDelete(req.params.id)
          .then(userData => {
            if (!userData) {
                return res.status(404).json({message: 'Sorry User not found'});
            }
            res.json({message:'User has been deleted'});
          })
          .catch(err => res.status(500).json(err));
    },

    // Add friend to users friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$addToSet: {friends: req.body.friendId || req.params.friendId}},
            {new: true}
        )
           .then(userData => {
            if (!userData) {
                return res.status(404).json({message: 'Sorry User not found'});
            }
            res.json(userData);
           })
           .catch(err => res.status(500).json(err));
    },
    
    // Remove a friend from user friendlist
    removeFriend({params}, res) {
        User.findOneAndUpdate(
            {_id:params.userId},
            {$pull: {friends: params.friendId}},
            {new: true},
        )
           .then(dbUserData => {
            if (!dbUserData) {
                return res.status(404).json({message: 'Sorry No User found with this Id'});
            }
        // check if friend successfully removed
        const removed = !dbUserData.friends.includes(params.friendId);
        if (removed) {
            res.json({message: 'Friend was successfully removed!', dbUserData});
        } else {
            res.json(dbUserData);
        }
    })
    .catch((err) => res.status(400).json(err));

},
};

module.exports = UserController;
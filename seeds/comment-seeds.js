
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Super exciting!!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Wowzzers!!"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "My stomach hurts!!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "burrrrp!!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "I don't know what I'm talking about!!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Is it over yet!!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Interesting!!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "I'm glad that's over!!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
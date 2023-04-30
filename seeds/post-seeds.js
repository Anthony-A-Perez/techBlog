
const { Post } = require('../models');

const postData = [
    {
        title: "Weather Dashboard is Legit!",
        post_content: "A lot of people seem to like it.",
        user_id: 3
    },
    {
        title: "Ecommerce Backend Crashes.",
        post_content: "It wasn't very good.",
        user_id: 1
    },
    {
        title: "Word Guess Game is On the Hooli App Store",
        post_content: "Get it!",
        user_id: 2
    },
    {
        title: "This is Getting Old",
        post_content: "It'll be over soon.",
        user_id: 5
    },
    {
        title: "Password Generator seems to Work",
        post_content: "It makes passwrds.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
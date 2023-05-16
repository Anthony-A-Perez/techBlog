
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await     await seedUsers;
    console.log('\n-----DATABASE SYNCED -------\N');

    await seedUsers();
    console.log('\n----- USERS SEEDED -------\N');

    await seedPosts();
    console.log('\n-----POSTS SEEDED -------\N');

    await seedComments();
    console.log('\n-----COMMENTS SEEDED-------\N');

    process.exit(0);
};

seedAll()

const { User } = require('../models');

const userData = [
    {
        username: "Dan",
        twitter: "babyboy",
        github: "danTheMan",
        email: "dan@email.com",
        password: "1passw0rd"
    },
    {
        username: "Sam",
        twitter: "samster",
        github: "samgreen",
        email: "sam@email.com",
        password: "2passw0rd"
    },
    {
        username: "Lois",
        twitter: "lodown",
        github: "martinlois",
        email: "lois@email.com",
        password: "3passw0rd"
    },
    {
        username: "Bart",
        twitter: "eatmyshorts",
        github: "barts",
        email: "bart@email.com",
        password: "4passw0rd"
    },
    {
        username: "Mary",
        twitter: "contrary",
        github: "marymary",
        email: "mary@email.com",
        password: "5passw0rd"
    },
    {
        username: "Jules",
        twitter: "julese",
        github: "julesp",
        email: "jules@email.com",
        password: "6passw0rd"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
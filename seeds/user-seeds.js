const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
    {
        username: "Zach10",
        email: "ZachD1@gmail.com",
        password: "password100",
    },

    {
        username: "Mark20",
        email: "MarkD2@gmail.com",
        password: "password100",
    },

    {
        username: "Amanda30",
        email: "AmandaD3@gmail.com",
        password: "password100",
    },

    {
        username: "Erik40",
        email: "ErikD4@gmail.com",
        password: "password200",
    },

    {
        username: "Johnny50",
        email: "JohnnyB5@gmail.com",
        password: "password400",
    },

    {
        username: "Christopher60",
        email: "ChristopherD9@gmail.com",
        password: "password400",
    } 
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
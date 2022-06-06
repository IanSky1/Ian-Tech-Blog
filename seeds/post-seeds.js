const { Post } = require('../models');

const postData = [
    {
        title: "RussianUser",
        post_text: "Welcome to the Motherland. Much love from Irkutsk.",
        user_id: 1
    },

    {
        title: "CanadianUser",
        post_text: "Welcome to Canada. Come visit Vancouver.",
        user_id: 2
    },

    {
        title: "AzerbaijaniUser",
        post_text: "Welcome to Azerbaijan. Come visit Baku.",
        user_id: 3
    },

    {
        title: "UkrainianUser",
        post_text: "Welcome to Ukraine. Come visit Kiev.",
        user_id: 4
    },

    {
        title: "PeruvianUser",
        post_text: "Welcome to Peru. Come visit Lima.",
        user_id: 5
    },

    {
        title: "KiwiUser",
        post_text: "Welcome to New Zealand. Come visit Dunedin.",
        user_id: 6
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
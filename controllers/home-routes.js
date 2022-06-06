const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get("/", (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            }
        ]
    })
})
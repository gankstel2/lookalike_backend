
const express = require('express');
const Sequelize = require('sequelize');
const post_router = express.Router();
const cors = require('cors');
const Op = Sequelize.Op;

/** set controller */
const PostControl = require('../controller/postController');

post_router.post('/PostData', cors(),PostControl.postData); //cor เฉพาะบันทึก
post_router.get('/loadUsers', PostControl.loadPostAll);
post_router.delete('/delData',PostControl.delPost);
post_router.put('/updateData',PostControl.updatePost);







module.exports = post_router;
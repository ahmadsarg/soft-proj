const express = require('express');
const router = express.Router();

const ControlUser = require('../controllers/user.controller');

router.post('/api/login',ControlUser.register);

module.exports=router;
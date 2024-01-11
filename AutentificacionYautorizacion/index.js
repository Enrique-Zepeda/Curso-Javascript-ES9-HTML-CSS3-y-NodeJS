const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())
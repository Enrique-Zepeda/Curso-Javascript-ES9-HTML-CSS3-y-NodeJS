const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt')
const User = require('./user');


mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())

const validateJwt = expressJwt({ secret: 'secreto', algorithms: ['HS256']})
const singToken = _id => jwt.sign( { _id }, 'secreto')

app.post('/register', async (req, res) => {
    const { body } = req
    console.log({ body })
    try {
        const isUser = await User.findOne({ email: body.email })
        if(isUser){
            return res.status(403).send('Usuario ya Existente')
        }
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt})
        const signed = singToken(user._id)
        res.status(201).send(signed)
    } catch(err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.post('/login', async (req, res) => {
    const { body } = req
    try{
        const user = await User.findOne({ email: body.email })
        if(!user){
            res.status(403).send('usuario t/o contraseña incorrecta')
        }else{
            const isMatch = await bcrypt.compare(body.password, user.password)
            if(isMatch){
                const signed = singToken(user._id)
                res.status(200).send(signed)
            } else{
                res.status(403).send('usuario y/o contraseña incorrecta')
            }
        }
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})

// app.get('/lele',validateJwt, async (req, res, next) => {
//     // console.log('lala', req.auth)
//     try{
//         const user = await User.findById(req.auth._id)
//         if(!user){
//             return res.status(401).end
//         }
//         req.auth = user
//         next()
//     }catch(err){
//         next(e)
//     }
// }, (req, res) => {
//     res.send(req.auth)
// })

const findAndAssignUser = async (req, res, next) => {
        // console.log('lala', req.auth)
        try{
            const user = await User.findById(req.auth._id)
            if(!user){
                return res.status(401).end()
            }
            req.auth = user
            next()
        }catch(e){
            next(e)
        }
    }

const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)
app.get('/lele',isAuthenticated, (req, res) => {
    throw new Error('nuevo error')
    // res.send(req.auth)
})

app.use((err, req, res, next) => {
    console.error('Mi nuevo error', err.stack)
    next(err)
})
app.use((err, req, res, next) => {
    res.send('Ha ocurrido un error :(')
})

app.listen(3000, () => {
    console.log('listening import 3000')
})
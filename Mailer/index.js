// const express = require('express')// CommonJS
import express from 'express'; //Module
import path from 'path';

const app = express()

app.use(express.json())

app.use(express.static('app'))

app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`)
})

app.listen(3000, () => console.log('La app esta corriendo'))
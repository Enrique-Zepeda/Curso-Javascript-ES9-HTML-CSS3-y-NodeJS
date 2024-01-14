const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Animal = require('./animal.controller')
const port = 3000

mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/animals?retryWrites=true&w=majority')

app.use(express.json())

// ENDPOINTS
app.get('/animals', Animal.list)
app.post('/animals', Animal.create)
app.put('/animals/:id', Animal.update)
app.patch('/animals/:id', Animal.update)
app.delete('/animals/:id', Animal.destroy)

app.use(express.static('app'))

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`)
})
app.get('*', (req, res) => {
	res.status(404).send('Esta página no existe :(')
})

app.listen(port, () => {
	console.log('Arrancando la aplicación!')
})
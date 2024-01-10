const express = require('express')
const user = require('./user.controller')
const mongoose =  require('mongoose')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/',user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})
app.post('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})
app.listen(port, () => {
    console.log('Arrancando la aplicacion')
})
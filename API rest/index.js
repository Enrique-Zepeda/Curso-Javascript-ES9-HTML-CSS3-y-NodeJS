const mongoose =  require('mongoose')

mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'chanchito triste', edad: 25})
    const savedUser = await user.save()
    console.log(savedUser)
}

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

const buscar = async () => {
    const user = await User.find({username: 'chanchito feliz'})
    console.log(user)
}

// crear()
// buscarTodo()
buscar()
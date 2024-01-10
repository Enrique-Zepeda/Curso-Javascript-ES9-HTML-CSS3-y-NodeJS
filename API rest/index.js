const mongoose =  require('mongoose')

mongoose.connect('mongodb+srv://Zepeda:36516088@cluster0.chnghm9.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'chanchito feliz', edad: 15})
    const savedUser = await user.save()
    console.log(savedUser)
}

crear()
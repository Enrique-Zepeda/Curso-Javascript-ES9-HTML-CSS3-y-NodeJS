const Animals = require('./animal.model')

const Animal = {
	list: async (req, res) => {
		const animals = await Animals.find()
		res.status(200).send(animals)
	},
	create: async (req, res) => {
		const animal = new Animals(req.body)
		await animal.save()
		res.status(201).send('chanchito creado!')
	},
	update: async (req, res) => {
		res.status(204).send('actualizando chanchito')
	},
	destroy: async (req, res) => {
		const { id } = req.params;
		try {
			await Animals.findByIdAndDelete(id);
			res.status(204).send('eliminando chanchito :(');
		} catch (error) {
			console.error(error);
			res.status(500).send('Error eliminando el chanchito');
		}
	}
}

module.exports = Animal

const perfisDescricao = [
	{
		'id': 1,
		'nome': 'Administrador',
		'nivelAssociacao': null
	},
	{
		'id': 2,
		'nome': 'Líder Curador',
		'nivelAssociacao': 'curadoria'
	},
	{
		'id': 3,
		'nome': 'Curador',
		'nivelAssociacao': 'subcuradoria'
	},
	{
		'id': 4,
		'nome': 'Delivery Manager',
		'nivelAssociacao': null
	},
	{
		'id': 5,
		'nome': 'Desvinculado',
		'nivelAssociacao': null
	},
	{
		'id': 6,
		'nome': 'Visitante',
		'nivelAssociacao': null
	}
]

const perfis = {
	administrador: 1,
	liderCurador: 2,
	curador: 3,
	deliveryManager: 4,
	desvinculado: 5,
	visitante: 6
}

module.exports = { perfis, perfisDescricao }

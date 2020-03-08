exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ name: "Bobs burger" },
		{ name: "Taco Bell mock burrito" },
	])
}

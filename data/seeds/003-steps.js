exports.seed = async function(knex) {
	await knex("steps").insert([   
		{ description: "1. mix meat", recipe_id: "1" },
    { description: "2. form patty, then scream at it", recipe_id: "1" },
    { description: "3. cook and serve", recipe_id: "1" },
    { description: "1. not worth the diarrhea", recipe_id: "2" },
	])
}


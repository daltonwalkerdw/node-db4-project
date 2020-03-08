exports.seed = async function(knex) {
	await knex("ingredients").insert([   
		{ ingredient: "1lb of beef" }, // 1 and 2
    { ingredient: "onions" }, // 1 and 2
    { ingredient: "tortilla" }, // 2 
    { ingredient: "buns" }, // 2
	])
}


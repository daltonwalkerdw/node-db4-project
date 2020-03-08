const db = require("../config")

function getRecipes() {
  return db("recipes")
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients as ri")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .where("r.id", recipe_id)
    .select("r.name", "i.ingredient")
}

function getInstructions(recipe_id) {
  return db("steps as s")
  .join("recipes as r", "r.id", "s.recipe_id" )
  .where("r.id", recipe_id)
  .select("r.name", "s.description")
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
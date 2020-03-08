const express = require('express');

const recipes = require('../recipes/recipeModel');

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
       res.json(await recipes.getRecipes())
    } catch(err) {
        next(err)
    }
})

router.get("/:id/ingredients", async (req, res, next) => {
    try {
       res.json(await recipes.getShoppingList(req.params.id))
    } catch(err) {
        next(err)
    }
})

router.get("/:id/steps", async (req, res, next) => {
    try {
       res.json(await recipes.getInstructions(req.params.id))
    } catch(err) {
        next(err)
    }
})
module.exports = router;
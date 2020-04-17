const db = require('../data/dbConfig')

//RETURN LIST OF ALL RECIPES
function getRecipes() {
    return db('recipes')
}

//GET SHOPPING LIST
function getShoppingList(id) {
    return db('recipe_ingredients as ri')
        .where({ 'ri.recipe_id': id })
        .join('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
        .join('measurements as m', 'm.id', '=', 'ri.measurement_id')
        .select('i.ingredient_name', 'm.measurement_name', 'ri.quantity')
}

//GET INSTRUCTIONS
function getInstructions(id) {
    console.log(id)
    return db('steps as s')
        .where({ 's.recipe_id': id })
        .select('s.step_num', 's.instructions')
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
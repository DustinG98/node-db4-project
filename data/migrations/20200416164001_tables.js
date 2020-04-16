
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable().unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable().unique();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
        tbl.float('quantity')
            .notNullable()
        tbl.integer('step')
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
};

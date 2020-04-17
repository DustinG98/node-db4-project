
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { recipe_name: 'Chocolate Chip Cookies' }
  ])
};

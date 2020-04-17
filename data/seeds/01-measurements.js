
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').insert([
    { measurement_name: 'Cup(s)' },
    { measurement_name: 'Teaspoon' },
    { measurement_name: ' ' }
  ])
};

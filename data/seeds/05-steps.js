
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    { recipe_id: 1,  step_num: 1, instructions: "Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside." },
    { recipe_id: 1,  step_num: 2, instructions: "In large bowl, beat softened butter and sugars with electric mixer on medium speed, or mix with spoon about 1 minute or until fluffy, scraping side of bowl occasionally." },
    { recipe_id: 1,  step_num: 3, instructions: "Beat in egg and vanilla until smooth. Stir in flour mixture just until blended (dough will be stiff). Stir in chocolate chips." },
    { recipe_id: 1,  step_num: 4, instructions: "Onto ungreased cookie sheets, drop dough by rounded tablespoonfuls 2 inches apart." },
    { recipe_id: 1,  step_num: 5, instructions: "Bake 8 to 10 minutes or until light brown (centers will be soft). Cool 2 minutes; remove from cookie sheet to cooling rack. Cool completely, about 30 minutes. Store covered in airtight container." },
  ])
};

-- SHOPPING LIST
select r.recipe_name, i.ingredient_name, m.measurement_name, ri.quantity 
from recipe_ingredients as ri
join recipes as r
join ingredients as i
join measurements as m
    on r.id = ri.recipe_id and i.id = ri.ingredient_id and m.id = ri.measurement_id

-- INSTRUCTIONS

select r.recipe_name, s.step_num, s.instructions
from steps as s
join recipes as r
    on r.id = 1
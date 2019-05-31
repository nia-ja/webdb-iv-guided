exports.seed = async function(knex) {
  await knex('cohorts').insert([
        {id: 1, name: 'WEBPT4', track_id: 2},
        {id: 2, name: 'WEBPT5', track_id: 2},
        {id: 3, name: 'IOS3', track_id: 3}
  ]);
};
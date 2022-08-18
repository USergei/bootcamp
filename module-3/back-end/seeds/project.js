/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del()
  await knex('project').insert([
    {id: 1, title: 'Project1', description: 'Some description for project1'},
    {id: 2, title: 'Project2', description: 'Some description for project2'},
    {id: 3, title: 'Project3', description: 'Some description for project3'}
  ]);
};

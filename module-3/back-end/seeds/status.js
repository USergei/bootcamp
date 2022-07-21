/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('status').del()
  await knex('status').insert([
    {id: 1, title: 'DRAFT'},
    {id: 2, title: 'PUBLISHED'},
    {id: 3, title: 'IN_REVIEW'}
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('project_documents', function(table) {
        table.increments('id').primary()
        table.integer('document_id').unsigned().notNull()
        table.foreign('document_id').references('document.id').onDelete('CASCADE')
        table.integer('project_id').notNull()
        table.foreign('project_id').references('project.id').onDelete('CASCADE')        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

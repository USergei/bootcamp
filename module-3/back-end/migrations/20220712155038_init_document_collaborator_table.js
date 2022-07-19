/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('document_collaborator', function(table) {
        table.increments('id').primary()
        table.integer('document_id').unsigned().notNull()
        table.foreign('document_id').references('document.id').onDelete('CASCADE')
        table.string('editor_id').notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('document_collaborator')
};

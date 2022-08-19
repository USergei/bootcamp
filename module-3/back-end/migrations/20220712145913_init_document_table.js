/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('document', function(table) {
        table.string('title').notNull()
        table.json('content').nullable()
        table.string('author_id').notNull()
        table.integer('status_id').unsigned()
        table.foreign('status_id').references('status.id').onDelete('SET NULL')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('document')
};

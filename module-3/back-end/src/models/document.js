const {knex} = require('../db/knex')
const {canFindById, canGetAll, canDeleteById} = require('./baseModel')

const config = {
    tableName: 'document'
}

const Model = (config) => {

    const create = async document => {

        return await knex(config.tableName).insert(document, [
            'title',
            'content',
            'author_id',
            'project_id',
            'status_id',
            'updated_at'
        ])
    }

    const update = async document => {
        
        return await knex(config.tableName).where('id', document.id).update(document, [
            'title',
            'content',
            'project_id',
            'status_id',
            'updated_at'
        ])
    }

    return {
        ...canGetAll(config),
        ...canFindById(config),
        create,
        update,
        ...canDeleteById(config)
    }
}

const Document = Model(config)

module.exports = {Document}
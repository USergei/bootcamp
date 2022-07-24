const {knex} = require('../db/knex')
const {canFindById, canGetAll, canDeleteById} = require('./baseModel')

const config = {
    tableName: 'document'
}

const Model = (config) => {

    const create = async document => {

        return await knex(config.tableName).insert(document, [
            'id',
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

    const selectByTitle = async title => {
        return await knex(config.tableName).whereILike('title', `%${title}%`)
    }

    return {
        ...canGetAll(config),
        ...canFindById(config),
        create,
        update,
        selectByTitle,
        ...canDeleteById(config)
    }
}

const Document = Model(config)

module.exports = {Document}
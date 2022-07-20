const {knex} = require('../db/knex')
const {canFindById, canGetAll, canDeleteById} = require('./baseModel')

const config = {
    tableName: 'document'
}

const Model = (config) => {

    const create = async values => {
        const insertData = {
            title: values.title,
            content: values.content,
            author_id: values.author_id,
            project_id: values.project_id,
            status_id: values.status_id
        }

        return await knex(config.tableName).insert(insertData)
    }

    const update = async (id, values) => {
        const updatedData = {
            title: values.title,
            content: values.content,
            project_id: values.project_id,
            status_id: values.status_id,
            updated_at: new Date
        }
        
        return await knex(config.tableName).where('id', id).update(updatedData)
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
const {knex} = require('../db/knex')
const {canFindById, canGetAll, canDeleteById} = require('./baseModel')

const config = {
    tableName: 'projectDocuments'
}

const Model = (config) => {

    const create = async projectDocuments => {

        return await knex(config.tableName).insert(projectDocuments, [
            'id',
            'document_id',
            'project_id'
        ])
    }

    const update = async projectDocuments => {
        
        return await knex(config.tableName).where('id', projectDocuments.id).update(projectDocuments, [
            'document_id',
            'project_id'
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

const ProjectDocuments = Model(config)

module.exports = {ProjectDocuments}

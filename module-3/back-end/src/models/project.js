const {knex} = require('../db/knex')
const {canFindById, canGetAll, canDeleteById} = require('./baseModel')

const config = {
    tableName: 'project'
}

const Model = (config) => {

    const create = async project => {

        return await knex(config.tableName).insert(project, [
            'id',
            'title',
            'description',
            'created_at',
            'updated_at'
        ])
    }

    const update = async project => {
        
        return await knex(config.tableName).where('id', project.id).update(project, [
            'id',
            'title',
            'description',
            'created_at',
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

const Project = Model(config)

module.exports = {Project}

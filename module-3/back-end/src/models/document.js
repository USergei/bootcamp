const {knex} = require('../db/knex')
const {canDeleteById} = require('./baseModel')

const config = {
    tableName: 'document',
    documentToProjectRelationTableName: 'project_documents'
}

const Model = (config) => {

    const create = async document => {
        const trxProvider = await knex.transactionProvider()
        const trx = await trxProvider()
        try {
            const documentData = {
                title: document.title,
                content: document.content,
                author_id: document.author_id,
                status_id: document.status_id
            }
            const createdDocument = await trx(config.tableName).insert(documentData, [
                'id',
                'title',
                'content',
                'author_id',
                'status_id',
                'updated_at'
            ])
        
            const projectDocumentsRelation = {
                document_id: createdDocument[0].id,
                project_id: document.project_id 
            } 
            
            const documentToProjectRelation = await trx(config.documentToProjectRelationTableName).insert(projectDocumentsRelation,
                [
                    'document_id',
                    'project_id'
                ]
            )

            trx.commit()

            return {
                ...createdDocument, 
                project_id: documentToProjectRelation.shift().project_id
            }
        } catch (exception) {
            trx.rollback()
            throw exception
        }
    }

    const update = async document => {
        
        return await knex(config.tableName).where('id', document.id).update(document, [
            'title',
            'content',
            'status_id',
            'updated_at'
        ])
    }

    const selectByTitle = async title => {
        // TODO add joins
        return await knex(config.tableName).whereILike('title', `%${title}%`)
    }

    // TODO add selectAll with joins 
    // TODO add selectById with joins 

    return {
        create,
        update,
        selectByTitle,
        ...canDeleteById(config)
    }
}

const Document = Model(config)

module.exports = {Document}

const {knex} = require('../db/knex')
const {canDeleteById, canFindById} = require('./baseModel')

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
            'id',
            'title',
            'content',
            'author_id',
            'status_id',
            'updated_at'
        ])
    }

    const selectByTitle = async title => {
        // TODO add joins
        return await knex(config.tableName).whereILike('title', `%${title}%`)
    }
   
    const selectAllDocumentsByProjectId = async projectId => {
        const documents = await knex.select(
            'document.id as documentId',
            'document.title as title',
            'document.content as content',
            'document.author_id as authorId',
            'document.status_id as statusId',
            'document.updated_at as updatedAt',
            'project_documents.project_id as projectId'
        )
        .from(config.tableName)
        .where({'project_documents.project_id': projectId})
        .leftJoin('project_documents', {'document.id': 'project_documents.document_id'})

        return documents
    }

     // TODO add selectAll with joins 
    
    return {
        create,
        update,
        selectByTitle,
        ...canDeleteById(config),
        ...canFindById(config),
        selectAllDocumentsByProjectId
    }
}

const Document = Model(config)

module.exports = {Document}

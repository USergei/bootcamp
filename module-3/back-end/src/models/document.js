const {knex} = require('../db/knex')
const {canFindById, canGetAll, canDeleteById} = require('./baseModel')

const config = {
    tableName: 'document'
}

const Model = (config) => {
    let state = {}

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

    const update = async ({
        id,
        title,
        content,
        author_id,
        project_id,
        status_id
    }) => {
        const updatedTaskData = async ({
            title,
            
            priorityId: priority.id,
            typeId: type.id,
            status_id: status.id,
            updatedAt: new Date
        })

        const trxProvider = await knex.transactionProvider()
        const trx = await trxProvider()

        try {
            const tasks = await trx(config.tableName).where('key', key).update(updatedTaskData, [
                'id',
                'key',
                'title',
                'description',
                'time_estimated',
                'time_spent',
                'due_at',
                'author_id',
                'project_id',
                'priority_id',
                'type_id',
                'status_id',
                'created_at',
                'updated_at'
            ])

            const taskId = tasks[0].id

            let insertedTasksLabels = null
            if (labels.length) {
                await trx(config.labelsTableName).where('task_id', taskId).del()

                const taskLabels = labels.map(label => (underscoreKeys({taskId, labelId: label.id})))
                insertedTasksLabels = await trx(config.labelsTableName).insert(taskLabels, ['label_id'])
            }

            trx.commit()

            return Object.assign(
                state,
                camelizeKeys({
                    ...tasks[0],
                    labelIds: insertedTasksLabels
                })
            )
        }
        catch (e) {
            trx.rollback()
            throw e
        }
    }

    return {
        ...state,
        ...canGetAll(config),
        ...canFindById(config),
        create,
        ...canDeleteById(config)
    }
}

const Document = Model(config)

module.exports = {Document}
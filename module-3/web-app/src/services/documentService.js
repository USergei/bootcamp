import {apiHostUrl} from '../configs/connectionVariables'

const postMethods = {
    POST: 'POST',
    PUT: 'PUT',
    GET: 'GET'
}

async function fetchData(url = '', method = 'POST', data = {}) {
    try {
        const response = await fetch(url, {
            method: postMethods[method],
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })

        return response.json()
    }
    catch (error) {
        console.error({error})
    }
    
}
async function getData(url = '', method = 'GET') {
    const response = await fetch(url, {
        method: postMethods[method],
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}

export const getDocument = async (id = null) => {
    if (id) {
        return getData(`${apiHostUrl}/selectDocument/${id}`, postMethods.GET)
    }
}

export const getDocuments = async (projectId = null) => {
    if (projectId) {
        return getData(`${apiHostUrl}/selectAllDocuments/${projectId}`, postMethods.GET)
    }
}

export const saveDocument = async (documentData, id = null) => {
    if (id) {
        return fetchData(`${apiHostUrl}/updateDocument/${id}`, postMethods.PUT, documentData)
    } else {
        return fetchData(`${apiHostUrl}/createDocument`, postMethods.POST, documentData)
    }
}   

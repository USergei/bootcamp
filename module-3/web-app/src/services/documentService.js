import {apiHostUrl} from '../configs/connectionVariables'

const postMethods = {
    post: 'POST',
    put: 'PUT',
    get: 'GET'
}

async function fetchData(url = '', method = 'post', data = {}) {
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
    return response.json();
}
async function getData(url = '', method = 'get') {
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
        return getData(`${apiHostUrl}/selectDocument/${id}`, postMethods.get)
    }
}   

export const saveDocument = async (documentData, id = null) => {
    if (id) {
        return fetchData(`${apiHostUrl}/updateDocument/${id}`, postMethods.put, documentData)
    } else {
        return fetchData(`${apiHostUrl}/createDocument`, postMethods.post, documentData)
    }
}   

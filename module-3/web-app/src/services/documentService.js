import {apiHostUrl} from '../configs/connectionVariables'

const postMethods = {
    post: 'POST',
    put: 'PUT',
    get: 'GET'
}

async function postData(url = '', data = {}, method = 'post') {
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
    });
    return response.json();
}

export const saveDocument = async (documentData, id = null) => {
    console.log("***********", id)
    if (id) {
        console.log("iffffffffffffffffffffff")
        return postData(`${apiHostUrl}/updateDocument/${id}`, documentData, 'put')
    } else {
        console.log("elseeeeeeeeeeeeeeeeeeeeeee")
        return postData(`${apiHostUrl}/createDocument`, documentData)
    }
}   

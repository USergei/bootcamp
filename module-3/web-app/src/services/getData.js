export const getData = async (url = '') => {
    return await fetch(url, {
        method: 'GET',
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        headers: {
            'Accept': 'application/json'
        },
        // redirect: 'follow',
        // referrerPolicy: 'no-referrer'
    })
        .then(response => console.log('!!!!!', response.json()))
}
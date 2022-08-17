// import {apiHostUrl} from '../config/connectionVariables'

export const saveDocument = async document => {
    return {
        documentInEdit: {
            id: 1,
            title: 'testTitle',
            content: {},
            author_id: null,
            project_id: null,
            status_id: null,
            updated_at: null
        }
    }
//   const response = await fetch(`${apiHostUrl}/ipLookup`, {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ipAddresses})
//   })
//   return await response.json()
}
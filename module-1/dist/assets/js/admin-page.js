// TODO fix import
// import {HOST_URL} from './constants.js'
const HOST_URL = "http://localhost:3001/"

const deleteButtons = document.querySelectorAll("[data-delete]") 
const replyButtons = document.querySelectorAll("[data-reply]")

deleteButtons.forEach(elem => {
    elem.addEventListener("click", event => {
        remove(event.target.parentNode.parentNode.id)
        location.reload()
    })
})

function remove(id){
    fetch("http://localhost:3001/deleteContactFormData/" + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('removed')
    }).catch(error => {
        throw new Error(error)
    })
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
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

replyButtons.forEach(elem => {
    elem.addEventListener("click", event => {
        let text = event.target.closest("div.td").querySelector('textarea')
        let form = event.target.closest("div.td").querySelector('form')
        let email = event.target.parentNode.parentNode.querySelector('.email').innerText
        let message = event.target.parentNode.parentNode.querySelector('.message').innerText
        text.focus()
        
        form.addEventListener("submit", function (event) {
            event.preventDefault()
            const data = {	
                email: email,
                subject: `re: ${message}`,
                text: text.value 
            }
            postData(`${hostUrl}sendEmail`, data)
            .then(data => { 
                // TODO process data
            })
            .catch((error) => {
                throw new Error(error)
            })
        })
    })
})
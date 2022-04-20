const HOST_URL = "http://localhost:3001/"
const deleteButtons = document.querySelectorAll("[data-delete]") 
const replyButtons = document.querySelectorAll("[data-reply]")

function remove(id){
    fetch(`${HOST_URL}deleteContactFormData/` + id, {
        method: 'DELETE'
    }).then(() => {
        window.location.reload()
    }).catch(error => {
        throw new Error(error)
    })
}

deleteButtons.forEach(elem => {
    elem.addEventListener("click", event => {
        event.preventDefault()
        remove(event.target.closest(".table__row").id)        
    })
})

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
        const parent = event.target.closest(".table__row")
        const form = parent.querySelector('form')
        const text = parent.querySelector('textarea')
        const email = parent.querySelector('.email').innerText
        const message = parent.querySelector('.message').innerText
        form.classList.add('is__open')
        text.focus()
        
        form.addEventListener("submit", function (event) {
            event.preventDefault()
            const data = {	
                email: email,
                subject: `re: ${message}`,
                text: text.value 
            }
            postData(`${HOST_URL}sendEmail`, data)
            .then(data => { 
                // TODO process data
            })
            .catch((error) => {
                throw new Error(error)
            })
            form.reset()
            form[0].value=""
            form[0].placeholder = "Your mail has been sent"
            form[0].classList.add('color__placeholder')
            function formClose() {
                form.classList.remove('is__open')
            }
            setTimeout(formClose, 3000)
        })
    })
})
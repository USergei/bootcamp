let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('mouseenter', (e) => {
    if (dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed')
    }   
})

dropdown.addEventListener('mouseleave', (e) => {
    if (!dropdown.classList.contains('closed')) {
        dropdown.classList.add('closed')
    } 
})

async function getData (url = '') {
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
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
    return await response.json();
}

const container = document.getElementsByClassName('page-container')
const allTags = container[0].querySelectorAll('*')
const menu = document.querySelector('.menu')

menu.addEventListener("click", event => {
    event.preventDefault()
    let elem = event.target
        
    if (menu.contains(elem)) {
        const languageCode = event.target.hash.substring(1)
        const selectLang = document.getElementsByClassName('icon')
        selectLang[0].innerText = elem.innerText
        translatePageText(languageCode)
    }
})

const allTagsWithText = Object.values(allTags).filter(element => {
    if (menu.contains(element)) {
        return false
    }
    if (element.text || element.innerText && element.children.length == 0) {
        return true
    } 
})  

const targetElementsArray = allTagsWithText.map(element => { 
    if (element.innerText) {
        return element.innerText 
    }  
    if (element.text) {
        return element.text 
    }  
})

function closeModal() {
    modal.style.display = "none"
    body.style.overflow = ""
}    

const about = document.querySelector('.about')
const collection = document.querySelector('.collection')
const headerContact = document.getElementById('contact')
const footerContact = document.getElementById('footer_contact')
const modal = document.getElementById('modal')
const body = document.querySelector('body')
const headerNewCollection = document.getElementById('new_col')
const footerNewCollection = document.getElementById('footer_new_col')
const headerAbout = document.getElementById('about')
const footerAbout = document.getElementById('footer_about')
const buttonCloseModal = document.querySelector('.button-close-modal')
        
function toNewCollection () {
    event.preventDefault()
    collection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
} 

headerNewCollection.addEventListener("click", toNewCollection)
footerNewCollection.addEventListener("click", toNewCollection)

function toAbout () {
    event.preventDefault()
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
} 

headerAbout.addEventListener("click", toAbout)
footerAbout.addEventListener("click", toAbout)

function showModal () {
    event.preventDefault()
    modal.style.display = "block"
}

headerContact.addEventListener("click", showModal)
footerContact.addEventListener("click", showModal)

buttonCloseModal.addEventListener("click", closeModal)
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal()
    }
})

window.addEventListener( "load", function () {
function sendData() {
    const XHR = new XMLHttpRequest()
    const FD = new FormData( form )

    XHR.addEventListener( "load", function(event) {                
    })

    XHR.addEventListener("error", function(event) {
    alert('Oops! Something went wrong.')
    })

    XHR.open("POST", "http://localhost:3001/writeContactFormData");
    XHR.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    let convertedJSON = {}
        for (const [key, value]  of FD.entries())
        {
            convertedJSON[key] = value
        }

    XHR.send(JSON.stringify(convertedJSON))
}

const form = document.getElementById("contact__form")

form.addEventListener( "submit", function (event) {
        event.preventDefault();
        sendData()
        form.reset()
        closeModal()
    })
})

const translatePageText = lang => {
    postData(
        'http://localhost:3001/translate', 
        {
            "text": targetElementsArray, 
            "lang": lang 
        }
    )
    .then((translatedTextArray) => {
            allTagsWithText.forEach((element, index) => {
            element.text = translatedTextArray[index]
            element.innerText = translatedTextArray[index]
        })    
    });
}
$( document ).ready(function() {
    let dropdown = $('.dropdown')

    dropdown.on('mouseenter', (e) => {
        if (dropdown.hasClass('closed')) {
            dropdown.removeClass('closed')
        }   
    })

    dropdown.on('mouseleave', (e) => {
        if (!dropdown.hasClass('closed')) {
            dropdown.addClass('closed')
        } 
    })

    // async function getData (url = '') {
    //     $.get( url, function( data ) {
    //         console.log( typeof data )
    //         console.log( data )
    //     })   
    // }

    // async function getData (url = '') {
    //     return fetch(url)
    //         .then(response => response.json())
    //         .then(data => data)
    // }

    const container = document.getElementsByClassName('page-container')
    const allTags = container[0].querySelectorAll('*')
    const menu = document.querySelector('.menu')
    console.log({allTags})

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

    async function postData(url = '', data = {}) {
        $.post(url, data)
        .done(function( data ) {
           console.log(data)
        })
        .fail(function() {
            console.log("error")
        })
    }
    
    function convertFormToJSON(form) {
        const array = $(form).serializeArray()
        const json = {}
        $.each(array, function () {
          json[this.name] = this.value || ""
        })
        return json
      }

    $("#contact__form").on("submit", function (e) {
        e.preventDefault()
        const form = $(e.target)
        const json = convertFormToJSON(form)
        const url = 'http://localhost:3001/writeContactFormData'
        postData(url, json)
        form.trigger("reset")
        closeModal()
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
        })
    }
})


const HOST_URL = "http://localhost:3001"

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

    const container = $('.page-container')
    const allTags = container.find('*')
    const menu = $('.menu')

    menu.click(function(event) {
        event.preventDefault()
        const elem = $(event.target)     
        if (menu.has(elem)) {
            const languageCode = elem[0].hash.substring(1)
            const selectLang = $('.icon')
            selectLang[0].innerText = elem[0].innerText
            // translatePageText(languageCode)
        }
    })

    const allTagsWithText = Object.values(allTags).filter(element => {
        if (menu.has(element)) {
            return false
        }
        // TODO check later if the following code complies with jQuery standards
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
        modal.hide()
        body.css('overflow','visible')
    }    

    const about = $('.about')
    const collection = $('.collection')
    const headerContact = $('#contact')
    const footerContact = $('#footer_contact')
    const modal = $('#modal')
    const body = $('document.body')
    const headerNewCollection = $('#new_col')
    const footerNewCollection = $('#footer_new_col')
    const headerAbout = $('#about')
    const footerAbout = $('#footer_about')
    const buttonCloseModal = $('.button-close-modal')
            
    function toNewCollection () {
        event.preventDefault()
        collection.get(0).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    } 

    headerNewCollection.click(toNewCollection)
    footerNewCollection.click(toNewCollection)

    function toAbout () {
        event.preventDefault()
        about.get(0).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    } 

    headerAbout.click(toAbout)
    footerAbout.click(toAbout)

    function showModal () {
        event.preventDefault()
        modal.css('display','block')
    }

    headerContact.click(showModal)
    footerContact.click(showModal)

    buttonCloseModal.click(closeModal)
    modal.click(function() {
        if ($(this) === modal) {
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
        const url = `${HOST_URL}/writeContactFormData`
        postData(url, json)
        form.trigger("reset")
        closeModal()
    })
    
    const translatePageText = lang => {
        postData(
            `${HOST_URL}/translate`, 
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


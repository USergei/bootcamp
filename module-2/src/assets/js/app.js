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

    function replaceMenuWithSelectedLanguage (urlElement) {
        const languageCode = urlElement[0].hash.substring(1)
        const selectLang = $('.icon')
        selectLang[0].innerText = urlElement[0].innerText
        // translatePageText(languageCode)
    }

    menu.click(function(event) {
        event.preventDefault()
        const elem = $(event.target)
        if (elem.is('a')) {  
            replaceMenuWithSelectedLanguage(elem)
            
        } if (elem.is('li')) {
            const childUrl = elem.find('a:first')
            replaceMenuWithSelectedLanguage(childUrl)
        }  
    })

    const allTagsWithText = Object.values(allTags).filter(element => {
        // console.log({element})
        // console.log({element: element})
        // console.log(menu.has(element).length)
        if (menu.has(element).length) {
            // console.log('777')
            return false
        }
        // TODO check if we can replace the following with native jQuery methods
        // console.log('element', element.children?.length == 0)
        if (element.text || element.innerText && element.children?.length == 0) {
            // console.log('666')
            return true
        } 
    })  

    // console.log({allTagsWithText})

    const targetElementsArray = allTagsWithText.map(element => { 
        if (element.innerText) {
            return element.innerText 
        }  
        if (element.text) {
            return element.text 
        }  
    })

    // console.log({targetElementsArray})

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
        console.log({targetElementsArray})
        console.log({lang})
        postData(
            `${HOST_URL}/translate`, 
            {
                "text": targetElementsArray, 
                "lang": lang 
            }
        )
        .then((translatedTextArray) => {
                allTagsWithText.forEach((element, index) => {
                //TODO check if there is  a jQuery method to update text and innerText properties
                element.text = translatedTextArray[index]
                element.innerText = translatedTextArray[index]
            })    
        })
    }
})


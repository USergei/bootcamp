import { postData, HOST_URL } from "./utils.js"

$( document ).ready(() => {
    let dropdown = $('.dropdown')

    dropdown.on('mouseenter', () => {
        if (dropdown.hasClass('closed')) {
            dropdown.removeClass('closed')
        }   
    })

    dropdown.on('mouseleave', () => {
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
        translatePageText(languageCode)
    }

    menu.click((event) => {
        event.preventDefault()
        const elem = $(event.target)
        if (elem.is('a')) {  
            replaceMenuWithSelectedLanguage(elem)
            
        } if (elem.is('li')) {
            const childUrl = elem.find('a:first')
            replaceMenuWithSelectedLanguage(childUrl)
        }  
    })

    const allTagsWithText = Object.values(allTags).filter((element) => {
        if (menu.has(element).length) {
            return false
        }
        
        if ($(element).text() && element.children?.length == 0) {
            return true
        } 
    })
    
    const targetElementsArray = allTagsWithText.map((element) => { 
        if ($(element).text()) {
            return $(element).text()
        }  
    })   

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
            
    function toNewCollection (event) {
        event.preventDefault()
        collection.get(0).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    } 

    headerNewCollection.click(toNewCollection)
    footerNewCollection.click(toNewCollection)

    function toAbout (event) {
        event.preventDefault()
        about.get(0).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    } 

    headerAbout.click(toAbout)
    footerAbout.click(toAbout)

    function showModal (event) {
        event.preventDefault()
        modal.css('display','block')
    }

    headerContact.click(showModal)
    footerContact.click(showModal)

    function closeModal() {
        modal.hide()
        body.css('overflow','visible')
    } 

    buttonCloseModal.click(closeModal)
    modal.click((event) => {
        if ($(event.target).hasClass('contact')) {
            closeModal()
        }
    })

    const form = $("#contact__form")

    form.on("submit", (event) => {
        event.preventDefault()
        const formData = $(event.target).serializeArray()
        const json = {
            name: formData[0].value,
            email: formData[1].value,
            message: formData[2].value
        }
        const url = `${HOST_URL}writeContactFormData`
        postData(url, json)
        form.trigger("reset")
        closeModal()
    })
    
    const translatePageText = lang => {
        const json = {
            "text": targetElementsArray, 
            "lang": lang 
        }
        const wrapper = $('.wrapper')
        wrapper.addClass('translation-in-progress')
        postData(`${HOST_URL}translate`, json)
        .then((translatedTextArray) => {
                allTagsWithText.forEach((element, index) => {
                $(element).text(translatedTextArray[index])
                wrapper.removeClass('translation-in-progress')
            })    
        })
    }
})

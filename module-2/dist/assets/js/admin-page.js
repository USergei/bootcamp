import { postData, removeData, HOST_URL } from "./utils.js"

$(document).ready(() => {
    const deleteButtons = $("[data-delete]")
    const replyButtons = $("[data-reply]")

    deleteButtons.click((event) => {
        event.preventDefault()
        removeData(event.target.closest(".table__row").id)        
    })

    replyButtons.click((event) => {
        const parent = $(event.target).closest(".table__row")
        const form = parent.find('form')
        const text = parent.find('textarea')
        const email = parent.find('.email').text()
        const message = parent.find('.message').text()
        
        form.addClass('is__open')
        text.focus()
        
        form.submit((event) => {
            event.preventDefault()
            const data = {	
                email: email,
                subject: `re: ${message}`,
                text: text.val() 
            }
            postData(`${HOST_URL}sendEmail`, data)
            .then(() => { 
                text.prop("placeholder", "Your mail has been sent").val("").addClass('color__placeholder')
                form.trigger("reset")

                function formClose() {
                    form.removeClass('is__open')
                }
                
                setTimeout(formClose, 3000)
            })
            .catch((error) => {
                throw new Error(error)
            })
        })
    
    })
})

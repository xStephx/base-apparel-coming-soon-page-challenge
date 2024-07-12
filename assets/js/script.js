// DOM elements
const inputEmail = document.getElementById('input-email')
const emailBtn = document.getElementById('email-btn')
const iconWrong = document.getElementById('icon-wrong')
const emailMessageWrong = document.getElementById('email-message-wrong')

// Interacting with email button and email input element
emailBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = inputEmail.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!email){
        emailMessageWrong.textContent = `Please enter email!`
        emailMessageWrong.classList.remove('text-lime-600')
        emailMessageWrong.classList.add('text-SoftRed')
        inputEmail.classList.remove('border-DesaturatedRed')
        inputEmail.classList.add('border-SoftRed')
        iconWrong.classList.remove('hidden')
    } else if(!isValidEmail){
        emailMessageWrong.textContent = `Please provide a valid email!`
        inputEmail.classList.remove('border-DesaturatedRed')
        inputEmail.classList.add('border-SoftRed')
        iconWrong.classList.remove('hidden')   
    } else{
        emailMessageWrong.textContent = `Email sent!`
        emailMessageWrong.classList.remove('text-SoftRed')
        inputEmail.classList.add('border-DesaturatedRed')
        inputEmail.classList.remove('border-SoftRed')
        emailMessageWrong.classList.add('text-lime-600')
        iconWrong.classList.add('hidden')
        inputEmail.value = ``
    }
})
document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault()
    const inputName = document.getElementById('input-name').value
    const inputPin = document.getElementById('input-pin').value
    const convertedPin = parseInt(inputPin)
    if (inputName) {
        if (convertedPin === 123456) {
            alert(`Congratulation ${inputName} You have Successfully Logged In`)
            document.getElementById('login-page').classList.add('hidden')
            document.getElementById('navbar').classList.remove('hidden')
            document.getElementById('all-content').classList.remove('hidden')
            document.getElementById('faq').classList.remove('hidden')

        } else alert(`${convertedPin ? `${convertedPin}` : `Please Provide Valid Pin That`} is Wrong Pin Number`)

    } else alert('Please Enter Your Name')

})

document.getElementById('logout-btn').addEventListener('click', () => {
    alert('You Have Successfully Log Out')
    document.getElementById('login-page').classList.remove('hidden')
    document.getElementById('navbar').classList.add('hidden')
    document.getElementById('all-content').classList.add('hidden')
    document.getElementById('faq').classList.add('hidden')


})

// navbar
// login-page
// all-content
// faq
// footer

// document.getElementById('navbar').classList.add('hidden')
// document.getElementById('all-content').classList.add('hidden')
// document.getElementById('faq').classList.add('hidden')

document.getElementById('login-page').classList.add('hidden')
document.getElementById('navbar').classList.add('hidden')

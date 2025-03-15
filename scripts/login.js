getById('login-btn').addEventListener('click', (event) => {
    event.preventDefault()
    const inputName = getById('input-name').value
    const inputPin = getById('input-pin').value
    const convertedPin = parseInt(inputPin)
    if (inputName) {
        if (convertedPin === 123456) {
            alert(`Congratulation ${inputName} You have Successfully Logged In`)
            hideById('login-page')
            showById('navbar')
            showById('all-content')
            showById('faq')

        } else alert(`${convertedPin ? `${convertedPin}` : `Please Provide Valid Pin That`} is Wrong Pin Number`)
    } else alert('Please Enter Your Name')
})
getById('logout-btn').addEventListener('click', () => {
    alert('You Have Successfully Log Out')
    showById('login-page')
    hideById('navbar')
    hideById('all-content')
    hideById('faq')
})

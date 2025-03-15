getById('login-btn')
    .addEventListener('click', (event) => {
        event.preventDefault()
        const inputName = getById('input-name').value
        const inputPin = getById('input-pin').value
        const convertedPin = parseInt(inputPin)
        if (inputName && !inputName.includes(" ")) {
            if (convertedPin === 123456) {
                Swal.fire({
                    title: "Successfully Logged in!",
                    text: `Hello ${inputName} Welcome to our English Learning Platform!`,
                    icon: "success",
                    confirmButtonText: "Let's Learn"
                })
                hideById('login-page')
                showById('navbar')
                showById('all-content')
                showById('faq')

            } else {
                Swal.fire({
                    title: "Login Failed!",
                    text: (`${convertedPin ? `${convertedPin}` : `Please Provide Valid Pin That`} is Wrong Pin Number`),
                    icon: "warning",
                    confirmButtonText: "Try again"
                })
                alert
            }
        } else {
            Swal.fire({
                title: "Login Failed!",
                text: "Please Enter Your Name First",
                icon: "error",
                confirmButtonText: "Try again"
            })
        }
    })
getById('logout-btn')
    .addEventListener('click', () => {
        const inputName = getById('input-name').value
        Swal.fire({
            title: "Logged Out Successful!",
            text: `I hope You Enjoyed all the Lesson Have a great day ${inputName} See You Soon`,
            icon: "info",
            confirmButtonText: "Exit"
        })
        showById('login-page')
        hideById('navbar')
        hideById('all-content')
        hideById('faq')
    })

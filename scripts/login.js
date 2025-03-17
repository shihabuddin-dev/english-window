getById('login-btn')
    .addEventListener('click', (event) => {
        event.preventDefault()
        const inputName = getById('input-name').value
        const inputPin = getById('input-pin').value
        const convertedPin = parseInt(inputPin)
        if (inputName && !inputName.includes(" ")) {
            if (convertedPin === 123456) {
                pronounceWord('Welcome to English Janala')
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
                pronounceWord('Invalid Pin Number')
                Swal.fire({
                    title: "Login Failed!",
                    text: (`${convertedPin ? `${convertedPin}` : `Please Provide Valid Pin That`} is Wrong Pin Number`),
                    icon: "warning",
                    confirmButtonText: "Try again"
                })
                alert
            }
        } else {
            pronounceWord('Please Enter Your Name')
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
            title: "Are you sure?",
            text: "You won't be able to Come Back here Without Log in!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    Swal.fire({
                        title: "Logged Out!",
                        text: `I hope You Enjoyed all the Lesson Have a great day ${inputName} See You Soon`,
                        icon: "success"
                    });
                    pronounceWord('Have a great day See You Soon')
                    showById('login-page')
                    hideById('navbar')
                    hideById('all-content')
                    hideById('faq')
                }, 800);

            } else {
                pronounceWord('Cancelled')
                Swal.fire({
                    title: "Cancelled!",
                    text: "You came back as Logged In",
                    icon: "info"
                });
            }
        });
    })

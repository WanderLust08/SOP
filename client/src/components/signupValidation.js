function Validation(values) {
    
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-])(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]{8,}$/
    console.log(values)

    // if (values.name === "") {
    //     error.name = "Name should not be empty"
    // }
    // else {
    //    error.name = ""
    // }

    if (values.email === "") {
        error.email = "Name should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email.didn't match"
    } else {
       error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password should be greater than 8 characters"

    } else {
        error.password = ""
    }
    return error;
}

export default Validation;
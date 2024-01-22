function Validation(values) {
    
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    // console.log(values)
    if (values.email === "") {
        error.email = "Name should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
        console.log(values.email)
        error.email = "Email.didn't match"
    } else {
       error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not empty"
    }
    else if (!password_pattern.test(values.password)) {
        console.log(values.password)
        error.password = "Password should be greater than 8 characters"

    } else {
        error.password = ""
    }
    return error;
}

export default Validation;
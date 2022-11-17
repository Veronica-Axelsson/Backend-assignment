// Validation for contact form on contact page

export const submitData = async (url, method, data, ContentType = 'application/json') => {
    
    const res = await fetch(url, {
        method: method,
        headers: {
        'Content-Type': ContentType
        },
        body: data
    })

    if (res.status === 200) 
        return true
    
    return false   
}

export const validate = (e, form = null) => {
    if(e.type === 'submit') {
        const errors = {}
        errors.name = validate_name(form.name)
        errors.email = validate_email(form.email)
        errors.comments = validate_comments(form.comments)
        return errors

    } else {
        const {id, value} = e.target
        switch (id) {
            case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
            default:
                
        }
    }
}

const validate_name = (value) => {
    if(!value)
        return "A name is required"
    else if(value.length < 2)
        return "You name must be at least 2 character"
    else
        return null
}

const validate_email = (value) => {
    const regex_email = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if(!value)
        return "An email adress is required"
    else if(!regex_email.test(value))
        return "You must enter a valid e-mail address (eg. name@domain.com)"
    else
        return null
}

const validate_comments = (value) => {
    if(!value)
        return "A comment is required"
    else if(value.length < 5)
        return "You name must be at least 5 character"
    else
        return null
}
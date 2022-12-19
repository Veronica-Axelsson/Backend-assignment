// Validation for contact form on contact page

// export const submitData = async (url: RequestInfo | URL, method: string, data: string, ContentType = 'application/json') => {
    
//     const res = await fetch(url, {
//         method: method,
//         headers: {
//         'Content-Type': ContentType
//         },
//         body: data
//     })

//     if (res.status === 200) 
//         return true
    
//     return false   
// }

export const validateName = (elementName: string, value:string, minLength: number = 2) => {
    if (value.length === 0)
        return `${elementName} is required.`
    else if (value.length < minLength)
        return `${elementName} must contain at least ${minLength} characters.`
    else
        return ``
}

export const validateComments = (elementName: string, value:string, minLength: number = 5) => {
    if (value.length === 0)
        return `${elementName} is required.`
    else if (value.length < minLength)
        return `${elementName} must contain at least ${minLength} characters.`
    else
        return ``
}

export const validateEmail = (elementName: string, value:string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length === 0)
        return `${elementName} is required.`
    else if (!regEx.test(value))
        return `${elementName} must be a valid email adress`
    else
        return ``
    
}
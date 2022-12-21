// Contact form section

import React, {useState} from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateComments, validateEmail, validateName} from '../utilities/validation'

interface FormDataType {
    name:string
    email:string
    comments:string
}

const ContactFormSection: React.FC<FormDataType> = () => {

    const DEFAULT_VALUES: FormDataType = {name: '', email: '', comments: '' }
    const [formData, setFormData] = useState<FormDataType>(DEFAULT_VALUES)
    const [errors, setErrors] = useState<FormDataType>(DEFAULT_VALUES)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})

        if (id === 'name')
            setErrors({...errors, [id]: validateName(id, value)})

        if (id === 'comments')
        setErrors({...errors, [id]: validateComments(id, value)})

        if (id === 'email')
            setErrors({...errors, [id]: validateEmail(id, value)})
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})


        if (id === 'comments')
            setErrors({...errors, [id]: validateComments(id, value, 5)})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        setSubmitted(false)
        setFailedSubmit(false)

        if (formData.name !== '' && formData.email !== '' && formData.comments !== '') {
            
                const result = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })


                if(result.status === 200) {
                    setSubmitted(true)
                    setFailedSubmit(false)
                } else {
                    setSubmitted(false)
                    setFailedSubmit(true)
                }
            }
        }


    return (
        <section className="contact-form">
            <div className="container">

                { submitted ? (<AlertNotification alertType="success" title="Thank you for your comment!" text= "We will contact you as soon as possible."/>) : (<></>)}
                { failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!" text= "We couldn't submit your comments right now."/>) : (<></>)}

                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} className="formContact" noValidate>
                    <div>
                        <input id="name" className={(errors.name ? 'error': '')} type="text" placeholder="Your Name" value={formData.name} onChange={(e) => handleChange(e)}/>
                        <div className="errorMessage">{errors.name}</div>
                    </div>
                    <div>
                        <input id="email" className={(errors.email ? 'error': '')} type="email" placeholder="Your Mail" value={formData.email} onChange={(e) => handleChange(e)}/>
                        <div className="errorMessage">{errors.email}</div>
                    </div>

                    <div className="textarea">
                        <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid red'}: {})} placeholder="Comments" value={formData.comments} onChange={(e) => handleTextAreaChange(e)}></textarea>
                        <div className="errorMessage">{errors.comments}</div>
                    </div>
                    <div> 
                        <button type="submit" className="button btn-theme ">
                            <span className="corner-left"></span>
                            <span className="corner-right"></span>
                            <span className="button-text">Post Comments</span>
                        </button> 
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection
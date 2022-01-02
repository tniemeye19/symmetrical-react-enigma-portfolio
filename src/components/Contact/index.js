import React, {useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className='form-box'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div className='form-box'>
                    <label htmlFor='email'>Email address:</label>
                    <input type='text' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='form-box'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='name' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
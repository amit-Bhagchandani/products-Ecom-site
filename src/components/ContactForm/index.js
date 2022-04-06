import React from 'react'
import styles from './contactForm.module.css'

const ContactForm = () => {
  return (
    <form className={`form ${styles.contactForm}`}>
        <div className='form-row'>
            <label className='form-label'>name</label>
            <input type='text' name='name' id='name' className='form-input' />
        </div>
        <div className='form-row'>
            <label className='form-label'>Email</label>
            <input type='email' name='email' id='email' className='form-input' />
        </div>
        <div className='form-row'>
            <label className='form-label'>Message</label>
            <input type='textArea' name='message' id='message' className='form-input' />
        </div>
        <button type="submit" className="btn btn-block">
            submit
        </button>
    </form>
  )
}

export default ContactForm
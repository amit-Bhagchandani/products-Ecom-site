import React from 'react'
import ContactForm from '../../components/ContactForm'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <main className='page'>
        <section aria-labelledby='contactTitle' className={styles.contactContainer}>
            <article className={styles.contactInfo}>
                <h3 id='contactTitle'>Get In Touch</h3>
                <p className='grey-label'>
                    phone: <span className='light-grey-value'>+1234-12345678</span>
                </p>
                <p className='grey-label'>
                    Timings: <span className='light-grey-value'>10am to 5pm</span> 
                </p>

            </article>
            <ContactForm/>
        </section>
    </main>
  )
}

export default Contact
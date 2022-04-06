import React from 'react'

import styles from './About.module.css'

const About = () => {

  return (
    <main className='page'>
        <section aria-labelledby='about-title' className={styles.about}>
            <h3 id='about-title' className={styles.aboutTitle}>
                About Us
            </h3>
            <article>
                <p>
                    Deserunt magna dolore mollit ex et mollit dolor esse commodo. Eiusmod ad exercitation sint Lorem excepteur eiusmod. Id proident cillum ut nulla exercitation ipsum non proident. Amet enim amet ut dolore fugiat est excepteur.
                </p>
                <p>
                    Sit do minim ex laborum labore aliqua sunt ad dolore. Pariatur cupidatat eiusmod veniam laboris reprehenderit elit reprehenderit exercitation sit excepteur commodo incididunt aliquip nisi. Aliqua officia est labore minim ex ad aliqua occaecat culpa exercitation elit duis. Cillum amet exercitation irure commodo proident occaecat ex culpa elit. Veniam culpa occaecat mollit eu velit exercitation.
                </p>
            </article>  
        </section>
    </main>
  )
}

export default About
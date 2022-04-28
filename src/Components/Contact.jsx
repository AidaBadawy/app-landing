import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h3>Send me an Email</h3>
            <div className="contact-input">
                <input type="email" placeholder='example@email.com' />
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Contact
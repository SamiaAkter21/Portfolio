import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
    const [show, setShow] = useState(false);
    const showForm = () => {
        show? setShow(false) : setShow(true);
    }

    const sendMsg = () => {
        setShow(false);
    }

    return ( 
        <section id="contact" className="contact">
        <div className="contact">
            <div className="about-header flex">
                <div className="line"></div>
                <h1 className="middle">Contact Me </h1>
                <div className="line"></div>
            </div>
            <div className="about-content">
                <p className="font">I am currently seeking employment, and I would appreciate it if you could contact me with any available job oppurtunities.</p>
                <button id="msg" onClick={showForm}>{show? "Close the Form" : "Want to Contact?"}</button>
                {
                    show && (<ContactForm sendMsg = {sendMsg}/>)
                }
            </div>
        </div>
    </section>
    );
}


export default Contact;

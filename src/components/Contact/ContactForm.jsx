import React, { useState } from 'react';
import './Contact.css';

const ContactForm = ({sendMsg}) => {
    const [show, setShow] = useState(true);
    const showwForm = () => {
        show? setShow(sendMsg) : setShow(true);
    }

    return (
        <div id='formPart'>
            <form name="contact" id="form" className="form">
                <div className="form-control">
                    <label>Name</label>
                    <input className="area" type="text" placeholder="Enter Your Name" id="username" required/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input className="area" type="email" placeholder="Enter Your Email" id="email" required/>
                </div>
                <div className="form-control">
                    <label>Message</label><br/>
                    <textarea className="area" type="Message" placeholder="Write Details...." id="Message" required></textarea>
                </div>
                
                <button type="submit" id='send' className="send" onClick={showwForm}>Send Message</button>
            </form>
        </div> 
    );
}

 
export default ContactForm;
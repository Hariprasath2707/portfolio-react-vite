import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b4c463f9-15b1-4b06-8b5d-8283161f6a82");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-sections">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new Project.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>hariprasath642@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+91 9585586843</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Chennai</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} action="" className="contact-right" >
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter Your email' name='email' />
                    <label htmlFor="">Write Your Massage Here</label>
                    <textarea name="massage" rows="8" placeholder='Enter your massage'></textarea>
                    <button type='submit' className='contact-submit' > Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
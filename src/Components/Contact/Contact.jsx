import React from 'react'
import "./Contact.css"
import msgicon from "../../assets/asses/msg-icon.png"
import mailicon from "../../assets/asses/mail-icon.png"
import phoneicon from "../../assets/asses/phone-icon.png"
import locationicon from "../../assets/asses/location-icon.png"
import whitearrow from "../../assets/asses/white-arrow.png"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "337a2bf1-f9c2-4fc8-baad-2d0d68abf2bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((response) => response.json());

    // const data = await response.json();

    if (response.success) {
      console.log("Success", response);
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msgicon} alt="" /> </h3>
            <p> We believe in the power of collaboration.  Reach out to us and see how you can contribute your unique talents and passions to our mission.  Whether you're interested in volunteering, donating, or simply staying connected, your support is crucial.  Let's make a difference, together! </p>
            <ul>
               <li> <img src={mailicon} alt="" /> Contact@UdehUdochukwu.dev</li> 
               <li> <img src={phoneicon} alt="" /> +234 8075600327</li> 
               <li> <img src={locationicon} alt="" /> unity park, ondo city <br /> Kester, Ondo state</li> 

            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}> 
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile" required/>
                <label> Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={whitearrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact

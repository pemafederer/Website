
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

console.log("hat Contact geöffnet")

const Contact = () => {
  const form = useRef();
  const vorname = useRef(null);
  const nachname = useRef(null);
  const telefon = useRef(null);
  const email = useRef(null);
  const message = useRef(null);




  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sv7fw1o', 'template_y2utozs', form.current, 'c0ZobUEMjmj9hJaPO')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
      console.log(form.current.value)

      vorname.current.value = "";
      nachname.current.value = "";
      telefon.current.value = "";
      email.current.value = "";
      message.current.value = "";
      
      /*<label htmlFor="from_name">Name</label>*/
  }
  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_surname" placeholder="Vorname" ref={vorname}/>
        <input type="text" name="from_name" placeholder="Nachname" ref={nachname}/>
        <input type="text" name="telefon" placeholder="Telefon" ref={telefon}/>
        <input type="email" name="user_email" placeholder="Email-Adresse" ref={email}/>
        <textarea name="message" placeholder="Nachricht" s ref={message}></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>


  )
}

export default Contact;
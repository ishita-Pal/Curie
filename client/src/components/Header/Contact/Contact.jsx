import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import pop from "./../../../assets/Daisy.jpg";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form && form.current) {
      const formData = new FormData(form.current);
      const values = Object.fromEntries(formData.entries());
      const { user_name, user_email, message } = values;
      if (!user_name || !user_email || !message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill all the fields",
      
        });
        return;
      }

      emailjs
        .sendForm("service_2b3mgdg", "template_xmogd3o", form.current, "atMX7zNZcoMt7MM47")
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            Swal.fire({
              title: "Thank you",
              text: "We will get back to you at the earliest",
              imageUrl: pop,
              imageWidth: 300,
              imageHeight: 100,
              imageAlt: "Custom image"
            });
            
          },
          (error) => {
            console.log(error.text);
           
            
          }
        );
    }
  };


  return (
    <div className="oo">
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;

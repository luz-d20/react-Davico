import React from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function Contact() {
  return (
    <div className="contact">
      <h1>¡Contactame!</h1>
      <IconContext.Provider value={{ color: "purple", size: "5em"}}>
        <a href="https://www.linkedin.com/in/luz-davico/"><FaLinkedin className="icon" /></a>
        <a href="https://github.com/luz-d20"><FaGithub className="icon" /></a>
        <a href="mailto:mldavico@gmail.com"><FaEnvelope className="icon" /></a>
      </IconContext.Provider>
    </div>
  )
}

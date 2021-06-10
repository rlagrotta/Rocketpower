import "../App.css"

import "../css/styles.css"

import { Nav } from "../Pages/components/Nav"
import Footer from "../components/Footer"
import { db } from "./components/firebase"
import { useState } from "react"
import axios from "axops"

const navStyle = {
  position: "fixed",
}

const headStyle = {
  top: "17rem",
  position: "relative",
}

const footerStyle = {
  top: "12rem",
  position: "relative",
}

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [loader, setLoader] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)

    db.collection("contact")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted 👍")
        setLoader(false)
      })
      .catch((error) => {
        alert(error.message)
        setLoader(false)
      })

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
      <Nav style={navStyle} />
      <div className="container" style={headStyle}>
        <div className="contact-container">
          <div className="contact-row">
            <div className="contact-row__left">
              <div className="contact-row__left__text-row">
                <div className="contact-row__left__text-row__1">LISTOS PARA INNOVAR?</div>
                <div className="contact-row__left__text-row__2">
                  <div className="contact-row__left__text-row__2__1">info@rocketpowerstudios.com.com (+507)6981.74.80</div>
                  <div className="contact-row__left__text-row__2__2">Ph Miró, Panamá, PA, 0181</div>
                </div>
                <div className="contact-row__left__text-row__3">Proveanos con algo de información acerca de su visión y le responderemos en unas cuantas horas, lo prometemos.</div>
              </div>
              <div className="contact-row__left__gmap"></div>
            </div>
            <div className="contact-row__right">
              <form className="contact-row__right__form" onSubmit={handleSubmit}>
                <input placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="mensaje" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className="submit" type="submit" style={{ background: loader ? "#ccc" : "#000" }}>
                  enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer style={footerStyle} />
      </div>
    </>
  )
}

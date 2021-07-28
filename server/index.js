/* const express = require("express")
const app = express()
require("dotenv").config()

const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
  console.log("pasó por> apppost ")
  let { text } = req.body

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const info = await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "info@rocketpowerstudios.com",
    subject: "test email",
    html: `<div className="email" style="
    border:1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px
    ">
    <h2>Here is your email!</h2>
    <p>${name}</p>
    <p>${email}</p>
    <p>${message}</p>
    
    <p>All the best, Rocketpower</p>
    </div>`,
  });
  console.log(info);
})

app.listen(
  (process.env.PORT || 4000,
  () => {
    console.log("Server is listening on port 4000")
  })
)
 */

const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()

const nodemailer = require("nodemailer")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
  console.log("pasó por> apppost ")
  let { text } = req.body

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const info = await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "info@rocketpowerstudios.com",
    subject: "test email",
    html: `<div className="email" style="
    border:1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px
    ">
    <h2>Here is your email!</h2>
    <p>${text}</p>
    
    <p>All the best, Rocketpower</p>
    </div>`,
  })
})

app.listen(
  (process.env.PORT || 4000,
  () => {
    console.log("Server is listening on port 4000")
  })
)

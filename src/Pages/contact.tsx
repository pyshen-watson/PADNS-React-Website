import './contact.scss'
import { FormEvent, useState } from 'react'

export default function Contact() {

  const [showSuccessMsg, setShowSuccessMsg] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setShowSuccessMsg(true)
    alert('Your message has been sent!')
  }

  return (
    <>
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit} className="contact-form" method="POST" action="/contact">
        <div className="row">
          <label htmlFor="contact-name">Name:</label>
          <input id="contact-name" type="text" name="name" required />
        </div>
        <div className="row">
          <label htmlFor="contact-email">Email:</label>
          <input id="contact-email" type="text" name="email" required />
        </div>
        <div className="row">
          <label htmlFor="contact-message">Message:</label>
          <textarea id="contact-message" rows={10} cols={50} name="msg" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

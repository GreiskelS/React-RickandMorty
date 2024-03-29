import './css/formulario.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useForm } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkoobgq");
  if (state.succeeded) {
      return  <p>Thanks for contact us! <br /> <button type="submit" 
      className="btn btn-info" 
      id='buttoninfo' 
      disabled={state.submitting}
      ><Nav.Link href="/Inicio">Another mail</Nav.Link>
      </button><br /></p> ;
  }
  return (
    <div id='formulario'>
      <form onSubmit={handleSubmit} id='emailform' className='emailform'>
      <label id='emailform' htmlFor="email">
        ¡Contact Us! ✉️ 
      </label>
      <br />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder=" Email address" 
        required
      />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder=" Enter your message" required
      />
      <br />
      <button type="submit" className="btn btn-info" id='buttoninfo' disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function Formulario() {
  return (
    <ContactForm />
  );
}
export default Formulario;
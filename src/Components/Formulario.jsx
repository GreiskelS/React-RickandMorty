import './css/formulario.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useForm, ValidationError } from '@formspree/react';

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
      <form onSubmit={handleSubmit} className='emailform'>
      <label htmlFor="email" >
        ¡Contact Us! ✉️ 
      </label>
      <br />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email address" 
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder=" Enter your message" required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
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
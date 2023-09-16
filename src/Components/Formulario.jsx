import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import './css/formulario.css';

function Formulario() {


  return (
    <div id='formulario'>
      <Form >
        <h1>Log in</h1>
        <Form.Group controlId="formBasicEmail" action="https://formspree.io/f/xqkoobgq"
          method="POST">
          <Form.Label>Mail</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            <label>
              <textarea name="message" id="textarea" placeholder="Your message"></textarea>
            </label>
          </Form.Text>
        </Form.Group>
        <Form.Group >
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required />
        </Form.Group>
    
        <Button variant="primary" type="submit" className='button' id='button'>
          Submit
        </Button>

      </Form>
    </div>
  );
}

export default Formulario;
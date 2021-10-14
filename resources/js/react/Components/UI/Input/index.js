import React from 'react';
import { Form } from 'react-bootstrap';

function Input({ type, class_name, placeholder, label, onChange }) {
  return (
    <>
      <Form.Group controlId='exampleForm.ControlInput1'>
        {label ? <Form.Label>{label}</Form.Label> : null}
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
}

export default Input;

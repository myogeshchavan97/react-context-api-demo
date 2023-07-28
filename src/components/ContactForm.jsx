import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = ({ dispatch, contacts }) => {
  console.log('from ContactForm');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '' && email.trim() !== '' && phone.trim() !== '') {
      if (phone.trim().length !== 10) {
        setErrorMsg('Please enter a valid 10 digit phone number.');
      } else {
        console.log(name, email, phone);
        const emailExists = contacts.find((contact) => contact.email === email);
        if (!emailExists) {
          setErrorMsg('');
          dispatch({
            type: 'ADD_CONTACT',
            payload: {
              name,
              email,
              phone,
              id: Date.now()
            }
          });
          setName('');
          setEmail('');
          setPhone('');
        } else {
          setErrorMsg('Email is already taken.');
        }
      }
    } else {
      setErrorMsg('All the fields are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          name='username'
          value={name}
          placeholder='Enter your name'
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={email}
          placeholder='Enter your email'
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='text'
          name='phone'
          value={phone}
          placeholder='Enter your phone'
          onChange={(event) => setPhone(event.target.value)}
        />
      </Form.Group>
      <Button type='submit' className='mb-3'>
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;

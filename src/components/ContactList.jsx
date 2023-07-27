import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const ContactList = ({ contacts, dispatch }) => {
  return (
    <div>
      <h2 className='mt-4'>Contact List</h2>
      <ListGroup className='mt-3'>
        {contacts.map((contact) => {
          return (
            <Contact contact={contact} key={contact.id} dispatch={dispatch} />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ContactList;

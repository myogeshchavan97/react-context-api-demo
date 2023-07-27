import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Contact = ({ contact, dispatch }) => {
  const handleEdit = (property) => {
    switch (property) {
      case 'name':
        const newName = window.prompt('Enter new name', contact.name);
        if (newName) {
          dispatch({
            type: 'EDIT_CONTACT',
            id: contact.id,
            updates: {
              name: newName
            }
          });
        }
        break;
      case 'email':
        const newEmail = window.prompt('Enter new email', contact.email);
        if (newEmail) {
          dispatch({
            type: 'EDIT_CONTACT',
            id: contact.id,
            updates: {
              email: newEmail
            }
          });
        }
        break;
      case 'phone':
        const newPhone = window.prompt('Enter new phone', contact.phone);
        if (newPhone) {
          dispatch({
            type: 'EDIT_CONTACT',
            id: contact.id,
            updates: {
              phone: newPhone
            }
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='mt-3 mb-3'>
      <ListGroup.Item>
        Name: {contact.name}{' '}
        <Button onClick={() => handleEdit('name')} variant='success' size='sm'>
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        Email: {contact.email}{' '}
        <Button onClick={() => handleEdit('email')} variant='success' size='sm'>
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        Phone: {contact.phone}{' '}
        <Button onClick={() => handleEdit('phone')} variant='success' size='sm'>
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button
          onClick={() => {
            const shouldDelete = window.confirm(
              `Are you sure you want to remove contact with name ${contact.name}?`
            );
            if (shouldDelete) {
              dispatch({
                type: 'REMOVE_CONTACT',
                id: contact.id
              });
            }
          }}
          variant='danger'
          size='sm'
          className='mt-2'
        >
          Remove
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default Contact;

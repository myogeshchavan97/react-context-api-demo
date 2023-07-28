import { useEffect, useReducer, useRef } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import contactReducer from './reducers/contactReducer';
import ContactContext from './context/ContactContext';
import useTheme from './custom-hooks/useTheme';
import './index.css';

function App() {
  const { selectedTheme } = useTheme();
  const [contacts, dispatch] = useReducer(contactReducer, []);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const localContacts =
        JSON.parse(window.localStorage.getItem('contacts')) || [];
      if (localContacts.length > 0) {
        dispatch({
          type: 'SET_CONTACTS',
          payload: localContacts
        });
      }
      isFirstRender.current = false;
    }
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log('contacts', contacts);
  return (
    <div className={`container theme ${selectedTheme}`}>
      <Header />
      <ContactForm dispatch={dispatch} contacts={contacts} />
      <ContactContext.Provider value={{ dispatch, contacts }}>
        {contacts.length > 0 && <ContactList contacts={contacts} />}
      </ContactContext.Provider>
    </div>
  );
}

export default App;

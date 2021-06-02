import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "./contactSlice";
import ContactItem from "./components/ContactItem";


const Contact = () => {
  const dispatch = useDispatch();
  const contactState = useSelector(state => state.contact);
  
  console.log(contactState);
  
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
  const contactItems = () => {
    return contactState.currentList.map(contact => <ContactItem key={contact.id} contact={contact} />);
  }
  
  return (
      <div className='contact'>
        <h1>Contact Crud</h1>
        
        {contactState.loading.get === true && <p>loading...</p>}
        
        {contactState.loading.get === false && contactItems()}
      </div>
  );
};

export default Contact;

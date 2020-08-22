import React,{useContext,Fragment} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from "./ContactItem";
import {CSSTransition,TransitionGroup} from 'react-transition-group';

const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const {contacts,filter} = contactContext;

  if(contacts.length === 0 ){
    return <h3>Please add a Contact</h3>
  }
  return (
    <Fragment>
      <TransitionGroup>
        { filter !== null ?
          filter.map(contact=>(
            <CSSTransition key={contact.id} timeout={500} classNames="item">
             <ContactItem contact={contact} />
            </CSSTransition>
          ))
          :
          contacts.map(contact=>(
            <CSSTransition key={contact.id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts

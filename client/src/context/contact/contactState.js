import React,{useReducer} from 'react';
import * as actionTypes from '../actionTypes';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

const ContactState = props =>{
  const initialState = {
    contacts:[
      {
        id:1,
        name:"John Doe",
        email:"jdoe@gmail.com",
        phone:"111-111-111",
        type:"personal"
      },
      {
        id:2,
        name:"Jon Snow",
        email:"jsnow@gmail.com",
        phone:"222-222-222",
        type:"personal"
      },
      {
        id:3,
        name:"Brandon Will",
        email:"bwill@yahoo.com",
        phone:"333-333-333",
        type:"professional"
      },
    ],
    current:null,
    filter:null
  };

  const [state,dispatch] = useReducer(ContactReducer,initialState);

  //Actions: Add contact
  const addContact = (contact)=>{
    contact.id = uuid();
    dispatch({type:actionTypes.ADD_CONTACT,payload:contact})
  }

  //Actions: Delete contact
  const deleteContact = (id)=>{
    dispatch({type:actionTypes.DELETE_CONTACT,payload:id})
  }

  //Actions: Update contact
  const updateContact = (contact)=>{
    dispatch({type:actionTypes.UPDATE_CONTACT,payload:contact});
  }

  //Actions: Set current contact
  const setCurrent = contact=>{
    dispatch({type:actionTypes.SET_CURRENT,payload:contact})
  }

  //Actions: Clear current contact
  const clearCurrent = ()=>{
    dispatch({type:actionTypes.CLEAR_CURRENT})
  }

  //Actions: Filter contact
  const filterContact = text =>{
    dispatch({type:actionTypes.FILTER_CONTACT,payload:text});
  }

  //Actions: Clear Filter
  const clearFilter = ()=>{
    dispatch({type:actionTypes.CLEAR_FILTER});
  }

  return (
    <ContactContext.Provider value={
        {
          contacts:state.contacts,
          current:state.current,
          addContact,
          deleteContact,
          setCurrent,
          clearCurrent,
          updateContact,
          filter:state.filter,
          filterContact,
          clearFilter,
        }
      }>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;

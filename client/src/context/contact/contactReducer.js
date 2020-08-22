import * as actionTypes from '../actionTypes';

const ContactReducer = (state,action)=>{
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return{
        ...state,
        contacts:[...state.contacts,action.payload],
      }
    case actionTypes.DELETE_CONTACT:
      return{
        ...state,
        contacts:state.contacts.filter(contact=>contact.id !== action.payload)
      }
    case actionTypes.SET_CURRENT:
      return{
        ...state,
        current:action.payload
      }
    case actionTypes.CLEAR_CURRENT:
      return {
        ...state,
        current:null
      }
    case actionTypes.UPDATE_CONTACT:
      return{
        ...state,
        contacts:state.contacts.map(contact=> contact.id === action.payload.id ? action.payload : contact)
      }
    case actionTypes.FILTER_CONTACT:
      return{
        ...state,
        filter:state.contacts.filter(contact=>{
          const regex = new RegExp(`${action.payload}`,'gi')
          return contact.name.match(regex) || contact.email.match(regex)
        })
      }
    case actionTypes.CLEAR_FILTER:
      return{
        ...state,
        filter:null
      }
    default: return  state;

  }
}

export default ContactReducer;

import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from "./types";

import { v4 as uuid } from "uuid";

const intialState = {
  contacts: [
    {
      id: uuid(),
      name: "John",
      lastname: "Dorian",
      age: 27,
      pager: 926545
    },
    {
      id: uuid(),
      name: "Carla",
      lastname: "Espinosa",
      age: 28,
      pager: 945455
    },
    {
      id: uuid(),
      name: "Perry",
      lastname: "Cox",
      age: 40,
      pager: 955654
    },
    {
      id: uuid(),
      name: "Robert",
      lastname: "Celso",
      age: 58,
      pager: 128215
    }
  ]
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};

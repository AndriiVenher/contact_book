import React from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/actions";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, lastname, age, pager, id } = contact;
  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{pager}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </td>
    </tr>
  );
};

export default Contact;

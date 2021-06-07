import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Pager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;

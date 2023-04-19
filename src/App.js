import React, { Fragment, useState } from "react";
import { nanoid } from 'nanoid';
import './App.css'
import data from './mock-data.json'
import ReadOnlyRows from "./components/ReadOnlyRows";
import EditableRow from "./components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  const [editContactId, setEditContactId] = useState(null);


  const handelAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handelEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handelAddFormChangeSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handelEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null)
  };

  const handelEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }

    setEditFormData(formValues);
  };


  const handelCancelClick = () => {
    setEditContactId(null);
  };

  const handelDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.Id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  }

  return (
    <div className="app-container">
      <h2>Add a Contact</h2>
      <form className="handelAddFormChangeSubmit" onSubmit={handelAddFormChangeSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handelAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handelAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handelAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handelAddFormChange}
        />
        <button classNmae='btn' type="submit">Add</button>
      </form>
      <form onSubmit={handelEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Addres</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ?
                  (<EditableRow
                    editFormData={editFormData}
                    handelEditFormChange={handelEditFormChange}
                    handelCancelClick={handelCancelClick} />) :

                  (<ReadOnlyRows contact={contact}
                    handelEditClick={handelEditClick} 
                    handelDeleteClick={handelDeleteClick}/>)}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;

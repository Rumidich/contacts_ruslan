import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Navbar/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContact from "./components/EditContact/EditContact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  //! CRUD - Create, Read, Update, Delete
  const API = " http://localhost:8000/contacts";

  //! For data storage
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  //! Create - POST

  async function createContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  //! Read - GET
  async function getContacts() {
    let res = await axios(API);
    setContacts(res.data);
  }

  //! Delete - DELETE
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  //! Details, Edit - GET API/id
  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    setOneContact(res.data);
  }

  //! Update - PATCH, PUT
  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  async function saveContact(newContact) {
    await axios.patch(`${API}/${newContact.id}`, newContact);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactsList
              contacts={contacts}
              getContacts={getContacts}
              getOneContact={getOneContact}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact createContact={createContact} />}
        />
        <Route
          path="/list"
          element={
            <ContactsList
              getContacts={getContacts}
              contacts={contacts}
              deleteContact={deleteContact}
              getOneContact={getOneContact}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditContact
              oneContact={oneContact}
              getOneContact={getOneContact}
              updateContact={updateContact}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

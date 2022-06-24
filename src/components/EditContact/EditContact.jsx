import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ getOneContact, oneContact, updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getOneContact(id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function handleSave() {
    let editedContact = {
      name,
      surname,
      phone,
    };
    updateContact(id, editedContact);
    navigate("/list");
  }

  return (
    <Container style={{ marginTop: "40px" }}>
      {oneContact ? (
        <Box>
          <TextField
            value={name}
            onChange={event => setName(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <TextField
            value={surname}
            onChange={event => setSurname(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <TextField
            value={phone}
            onChange={event => setPhone(event.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <Button onClick={() => handleSave()} variant="contained" color="info">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default EditContact;

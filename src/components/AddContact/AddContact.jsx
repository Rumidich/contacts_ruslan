import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ createContact }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  function handleSave() {
    if (!name || !surname || !phone) {
      alert("Please fill all fields in / Просьба заполнить все поля! ");
    } else {
      let newContact = {
        name,
        surname,
        phone,
      };
      createContact(newContact);
      navigate("/");
    }
  }

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "spaceBetween",
        marginTop: "50px",
      }}>
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        value={surname}
        label="Surname"
        variant="outlined"
        onChange={e => setSurname(e.target.value)}
      />
      <TextField
        value={phone}
        label="Phone Number"
        variant="outlined"
        onChange={e => setPhone(e.target.value)}
      />
      <Button
        onClick={() => handleSave()}
        variant="contained"
        color="secondary">
        Save
      </Button>
    </Box>
  );
};

export default AddContact;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactsList = ({ getContacts, contacts, deleteContact }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      {contacts.map(item => (
        <div
          key={item.id}
          style={{
            flexDirection: "row",
            display: "flex",
            margin: "5px 70px",
          }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
              </tr>
            </tbody>
          </table>
          <button
            style={{
              borderRadius: "8px",
              backgroundColor: "limegreen",
              border: "none",
              marginLeft: "9px",
              width: "45px",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </button>
          <button
            style={{
              borderRadius: "8px",
              backgroundColor: "red",
              border: "none",
              marginLeft: "9px",
            }}
            onClick={() => deleteContact(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;

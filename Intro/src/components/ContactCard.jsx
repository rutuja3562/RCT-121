import React from "react";
const ContactCard = ({ id, name, phone, deleteItem }) => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "5px",
        border: "1px solid black",
        gap: "5px"
      }}
    >
      <div>
        {name}
        {"   "}
        {phone}
      </div>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
};
export default ContactCard;

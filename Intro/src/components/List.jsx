import React, { useState } from "react";

export const List = (props) => {
  const [show, setShow] = useState(false);
  const { name, email, phone, img, id } = props;
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      style={{ width: "30%", margin: "auto",boxShadow: " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
    >
      <div
        style={{
          borderBottom: "1px solid grey",
          marginBottom: "20px",
          display: "flex",
          gap: "3rem",
          textAlign: "justify",
         borderBottomRightRadius:"0.25rem",
         borderBottomLeftRadius:"0.25rem"
        }}
      >
        <div style={{ marginTop: "10px", alignItems: "center" }}>
          <img
            height="70px"
            width="70px"
            style={{ borderRadius: "50%" }}
            src={img}
            alt="avatar"
          />
        </div>
        <div>
          <p>{name}</p>
          <p>{email}</p>
          {show ? <p>{phone}</p> : null}
        </div>
      </div>
    </div>
  );
};
// {show && <p>{phone}</p>}


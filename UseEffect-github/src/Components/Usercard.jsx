import React from 'react'

export const Usercard = ({ login, avatar_url }) => {

  return (
    <div style={{ display: "flex", gap: "3rem" ,marginBottom:"10px",margin:"auto", width:"400px"}}>
      <div>
        <img height="50px" width="50px" src={avatar_url} alt="avatar" />
      </div>
      <div>{login}</div>
    </div>
  );
};

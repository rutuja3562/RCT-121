import "./App.css";
import ContactList from "./components/ContactList";
import { List } from "./components/List";
import React, { useState } from "react";
// import React from 'react'

const contacts = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sam_Worthington_2013.jpg/330px-Sam_Worthington_2013.jpg",
    name: "william",
    email: "william@gmail.com",
    phone: 9087645353,
  },
  {
    id: 2,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLU7utOCVZ-pMlt4VWrm6oYk6NcD5fNs2WIlTokp_l3SoXA6PU",
    name: "johnd",
    email: "john@gmail.com",
    phone: 8833452311,
  },
  {
    id: 3,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfwd6ILN5LdHm0ZrDAn_H1D7557AzwETTqVy9HRt99urSyin66",
    name: "jimmie",
    email: "jimmie@gmail.com",
    phone: 8734256574,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Hayat",
    email: "hayat@gmail.com",
    phone:8698256574,
  },
];

function App() {
  const [data,setData]=useState(contacts)
  return (
    <div className="App">
      {/*  <ContactList/>*/}
      {data.map(item=> 
      <List key={item.id}name={item.name} email={item.email} phone={item.phone} img={item.img} id={item.id}/>)}
    </div>
  );
}

export default App;

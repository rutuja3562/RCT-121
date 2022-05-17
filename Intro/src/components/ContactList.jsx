// import { ContactList } from "./components/ContactList";
import { useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
const initState = [
  {
    id: 1,
    first_name: "Rutuja",
    last_name: "Patil",
    phone: 9098777387,
  },
  {
    id: 2,
    first_name: "Raj",
    last_name: "Patil",
    phone: 98908777387,
  },
];
export default function ContactList() {
  const [contactlist, setContactlist] = useState(initState);
  const handleClick = (name, phone) => {
    setContactlist([
      ...contactlist,
      {
        id: contactlist[contactlist.length - 1].id + 1,
        first_name: name,
        last_name: "",
        phone: phone,
      },
    ]);
  };

  const ondelete = (id) => {
    // console.log(id)
    setContactlist(contactlist.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>ContactList</h2>
      <AddContact handleClick={handleClick} />
      {/* <ContactList/> */}

      {contactlist.map((item) => {
        return (
          <div key={item.id}>
            <ContactCard
              id={item.id}
              name={item.first_name}
              phone={item.phone}
              deleteItem={ondelete}
            />
          </div>
        );
      })}
    </div>
  );
}

// import { ContactList } from "./components/ContactList";
import { useState } from "react";

const AddContact = (props) => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    if (props.handleClick) props.handleClick(text, phone);
    setText("");
    setPhone("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div onClick={handleClick}>Add</div>
      <br />
    </div>
  );
};
export default AddContact;

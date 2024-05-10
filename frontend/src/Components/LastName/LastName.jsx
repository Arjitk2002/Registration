import React, { useState } from "react";
import "./LastName.css";

const LastName = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleLastName = (event) => {
    const value = event.target.value;
    const onlyAlphabets = /^[A-Za-z]+$/;

    if (value === "" || onlyAlphabets.test(value)) {
      setInputValue(value);
      props.handleAll(value);
    }
  };

  return (
    <div>
      <div className="lastname-text">Last Name</div>
      <input
        type="text"
        name="lastname"
        value={inputValue}
        onChange={handleLastName}
        placeholder="Sharma"
        className="lastname-value"
      />
    </div>
  );
};

export default LastName;

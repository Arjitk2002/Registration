import React, { useState } from "react";
import "./FirstName.css";

const FirstName = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleFirstName = (event) => {
    const value = event.target.value;
    const onlyAlphabets = /^[A-Za-z]+$/;

    if (value === "" || onlyAlphabets.test(value)) {
      setInputValue(value);
    }

    if (value !== null) {
      props.validate(true);
    }
  };

  return (
    <div>
      <div className="firstname-text">First Name</div>
      <input
        type="text"
        name="firstname"
        value={inputValue}
        onChange={handleFirstName}
        placeholder="Rahul"
        className="firstname-value"
      />
    </div>
  );
};

export default FirstName;

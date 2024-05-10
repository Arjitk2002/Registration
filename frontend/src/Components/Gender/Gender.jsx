import React, { useState } from "react";
import "./Gender.css";

const Gender = (props) => {
  const [selectedGender, setSelecetedGender] = useState("");

  const handleOnChange = (event) => {
    setSelecetedGender(event.target.value);
    props.handleAll(event.target.value);
  };

  return (
    <div>
      <div className="gender-text">Select Gender</div>
      <div className="gender-row">
        <label className="gender-label">
          <input
            type="radio"
            value={"male"}
            checked={selectedGender === "male"}
            onChange={handleOnChange}
            className="radio-gender-input"
          />
          Male
        </label>
        <label className="gender-label">
          <input
            type="radio"
            value={"female"}
            checked={selectedGender === "female"}
            onChange={handleOnChange}
            className="radio-gender-input"
          />
          Female
        </label>
      </div>
    </div>
  );
};

export default Gender;

import React, { useEffect, useState } from "react";
import "./DOB.css";

const Dob = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    props.handleAll(selectedDate);
  };
  useEffect(() => {
    calculateAge();
  }, [selectedDate]);
  const calculateAge = () => {
    const birthDate = new Date(selectedDate);
    const currentDate = new Date();

    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      <div className="dob-text">Select DOB</div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="dob-input"
      />
      <div className="separator"></div>
      <div className="age-section">
        <span className="age-text">Age: </span>
        <span className="age-value">{age}</span>
      </div>
    </div>
  );
};

export default Dob;

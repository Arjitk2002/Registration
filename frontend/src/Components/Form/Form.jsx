import React, { useRef, useState } from "react";
import "./Form.css";
import FirstName from "../FirstName/FirstName";
import LastName from "../LastName/LastName";
import EmailAddress from "../EmailAddress/EmailAddress";
import GeoData from "../GeoData/GeoData";
import Gender from "../Gender/Gender";
import Dob from "../DOB/DOB";
const Form = () => {
  const EmailAddressRef = useRef();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "",
    state: "",
    city: "",
    gender: "",
    dob: "",
  });
  const handleFname = (props) => {
    const newUser = {
      ...user,
      fname: props,
    };
    setUser(newUser);
  };
  const handleLname = (props) => {
    const newUser = {
      ...user,
      lname: props,
    };
    setUser(newUser);
  };
  const handleEmail = (props) => {
    const newUser = {
      ...user,
      email: props,
    };
    setUser(newUser);
  };
  const handleCountry = (props) => {
    const newUser = {
      ...user,
      country: props,
    };
    setUser(newUser);
  };
  const handleState = (props) => {
    const newUser = {
      ...user,
      state: props,
    };
    setUser(newUser);
  };
  const handleCity = (props) => {
    const newUser = {
      ...user,
      city: props,
    };
    setUser(newUser);
  };
  const handleGender = (props) => {
    const newUser = {
      ...user,
      gender: props,
    };
    setUser(newUser);
  };
  const handleDate = (props) => {
    const newUser = {
      ...user,
      dob: props,
    };
    setUser(newUser);
  };
  const handleSubmit = async (e) => {
    // console.log(user);
    e.preventDefault();
    EmailAddressRef.current.handleMail();
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const callHandleMail = () => {

  //   // console.log(user);
  // };
  return (
    <div className="main-form-page">
      <div className="form-main">
        <div className="name-section">
          <FirstName handleAll={handleFname} />
          <LastName handleAll={handleLname} />
        </div>

        <div className="separator"></div>

        <div className="mail-section common-section">
          <EmailAddress ref={EmailAddressRef} handleAll={handleEmail} />
        </div>

        <div className="separator"></div>

        <div className="geo-section common-section">
          <GeoData
            handleCtr={handleCountry}
            handleSt={handleState}
            handleCt={handleCity}
          />
        </div>

        <div className="separator"></div>

        <div className="gender-section common-section">
          <Gender handleAll={handleGender} />
        </div>

        <div className="separator"></div>

        <div className="dob-section common-section">
          <Dob handleAll={handleDate} />
        </div>
        <div className="btn-row">
          <button
            className="btn-submit"
            // onClick={callHandleMail}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

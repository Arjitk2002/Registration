import React, { useRef } from "react";
import "./Form.css";
import FirstName from "../FirstName/FirstName";
import LastName from "../LastName/LastName";
import EmailAddress from "../EmailAddress/EmailAddress";
import GeoData from "../GeoData/GeoData";
import Gender from "../Gender/Gender";
import Dob from "../DOB/DOB";
const Form = () => {
  const EmailAddressRef = useRef();
  const callHandleMail = () => {
    EmailAddressRef.current.handleMail();
  };
  return (
    <div className="main-form-page">
      <div className="form-main">
        <div className="name-section">
          <FirstName />
          <LastName />
        </div>

        <div className="separator"></div>

        <div className="mail-section common-section">
          <EmailAddress ref={EmailAddressRef} />
        </div>

        <div className="separator"></div>

        <div className="geo-section common-section">
          <GeoData />
        </div>

        <div className="separator"></div>

        <div className="gender-section common-section">
          <Gender />
        </div>

        <div className="separator"></div>

        <div className="dob-section common-section">
          <Dob />
        </div>
        <div className="btn-row">
          <button className="btn-submit" onClick={callHandleMail}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./EmailAddress.css";
// import "../../assets/font.css";

const EmailAddress = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleMail = () => {
    const isValidEmail = validateEmail(email);
    setValid(isValidEmail);
  };

  useImperativeHandle(ref, () => ({
    handleMail: handleMail,
  }));

  return (
    <div>
      <div className="email-text">E-Mail Address</div>
      <input
        type="text"
        name="email"
        /*value={inputValue}*/
        onChange={handleMailChange}
        placeholder="abc@gmail.com"
        className="email-value"
      />
      {!isValid && <p className="not-valid-mail">Not a valid E-mail</p>}
      {/*<p className='not-valid-mail'>Not a valid E-mail</p>*/}
    </div>
  );
});

EmailAddress.displayName = "EmailAddress";
export default EmailAddress;

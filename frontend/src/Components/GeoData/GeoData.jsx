import React, { useEffect, useState } from "react";
import "./GeoData.css";
// import axios from "axios";
const GeoData = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [country_code, setCountry_code] = useState("");
  const [state_name, setState_name] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/api/get-countries");
      const finalResult = await result.json();
      setCountries(finalResult.data);
      // setCountry_code(finalResult.data.iso);
      // console.log(finalResult.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      const result = await fetch("http://localhost:3000/api/get-states", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country_code: country_code }),
      });
      const finalResult = await result.json();
      setStates(finalResult.data);
      console.log(country_code, finalResult.data);
    };
    fetchStates();
  }, [country_code]);

  useEffect(() => {
    const fetchCities = async () => {
      const result = await fetch("http://localhost:3000/api/get-cities", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state_name: state_name }),
      });
      const finalResult = await result.json();
      setCities(finalResult.data);
    };
    fetchCities();
  }, [state_name]);

  const handleCountry = (e) => {
    const selectedCountryId = e.target.value;
    setCountry(e.target.value);
    // console.log(selectedCountryId);
    setCountry_code(selectedCountryId);
    // console.log(country_code);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
    setState_name(e.target.value);
  };

  return (
    <div>
      <div className="geo-label">Select Location</div>
      <div className="geo-row">
        <select
          value={country}
          onChange={(e) => {
            handleCountry(e);
          }}
          className="geo-elements"
        >
          {countries.map((e) => (
            <option key={e.iso} value={e.iso}>
              {e.name}
            </option>
          ))}
        </select>
        <select value={state} onChange={handleState} className="geo-elements">
          {states.map((e) => (
            <option key={e.state_code} value={e.state_code}>
              {e.name}
            </option>
          ))}
        </select>
        <select value={city} onChange={handleCity} className="geo-elements">
          {cities.map((city) => (
            <option key={city.state_name} value={city.state_name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GeoData;

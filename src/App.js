import React from "react";
import UserInfo from "./component/UserInfo";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("France");
  const [mobileNnumber, setMobileNumber] = useState();
  const [UserInfo, setUserInfo] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    const newUserData = {
      name: name,
      email: email,
      country: country,
      mobileNumber: mobileNnumber,
    };
  };

  return (
    <>
      <UserInfo />
      <br />
      <br />

      <h2>/Add your information</h2>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          name="mobileNumber"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <select
          name="country"
          defaultValue={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="France">France</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Brazil">Brazil</option>
          <option value="Italy">Italy</option>
        </select>
        <br />

        <button type="submit">Add</button>
      </form>
      <br />
      {userInfo.map((person, index) => {
        return <p key={index}>{person.name}</p>;
      })}
    </>
  );
}

export default App;

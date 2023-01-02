import { useState, useEffect } from "react";

function userInfo() {
  const [name, setName] = useState("Natasha");

  const inputHandler = (e) => {
    setName(e.target.value);
  };
  //Mount
  useEffect(() => {
    console.log("%c I RUN ON EVERY RE-RENDER");
  });

  //Update
  useEffect(() => {
    console.log("I RUN ON EVERY NAME CHANGE");
  }, [name]);

  //render on initial loading
  useEffect(() => {
    console.log;
    ("Initial Rendering");
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <input type="text" placeholder="enter anything" onChange={inputHandler} />
    </>
  );
}

export default userInfo;

import React from "react";
import firebase from "./../../../sources/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const Add = () => {
  const [value, setValue] = React.useState("");
  const db = firebase.firestore();
  const getValue = (event) => {
    setValue(event.target.tittel);
  };

  const addValue = () => {
    db.collection("values")
      .doc("test2")
      .set({
        Tittel: "test2",
      })
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  return (
    <div>
      <input onBlur={getValue} type="text" />
      <button type="button" onClick={addValue}>
        Add
      </button>
    </div>
  );
};

export default Add;

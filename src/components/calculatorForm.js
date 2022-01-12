import React, { useState } from "react";
import "../components/calculatorForm.css";

function CalcForm() {
  const [credit, setCredit] = useState(0);
  const [transport, setTransport] = useState();
  const [distance, setDistance] = useState();

  const handleChange = (e) => {
    if (e.target.name === "transportSelect") {
      setTransport(e.target.value);
    } else if (e.target.name === "distance") {
      setDistance(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transport === "Car") {
      setCredit(distance * 50);
    } else if (transport === "Train") {
      setCredit(distance * 100);
    } else if (transport === "Plane") {
      setCredit(distance * 200);
    }
    alert("This has been submitted");
    console.log(credit);
  };

  return (
    <div className="calcContainer">
      <form>
        <label>
          Select your mode of transport:
          <select name="transportSelect" onChange={handleChange}>
            <option />
            <option value="Car">Car</option>
            <option value="Train">Train</option>
            <option value="Plane">Plane</option>
          </select>
        </label>
        <label>
          <input
            type="text"
            name="transportSelect"
            value={transport}
            disabled
            onChange={handleChange}
          />
        </label>
        <label>
          Distance (miles):
          <input
            type="number"
            name="distance"
            value={distance}
            onChange={handleChange}
          />
        </label>
        <button type="submit" value="submit" onClick={handleSubmit}>
          Submit
        </button>
        Total Credits:
        <p>{credit}</p>
      </form>
    </div>
  );
}

export default CalcForm;

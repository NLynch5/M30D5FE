import React from "react";
import "../components/calculatorForm.css";

//car calc form
class CalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("This has been submitted");
    event.preventDefault();
  }

  render() {
    return (
      <div className="calcContainer">
        <form onSubmit={this.handleSubmit}>
          <label>
            Select your mode of transport:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Car">Car</option>
              <option value="Train">Train</option>
              <option value="Plane">Plane</option>
            </select>
          </label>
          <label>
            <input
              type="text"
              name="Distance"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Distance (miles):
            <input type="text" name="Distance" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// ReactDOM.render;
// {
//   (<CalcForm />), document.getElementById("root");
// }

export default CalcForm;

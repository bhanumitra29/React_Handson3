import React, { Component } from "react";
import "../App.css";

export default class ClassFormCompo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      Data: [],
      isEditMode: true, 
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.department || !this.state.rating) {
      alert("Please fill in all fields before submitting.");

      // if(this.state.name.length<10){
      //   alert("")
      // }
      // if(this.state.department.length<10){
      //   alert("")
      return;
    }
    if (parseInt(this.state.rating) < 1 || parseInt(this.state.rating) > 5) {
      alert("The rating should be between 1 and 5.");
      return;
    }
     
    const temp = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };

    this.setState((prevState) => ({
      Data: [...prevState.Data, temp],
      name: "",
      department: "",
      rating: "",
      isEditMode: false, 
    }));
  }

  goBack = () => {
    this.setState({ isEditMode: true });
  };

  render() {
    return (
      <>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form className={`${this.state.isEditMode ? "block" : "hide"}`}>
          <label htmlFor="name">Name :</label>
          <input type="text" className="input" id="name" name="name" value={this.state.name} onChange={this.handleChange}></input> <br /> <br />
          <label htmlFor="dept">Department :</label>
          <input type="text" className="input" id="dept" name="department" value={this.state.department} onChange={this.handleChange}></input> <br /> <br />
          <label htmlFor="rating">Rating :</label>
          <input type="number" className="input" id="rating" name="rating" value={this.state.rating} onChange={this.handleChange}></input> <br /> <br /> <br /> <br />
          <button className="button" onClick={this.handleSubmit}>Submit</button>
        </form>

        <div className={`mainbox ${this.state.isEditMode ? "hide" : "with-padding"}`}>
          {this.state.Data.map((item, index) => (
            <div key={index} className="innerbox">
              <span> Name: {item.name} | Department: {item.department} | Rating: {item.rating}</span>
            </div>
          ))}
        </div>

        <button className={`button button1 ${this.state.isEditMode ? "hide" : "block"}`} onClick={this.goBack}>Go Back</button>
      </>
    );
  }
}

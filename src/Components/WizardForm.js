import React, { Component } from 'react';

class WizardForm extends Component {

  handleChange = (e) => {
    console.log(e.target);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted!");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" value={
              //Where should we control this?
            } onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" value={
              //Where should we control this?
            } onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" value={
              //Where should we control this?
            } onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}



export default WizardForm;

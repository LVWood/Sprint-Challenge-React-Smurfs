import React, { Component } from 'react';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf || {
        name: '',
        age: '',
        height: ''
      },   
    };
  }

  // Leslee: Moved all this to App. I can't rethink the config right now.
  // addSmurf = (event, individual) => {
  //   event.preventDefault();
  //   axios 
  //     .post("http://localhost:3333/smurfs", individual)
  //     .then(res => this.setState({ activeSmurf: res.data }))
  //     .catch(err => console.log(err))
  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({ 
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value 
      },
      successMessage: true
    }));
  };

  handleSubmit = e => {
      this.props.addSmurf(e, this.state.smurf);
      this.setState({
          smurf: {
              name: '',
              age: '',
              height: ''
          }
      })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

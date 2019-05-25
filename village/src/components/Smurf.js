import React from 'react';

const Smurf = props => {
  return (
    <div className="citizen-card">
      <div className="Smurf">
        <h3>{props.name}</h3>
      </div>
      <div className="details">
        <p> {props.name} is {props.height} tall and {props.age} smurf-years-old.</p>
      </div>
      
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


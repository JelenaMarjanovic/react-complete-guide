import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <div className="Person">
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" defaultValue={props.name} />
    </div>
  );
};

export default Person;

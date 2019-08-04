import React from 'react';

const Person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" defaultValue={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;

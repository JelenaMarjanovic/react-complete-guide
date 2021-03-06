import React from 'react';

import classes from "./Cockpit.module.css";

const Cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.red;

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Warning!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
				</button >
    </div>

  );
};

export default Cockpit;
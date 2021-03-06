import React from 'react';

import Person from './Person/Person';

const Persons = props =>
  props.persons.map((person, index) =>
    <Person
      clicked={() => props.clicked(index)}
      changed={event => props.changed(event, person.id)}
      name={person.name}
      age={person.age}
      key={person.id}
    />
  );

export default Persons;

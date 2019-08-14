import React, { Component } from "react";
import classes from "./App.module.css";

import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{ id: "sadsf", name: "Max", age: 28 },
			{ id: "qwerq", name: "Manu", age: 29 },
			{ id: "zxvcc", name: "Stephanie", age: 26 }
		],
		showPersons: false
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(
			person => person.id === id
		);

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];

		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];

		persons.splice(personIndex, 1);

		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;

		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => (
						<Person
							click={() => this.deletePersonHandler(index)}
							changed={event => this.nameChangedHandler(event, person.id)}
							name={person.name}
							age={person.age}
							key={person.id}
						/>
					))}
				</div>
			);

			btnClass = classes.Red;
		}

		const assignedClasses = [];

		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}

		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(" ")}>Warning!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button >
				{persons}
			</div>
		);
	}
}

export default App;

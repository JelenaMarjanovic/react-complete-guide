import React, { Component } from "react";
import classes from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

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

		if (this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />;
		}

		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler} />
				{persons}
			</div>
		);
	}
}

export default App;

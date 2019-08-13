import React, { Component } from "react";
import "./App.css";
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
		const style = {
			backgroundColor: "green",
			color: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer",
			":hover": {
				backgroundColor: "lightgreen",
				color: "black"
			}
		};

		let persons = null;

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

			style.backgroundColor = "red";
			style[":hover"] = {
				backgroundColor: "salmon",
				color: "black"
			};
		}

		const classes = [];

		if (this.state.persons.length <= 2) {
			classes.push("red");
		}

		if (this.state.persons.length <= 1) {
			classes.push("bold");
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(" ")}>Warning!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}
export default App;

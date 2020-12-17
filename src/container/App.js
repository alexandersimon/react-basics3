import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/_Aux';
import withClass from '../hoc/WithClass'

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Alex', location: "Salzburg"},
      {id: '2', name: 'Sabine', location: "Salzburg"},
      {id: '3', name: 'Julius', location: "Salzburg"}
    ]
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });    
  }

  tooglePersonsHandler = () => {
    const isPersonDisplay = this.state.showPersons;

    this.setState({
      showPersons: !isPersonDisplay
    });
    
  }

  render() {
   
    let persons  = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}></Persons>      
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <Cockpit
        title="Hallo"
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.tooglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }

}

export default withClass(App,classes.App);

import React, { Component } from 'react'


class ContactList extends React.Component{
  render(){
    const people = this.props.contacts

    return(
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    )
  }
}


function App() {
  return (
    <div className="App">
      <ContactList contacts ={
        [
          {name: 'John'},
          {name: 'Doe'},
          {name: 'Jane'}
        ]
      }/>
      <ContactList contacts ={
        [
          {name: 'Buds'},
          {name: 'Pest'},
          {name: 'Xi'}
        ]
      }/>
    </div>
  );
}

export default App;

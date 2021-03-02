import React, { Component } from "react";
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component{
  //Adding state to App so that App can manage it
  state = {
    //adding the previous contact variable to live as state
    contacts : [],
    //state to determine which screen to show not needed any more
    
  }

  //CREATE LIFECYCLE EVENT TO MAKE NETWORK REQUESTS
  componentDidMount(){
    // make API request to send our contacts data 
    ContactsAPI.getAll().then((contacts) => {
      //update our state with new data
      this.setState({ contacts : contacts })
    })
  }
  //function responsible for updating current state
  removeContact = (contact) => {
    this.setState((state) => ({
      /*remove contact from local state by filtering out 
      the clicked contact id from the list*/
      contacts: state.contacts.filter((contact) => contact.id !== contact.id)
    }))
    //remove contact from the backend db
    ContactsAPI.remove(contact)
  }

  createContact(contact) {
    ContactsAPI.create(contact).then( contact => {//create contact in the server then
      this.setState(state => ({//send it back so that internal state can be changed
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  render(){
    return  (
      //pass the above contacts to the ListContacts component
      //change to access the state within the App component
      //invoke the function whenever one of the delete button is clicked
      <div classsName="app">
        {/* using route to render page  */}
        <Route exact path="/" render={() => (
          <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}
          // removed onNavigate prop since it's not needed 
        />
        )}/>
        {/* Using Route to render pages */}
        <Route path="/create" render={({ history }) => (
          <CreateContact 
          onCreateContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }} //Add new contact to state
        />
        )}/>
        
      </div>
    )
  }
}

export default App;
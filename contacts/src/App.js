import React, { Component } from "react";
import ListContacts from './ListContacts'


class App extends Component{
  //Adding state to App so that App can manage it
  state = {
    //adding the previous contact variable to live as state
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  render(){
    return  (
      //pass the above contacts to the ListContacts component
      //change to access the state within the App component
      <ListContacts contacts={this.state.contacts} />
    )
  }
}

export default App;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addRecipe, removeFromCalendar} from '../actions'

class App extends Component {
  render() {
    console.log('Props',this.props);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

//function that maps redux state to the component props
//since more than one reducer is been imported>>>>>
function mapStatetoProps({calendar, food}) {
  //calendar is the state

  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return{
    //reshape the form of the data
    calendar: dayOrder.map((day) => ({
      day,
      meals:Object.keys(calendar[day]).reduce((meals, meal)=>{
        meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null

        return meals
      }, {})
    }))
  }
}

//dispatch an action(s); remove and add in this case
function mapDispatchToProps(dispatch) {
  return{
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(App); 

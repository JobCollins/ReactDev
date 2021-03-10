import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addRecipe, removeFromCalendar} from '../actions'
import capitalize from '../utils/helper'
import { FaRegCalendarPlus } from 'react-icons/fa'

class App extends Component {
  render() {
    const { calendar, remove} = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']
    console.log('Props',this.props);
    return (
      <div className="container">
        <ul className='meal-types'>
          {
            mealOrder.map((mealType) => (
              <li key={mealType} className='subheader'>{capitalize(mealType)}</li>
            ))
          }
        </ul>
        
        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                          <img src={meals[meal].image} alt={meals[meal].label}/>
                          <button onClick={() => remove({meal, day})}>Clear</button>
                        </div>
                      : <button className='icon-btn'>
                          <FaRegCalendarPlus size={30}/>
                        </button>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>


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

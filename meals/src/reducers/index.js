import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions'

import { combineReducers } from 'redux'

//reducer to handle food recipe updates 
function food(state={}, action) {
  switch (action.type) {
    case ADD_RECIPE:
      const { recipe } = action
      return{
        ...state,
        [recipe.label]: recipe
      }
  
    default:
      return state;
  }
}

//Initial State data
const initialCalendarState = {
    sunday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    monday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    tuesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    wednesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    thursday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    friday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    saturday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
  }
 
  
function calendar(state=initialCalendarState, action) {
    const { day, recipe, meal } = action

    switch (action.type) {
        case ADD_RECIPE:
            return {
                //return copy of previous state
                ...state,
                //modify the specific day
                [day]: {
                    /*state remains as it was for that day
                    except the specific meal*/
                    ...state[day],
                    [meal]: recipe.label
                }
            };
        case REMOVE_FROM_CALENDAR:
            return {
                //return copy of previous state
                ...state,
                //modify the specific day
                [day]: {
                    /*state remains as it was for that day
                    except the specific meal*/
                    ...state[day],
                    [meal]: null
                }
            }
    
        default:
            return state;
    }
}

//combine the reducers so as to export all of them
export default combineReducers({
  calendar,
  food,
})
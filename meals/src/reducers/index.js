import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions'

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
 
  
function calendar(state=intialCalendarState, action) {
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

export default calendar
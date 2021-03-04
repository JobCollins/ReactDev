/* ACTIONS
actions representing two ways that state can be changed in the application:

Adding a new recipe
Removing a food item from the calendar
*/

//create action creators
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe({day, recipe, meal}) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

export function removeFromCalendar({day, meal}) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}
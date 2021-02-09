/* Create An Action Creator
 *
 * You need to create an action creator called 'mealCreator' that should:
 *   - Accept an id
 *   - Return a Redux action with a 'type' property 
 *   - that has a value of 'CREATE_MEAL'
 *   - Include the id passed to the action creator
*/


const mealCreator = id => ({
    type: 'CREATE_MEAL',
    id
});



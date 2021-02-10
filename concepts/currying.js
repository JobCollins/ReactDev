/* Write a Curried Function
 *
 * Create a function called "houseBuilder" that should:
 *   - Accept the number of stories (floors)
 *   - Return a function
 *
 * The returned function should:
 *   - Accept the color of the house
 *   - Return a string in the following format:
 *     "building a <numOfStories>-story, <color> house"
 *
 * Example:
 * const response = houseBuilder(3)('blue');
 * console.log(response); // building a 3-story, blue house
*/


function houseBuilder(floors) {
    return function housePainter(color) {
        return `building a ${floors}-story, ${color} house`
    }
}

const response = houseBuilder(2)("white")


// ES6 Syntax
/*
const response = (floors) => {
    return (color) => {
        return `building a ${floors}-story, ${color} house`
    }
}
 */

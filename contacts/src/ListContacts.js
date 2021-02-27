import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

/*maps over each of the contacts in App.js*/
class ListContacts extends Component{
    //using PropTypes to make sure 
    //we are passing the right data type
    static  propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    // UPDATE OUR STATE 
    updateQuery = (query) => {
        this.setState({
            query: query.trim() //TRIM ANY EXTRA WHITESPACE
        })
    }

    render(){
        let showingContacts
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i') //escape any special character 'i' ignores case
            showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
        }else{
            showingContacts = this.props.contacts
        }

        showingContacts.sort(sortBy('name')) //sort by name only
        //access props object
        //console.log('Props', this.props);
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input 
                    className='search-contacts' 
                    type='text' 
                    placeholder='Search Contacts'
                    value={this.state.query}//value to match whatever the query is
                    onChange={(e) => this.updateQuery(e.target.value)}//WHENEVER THE INPUT CHNANGES INVOKE AN UPDATE passing it the specific value typed in input field
                    />
                </div>
                {/* specify the UI for contacts */}
                <ol className='contact-list'>
                    {/* access each item in the contacts array
                        key argument helps React keep track of changes
                        especially among items.
                    */}
                    {/* filter using the showingContacts array which is the filtered array 
                    for all contacts matching the query*/}
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            {/* {contact.name} */}
                            <div className='contact-avatar' style={{
                                backgroundImage:`url(${contact.avatarURL})`
                            }}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            {/* //invoke the removeContact function in App on click */}
                            <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}


/*USING STATELESS FUNCTIONAL COMPONENT
Use this if all that your component has is a render() method
*/

// function ListContacts(props) {
//     return(
//         <ol className='contact-list'>
//             {/* access each item in the contacts array
//                 key argument helps React keep track of changes
//                 especially among items.
//                 */}
//             {props.contacts.map((contact) => (
//                 <li key={contact.id} className='contact-list-item'>
//                     {/* {contact.name} */}
//                     <div className='contact-avatar' style={{
//                         backgroundImage:`url(${contact.avatarURL})`
//                     }}/>
//                     <div className='contact-details'>
//                         <p>{contact.name}</p>
//                         <p>{contact.email}</p>
//                     </div>
//                     <button className='contact-remove'>
//                         Remove
//                     </button>
//                 </li>
//             ))}
//         </ol>
//     )
// }

export default ListContacts
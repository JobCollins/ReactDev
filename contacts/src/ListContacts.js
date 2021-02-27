import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*maps over each of the contacts in App.js*/
class ListContacts extends Component{
    render(){
        //access props object
        //console.log('Props', this.props);
        return (
            //specify the UI for contacts
            <ol className='contact-list'>
                {/* access each item in the contacts array
                    key argument helps React keep track of changes
                    especially among items.
                 */}
                {this.props.contacts.map((contact) => (
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
        )
    }
}
//using PropTypes to make sure 
//we are passing the right data type
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
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
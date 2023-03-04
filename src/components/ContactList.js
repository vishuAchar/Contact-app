import React from 'react'
import ContactCard from './ContactCard';

const ContactList=()=> {
    const contacts= []

    console.log();
    const renderContact = contacts.map((contact)=>{
        return(
        
           <ContactCard contacts = {contact}/>

        )

    })
    
        
  return (
    <div>
        <h2 className='contactDetails'>Contact Details</h2>
        {renderContact}
    </div>
  )
}

export default ContactList

import React from 'react'

const ContactCard=(props)=> {
    const {id,name,email} = props.contacts;
 return (
    <div className="card-box">
        <div className="row">
            <div className="col">
            <div className="card">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
            </div>
            </div>
            <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
    </div>

    

 )
}

export default ContactCard

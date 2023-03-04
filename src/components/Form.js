import React, { useState } from 'react'

const Form=()=>{
  const [userReg,setUserReg] = useState({
    name:"",
    email:"",
    phone:"",
  })   

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserReg({...userReg, [name] : value })
    console.log(userReg)
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault()

  }

  return (
    <div>
     <div className="App">
      <h1 className='heading'>Contact directory</h1>
      <form onSubmit={onSubmitHandler}>
        <h2 >Add Contact</h2>
        <div className="mb-3">
            <input type="text" 
            className="form-control" 
            name='name' 
            placeholder='Name'
            onChange={onChangeHandler}
            value={userReg.name} />
        </div>
        <div className="mb-3">
            <input type="email" 
            className="form-control" 
            name='email' 
            placeholder='Email'
            onChange={onChangeHandler}
            value={userReg.email}/>
        </div>
        <div className="mb-3">
            <input type="number" 
            className="form-control" 
            name='phone' 
            placeholder='phoneNumber'
            onChange={onChangeHandler}
            value={userReg.phone}/>
        </div>
        <button type="submit" className="btn btn-primary" >Add</button>
      </form>
     </div>
      
    </div>
  )
}


export default Form

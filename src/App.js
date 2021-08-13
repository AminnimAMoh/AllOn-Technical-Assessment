import React, {useState} from 'react'

import logo from './logo.svg';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formState, setFormState]=useState({})
  const [formError, setFormError]=useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleFormChange=(e)=>{
    e.persist();
    setFormState((preVal)=>({
      ...preVal,
      [e.target.name]: e.target.value
    }))
  }
  
  const handleFormSubmitAction=(e)=>{
    e.preventDefault();
    const firstName=/\d/.test(formState.firstName);
    firstName ?  setFormError((preVal)=>({...preVal, firstName: 'First name can only contains alphabets.'})) : setFormError((preVal)=>({...preVal, firstName: ''}))

    const lastName=/\d/.test(formState.firstName);
    lastName ? setFormError((preVal)=>({...preVal, lastName: 'Last name can only contains alphabets.'})) : setFormError((preVal)=>({...preVal, lastName: ''}))

    const format=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const password=format.test(formState.password);
    password ? setFormError((preVal)=>({...preVal, password: 'Only capital or normal letters and numbers accepted.'})) : setFormError((preVal)=>({...preVal, password: ''}))
  }
  return (
    <div className="App" style={{height: '100vh'}}>
<div className='container border'>
<div className="bg-dark text-white text-center p-2 heading">Reguster here</div>

     <form className="p-5" onSubmit={(e)=>handleFormSubmitAction(e)}>
       <row className="row pt-5">
     <div className="form-group col-md-6">
    <label className="">First Name</label>
    <input type="text" name="firstName" className="form-control" id="FirstNAme" onChange={(e)=>handleFormChange(e)}/>
    {formError.firstName!=="" && <p className="text-danger">{formError.firstName}</p>}
  </div>

  <div className="form-group col-md-6">
    <label>Last Name</label>
    <input type="text" name="lastName"className="form-control" id="LastName"  onChange={(e)=>handleFormChange(e)}/>
    {formError.lastName!=="" && <p className="text-danger">{formError.lastName}</p>}
  </div>

  <div className="form-group col-md-6">
    <label>Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>handleFormChange(e)}/>
  </div>

  <div className="form-group col-md-6">
    <label>Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   onChange={(e)=>handleFormChange(e)}/>
    {formError.password!=="" && <p className="text-danger">{formError.password}</p>}
  </div>

  <button type="submit" className="btn btn-primary col-md-12 mt-5">Submit</button>

  <p className="mt-4">You accept our <span className='text-success'>Terms and conditions</span></p>
  </row>
</form>
</div>
    </div>
  );
}

export default App;

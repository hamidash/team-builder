import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import membersData from './data';

function Form(props) {



   const [newMember, setNewMember] = useState({id:"", name:"", role:"", email:"", quote:""})

   function changeHandler(event) {
       setNewMember({...newMember, [event.target.name]: event.target.value})
   }

   function submitHandler(event) {
    event.preventDefault();
    props.addNewMember(newMember);
    setNewMember({id:"", name:"", role:"", email:"", quote:""});
    console.log(props.members);
   }

    return(
        <div className="form">
            <form action="" className="form" onSubmit={submitHandler}>
                
                <div className="inputs">
                    <label>
                        <p>Id </p> 
                        <input type="text" id='member-id' name="id" value={newMember.id} onChange={changeHandler}/>
                    </label>
                    <label>
                        <p>Full Name </p>   
                        <input type="text" id='member-name' name="name" value={newMember.name} onChange={changeHandler}/>
                    </label>
                    <label>
                        <p>Email </p>    
                        <input type="text" id='member-email' name="email" value={newMember.email} onChange={changeHandler}/>
                    </label>
                    <label>
                        <p>Role  </p>  
                        <input type="text" id='member-role' name="role" value={newMember.role} onChange={changeHandler}/>
                    </label>
                    <label className="quote">
                        <p>Quote  </p>
                        <input type="text" id='member-quote' name="quote" value={newMember.quote} onChange={changeHandler}/>
                    </label>
                </div>
                
                <Link to="/">
                    <button className="form-button"> Submit Form</button>
                </Link>
                
            </form>
        </div>
    )
}

export default Form;
import React, {useState, useEffect} from 'react';
import './App.css';
import membersData from './components/data';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Form from './components/Form';

function App() {
  const[members, setMembers] = useState(membersData);
  
  const addNewMember =  (member) => {

    const newMember = {
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role,
      quote: member.quote
    }

    setMembers([...members, newMember]);
  }

  console.log(members);

  return (

    

     <Router>

        <Switch>

          <Route exact path = '/'> 
            <div className="App">
                  <header className="title"> 
                        <h1>TEAM MEMBERS</h1>
                        <Link to="/newmemberform">
                          <button className="button" type="submit">Add New Member</button>
                        </Link>
                  </header>

                  {members.map(member => {
                    return(
                      <div className="members">
                        <h3>Name: {member.name} </h3>
                        <p>Email: {member.email} </p>
                        <p>Role: {member.role} </p>
                        <p>Quote: {member.quote} </p>
                      </div>
                        ) 
                      })}   
              </div>
          </Route>

           <Route path="/newmemberform" > 
            <Form addNewMember = {addNewMember} members={members}/>
          </Route>  

      </Switch>

  </Router>

  );
}

export default App;

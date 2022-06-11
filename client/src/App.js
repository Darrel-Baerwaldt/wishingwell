import React, {useEffect, useState} from 'react';
import axios from "axios"

import './App.css';
import Login from './components/Login'

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    // getUsers()
    addUsers()
  }, [])

  // const getUsers = async () => {
  //   let response = await axios.get("/users")
    
  //   console.log(response)
  // };

  const addUsers = async () => {
    const newUser = {
      fName: "Eliza",
      lName: "lastName",
      username: "username",
      email: "ELIZAZIP",
      zipcode: 95020,
      password: "hash",
    };
    await axios.post("/users/register", newUser)
    .then(res => console.log(res))
    
    // console.log(response)
  };
  return (
    <div className="App">
      <h1>Welcome to the Wishing Well!</h1>
      <h3>Please login below to access the mood wall</h3>
      <Login />
    </div>
  );
}

export default App;

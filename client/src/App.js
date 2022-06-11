import React, {useEffect} from 'react';
import axios from "axios"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login'
import MoodWall from './components/MoodWall'
import Register from './components/Register'
import Inspired from './components/Inspired'

function App() {
  // const [user, setUser] = useState("")

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
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/users/register" element={<Register />}/>
          <Route path="/moodwall" element={<MoodWall />}/>
          <Route path="/moodwall/inspired" element={<Inspired/>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

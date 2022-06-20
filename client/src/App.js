import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import MoodWall from "./components/MoodWall";
import Register from "./components/Register";
import Adventurous from "./components/Adventurous";
import Angry from "./components/Angry";
import Happy from "./components/happy/Happy";
// import Inspired from "./components/Inspired";
import Party from "./components/Party";
import Sad from "./components/Sad";
import Sleepy from "./components/Sleepy";
import Stressed from "./components/Stressed";
import Bored from "./components/Bored";
import Zen from "./components/Zen";

function App() {
  // const {userId} = useParams()
  return (
    <div className="App">
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/moodwall" element={<MoodWall />} />
            <Route path="/adventurous" element={<Adventurous />} />
            <Route path="/angry" element={<Angry />} />
            <Route path="/bored" element={<Bored />} />
            <Route path="/happy" element={<Happy />} />
            {/* <Route path="/inspired" element={<Inspired />} /> */}
            <Route path="/party" element={<Party />} />
            <Route path="/sad" element={<Sad />} />
            <Route path="/sleepy" element={<Sleepy />} />
            <Route path="/stressed" element={<Stressed />} />
            <Route path="/zen" element={<Zen />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

// import React from 'react'
// import { useState } from 'react'
import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
// import EmptyKey from './EmptyKey';
// import FilledKey from './FilledKey';
import { useNavigate, NavLink } from "react-router-dom";

export default function Key() {
  const navigate = useNavigate();
  // const userId = useParams()

  const stressed = () => {
    navigate("/stressed");
  };

  return (
    <Container component="main" maxWidth="md">
        <CssBaseline />
      <h1>Welcome to the Mood Wall</h1>
      <h3>Here you can select your current mood to access mood enhancers!</h3>
      <hr />
      <br />
      <div>

        <Tooltip title="Happy">
          <NavLink to="/happy">
            <Button className="happyBtn" fontSize="large">
              {<SentimentSatisfiedOutlinedIcon style={{ fontSize: 70 }}/>}{" "}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Bored">
          <NavLink to="/bored">
            <Button className="lowConfidenceBtn">
              {<SentimentNeutralOutlinedIcon style={{ fontSize: 70 }}/>}
            </Button>
          </NavLink>
        </Tooltip>
      
        <Tooltip title="Sad">
          <NavLink to="/sad">
            <Button className="sadBtn">
              {<SentimentDissatisfiedOutlinedIcon style={{ fontSize: 70 }}/>}
            </Button>
          </NavLink>
        </Tooltip>
        <br />
        <Tooltip title="Sleepy">
          <NavLink to="/sleepy">
            <Button className="sleepyBtn">{<HotelOutlinedIcon style={{ fontSize: 70 }} />}</Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Stressed">
          <NavLink to="/stressed">
            <Button className="stressBtn" onClick={stressed}>
              {<SelfImprovementOutlinedIcon style={{ fontSize: 70 }} />}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Adventurous">
          <NavLink to="/adventurous">
            <Button className="adventureBtn" >{<HikingOutlinedIcon style={{ fontSize: 70 }}/>}</Button>
          </NavLink>
        </Tooltip>
        <br />
        <Tooltip title="Inspired">
          <NavLink to="/inspired">
            <Button className="studyBtn" id="inspired">
              {<MenuBookOutlinedIcon style={{ fontSize: 70 }}/>}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Party">
          <NavLink to="/party">
            <Button className="partyBtn">{<CelebrationOutlinedIcon style={{ fontSize: 70 }} />}</Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Angry">
          <NavLink to="/angry">
            <Button className="madBtn">
              {<LocalFireDepartmentOutlinedIcon style={{ fontSize: 70 }} />}
            </Button>
          </NavLink>
        </Tooltip>
      </div>
    </Container >
  );
}

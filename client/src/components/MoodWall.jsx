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
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
// import EmptyKey from './EmptyKey';
// import FilledKey from './FilledKey';
import { useNavigate, NavLink } from "react-router-dom";

export default function Key() {
  const navigate = useNavigate();

  const stressed = () => {
    navigate("/stressed");
  };

  // const [isShown, setIsShown] = useState(false);
  // const popcorn = document.querySelector('#popcorn');
  // const tooltip = document.querySelector('#tooltip');
  // createPopper(popcorn, tooltip);

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
              {<SentimentSatisfiedOutlinedIcon />}{" "}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Sad">
          <NavLink to="/sad">
            <Button className="sadBtn">
              {<SentimentDissatisfiedOutlinedIcon />}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Sleepy">
          <NavLink to="/sleepy">
            <Button className="sleepyBtn">{<HotelOutlinedIcon />}</Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Party">
          <NavLink to="/party">
            <Button className="partyBtn">{<CelebrationOutlinedIcon />}</Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Zen">
          <NavLink to="/zen">
            <Button className="zenBtn">
              {<SelfImprovementOutlinedIcon />}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Adventurous">
          <NavLink to="/adventurous">
            <Button className="adventureBtn">{<HikingOutlinedIcon />}</Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Stressed">
          <NavLink to="/stressed">
            <Button className="stressBtn" onClick={stressed}>
              {<DirectionsRunOutlinedIcon />}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Inspired">
          <NavLink to="/inspired">
            <Button className="studyBtn" id="inspired">
              {<MenuBookOutlinedIcon />}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Bored">
          <NavLink to="/bored">
            <Button className="lowConfidenceBtn">
              {<SentimentNeutralOutlinedIcon />}
            </Button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Angry">
          <NavLink to="/angry">
            <Button className="madBtn">
              {<LocalFireDepartmentOutlinedIcon />}
            </Button>
          </NavLink>
        </Tooltip>
      </div>
    </Container >
  );
}

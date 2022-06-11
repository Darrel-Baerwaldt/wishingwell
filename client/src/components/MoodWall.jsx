// import React from 'react'
// import { useState } from 'react'
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip"
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
// import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
// import EmptyKey from './EmptyKey';
// import FilledKey from './FilledKey';


export default function Key() { 

  // const [isShown, setIsShown] = useState(false);
  // const popcorn = document.querySelector('#popcorn');
  // const tooltip = document.querySelector('#tooltip');
// createPopper(popcorn, tooltip);

  return (
    <>
    <h1>Welcome to the Mood Wall</h1>
    <h3>Here you can select your current mood to access mood enhancers!</h3>
    <hr />
    <br />
     <div>
        
    <Tooltip title="Happy">
     <Button color="success" fontSize="large">{<SentimentSatisfiedOutlinedIcon />} </Button >
     </Tooltip>
     
     <Tooltip title="Sad">
     <Button className="sadBtn">{<SentimentDissatisfiedOutlinedIcon />}</Button>
     </Tooltip>
     
     <Tooltip title="Sleepy">
     <Button className="sleepyBtn">{<HotelOutlinedIcon />}</Button>
     </Tooltip>
     </div>
     <br />
     
     <div>
     <Tooltip title="Party">
     <Button className="partyBtn">{<CelebrationOutlinedIcon />}</Button>
     </Tooltip>
     
     <Tooltip title="Zen">
     <Button className="zenBtn">{<SelfImprovementOutlinedIcon />}</Button>
     </Tooltip>
     
     <Tooltip title="Adventurous">
     <Button className="adventureBtn">{<HikingOutlinedIcon />}</Button>
     </Tooltip>
     </div>
     <br />

     <div>
     <Tooltip title="Stressed">
     <Button className="stressBtn">{<DirectionsRunOutlinedIcon />}</Button>
     </Tooltip>
     
     <Tooltip title="Inspired">
     <Button className="studyBtn">{<MenuBookOutlinedIcon />}</Button>
     </Tooltip>
     
     <Tooltip title="Uninspired">
     <Button className="lowConfidenceBtn">{<SentimentNeutralOutlinedIcon />}</Button>
     </Tooltip>
     </div>
        
     {/* <Tooltip title="Angry">
     <Button className="madBtn">{<LocalFireDepartmentOutlinedIcon />}</Button>
     </Tooltip> */}
    
     {/* </div> */}
     </>

     
   
  )
}



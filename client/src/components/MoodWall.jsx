// import React from 'react'
// import { useState } from 'react'
import Button from "@mui/material/Button";
// import Sounds from './Sounds'
// import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
// import EmptyKey from './EmptyKey';
// import FilledKey from './FilledKey';


export default function Key() { 

  return (
     <>
     <div>
        
     <Button className="happyBtn">{<SentimentSatisfiedOutlinedIcon />}</Button>
     
     
     <Button className="sadBtn">{<SentimentDissatisfiedOutlinedIcon />}</Button>
     
     
     <Button className="sleepyBtn">{<HotelOutlinedIcon />}</Button>
     
     
     <Button className="partyBtn">{<CelebrationOutlinedIcon />}</Button>
     
     
     <Button className="zenBtn">{<SelfImprovementOutlinedIcon />}</Button>
     
     
     <Button className="adventureBtn">{<HikingOutlinedIcon />}</Button>
     
     
     <Button className="stressBtn">{<DirectionsRunOutlinedIcon />}</Button>
     
     
     <Button className="studyBtn">{<MenuBookOutlinedIcon />}</Button>
     
     
     <Button className="lowConfidenceBtn">{<SentimentNeutralOutlinedIcon />}</Button>
        
     
     <Button className="madBtn">{<LocalFireDepartmentOutlinedIcon />}</Button>
    
     </div>
     </>

     
   
  )
}



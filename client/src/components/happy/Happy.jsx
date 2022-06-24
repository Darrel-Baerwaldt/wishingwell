import HappyAlbum from './HappyAlbum'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Happy() {
  const [selfies, setSelfies] = useState([])
  useEffect(() => {
    axios.get("/happy").then(res => setSelfies(res.data)).catch(error => console.log(error))
  })
 
    return (
      <div>
          <HappyAlbum selfies={selfies}/>
      </div>
    )
  }
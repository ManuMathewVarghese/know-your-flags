import { useState, useEffect } from "react";
import {getRandomFlags, Flag} from './Flag.jsx'
import './App.css'




function App(){
  const [best, setBest] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState([])
  let flag_list = getRandomFlags(8);
  
  const imageOnClick = (e) => {
    let cur_flag = e.target.name;
    if(selected.includes(cur_flag)){
      if(score > best){
        setBest(score);
      }
      setScore(0)
      setSelected([])
    } else {
      setSelected([...selected, e.target.name])
      setScore(score+1)
    }
    
  }

  
  return (
    <>
      <div className="header">
        <h1>Know Your Flags</h1>
        <div className="stats">
          <p><strong>Best Score:</strong> {best} </p>
          <p><strong>Score:</strong>{score}</p>
          {(score && selected) ? <img className="thumbs" src="thumbs-up.svg" alt="" /> : null}
        </div>
      </div>
      <div className="main">
        {flag_list.map((name)=><Flag key={name} name={name} clickFn={imageOnClick}/>)}      
      </div>
    </>
  )
}

export default App;
import React from "react";
import "../styles/App.css"
import Pads from "./Pads";
import { useState } from "react";


export const bank1 = {
  '1':'1',
  '2': '3',
  '3':'3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9'
}


function ControlScreen({setinput }) {
  return (
    <div id='control-screen'>
      <form id='label-volume'>
        <input data-id='input-color' type='text'  placeholder='#FFFFFFF' /> 
        <button type="submit " id="submit" >Color Me</button>
      </form>
      
    </div> 
  )
}

function App() {
  const [input , setinput] = useState('#FFFFFF');
  return (
    <div id='color-machine'>
      <Pads color={input}/>
      <ControlScreen setinput={setinput} />
    </div>
  );
}

export default App; 

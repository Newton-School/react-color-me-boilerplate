import React, { useEffect, useState, useRef } from "react";
import Pad from "./Pad";
import {bank1} from "./App"


function Pads({color}) {
    const keypadCode = Object.keys(bank1); 
   
    return (
      <div id='div-pads'>
        {keypadCode.map((pad, idx) => {
          return (
            <Pad
             
              id={pad}
              element={pad} />
          );
        })}
      </div>
    )
  }

  export default Pads ; 
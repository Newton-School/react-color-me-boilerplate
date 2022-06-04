import React , {useState} from "react";
import {bank1} from "./App"

function Pad({ element, id }) {

    return (
      <button 
        data-tag={id}
        type='button'
        className='color-pad'  >
        {element}
      </button>
    );
  }
  
  export default Pad ; 
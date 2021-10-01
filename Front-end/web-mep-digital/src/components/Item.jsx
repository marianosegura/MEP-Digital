import React from 'react'
import { Button } from '@mui/material'

export default function Item(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.onChange(props.id)
        console.log("I have to change all for " + props.id)
    }
    return (
      <Button variant="text" onClick={handleClick} className="itemButton">
        <p className = 'textItem'>{props.name}</p>
        {props.id !== "0"
        ?
          <p className = 'textItem'>Id: {props.id}</p>
        :
          <p>Click aquí</p>
        }
        
      </Button>
    );
}

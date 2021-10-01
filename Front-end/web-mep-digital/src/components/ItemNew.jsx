import { Button } from '@mui/material'
import React from 'react'

export default function ItemNew(props) {
    return (
        <div>
            <Button 
            variant="text" 
            className = 'itemButton'
            onChange= {props.onChange("makeNEW")}
            >
                <p className = 'textItem'>Nuevo {props.text}</p>
                <p className = 'textItem'>Click aquí</p>
            </Button>
        </div>
    )
}

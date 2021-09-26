import React from 'react'

export default function Item(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.onChange(props.id)
        console.log("I have to change all for " + props.id)
    }
    return (
      <button onClick={handleClick} className="item">
        <p>{props.name}</p>
        <p>Id: {props.id}</p>
      </button>
    );
}

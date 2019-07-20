import React from "react";
import "./Card.css"

export const Card = (props) => {
    return( 
        <div className="animalCard">
            <img src={props.img} alt=""/>
            <h1> {props.animalName} </h1>
            <p> {props.animalDetail} </p>
            <button> {props.animalName} </button>
        </div>
    )
}


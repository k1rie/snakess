import React from "react";
import "./card.css"

function Card(props){
    return(
<a href={props.link} className="cardredirect">
<div className="card">
    <p className="card__title">{props.title}</p>
    <div className="card__main">
        <div className="card__info">
<p className="card__price">${props.price}</p>
<p className="card__marketvalue">${props.marketvalue}</p>
        </div>
<img className="card__sneakers" src={props.sneakers}/>
<p>{props.marca}</p>
    </div>
</div>
</a>
    )
}

export default Card
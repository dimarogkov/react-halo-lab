import React from "react";
import classes from "./Card.module.css";

const Card = props => (
    <div className={classes.cardItem}>
        <div className={classes.category}>{props.card.category}</div>
        <div className={classes.name}>{props.card.name}</div>
        <div className={classes.bottom}>
            <div className={classes.price}>
                <span>$</span> {props.card.price}
            </div>
            <button onClick={() => props.onPopupOpen(props.card)}>Buy</button>
        </div>
    </div>
);

export default Card;

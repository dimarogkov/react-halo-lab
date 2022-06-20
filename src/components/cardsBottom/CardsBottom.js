import React from "react";
import classes from "./CardsBottom.module.css";

const CardsBottom = props => (
    <div className={classes.cardsBottom}>
        <button className="active size-2" onClick={props.openCheapestCard}>cheapest</button>
    </div>
)

export default CardsBottom;

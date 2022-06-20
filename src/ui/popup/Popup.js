import React from "react";
import classes from "./Popup.module.css";
import useForm from "../../hooks/useForm";

const Popup = props => {

    const {onInputChange, onSubmit, errors} = useForm();

    return(
        <div className={classes.popup}>

            <div className={classes.popupLayer}></div>

            <div className={classes.popupContainer}>
                <div className={classes.layerClose} onClick={props.onPopupClose}></div>

                <div className={classes.popupBlock}>
                    <div className={classes.popupClose} onClick={props.onPopupClose}>
                        <i className="las la-times"></i>
                    </div>

                    <div className={classes.popupCont}>
                        <div className={classes.category}>{props.card.category}</div>
                        <div className={classes.name}>{props.card.name}</div>
                        <div className={classes.price}>
                            <span>$</span>
                            {props.card.price}
                        </div>
                    </div>

                    <form onSubmit={onSubmit}>
                        <div className={classes.form}>
                            <div className={classes.inputBlock}>
                                <input
                                    className={
                                        errors.nameRequired || errors.lettersOnly
                                            ? classes.invalid
                                            : null
                                    }
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={event => onInputChange(event)}
                                    required />
                                { errors.nameRequired && <p>{errors.nameRequired}</p> }
                                { errors.lettersOnly && <p>{errors.lettersOnly}</p> }
                            </div>
                            <div className={classes.inputBlock}>
                                <input
                                    className={
                                        errors.numberRequired && errors.numberLength && errors.numberOnly
                                            ? classes.invalid
                                            : null
                                    }
                                    type="text"
                                    name="number"
                                    placeholder="Number"
                                    onChange={event => onInputChange(event)}
                                    required />
                                { errors.numberRequired && <p>{errors.numberRequired}</p> }
                                { errors.numberLength && <p>{errors.numberLength}</p> }
                                { errors.numberOnly && <p>{errors.numberOnly}</p> }
                            </div>
                        </div>

                        <button type="submit" className="active size-3 with-arrow">
                            <span>Order <i className="arrow"></i></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Popup;

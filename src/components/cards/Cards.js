import React, {useEffect, useState} from "react";
import classes from './Cards.module.css';
import axios from "axios";
import Card from "../card/Card";
import Popup from "../../ui/popup/Popup";
import CardsBottom from "../cardsBottom/CardsBottom";

const Cards = () => {
    const [cards, cardsSet] = useState([]);
    const [isPopupOpen, isPopupOpenSet] = useState(false);
    const [cardInPopup, cardInPopupSet] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e");
                cardsSet(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [cardsSet]);

    const onPopupOpen = card => {
        document.body.classList.add('lock');
        isPopupOpenSet(true);
        cardInPopupSet(card);
    }

    const onPopupClose = () => {
        document.body.classList.remove('lock');
        isPopupOpenSet(false);
        cardInPopupSet({});
    }

    const openCheapestCard = () => {
        const cheapestCard = cards.reduce((acc, curr) => acc.price < curr.price ? acc : curr);
        document.body.classList.add('lock');
        isPopupOpenSet(true);
        cardInPopupSet(cheapestCard);
    }

    return(
        <>
            { isPopupOpen
                ? <Popup card={cardInPopup}
                         isPopupOpen={isPopupOpen}
                         onPopupClose={onPopupClose} />
                : null
            }

            <div className={classes.cards}>
                <div className={classes.cardsBlock}>
                    {
                        cards.map((card, index) => (
                            <Card
                                key={index}
                                card={card}
                                onPopupOpen={onPopupOpen} />
                        ))
                    }
                </div>

                <CardsBottom openCheapestCard={openCheapestCard} />
            </div>
        </>
    )
}

export default Cards;

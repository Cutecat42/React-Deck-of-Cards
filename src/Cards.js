import React, {useEffect} from 'react';
import axios from 'axios';
import Card from "./Card"

const Cards = () => {
    const drawCard = () => {

    }

    useEffect(()=> {
        async function getDeck() {
            const deck = await axios.get('https://deckofcardsapi.com/api/deck/new/');
            console.log(deck)
        }
        getDeck()
    },[])

    return (
        <div>
            <button onClick={drawCard}>Draw a card!</button>
            <Card />
        </div>
    )
}

export default Cards;
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import Card from "./Card"

const Cards = () => {
    const [card,setCard] = useState('');
    const [deck,setDeck] = useState('');


    async function drawCard() {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`);
        setCard(`${res.data.cards[0].suit} ${res.data.cards[0].value}`)
        console.log(res.data.remaining)
    }

    useEffect(()=> {
        async function getDeck() {
            const unshuffledDeck = await axios.get('https://deckofcardsapi.com/api/deck/new/');
            const newDeck = await axios.get(`https://deckofcardsapi.com/api/deck/${unshuffledDeck.data.deck_id}/shuffle/`);
            setDeck(newDeck)
        }
        getDeck()
    },[])

    return (
        <div>
            <button onClick={drawCard}>Draw a card!</button>
            <Card card={card}/>
        </div>
    )
}

export default Cards;
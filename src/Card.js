import React from 'react';

const Card = ({card}) => {
    return (
        <div>
            {card ? card : ''}
        </div>
    )
}

export default Card;
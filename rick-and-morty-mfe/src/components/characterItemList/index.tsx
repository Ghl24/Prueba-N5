import React from 'react';
import { CardFront } from './Card/CardFront';
import { CardBack } from './Card/CardBack';
import { useState } from 'react';
import { CardStyle } from './styles';

export const Card = ({ characterinfo }: any) => {
    const [hover, setHover] = useState(false);

    const { image, ...info } = characterinfo;
    console.log(info)
    return (
        <CardStyle className={`card__container character-rick`}>
            {!hover ? (
                <CardFront className="card__container-img" hover={hover} setHover={setHover} characterimage={image} />
            ) : (
                <CardBack setHover={setHover} characterInfo={info} />
            )}
        </CardStyle>
    );
};

export default Card;

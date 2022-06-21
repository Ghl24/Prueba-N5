/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

 import { CardFront } from "././Card/CardFront";
 import { CardBack } from "././Card/CardBack";
 import { useState } from "react";
 import { CardStyle } from "./styles";
 
 export const Card = ({ characterinfo }) => {
   const [hover, setHover] = useState(false);
 
   const { image, ...info } = characterinfo;
   return (
     <CardStyle className={`card__container`}>
       {!hover ? (
         <CardFront
           className="card__container-img"
           hover={hover}
           setHover={setHover}
           characterimage={image}
         />
       ) : (
         <CardBack setHover={setHover} characterInfo={info} />
       )}
     </CardStyle>
   );
 };
 
 export default Card;
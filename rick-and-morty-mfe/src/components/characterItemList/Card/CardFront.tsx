import React from 'react';

export const CardFront = (props: any) => {
    const handleClick = () => props.setHover((prev: any) => !prev);
    return (
        <>
            <img className={props.className} src={props.characterimage} alt="character_image" onClick={handleClick} />
            <button
                style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: 10,
                    width: '100%',
                    background: 'transparent',
                    color: 'white',
                    borderColor: 'white',
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: 0,
                    cursor: 'pointer',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={handleClick}
            >
                detalles
            </button>
        </>
    );
};

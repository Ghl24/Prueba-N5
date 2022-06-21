import React from 'react';
import { useTranslation } from 'react-i18next';

export const CardBack = ({ characterInfo, setHover }: any) => {
    const { t } = useTranslation();

    return (
        <div onClick={() => setHover((prev: any) => !prev)} className="container__backcard">
            <h1 className="container__backcard-list">
                {t('character.name')}: {characterInfo.name}
            </h1>
            <h1 className="container__backcard-list">{characterInfo.status}</h1>
            <h1 className="container__backcard-list">{characterInfo.species}</h1>
            <h1 className="container__backcard-list">{characterInfo.gender}</h1>
            <h1 className="container__backcard-list">{characterInfo.origin.name}</h1>
            <h1 className="container__backcard-list">{characterInfo.location.name}</h1>
            <button className="container__backcard-btn">volver</button>
        </div>
    );
};

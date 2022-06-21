import { useState } from 'react';
import useFetch from 'use-http';
import { API_URL } from '../util/constants';
import { Character, SimpleCharacter } from '../domain/model/Character';
import listCharacters from '../mocks/list';
import { transformCharacterDtoToModel, transformListCharacterDtoToModel } from '../factories/config-factory';

export const useCharacter = () => {
    const [character, setCharacter] = useState<Character>();
    const [listCharacter, setListCharacter] = useState<SimpleCharacter[]>([]);
    const { get, response } = useFetch(API_URL);

    async function getCharacter(id: string) {
        const data = await get(`/character/${id}`);
        if (response.ok) setCharacter(transformCharacterDtoToModel(data));
    }

    async function getListCharacter() {
        // const data = await get('/character');
        const data = listCharacters;
        // if (response.ok) setListCharacter(transformListCharacterDtoToModel(data.results));
        setListCharacter(transformListCharacterDtoToModel(data.results));
    }

    return {
        character,
        listCharacter,
        getCharacter,
        getListCharacter,
    };
};

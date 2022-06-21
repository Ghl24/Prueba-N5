import { useState } from 'react';
import useFetch from 'use-http';
import { API_URL } from '../util/constants';
import { Pokemon } from '../domain/model/Pokemon';
import PokemonMock from '../mock/list-pokemon';
import { transformListPokemonDtoToModel } from '../factories/config-factory';

export const usePokemon = () => {
    const [listPokemon, setListCharacter] = useState<Pokemon[]>([]);
    const { get, response } = useFetch(API_URL);

    async function getListPokemon() {
        const list: Pokemon[] = [];
        console.log(PokemonMock);
        for (let i = 1; i <= 20; i++) {
            let data;
            if (true) {
                data = PokemonMock[i - 1];
                console.log('dataaa', data);
                const transformed = transformListPokemonDtoToModel(data);
                list.push(transformed);
            } else {
                data = await get(`/v2/pokemon/${i}`);
                if (response.ok) list.push(transformListPokemonDtoToModel(data));
            }
        }
        console.log(list);
        setListCharacter(list);
    }

    return {
        listPokemon,
        getListPokemon,
    };
};

import { Pokemon, PokemonAPI } from '../domain/model/Pokemon';

export const transformListPokemonDtoToModel = (pokemon: PokemonAPI): Pokemon => {
    const typeList: { name: string }[] = [];
    pokemon.types.forEach((type) => {
        console.log(type.type.name, 'TYPE');
        typeList.push({ name: type?.type?.name || 'fire' });
    });
    console.log(typeList, 'typeList');
    return {
        id: pokemon.id,
        name: pokemon.name,
        baseExperience: pokemon.base_experience,
        height: pokemon.height,
        order: pokemon.order,
        weight: pokemon.weight,
        frontDefault: pokemon.sprites.front_default,
        types: typeList,
    };
};

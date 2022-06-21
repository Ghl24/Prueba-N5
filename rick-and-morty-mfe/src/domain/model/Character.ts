export interface Character {
    name: string;
    status: string;
    species: string;
    image: string;
    created: string;
    gender: string;
    id: number;
    location: LocationCharacter;
    origin: OriginCharacter;
    type: string;
    url: string;
}

export interface SimpleCharacter {
    name: string;
    status: string;
    species: string;
    image: string;
    gender: string;
    location: LocationCharacter;
    created: string;
    origin: OriginCharacter;
}

interface LocationCharacter {
    name: string;
    url: string;
}
interface OriginCharacter {
    name: string;
    url: string;
}

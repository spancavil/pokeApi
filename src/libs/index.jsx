export const fetchingAll = async (limit) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    const data = await res.json();
    return (data.results);
}

export const fetchSingle = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    return ({
            id: data.name,
            abilities: data.abilities,
            img: data.sprites.front_default,
            weigth: data.weight,
            type: data.types[0].type.name
        });
}
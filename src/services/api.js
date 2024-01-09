import axios from 'axios';

const fetchPokemonData = async (numberOfPokemon) => {
  try {
    const randomIds = Array.from({ length: numberOfPokemon }, () =>
      Math.floor(Math.random() * 898) + 1
    );

    const promises = randomIds.map(async (pokemonId) => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const { name, sprites } = response.data;

      return {
        id: pokemonId,
        name,
        imageUrl: sprites.front_default,
      };
    });

    const fetchedPokemonData = await Promise.all(promises);
    return fetchedPokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

export default fetchPokemonData;

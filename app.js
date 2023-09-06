// Obtén referencias a los elementos HTML
const pokemonNameInput = document.getElementById('pokemonName');
const searchButton = document.getElementById('searchButton');
const pokemonImage = document.getElementById('pokemonImage');

// Agrega un evento de clic al botón de búsqueda
searchButton.addEventListener('click', () => {
    const pokemonName = pokemonNameInput.value.toLowerCase();
    getPokemonImage(pokemonName);
});

// Función para obtener la imagen del Pokémon
function getPokemonImage(pokemonName) {
    // URL de la PokeAPI
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    // Realiza una solicitud GET a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            return response.json();
        })
        .then(data => {
            // Obtiene la URL de la imagen del Pokémon
            const imageUrl = data.sprites.front_default;

            // Crea una imagen y muestra en el elemento HTML
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            pokemonImage.innerHTML = '';
            pokemonImage.appendChild(imageElement);
        })
        .catch(error => {
            console.error('Error:', error);
            pokemonImage.innerHTML = 'Pokémon no encontrado';
        });
}

window.onload = function () {

  let url = 'https://pokeapi.co/api/v2/pokemon/1';
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('image').src = data.sprites.back_default;
    });

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="${name}" />
        </div>
        <div class="info">
            
        </div>
    `;
    document.getElementById('abc').innerHTML = pokeInnerHTML;
};






//https://pokeapi.co/api/v2/pokemon
window.onload = function () {

  //höchster index ist 898
  let url = 'https://pokeapi.co/api/v2/pokemon/';
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      readObject(data);
    });
    document.getElementById('abc').innerHTML = pokeInnerHTML;
};

function readObject(data){
  let row = '';
  let index = 1;
  data.results.forEach((character) => {
    row += buildTableEntry(character, index); 
    index++;
  });
  document.querySelector('#img_test').innerHTML = row;
}


function buildTableEntry(character, index) {
  console.log("it works")
  return (img = `
  <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png" alt="${name}" height="200" width="200"/>
      <p>${character.name}</p>
  </div>
`);
};
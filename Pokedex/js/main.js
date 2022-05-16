window.onload = function() {

  //https://pokeapi.co/api/v2/pokemon/
  //hÃ¶chster index = 898
  let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9';
  //let url = 'https://pokeapi.co/api/v2/pokemon/2';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      readObject(data);
    });
};

async function readObject(data){
  let row = '';
  let index = 1;
  for(const character of data.results) {
    row += await buildTableEntry(character, index);
    index++;
  };
  document.querySelector('#row-pokemon').innerHTML = row;
}


async function buildTableEntry(character, index) {

  let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;
  var hp = 0;
  data = await (await fetch(url)).json()
  hp = data.stats[0].base_stat;
  console.log(hp);

    let cardElement = `
    <div class='col-md-4'>
      <br />
      <div class='card card-elements'>
        <div class='row card-head'>
          <div class='col-6 pokemon-name'>
            ${character.name}
          </div>
          <div class='col-6 pokemon-index'>
            ${hp}
          </div>
        </div>

        <img
          class='card-img-top'
          id='image'
          src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png"
          alt='${character.name}'
        />
        <div class='card-body'>
          <h4 id='name'>Name: ${character.name}</h4>
        </div>
      </div>
    </div>
  `;

  return cardElement;
};
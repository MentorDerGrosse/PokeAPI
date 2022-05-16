window.onload = function() {

  //https://pokeapi.co/api/v2/pokemon/
  //höchster index = 898
  let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=27';
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
  let hp = 0;
  let type, attack, defense, specialAttack, speacialDefense, speed, weight;

  data = await (await fetch(url)).json()
  hp = data.stats[0].base_stat;
  attack = data.stats[1].base_stat;
  defense = data.stats[2].base_stat;
  specialAttack = data.stats[3].base_stat;
  speacialDefense = data.stats[4].base_stat;
  speed = data.stats[5].base_stat;
  weight = data.weight;

    let cardElement = `
    <div class='col-md-4'>
      <br />
      <div class='card card-elements'>
        <div class='row card-head'>
          <div class='col-6 pokemon-name'>
            ${character.name}
          </div>
          <div class='col-6 pokemon-hp'>
            <span id='hp'>HP</span>${hp}
          </div>
        </div>

        <img
          class='card-img-top'
          src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png"
          alt='${character.name}'
        />
        <div class='card-body'>
          <div class='row card-bottom'>
            <div class='col-6 column-info text-end'>
              <span class="card-info">Attack: </span> <span class="info-num">${attack}</span>
            </div>
          <div class='col-6 column-info text-end'>
            <span class="card-info">Defense: </span> <span class="info-num">${defense}</span>
          </div>

          <div class='row card-bottom'>
            <div class='col-6 column-info text-end'>
              <span class="card-info">Speacial Attack: </span> <span class="info-num">${specialAttack}</span>
            </div>
          <div class='col-6 column-info text-end'>
            <span class="card-info">Speacial Defense: </span> <span class="info-num">${speacialDefense}</span>
          </div>

          <div class='row card-bottom'>
            <div class='col-6 column-info text-end'>
              <span class="card-info">Speed: </span> <span class="info-num">${speed}</span>
            </div>
          <div class='col-6 column-info text-end'>
            <span class="card-info">Weight: </span> <span class="info-num">${weight}</span>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  `;

  return cardElement;
};
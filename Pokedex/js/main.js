class Pokemon {
  constructor (name, hp, attack, defense, specialAttack, speacialDefense, speed, weight, element) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.speacialDefense = speacialDefense;
    this.speed = speed;
    this.weight = weight;
    this.element = element;
  }
}

var currentIndex = 15;
var page = 1;

window.onload = function starting() {
  localStorage.clear();
  //https://pokeapi.co/api/v2/pokemon/
  //höchster index = 898
  let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898';
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
    if(index <= 15) {
    row += await buildTableEntry(character, index);
    }
    if(index > 15){
      savePokemons(character, index);
    }
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
  element = data.types[0].type.name;

  poke = new Pokemon(data.name, hp, attack, defense, specialAttack, speacialDefense, speed, weight, element);

  localStorage.setItem(index, JSON.stringify(poke));

  let cardElement = buildCard(character.name, hp, index, attack, defense, specialAttack, speacialDefense, speed, weight, element);
  return cardElement;
  
};

function savePokemons(character, index){
  let url = `https://pokeapi.co/api/v2/pokemon/${index}/`;
  let hp, type, attack, defense, specialAttack, speacialDefense, speed, weight;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      hp = data.stats[0].base_stat;
      attack = data.stats[1].base_stat;
      defense = data.stats[2].base_stat;
      specialAttack = data.stats[3].base_stat;
      speacialDefense = data.stats[4].base_stat;
      speed = data.stats[5].base_stat;
      weight = data.weight;
      element = data.types[0].type.name;
      poke = new Pokemon(data.name, hp, attack, defense, specialAttack, speacialDefense, speed, weight, element);
      localStorage.setItem(index, JSON.stringify(poke));
    })
}

function nextPage(){
  let nextIndex = currentIndex + 15;
  document.querySelector('#row-pokemon').innerHTML = "";
  for(i = currentIndex+1; i<=nextIndex; i++){
    let poke = JSON.parse(localStorage.getItem(i));
    let cardElement = buildCard(poke.name, poke.hp, i, poke.attack, poke.defense, poke.specialAttack, poke.speacialDefense, poke.speed, poke.weight, poke.element);
  document.querySelector('#row-pokemon').innerHTML += cardElement;
  }
  currentIndex += 15;
  window.scrollTo({top: 0, left: 0, behavior: "instant"});
};

function previousPage(){
  if(currentIndex > 15){
    let previousIndex = currentIndex - 30;
    document.querySelector('#row-pokemon').innerHTML = "";
    for(i = previousIndex+1; i<=currentIndex; i++){
      let poke = JSON.parse(localStorage.getItem(i));
      let cardElement = buildCard(poke.name, poke.hp, i, poke.attack, poke.defense, poke.specialAttack, poke.speacialDefense, poke.speed, poke.weight, poke.element);
    document.querySelector('#row-pokemon').innerHTML += cardElement;
    }
    currentIndex -= 15;
    window.scrollTo({top: 0, left: 0, behavior: "instant"});
  }
};

function buildCard(name, hp, i, attack, defense, specialAttack, speacialDefense, speed, weight, bgColor){
  let cardElement = `
    <div class='col-md-4'>
      <br />
      <div class='card card-elements  ${bgColor}' id='background'>
        <div class='row card-head'>
          <div class='col-6 pokemon-name'>
            ${name}
          </div>
          <div class='col-6 pokemon-hp'>
            <span id='hp'>HP</span>${hp}
          </div>
        </div>

        <img
          class='card-img-top'
          src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png"
          alt='${name}'
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
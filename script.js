const strike = {
name: 'strike',
energyCost: 1,
attack: 5,
block: 0,
};

const defend = {
  name: 'defend',
  energyCost: 1,
  attack: 0,
  block: 5, 
};

const playerDeck = ["not empty"];
const discardPile = [];

const createStartingDeck = () =>  {
playerDeck.length = 0;
console.log(playerDeck);
for(i=0; i < 10; i++){
  playerDeck.push(strike);
}
console.log(playerDeck);
for(i=0; i < 10; i++){
  playerDeck.push(defend);
}
console.log(playerDeck);
document.querySelector('.cardsInDeck').innerHTML = playerDeck.length;
document.querySelector('.discard').innerHTML = discardPile.length;
}

createStartingDeck();

const drawStrike = () => {
  document.querySelector('.hand').innerHtml += `<div class="card">
  <h3 class="cardName">
    Strike
  </h3>
  <div class="cardEnergyCost">
    1
  </div>
  <div class="cardImage">
    <img src="/Images/strike.jpg" alt="a swordfight between knights">
  </div>
  <div class="cardText">
    <p class="cardAttack">Deal 5 Damage</p>
    <p class="cardBlock"></p>
    <p class="cardDraw"></p>
  </div>
</div>`
};

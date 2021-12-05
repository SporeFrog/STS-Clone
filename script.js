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
}

createStartingDeck();
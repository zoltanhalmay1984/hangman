//"use strict"
const ps = require('prompt-sync');
const prompt = ps({ sigint: true });
let wordPool = ['sasi', 'bobby']; //Sheep Shrimp Lobster Swordfish Horse Donkey Squid Pidgeon Chicken Rabbit Bobcat Eagle Beaver Lizard Snake Beetle Jackal Elephant Scorpion Flamingo Panther Spider Crocodile Hyena Panda Giraffe Earthworm Kangaroo Tiger Jaguar Peacock Penguin Dragonfly Starfish Octopus Jellyfish Shark Whale Dolphin Turtle Bergen Oporto Phoenix Marseille Singapore Cincinnati Ostrava Thessaloniki Novosibirsk Stockholm Rotterdam Toronto Liberec Florence Szczecin Bordeaux Amsterdam Seattle Melbourne Montreal Barcelona Dubrovnik Sacramento Toulouse Vancouver Copenhagen Seville Philadelphia Pittsburgh Ljubljana Brisbane Helsinki Hamburg Montpellier Portland Austin Shanghai Detroit Brussels Baltimore Watermelon Pomegranate Passionfruit Blackcurrant Blackberry Pineapple Strawberry Tangerine Cucumber Artichoke Cauliflower Lettuce Spinach Pumpkin Broccoli Eggplant Cabbage Beansprouts Mulberry Carambola Jackfruit Lychee Cherry Garlic Tomato Carrot Potato Zucchini Radish Chili Asparagus Turnip Kohlrabi Papaya Mangosteen Rambutan Romanesco Fiddlehead Parsnip Horseradish Krombacher Holstein Bitburger Kozel Staropramen Zlatopramen Svijany Kozel Postrizinske Bernard Primator Jezek Litovel Holba Heineken Carlsberg Spaten Budweiser Amstel Karlovacko Ozujsko Lobkowicz Lasko Stiegl Ottakringer Warsteiner Starobrno Krusovice Gambrinus Radegast Rebel Zywiec Tyskie Paulaner Radeberger Becks Tuborg Peroni Mythos Rychtar Russia Ukraine Hungary Slovakia Slovenia Croatia Serbia Slovenia Austria Switzerland Greece Afghanistan Norway Sweden Finland Estonia Lithuania Latvia Belarus France Argentina Turkey Poland Germany Denmark Netherlands Luxemburg Belgium Romania Bulgaria Canada Mexico Israel Australia Bangladesh Portugal Tunisia Egypt Zimbabwe Kazakhstan Chevrollet Cadillac Mercedes Lexus Tesla Bmw Jeep Mini Bentley Honda Fiat Lamborghini Maserati Ford Skoda Nissan Seat Mitsubishi Dacia Renault Lada Pegaut Rover Volvo Hyundai Daewoo Saab Audi Porsche Mazda Volkswagen Ferrari Toyota Lancia Citroen Moskvich Suzuki Trabant Lada Wartburg Adanji Baktag Bekk Forshak Ghoptu Hijol Jagh Jatlh Jelik Jinaq Kesh Koruts Kortar Kyamo Maj Ram Mevak Mok Movek Nuqneh Qaleghnes Petaq Poh Qut Shuvak Suh Toduj Tahqeq Tohzah Vang Yan Yej Rhin Yintagh Qapla Suvwl Nadev Ghos Kajunpakt Kpekt

const wordPoolAnimals = ["Sheep", "Shrimp", "Lobster", "Swordfish", "Horse", "Donkey", "Squid", "Pidgeon", "Chicken", "Rabbit", "Bobcat", "Eagle", "Beaver", "Lizard", "Snake", "Beetle", "Jackal", "Elephant", "Scorpion", "Flamingo", "Panther", "Spider", "Crocodile", "Hyena", "Panda", "Giraffe", "Earthworm", "Kangaroo", "Tiger", "Jaguar", "Peacock", "Penguin", "Dragonfly", "Starfish", "Octopus", "Jellyfish", "Shark", "Whale", "Dolphin", "Turtle"];
const wordPoolFruitsAndVegetables = ["Watermelon", "Pomegranate", "Passionfruit", "Blackcurrant", "Blackberry", "Pineapple", "Strawberry", "Tangerine", "Cucumber", "Artichoke", "Cauliflower", "Lettuce", "Spinach", "Pumpkin", "Broccoli", "Eggplant", "Cabbage", "Beansprouts", "Mulberry", "Carambola", "Jackfruit", "Lychee", "Cherry", "Garlic", "Tomato", "Carrot", "Potato", "Zucchini", "Radish", "Chili", "Asparagus", "Turnip", "Kohlrabi", "Papaya", "Mangosteen", "Rambutan", "Romanesco", "Fiddlehead", "Parsnip", "Horseradish"];
const wordPoolCountries = ["Russia", "Ukraine", "Hungary", "Slovakia", "Slovenia", "Croatia", "Serbia", "Slovenia", "Austria", "Switzerland", "Greece", "Afghanistan", "Norway", "Sweden", "Finland", "Estonia", "Lithuania", "Latvia", "Belarus", "France", "Argentina", "Turkey", "Poland", "Germany", "Denmark", "Netherlands", "Luxemburg", "Belgium", "Romania", "Bulgaria", "Canada", "Mexico", "Israel", "Australia", "Bangladesh", "Portugal", "Tunisia", "Egypt", "Zimbabwe", "Kazakhstan"];
const wordPoolCities = ["Bergen", "Oporto", "Phoenix", "Marseille", "Singapore", "Cincinnati", "Ostrava", "Thessaloniki", "Novosibirsk", "Stockholm", "Rotterdam", "Toronto", "Liberec", "Florence", "Szczecin", "Bordeaux", "Amsterdam", "Seattle", "Melbourne", "Montreal", "Barcelona", "Dubrovnik", "Sacramento", "Toulouse", "Vancouver", "Copenhagen", "Seville", "Philadelphia", "Pittsburgh", "Ljubljana", "Brisbane", "Helsinki", "Hamburg", "Montpellier", "Portland", "Austin", "Shanghai", "Detroit", "Brussels", "Baltimore"];
const wordPoolCarBrands = ["Chevrollet", "Cadillac", "Mercedes", "Lexus", "Tesla", "Bmw", "Jeep", "Mini", "Bentley", "Honda", "Fiat", "Lamborghini", "Maserati", "Ford", "Skoda", "Nissan", "Seat", "Mitsubishi", "Dacia", "Renault", "Lada", "Pegaut", "Rover", "Volvo", "Hyundai", "Daewoo", "Saab", "Audi", "Porsche", "Mazda", "Volkswagen", "Ferrari", "Toyota", "Lancia", "Citroen", "Moskvich", "Suzuki", "Trabant", "Lada", "Wartburg"];
const wordPoolBeerBrands = ["Krombacher", "Holstein", "Bitburger", "Kozel", "Staropramen", "Zlatopramen", "Svijany", "Kozel", "Postrizinske", "Bernard", "Primator", "Jezek", "Litovel", "Holba", "Heineken", "Carlsberg", "Spaten", "Budweiser", "Amstel", "Karlovacko", "Ozujsko", "Lobkowicz", "Lasko", "Stiegl", "Ottakringer", "Warsteiner", "Starobrno", "Krusovice", "Gambrinus", "Radegast", "Rebel", "Zywiec", "Tyskie", "Paulaner", "Radeberger", "Becks", "Tuborg", "Peroni", "Mythos", "Rychtar"];
const wordPoolKlingonWords = ["Adanji", "Baktag", "Bekk", "Forshak", "Ghoptu", "Hijol", "Jagh", "Jatlh", "Jelik", "Jinaq", "Kesh", "Koruts", "Kortar", "Kyamo", "Maj", "Ram", "Mevak", "Mok", "Movek", "Nuqneh", "Qaleghnes", "Petaq", "Poh", "Qut", "Shuvak", "Suh", "Toduj", "Tahqeq", "Tohzah", "Vang", "Yan", "Yej", "Rhin", "Yintagh", "Qapla", "Suvwl", "Nadev", "Ghos", "Kajunpakt", "Kpekt"];

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let randomWord = '';
const hiddenRandomWord = [];
const wrongLettersSet = new Set();
let life = 3;
let playerName;
console.clear();

function getPlayerName() {
  playerName = (prompt('Type your name, then press enter: ')).toUpperCase();
}

function visualizeStartScreen(name) {
  console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
  console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
  console.log(`        GREETINGS CONVICT ${name}! WELCOME TO THE GAME OF\n\n    O   O    OOO    O   O    OOO    O   O    OOO    O   O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⡏\n    O   O   O   O   O   O   O   O   OO OO   O   O   O   O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣧\n    O   O   O   O   OO  O   O   O   O O O   O   O   OO  O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣧\n    O   O   O   O   OO  O   O   O   O O O   O   O   OO  O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿\n    O   O   O   O   OO  O   O   O   O O O   O   O   OO  O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆\n    O   O   O   O   O O O   O       O O O   O   O   O O O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠛⢿⣿⣿⣿⣿⣿⡿⢻⡇\n    OOOOO   OOOOO   O O O   O OOO   O O O   OOOOO   O O O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣧⣤⣤⣿⣿⣿⣤⣤⣾⡇\n    O   O   O   O   O O O   O O O   O   O   O   O   O O O⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷\n    O   O   O   O   O  OO   O   O   O   O   O   O   O  OO⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄\n    O   O   O   O   O  OO   O   O   O   O   O   O   O  OO⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀\n    O   O   O   O   O  OO   O   O   O   O   O   O   O  OO⠀⠀⠰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆\n    O   O   O   O   O   O   O   O   O   O   O   O   O   O⠀⠀⠀⠉⠉⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡉⠈⠉\n    O   O   O   O   O   O    OOO    O   O   O   O   O   O ⠀⠀⠀⠀⠀⠀⠚⠿⠟⠁⠉⣻⣿⡟⠉⠉⠻⣿⣿⣏⠁⠈⠻⠿⠛\n\n    A TERMINALLY DEADLY GAME! DIRECTLY IN THE TERMINAL!`);
  //prompt('Press any key to continue...');
  console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
  console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');

}
function setRandomWord() {
  randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
  for (let i = 0; i < randomWord.length; i++) {
    hiddenRandomWord.push('_');
  }
}

function visualizeGallows(life) {
  if (life === 3) {
    return console.log('        _______\n        | /              _\n        |/   __         /\\\n        |   (oo)    _|\\/**\\/|\n        |   /[]\\   | | [  ] O\n        |    ||        _||_');
  }
  if (life === 2) {
    return console.log('        _______\n        | /  __     _\n        |/  (¤¤)   /\\ \n        |   /[]\\ \\/**\\/|\n        |   |_=   [  ] O\n        |   | |   _||_');
  }
  if (life === 1) {
    return console.log('        _______\n        | /  |_     _\n        |/  (@@)   /\\ \n        |   /[]\\  /**\\ \n        |   |_=  |[  ]|\n        |   | |   _||_');
  }
  if (life < 1) {
    return console.log('        _______\n        | /  |_     _\n        |/  (xx)   /\\  |_\n        |   /[]\\  /**\\/| |\n        |    ||  |[  ]\n        |         _||_');
  }
}

function visualizeQuit() {
  return `\nOOOOO   OOOOO   OOOOO   OOO        ::::::::::::::\nO   O   O   O   O   O   O  O   ::::::${playerName},:::::::::::::\nO       O   O   O   O   O   O   ::::DON'T BE A COWARD!::::\nO  OO   O   O   O   O   O   O    :::::COME BACK AND::::::\nO   O   O   O   O   O   O  O      :::PLAY HANGMAN AGAIN!:::\nOOOOO   OOOOO   OOOOO   OOO        ::::::::::::::::::::::\n\n    _______             OOOO    O   O   OOOOO     O\n    | /  ˘      _       O   O    O O    O         O\n    |/   __    /\\       OOOO      O     OOOO      O\n    |  \\(^^)/ /--\\      O   O     O     O         O\n    |    []  |[  ]|     O   O     O     O         \n    |    ||   _||_      OOOO      O     OOOOO     O\n`;
}
function visualizeVictory() {
  return `\nOOOOO   OOOOO   OOOOO   OOO        ::::::::::::::\nO   O   O   O   O   O   O  O   ::::::${playerName},:::::::::::::::\nO       O   O   O   O   O   O   :::::::::YOU WON!:::::::\nO  OO   O   O   O   O   O   O    :::::THANKS FOR:::::::\nO   O   O   O   O   O   O  O      :::PLAYING HANGMAN!::\nOOOOO   OOOOO   OOOOO   OOO        ::::::::::::::::::::::\n\n    _______             OOOO    O   O   OOOOO     O\n    | /  ˘      _       O   O    O O    O         O\n    |/   __    /\\       OOOO      O     OOOO      O\n    |  \\(^^)/\\/^^\\/     O   O     O     O         O\n    |    []   [  ]      O   O     O     O         \n    |    ||   _||_      OOOO      O     OOOOO     O\n`;
}

function visualizeDefeat() {
  return `\nOOOOO   OOOOO   OOOOO   OOO        ::::::::::::::\nO   O   O   O   O   O   O  O   ::::::${playerName},:::::::::::::\nO       O   O   O   O   O   O   :::::::::YOU DIED!:::::::\nO  OO   O   O   O   O   O   O    :::::TSEE YOU IN::::::\nO   O   O   O   O   O   O  O      :::YOUR NEXT LIFE!::\nOOOOO   OOOOO   OOOOO   OOO        ::::::::::::::::::::::\n\n    _______             OOOO    O   O   OOOOO     O\n    | /  |      _       O   O    O O    O         O\n    |/ \\(¤x)   /\\       OOOO      O     OOOO      O\n    |    []\\  /^^\\/     O   O     O     O         O\n    |    ||  |[  ]      O   O     O     O         \n    |         _||_      OOOO      O     OOOOO     O\n`;
}


function runGameFlow() {
  do {
    console.log(`Wrong guesses: ${[...wrongLettersSet]}`);
    console.log(`Life remaining: ${life}`);
    visualizeGallows(life);
    console.log(`\n\n${hiddenRandomWord}`);
    if (randomWord === hiddenRandomWord.join('')) {
      console.log(visualizeVictory());
      break;
    }
    if (life === 0) {
      console.log(visualizeDefeat());
      break;
    }
    const playerInput = prompt('Type a letter, then press enter: ');
    if (playerInput.toLowerCase() === 'quit') {
      console.log(visualizeQuit());
      break;
    }
    const guessedLetter = playerInput[0];
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === guessedLetter) {
        hiddenRandomWord[i] = guessedLetter;
      }
    }
    if (!randomWord.includes(guessedLetter) && ![...wrongLettersSet].includes(guessedLetter)) {
      wrongLettersSet.add(guessedLetter);
      life--;
    }
    console.clear();
  } while (true);
}

getPlayerName();
visualizeStartScreen(playerName);
setRandomWord();
runGameFlow();


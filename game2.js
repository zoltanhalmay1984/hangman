"use strict"
let ps = require("prompt-sync");
let prompt = ps({ sigint: true });

let wordSet = "Sheep Shrimp Lobster Swordfish Horse Donkey Squid Pidgeon Chicken Rabbit Bobcat Eagle Beaver Lizard Snake Beetle Jackal Elephant Scorpion Flamingo Panther Spider Crocodile Hyena Panda Giraffe Earthworm Kangaroo Tiger Jaguar Peacock Penguin Dragonfly Starfish Octopus Jellyfish Shark Whale Dolphin Turtle Bergen Oporto Phoenix Marseille Singapore Cincinnati Ostrava Thessaloniki Novosibirsk Stockholm Rotterdam Toronto Liberec Florence Szczecin Bordeaux Amsterdam Seattle Melbourne Montreal Barcelona Dubrovnik Sacramento Toulouse Vancouver Copenhagen Seville Philadelphia Pittsburgh Ljubljana Brisbane Helsinki Hamburg Montpellier Portland Austin Shanghai Detroit Brussels Baltimore Watermelon Pomegranate Passionfruit Blackcurrant Blackberry Pineapple Strawberry Tangerine Cucumber Artichoke Cauliflower Lettuce Spinach Pumpkin Broccoli Eggplant Cabbage Beansprouts Mulberry Carambola Jackfruit Lychee Cherry Garlic Tomato Carrot Potato Zucchini Radish Chili Asparagus Turnip Kohlrabi Papaya Mangosteen Rambutan Romanesco Fiddlehead Parsnip Horseradish Krombacher Holstein Bitburger Kozel Staropramen Zlatopramen Svijany Kozel Postrizinske Bernard Primator Jezek Litovel Holba Heineken Carlsberg Spaten Budweiser Amstel Karlovacko Ozujsko Lobkowicz Lasko Stiegl Ottakringer Warsteiner Starobrno Krusovice Gambrinus Radegast Rebel Zywiec Tyskie Paulaner Radeberger Becks Tuborg Peroni Mythos Rychtar Russia Ukraine Hungary Slovakia Slovenia Croatia Serbia Slovenia Austria Switzerland Greece Afghanistan Norway Sweden Finland Estonia Lithuania Latvia Belarus France Argentina Turkey Poland Germany Denmark Netherlands Luxemburg Belgium Romania Bulgaria Canada Mexico Israel Australia Bangladesh Portugal Tunisia Egypt Zimbabwe Kazakhstan Chevrollet Cadillac Mercedes Lexus Tesla Bmw Jeep Mini Bentley Honda Fiat Lamborghini Maserati Ford Skoda Nissan Seat Mitsubishi Dacia Renault Lada Pegaut Rover Volvo Hyundai Daewoo Saab Audi Porsche Mazda Volkswagen Ferrari Toyota Lancia Citroen Moskvich Suzuki Trabant Lada Wartburg Adanji Baktag Bekk Forshak Ghoptu Hijol Jagh Jatlh Jelik Jinaq Kesh Koruts Kortar Kyamo Maj Ram Mevak Mok Movek Nuqneh Qaleghnes Petaq Poh Qut Shuvak Suh Toduj Tahqeq Tohzah Vang Yan Yej Rhin Yintagh Qapla Suvwl Nadev Ghos Kajunpakt Kpekt";
let wordsArray = wordSet.split(' ');

let randomWord = Array.from(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
let hiddenRandomWord = []
console.log(randomWord.join(""))
function setHiddenRandomWord(word) {
    for (let i = 0; i < word.length; i++) {
        hiddenRandomWord.push("_")
    }
    console.log(hiddenRandomWord.join(""))
}

setHiddenRandomWord(randomWord)
do {
    let playerInput = prompt("Type a letter, then press enter: ");
    let guessedLetter = playerInput[0]
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guessedLetter) {
            hiddenRandomWord[i] = guessedLetter
        }
    }
    hiddenRandomWord = hiddenRandomWord
    console.log(hiddenRandomWord.join(""))

} while (randomWord.join("") !== hiddenRandomWord.join(""))

/*

for (let j = 0; j < randomWord.length; j++) {
    if (randomWord[j] === guessedLetter.toLocaleLowerCase) {
        blankWord[j] = guessedLetter.toLocaleLowerCase
        console.log(blankWord)
    }
}
for (let k = 0; k < randomWord.length; k++) {
    if (randomWord.toLowerCase[k] !== guessedLetter.toLocaleLowerCase) {
        wrongLetters.add(guessedLetter.toLocaleLowerCase)
    }
}
console.log("Letters you have quessed wrong so far: " + wrongLetters)
for (let l = 0; l < wrongLetters.length; l++) {
    if (wrongLetters[l] === guessedLetter.toLocaleLowerCase){
    }
}
console.log("Letters you have quessed wrong so far: " + wrongLetters)
/*



wrongLetters.add("o")
console.log(wrongLetters)
*/
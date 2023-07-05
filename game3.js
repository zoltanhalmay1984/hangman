"use strict"
let ps = require("prompt-sync");
let prompt = ps({ sigint: true });

let wordPool = ["Sheep", "Shrimp", "Lobster", "Swordfish", "Horse"]
console.log(wordPool)
let randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
console.log(randomWord)
let wrongLettersSet = new Set();

const marvel_heros = ["Hulk", "Spiderman", "Ironman"];
const dc_heros = ["Superman", "flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = another_array.flat(Infinity);
// console.log(realAnotherArray)

// console.log(Array.isArray("Damodar"));
// console.log(Array.from("Damodar"));
// console.log(Array.from({ name: "Damodar" })); //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

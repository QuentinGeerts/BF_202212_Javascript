// const tab = [ "Quentin", "js", 5, 3, 11, 15, 23, 200, 100, "Hello" ]

// console.log(tab);

// tab.sort((a, b) => a - b)

// console.log(tab);


// const o1 = {
//     lastname: "Quentin",
//     firstname: "Geerts",
//     age: 26
// };

// const personnes = [
//     { lastname: "Geerts", firstname: "Mélanie", age: 34, genre: "F" },
//     { lastname: "Geerts", firstname: "Quentin", age: 26, genre: "H" },
//     { lastname: "Geerts", firstname: "Benjamin", age: 23, genre: "H" },
//     { lastname: "Geerts", firstname: "William", age: 19, genre: "H" },
//     { lastname: "Geerts", firstname: "Antoine", age: 16, genre: "H" },
// ];

// const majeur = personnes.filter(p => p.age >= 18 && p.age <= 25);

// console.log('majeur :>> ', majeur);

// const femme = personnes.filter(personne => personne.genre === "F");

// console.log('femme :>> ', femme);

// const olderPersonnes = personnes.map(p => ++p.age);

// console.log('olderPersonnes :>> ', olderPersonnes);
// console.log('personnes :>> ', personnes);


// const t = [5, 6, 1, 3, 4, 0, 5, 3];

// const res = t.reduce((acc, value) => acc + value, 0) / t.length;
// console.log('res :>> ', res);

// t.length = 0;

// let somme = 0;

// t.forEach(value => {

//     somme += value;

// });

// console.clear();

// console.log(personnes.find( p => p.lastname === "Geerts"));
// console.log(personnes.findLast( p => p.lastname === "Geerts"));
// console.log(personnes.findIndex( p => p.lastname === "Geerts"));
// console.log(personnes.findLastIndex( p => p.lastname === "Geerts"));


/**
 * Strings
 */

// const maChaineDeCaracteres = "Hello les Fullstack JavaScript !";

// // Majuscule 
// console.log(maChaineDeCaracteres.toUpperCase);

// // Minuscule
// console.log(maChaineDeCaracteres.toLowerCase);

// // Découper une chaine de caractères sur base d'un caractère
// const stringTab = maChaineDeCaracteres.split(' ');
// console.log('stringTab :>> ', stringTab);

// const stringTab2 = maChaineDeCaracteres.split('');
// console.log('stringTab2 :>> ', stringTab2);

// const reversedStringTab2 = stringTab2.reverse();
// console.log('reversedStringTab2 :>> ', reversedStringTab2);

// const reversedString = reversedStringTab2.join('');
// console.log('reversedString :>> ', reversedString);


// console.clear();

// console.log(maChaineDeCaracteres.split('').reverse().join(''));

// console.log('maChaineDeCaracteres :>> ', maChaineDeCaracteres);

/**
 * Dates
 */

const today = new Date();

const monthsName = [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" ]

// Getters = extraire une partie d'une date

console.log("Année : ", today.getFullYear())
console.log("Mois : ", today.getMonth() + 1)
console.log("Mois (string) : ", monthsName[today.getMonth()])
console.log("Jour : ", today.getDate())
console.log('Jour de la semaine :>> ', today.getDay());

console.log('Timestamp :>> ', today.getTime());

const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }

console.log(today.toLocaleDateString(navigator.language, options))

console.dir(navigator)


// Setters

today.setDate(6)

console.log('today :>> ', today);

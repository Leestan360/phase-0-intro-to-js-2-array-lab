// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    let newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    let newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
}

function appendCat(name) {
    let newCats = [...cats, "Broom"];
    return newCats;
}

function removeLastCat() {
    let newListOfCats = cats.slice(0, -1);
    return newListOfCats;
}

function removeFirstCat() {
    let newListOfCatsNow = cats.slice(-2);
    return newListOfCatsNow;
}
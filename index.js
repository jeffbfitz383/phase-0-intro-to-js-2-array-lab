// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}


function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const addCat = [...cats, name]
    return addCat;
}

function prependCat(name){
    const appendCat = [name, ...cats]
    return appendCat;
}

function removeLastCat(name){
    const popCat = [...cats]
    popCat.pop(name);
    return popCat;
}

function removeFirstCat(name){
    const shiftcat = [...cats]
    shiftcat.shift(name);
    return shiftcat;
}

// how to print a random Number
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRandom(1, 6));
<<<<<<< HEAD
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];

// let element = document.getElementById("vcheck")
// console.log(element.innerHTML);

function countvowel(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    console.log(letters);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });

    return `There is ${count} vowel!`;
}

console.log(countvowel(document.getElementById("vcheck").innerHTML));
=======
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];

// let element = document.getElementById("vcheck")
// console.log(element.innerHTML);

function countvowel(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    console.log(letters);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });

    return `There is ${count} vowel!`;
}

console.log(countvowel(document.getElementById("vcheck").innerHTML));
>>>>>>> cbeb6b7b317ddeafdd3bb18624e8027cd21698ca

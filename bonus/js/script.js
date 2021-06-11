function randomNum (min, max) {
return Math.floor(Math.random() * (max - min +1)) + min;
}

var compListNum = [];
var userListNum = [];

var difficulty = parseInt(prompt("Inserisci una difficoltà da 0 a 2"));
while (difficulty !== 0 && difficulty !== 1 && difficulty !== 2){
    alert("scegli una difficoltà")
    difficulty = parseInt(prompt("Inserisci una difficoltà da 0 a 2"))
}


var maxNum = 100;
if (difficulty === 0) {
    maxNum = 100
} else if (difficulty ===  1){
    maxNum = 80
} else if (difficulty === 2) {
    maxNum = 50
}



while (compListNum.length < 16) {
var randomCompNum = randomNum(1, maxNum);
if(!compListNum.includes(randomCompNum)){
    compListNum.push(randomCompNum)
} 
}

document.getElementById("result2").innerHTML ="<br/>" + compListNum
console.log(compListNum);


var differenza = 84;
if (difficulty === 0) {
    differenza = 100 - 16
} else if (difficulty ===  1){
    differenza = 80 - 16
} else if (difficulty === 2) {
    differenza = 50 - 16
}




while (userListNum.length < differenza) {
    var userNum = parseInt(prompt("Inserisci un numero"));
    while (isNaN(userNum)){
        alert("non hai inserito un numero");
        userNum = parseInt(prompt("Inserisci un numero"));
    }
    if (!userListNum.includes(userNum)){
        if (!compListNum.includes(userNum)){
            userListNum.push(userNum);
        }
        else {
            alert("hai perso");
            break;
        }
    } else {
        alert("hai gia inserito il numero");
    }
}
 
console.log(userListNum);
document.getElementById("result").innerHTML ="Hai inserito " + userListNum.length + " numeri"; 
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
var differenza = 84;
/*if (difficulty === 0) {
    maxNum = 100;
    differenza = maxNum - 16;
} else if (difficulty ===  1){
    maxNum = 80;
    differenza = maxNum - 16;
} else if (difficulty === 2) {
    maxNum = 50;
    differenza = maxNum - 16;
}*/

switch (difficulty) {
    case 0:
        maxNum = 100;
        differenza = maxNum - 16;
        break;
    case 1:
        maxNum = 80;
        differenza = maxNum - 16;
        break;
    case 2:
        maxNum = 50;
        differenza = maxNum - 16;
        break;        
}


while (compListNum.length < 16) {
var randomCompNum = randomNum(1, maxNum);
if(!compListNum.includes(randomCompNum)){
    compListNum.push(randomCompNum)
} 
}

document.getElementById("result2").innerHTML ="<br/>" + compListNum
console.log(compListNum);

while (userListNum.length < differenza) {
    var userNum = parseInt(prompt("Inserisci un numero"));
    while (isNaN(userNum) || userNum > maxNum){
        alert("non hai inserito un numero o numero errato");
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

if (userListNum.length === differenza){
    alert("hai vinto");
} 

alert("Il tuo puntegggio è " + userListNum.length);
function randomNum (min, max) {
return Math.floor(Math.random() * (max - min +1)) + min;
}

var compListNum = [];
var userListNum = [];

while (compListNum.length < 16) {
var randomCompNum = randomNum(1, 100);
if(!compListNum.includes(randomCompNum)){
    compListNum.push(randomCompNum)
} 
}

console.log(compListNum);





while (userListNum.length < 84) {
    var userNum = parseInt(prompt("Inserisci un numero"));
    while (isNaN(userNum) || userNum > 100){
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
var diff = document.getElementsByName("difficulty");
var diffValue ;
var compListNum = [];
var userListNum = [];
var maxNum;
var differenza;

function pippo (){
    for (var i = 0; i < diff.length; i++) {
        if (diff[i].checked){
            diffValue = parseInt(diff[i].value);
            console.log("la difficolta è: " + diffValue);
        }
    } 
    if (diffValue === undefined){
        alert("Seleziona una difficoltà")
    } else if (diffValue === 0) {
        maxNum = 100;
        differenza = maxNum - 16;
        document.getElementById("user-num").placeholder = "Numero da 1 a " + maxNum;
    } else if (diffValue ===  1){
        maxNum = 80;
        differenza = maxNum - 16;
        document.getElementById("user-num").placeholder = "Numero da 1 a " + maxNum;
    } else if (diffValue === 2) {
        maxNum = 50;
        differenza = maxNum - 16;
        document.getElementById("user-num").placeholder = "Numero da 1 a " + maxNum;
    }
    //svuoto
    compListNum = [];
    // doppia condizione per non looparlo
    while (compListNum.length < 16 && diffValue !== undefined) {
        var randomCompNum = randomNum(1, maxNum);
        if(!compListNum.includes(randomCompNum)){
            compListNum.push(randomCompNum)
        } 
    }
    console.log(compListNum);
}

function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

var userNumNot = document.getElementById("user-num");
var userNum = parseInt(userNumNot.value);

function pluto () {
    userNum = parseInt(userNumNot.value);
    console.log("Il numero utente inserito è: " + userNum);
        if(diffValue === undefined){
            alert("scegli prima una difficoltà")
        } else if (!userListNum.includes(userNum) && userNum < maxNum && userNum > 0){
            if (!compListNum.includes(userNum)){
                userListNum.push(userNum);
                console.log(userListNum)
            } else {
                alert("hai trollato");
                location.reload();
            }
        } else {
            alert("hai già inserito il numero o non era corretto");
        }
    document.getElementById("result").innerHTML = "Sei arrivato a: " + userListNum.length ; 
    if (userListNum.length === differenza){
        alert("hai vinto");
        location.reload();
    }   
}





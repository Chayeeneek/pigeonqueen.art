const numberinput1 = document.getElementById("number1");
const numberinput2 = document.getElementById("number2");
const answerinput = document.getElementById("check");
const randomizebutton1 = document.getElementById("randomizebutton1");
const randomizebutton2 = document.getElementById("randomizebutton2");
const checkbutton = document.getElementById("btn");

randomizebutton1.onclick = function () {
    numberinput1.value = Math.floor((Math.random() * 101)+1);
}

randomizebutton2.onclick = function () {
    numberinput2.value = Math.floor((Math.random() * 101)+1);
}

checkbutton.onclick = function () {
    const number1 = parseInt(numberinput1.value)
    const number2 = parseInt(numberinput2.value)
    const expectedanswer = number1 + number2;
    const actualanswer = parseInt(answerinput.value)
    if (actualanswer == expectedanswer)
    {
        alert ("you are right! genius")
    }
    else {
        alert ("dummy, it was " + expectedanswer)
    }
}


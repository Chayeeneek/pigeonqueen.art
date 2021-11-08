var number1;
var number2;

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;
var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value;
var btn = document.querySelector('input[type=button][value=check]');
var btn1 = document.querySelector('input[type=button][value=wylosuj pierwsze]');
var btn2 = document.querySelector('input[type=button][value=wylosuj drugie]');

btn1.onclick = function(){
    number1 = Math.floor((Math.random()* 10) +1);
     
}

btn2.onclick = function(){
    number2 = Math.floor((Math.random()* 10) +1);
    
}

btn.onclick = function(){
    value = checkAnswer.value;
    if (value== answer)
    {
        alert("you are right");
    
    }
    else {
        alert ('dummy, it was' + answer)
    }
}

document.querySelector('input[type=text]').value="";
document.getElementById('number1').innerHTML="";
document.getElementById('number2').innerHTML="";
number1 = Math.floor((Math.random()* 10) +1);
number2 = Math.floor((Math.random()* 10) +1);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;
answer= number1 + number2;

var myDate = new Date();
document.getElementById("test").innerHTML ="Today is,"+ myDate;
document.getElementById("test").style.textAlign="center";
document.getElementById("test").style.textDecorationLine="underline";


var firstName = prompt("enter first name");
var lastName = prompt("enter last name");
document.getElementById("test2").innerHTML ="Welcome"+", " +firstName+" "+ lastName;
document.getElementById("test2").style.color="red";
document.getElementById("test2").style.textAlign="center";
document.getElementById("test2").style.textDecorationLine="underline";


 alert("try #1");
 var num1 = prompt("Enter a number between 1 && 10");
 
 alert("try #2");
 var num2 = prompt("Enter a number between 1 && 10");
 
 alert("try #3");
 var num3 = prompt("Enter a number between 1 && 10");
 var randNumber =Math.ceil(Math.random() * 10);
 console.log(randNumber);
 if(num1 == randNumber){
     document.write("congratulations!!"+"<br>"+"The number was"+num1);
 }else if(num2 == randNumber){
    document.write("congratulations!!"+"<br>"+"The number was"+num2);
}else{
    document.write("Hard Luck,Try again by Reloading the page"+"<br>"+"The number was"+3);
}
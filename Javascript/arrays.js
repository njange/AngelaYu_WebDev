var guestList = ["Angela", "Jack","Pam","Lara","Jason"];

console.log(guestList[1]);

 var name = prompt("What is your name? ")

if (guestList.includes(name)){
    console.log("Welcome " + name)}
else {console.log("Not found.")}

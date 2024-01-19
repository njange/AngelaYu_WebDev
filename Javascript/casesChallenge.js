var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);

restOfName = restOfName.toLowerCase();

var capName = upperCaseChar + restOfName;

alert("Hello, " +capName)
function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var lifeInYears = 90 - age;
    var days = lifeInYears * 365;
    var weeks = lifeInYears * 52;
    var months = lifeInYears * 12;
    
    console.log("You have " + days + " days , " + weeks + " weeks and , " + months + "left.")
    
    
/*************Don't change the code below**********/
}

lifeInWeeks(56);
function isLeap(year) {
    if (year % 4 !== 0) {
        console.log("Not leap year.");
    }
    else if (year % 100 === 0) {
        console.log("Leap year.");
    }
    else (year % 400 === 0) {
        console.log("Leap year.");
    }
}

isLeap(2000);
function checkLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return "yes";
    }
    else {
        return "no";
    }
}

console.log(checkLeapYear(1999));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(1900));
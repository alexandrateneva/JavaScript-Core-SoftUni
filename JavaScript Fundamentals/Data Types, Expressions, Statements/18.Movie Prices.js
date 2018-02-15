function getMoviePrice([movie, dayOfWeek]) {
    let title = movie.toLowerCase();
    let day = dayOfWeek.toLowerCase();

    if (title === "the godfather") {
        switch (day) {
            case "monday": return 12;
            case "tuesday": return 10;
            case "wednesday": return 15;
            case "thursday": return 12.50;
            case "friday": return 15;
            case "saturday": return 25;
            case "sunday": return 30;
            default: return "error";
        }
    }
    else if (title === "schindler's list"){
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": return 8.50;
            case "saturday":
            case "sunday": return 15;
            default: return "error";
        }
    }
    else if (title === "casablanca"){
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": return 8;
            case "saturday":
            case "sunday": return 10;
            default: return "error";
        }
    }
    else if (title === "the wizard of oz"){
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday": return 10;
            case "saturday":
            case "sunday": return 15;
            default: return "error";
        }
    }
    else {
        return "error";
    }
}

console.log(getMoviePrice(["The Godfather", "Friday"]));
console.log(getMoviePrice(["casablanca", "sunday"]));
console.log(getMoviePrice(["Schindler's LIST", "monday"]));
console.log(getMoviePrice(["SoftUni", "monday"]));
console.log(getMoviePrice(["Casablanca", "Nineday"]));
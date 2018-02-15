function getLastDayOfPreviousMonth(data) {
    let day = data[0];
    let month = data[1];
    let year = data[2];

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - day);

    return date.getDate();
}

console.log(getLastDayOfPreviousMonth([17, 3, 2002]));
console.log(getLastDayOfPreviousMonth([13, 12, 2004]));
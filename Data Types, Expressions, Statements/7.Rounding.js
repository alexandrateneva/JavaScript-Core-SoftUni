function rounding(data) {
    let num = data[0];
    let precision = data[1];

    if (precision > 15) {
        precision = 15;
    }

    let result = num.toFixed(precision);
    console.log(eval(result));
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);
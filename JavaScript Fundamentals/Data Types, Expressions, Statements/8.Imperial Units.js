function convertFromInchesToFeetAndInches(distance) {
    let feet = parseInt(distance / 12);
    let inches = Math.ceil(distance % 12);

    console.log(`${feet}'-${inches}"`)
}

convertFromInchesToFeetAndInches(36);
convertFromInchesToFeetAndInches(55);
convertFromInchesToFeetAndInches(11);
function getCompoundInterest(data) {
    let sum = data[0];
    let interestRate = data[1] / 100;
    let compoundingPeriod = data[2];  //months
    let time = data[3];
    let compoundingFrequency = 12 / compoundingPeriod;

    let compoundInterest = sum * (1 + interestRate / compoundingFrequency) ** (compoundingFrequency * time);

    console.log(compoundInterest.toFixed(2));
}

getCompoundInterest([1500, 4.3, 3, 6]);
getCompoundInterest([100000, 5, 12, 25]);
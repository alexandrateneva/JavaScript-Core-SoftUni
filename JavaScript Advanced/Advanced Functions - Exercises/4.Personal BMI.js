function getPersonalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        }
    };

    let bmi = Math.round(weight / Math.pow((height / 100), 2));
    person.BMI = bmi;
    if (bmi < 18.5) {
        person.status = 'underweight';
    }
    else if (bmi >= 18.5 && bmi < 25) {
        person.status = 'normal';
    }
    else if (bmi >= 25 && bmi < 30) {
        person.status = 'overweight';
    }
    else {
        person.status = 'obese';
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(getPersonalBMI('Honey Boo Boo', 9, 57, 137));
console.log(getPersonalBMI('Peter', 29, 75, 182));
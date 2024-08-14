console.log('js file is loaded')

//Exercise 1 ----

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(3,9));

//Exercise 2 -----

function isAdult(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor'
    }
}
console.log(isAdult(21));

//Exercies 3 --------

function isCharAVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || 
        char === 'u'){
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel('a'));
console.log(isCharAVowel('b'));
console.log(isCharAVowel('e'));

//Exercise 4 -------

function generateEmail(name, domain) {
    return name + '@' + domain;
}
console.log(generateEmail("johnsmith", "example.com"));

//Exercise 5 --------

function greetUser(Sam) {
    return 'Good' + 'Morning' + ',' + 'Sam!';
}
console.log(greetUser("Sam"));

//Exercise 6 -------

function maxOfThree(x, y, z) {
    return Math.max(x, y, z);
}
console.log(maxOfThree(5, 10, 8));

//Exercise 7 -------

function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}
console.log(calculateTip(50, 20));

//Exercise 8 ---------

function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
        return (temperature -32) * 5/9;
    } else {
        return "invalid scale.";
    }
}
console.log(convertTemperature(32, "C"));
console.log(convertTemperature(32, "F"));

//Exercise 9 ---------

function basicCalculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0){
                return num1 / num2;
            }
            
    }
}
console.log(basicCalculator(10, 5, "subtract"));

//Exercise 10 -------


function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >=80) {
        return 'B';
    } else if (score >=70) {
        return 'C';
    } else if (score >=60) {
        return 'D';
    } else if (score >=50) {
        return'Fail';
    }
}
console.log(calculateGrade(100));
console.log(calculateGrade(85));
console.log(calculateGrade(73));
console.log(calculateGrade(65));
console.log(calculateGrade(50));

//Exercise 11 ---------


function createUsername(firstName, lastName) {
    let firstPart = firstName.substring(0,3);
    let lastPart = lastName.substring(0, 3);
    let totalLength = firstName.length + lastName.length;
    let username = firstPart + lastPart + totalLength;
    return username;
}

console.log(createUsername('Samantha', 'Green'));
console.log(createUsername('John', 'Doe'));
console.log(createUsername('Alex', 'Smith'));
console.log(createUsername('Devin', 'Garcia'));


const WORLD = 'World';

// helloWorld function
function helloWorld() {
    return greeter();
}

function greeter(name = WORLD) {
    return `Hello, ${name}!`;
}

function sayHello(name = 'World') {
    if(toString.call(name) !== '[object String]' || isNumericString(name)) {
        name = WORLD;
    }
    return greeter(name);
}

function isFive(input) {
    return input === 5 || parseInt(input) === 5;
}

function isNumericString(input) {
    console.log(`isNumber(${input}) === ${!isNaN(input)}`)
    return !isNaN(input);
}

function isEven(input) {
    if (typeof input === 'boolean') return false;
    if (typeof input === 'string' && input.length === 0) return false;
    return input % 2 === 0;
}

function isVowel(input) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    return vowels.includes(input);
}

function add(lhs, rhs) {
    if(isNumericString(lhs) && isNumericString(rhs)) {
        return parseFloat(lhs) + parseFloat(rhs);
    }
    return NaN;
}
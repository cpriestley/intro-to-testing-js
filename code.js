// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    switch(toString.call(name)) {
        case '[object String]':
            return isEmptyString(name) || isNumber(name)
                ? helloWorld()
                : `Hello, ${name}!`;
        default:
            return helloWorld();
    }
}

function isFive(input) {
    return input === 5 || parseInt(input) === 5;
}

function isEmptyString(input) {
    return input.length === 0;
}

function isNumber(input) {
    return !isNaN(input);
}

function isEven(input) {
    if (typeof input === 'boolean') return false;
    if (typeof input === 'string' && input.length === 0) return false;
    return input % 2 === 0;
}

function isVowel(input) {
    if (isSingleLetter(input)) {
        if ('aeiou'.includes(input.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function isSingleLetter(input) {
    if (typeof input === 'string') {
        return input.match(/^[a-zA-Z]$/) || [].length;
    }
    return false;
}
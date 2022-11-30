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

console.log(isFive(5));
console.log(isFive("5"));
console.log(isFive("Five"));
console.log(isFive(null));
console.log(isFive({}));
console.log(isFive([]));
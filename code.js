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
function isEmptyString(input) {
    return input.length === 0;
}

function isNumber(input) {
    return !isNaN(input);
}
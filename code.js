// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    switch(toString.call(name)) {
        case '[object Null]':
        case '[object Undefined]':
        case '[object Boolean]':
            return helloWorld();
            break;
        default:
    }
    return `Hello, ${name}!`;
}
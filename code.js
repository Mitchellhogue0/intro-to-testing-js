// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function notHelloWorld(){
    return "Hopefully this works";
}

function sayHello(input) {
    if (input === true){
        return "Hello, World!"
    }else {
        return "Hello, " + input + "!";
    }
}

function isFive(input){
    if(input === 5){
        return true;
    } else {
        return false;
    }
}

function isEven(input){
    if(input % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    // return /[aeiouAEIOU]/.test(input)
console.log(typeof input);
if (typeof input === "boolean"){
    return false;
}
if (input?.toLowerCase() === "a" || input === "e" || input === "i" || input === "o" || input === "u"){
    return true;
}else{
    return false;
}
}

console.log(isVowel(false));



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
    let vowels = ["a", "e", "i", "o", "u"]

    return typeof input === "string" && vowels.includes(input.toLowerCase())
}
isVowel();


function add (num1,num2){
    return parseInt(num1) + parseInt(num2);
}



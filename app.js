const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+/"

const passwordBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const getRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (Password = "") => {
    if(upperInput.checked){
        Password += getRandom(upperSet)
    }
    if(lowerInput.checked){
        Password += getRandom(lowerSet)
    }
    if(numberInput.checked){
        Password += getRandom(numbers)
    }
    if(symbolInput.checked){
        Password += getRandom(symbols)
    }
    if (Password.length < totalChar.value){
        return generatePassword(Password)
    }
    passwordBox.innerText = truncateString(Password, totalChar.value);
    
}
generatePassword();
document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)

function truncateString(str, num) {
    if(str.length >num) {
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}

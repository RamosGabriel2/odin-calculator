let num1 = [];
let num2 = [];
let result = 0;
let num1Bool = false;
let num2Bool = false;
let operatorBool = false;
let operatorSign = "";
let resultBool = false;

let saveNumber = (e) => {
    
    if(!operatorBool){
        num1.push(e.target.value)
        num1Bool = true;
        showResult.textContent = convertArray(num1);
    }else{
        num2.push(e.target.value)
        num2Bool = true;
        showResult.textContent = `${convertArray(num1)} ${operatorSign} ${convertArray(num2)}`;
    }
}

let saveSign = (e) => {

    if(num1Bool && num2Bool && operatorBool){
        calculator();
        operatorSign = e.target.value;
        num2 = [];
        // num1 = result;
        operatorBool = true;
        showResult.textContent = `${num1} ${operatorSign}`;
    }else if(num1Bool && !operatorBool){
        operatorSign = e.target.value;
        operatorBool = true;
        showResult.textContent = `${convertArray(num1)} ${operatorSign}`;
    }

}

let calculator = () => {
    if(num1Bool){
        if(typeof num1 != 'number'){
            num1 = convertArray(num1);
        }
    }
    num2 = convertArray(num2);
    if(num1Bool && num2Bool && operatorBool){
        switch(operatorSign){
            case "+":
                result = num1 + num2;
                resultBool = true;
                break;

            case "-":
                result = num1 - num2;
                resultBool = true;
                break;

            case "*":
                result = num1 * num2;
                resultBool = true;
                break;

            default:
                if(num2 == 0){
                    showResult.textContent = "bruh"
                    break;
                }else{
                    result = num1 / num2;
                    resultBool = true;
                    break;
                }
        }
    }

    if(resultBool){
        num1 = [];
        num2 = [];
        showResult.textContent = result;
        num1.push(result);
        num2Bool = false;
        operatorBool = false;
    }

}

let convertArray = (array) => {
    let aux = ""
    array.forEach(item => aux = aux + item)
    return Number(aux);
}

let deleteAll = () => {
    num1 = []
    num2 = []
    result = 0;
    num1Bool = false;
    num2Bool = false;
    operatorBool = false;
    operatorSign = "";
    resultBool = false;
    showResult.textContent = "0";
}

const num = document.querySelectorAll('.btnNumber');
const sign = document.querySelectorAll('.btnSign');
const equal = document.querySelector('.btnEqual');
const clearAll = document.querySelector('.btnDelete')
const showResult = document.querySelector('.showR');

num.forEach(btnNumber => btnNumber.addEventListener('click', saveNumber));
sign.forEach(btnSign => btnSign.addEventListener('click', saveSign));
equal.addEventListener('click', calculator);
clearAll.addEventListener('click', deleteAll);
let input = document.querySelector("input"); //окно вывода 
let equal = document.getElementById("equal"); //=
let del = document.getElementById("del"); // стереть 



function calc (sign){
    switch(sign){
        case "+":
            input.value = +num + +num1;
            num = input.value;
            num1 = " ";
            sign = "";
            break;
        case "-":
            input.value = num - num1;
            num = input.value;
            num1 = " ";
            sign = "";
            break;
        case "*":
            input.value = (num * num1).toFixed(4);
            num = input.value;
            num1 = " ";
            sign = "";
            break;
        case "/":
            input.value = (num / num1).toFixed(4);
            num = input.value;
            num1 = " ";
            sign = "";
            break;
    }
}



let sign = "";// какая операция происходит
for( let s of document.getElementsByClassName('sign')){
    s.addEventListener('click', () => {
        if(num === " "){
            input.value = "";
        }else if(sign == ""){
            sign = s.innerHTML;
            input.value += sign;
        }else{
            calc(sign);
            sign = s.innerHTML;
            input.value += sign;
        }
    })
}

let num = " ";
let num1 = " ";

for(let n of document.getElementsByClassName('num')){
    n.addEventListener("click", () => {
        if(sign.length === 0){
            num += n.innerHTML;
            input.value += n.innerHTML;
            num = input.value;
        }else{
            num1 += n.innerHTML;
            input.value += n.innerHTML;
        }

    })
}

equal.addEventListener('click', () => {     //=
        calc(sign);
        num1 = " ";
        sign = "";
        num = input.value;
})

del.addEventListener('click', () => {
    input.value = "";
    num1 = " ";
    num = " ";
    sign = "";
})





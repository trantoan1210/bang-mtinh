function congso(){
   let number1 = +document.getElementById('number1').value;
let number2 = +document.getElementById('number2').value;
    ketqua = number1 + number2;
    document.getElementById('ketqua').innerHTML = "Result Addition: " + ketqua;
}
function truso(){
 let number1 = +document.getElementById('number1').value;
 let number2 = +document.getElementById('number2').value;
    ketqua = number1 - number2;
    document.getElementById('ketqua').innerHTML = "Result Subtraction: " + ketqua;
}
function nhanso(){
    
    let number1 = +document.getElementById('number1').value;
let number2 = +document.getElementById('number2').value;
    ketqua = number1 * number2;
    document.getElementById('ketqua').innerHTML = "Result Multiplication: " + ketqua;
}
function chiaso(){
    var number1 = +document.getElementById('number1').value;
var number2 = +document.getElementById('number2').value;
    
    ketqua = number1 / number2;
    document.getElementById('ketqua').innerHTML = "Result Division: " + ketqua;
}
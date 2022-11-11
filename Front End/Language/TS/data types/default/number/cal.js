// static calculator
var a = 10;
var b = 20;
console.log(a + b);
function myadd() {
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    console.log(parseInt(val1) + parseInt(val2));
}
function mymul() {
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    console.log(parseInt(val1) * parseInt(val2));
}
function mymod() {
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    console.log(parseInt(val1) % parseInt(val2));
}
function mysum() {
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    document.getElementById('num2').innerHTML = "".concat(parseInt(val1) - parseInt(val2));
    console.log(parseInt(val1) - parseInt(val2));
}
function mycal() {
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    document.getElementById('root').innerHTML = "jjj".concat(parseInt(val1) - parseInt(val2));
    console.log(parseInt(val1) - parseInt(val2));
}

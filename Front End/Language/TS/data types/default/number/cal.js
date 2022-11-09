// static calculator
var a = 10;
var b = 20;
console.log(a + b);
function mycal() {
    var val1 = document.getElementById('num1').value;
    var val2 = document.getElementById('num2').value;
    console.log(parseInt(val1) + parseInt(val2));
    console.log(parseInt(val1) * parseInt(val2));
    console.log(parseInt(val1) % parseInt(val2));
    console.log(parseInt(val1) - parseInt(val2));
    var screen = document.getElementById('screen');
    buttons = document.querySelectorAll('button');
    var screenValue = '';
    for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
        item = buttons_1[_i];
        item.addEventListener('click', function (e) {
            buttonText = e.target.innerText;
            console.log('Button text is ', buttonText);
            if (buttonText == 'X') {
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if (buttonText == 'C') {
                screenValue = "";
                screen.value = screenValue;
            }
            else if (buttonText == '=') {
                screen.value = eval(screenValue);
            }
            else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        });
    }
}

// static calculator

var a:number=10
var b:number=20
console.log(a+b)
function myadd(){
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)+parseInt(val2) )
}
    function mymul(){
        var val1=(document.getElementById('num1')as HTMLInputElement).value
        var val2=(document.getElementById('num2')as HTMLInputElement).value  
    console.log(parseInt(val1)*parseInt(val2) )
    }
    function mymod(){
        var val1=(document.getElementById('num1')as HTMLInputElement).value
        var val2=(document.getElementById('num2')as HTMLInputElement).value 
    console.log(parseInt(val1)%parseInt(val2) )
    }
    function mysum(){
        var val1=(document.getElementById('num1')as HTMLInputElement).value
        var val2=(document.getElementById('num2')as HTMLInputElement).value;
        (document.getElementById('num2')as HTMLHeadElement).innerHTML=`${parseInt(val1)-parseInt(val2)}`
    console.log(parseInt(val1)-parseInt(val2) )

}
function mycal(){
    var val1=(document.getElementById('num1')as HTMLInputElement).value;
    var val2=(document.getElementById('num2')as HTMLInputElement).value ;
    (document.getElementById('root')as HTMLHeadElement).innerHTML=`jjj${parseInt(val1)-parseInt(val2)}`
    console.log(parseInt(val1)-parseInt(val2) )

}
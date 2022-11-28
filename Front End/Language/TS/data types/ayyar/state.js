// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// //console.log(3)
// setInterval(()=>{
//     console.log(1)
// },1000)
// console.log(3)
// var initailstate=0
// setInterval(()=>{
//     console.log(initailstate++)
// },1000)
var initailstate = 0;
var initailstateofmunites = 0;
setInterval(function () {
    console.log("sec:", initailstate++, "munite:", initailstateofmunites, "houras");
    if (initailstate == 60) {
        initailstateofmunites++;
        console.log("munite:", initailstateofmunites);
    }
}, 1000);

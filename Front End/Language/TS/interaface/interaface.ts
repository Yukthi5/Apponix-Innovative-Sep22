interface Imarrage3{
    gift:string|number|boolean,
    gift2:string|number|boolean,
}
function marrage3({props:Imarrage3}){
console.log(Imarrage3)
}
marrage3({gift:"watch"})
marrage3({gift2:"watch"})


var glass={
    frame:'squre',
    shape:'squre',
}
console.log(glass)
function sayHello(name) {
    console.log('Hello ' + name + ' !')
}
sayHello('Amr')
sayHello('Aya')

// =========================

// setTimeout(handlerFunction,time in ms)
setTimeout(wait,2000)

function wait(){
    console.log('wait 2 seconds')
}
// ===================

// let counter = 0
// function timeout () {
//     setTimeout(function(){
//         console.log('hi' + counter++)
//         timeout()
//     },2000)
// }
// timeout()
 // ctl + c  => to stop

 //============================
(function () {
     console.log('immediately invoked function expression')
 }) ()

// function sum(a, b) {
//     return a + b 
// }
// sum(20, 25)



// function mult(a, b) {
//     return a * b;    
// }







// function calc() {
//     let num = +prompt("Введите число");
//     // let square = num * num;
//    return mult(num, num);
// }
// console.log(calc());





// function power(a, b) {
//     let sum = Math.pow(a, b)
//     return sum + a
// }
// console.log(power(10, 3));





// function greeting(name) {
//     // let name = prompt("Введите имя")
//     // return alert("Hello+" + name)
//     return "Hello" + name
    
// }
// console.log(greeting("+Arsen"));








// const quartetOf = (month) =>{
//     if(month <= 3){
//         return alert("First quartet")
//     }
//     if(month <= 6){
//         return alert("Second quartet")
//     }
//     if(month <= 9){
//         return alert("Thirth quartet")
//     }
//     if(month <= 12){
//         return alert("Fourth quartet")
//     }
// }
// console.log(quartetOf(15));





// numberInput = +prompt("Ваше число")
// function num(number) {
//     if (number > 50) {
//         return "Больше"${number} 
//     }else {
//         return number
//     }
// }
// console.log(num(numberInput));







    // Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.
    // Задача2. Написать функцию, которая принимает аргументом число(больше 0)
    // и возвращает массив чисел от 0 до этого числа



    // Задача1
const num = (a, b) => {
    if(a > b){
    return a
    }else{
    return b
    }
}
console.log(num(5,14));






    // Задача2
let arr = []
const createArr = (numb) => {
    for (let i = 0; i <= numb; i++) {
            arr.push(i)
    }
    return arr
}
console.log(createArr(5));


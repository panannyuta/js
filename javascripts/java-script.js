document.addEventListener("DOMContentLoaded", function(){
    // задачка 1
    let str = 'abcde';
    alert(str[0]);
    alert(str[1]);
    alert(str[2]);
    alert(str[3]);
    alert(str[4]);


    // задачка 2
    let a = parseInt(prompt("Введите первое число:"));
    let b = parseInt(prompt("Введите второе число:"));
    console.log(a > 0 || b > 0);

    // задачка 3
    let age = parseInt(prompt("Введите ваш возраст:"));
    if (age >= 18) {
        console.log("Совершеннолетний");
    } else {
        console.log("Несовершеннолетний");
    }
    






});

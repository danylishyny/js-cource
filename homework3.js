//1.2 Отримайте довжину об'єкта post і напишіть скрипт, який повинен повернути список значень ключів об'єкта "post"

const post = {
    country : 'Ukraine',
    region : 'Vinnitsya',
    city : 'Zhmerynka'
}
let length = Object.keys(post).length;
console.log(length)
for (let key in post){
    console.log(post[key]);
}


//2. Напишіть функцію "helloColleagues"...
function helloColleagues (company, team){
    return `Я працюю в ${company} компанії в чудовій команді ${team} `;
}
console.log(helloColleagues('boosta','essay'))

//2.1 Напишіть функцію isEmpty (obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.

function isEmpty(obj) {
    for (let keys in obj){
        return false;
    }
}
let schedule = {};

console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );

//2.2 Напишіть функцію, яка приймає два числа і повертає максимальне з двох переданих чисел. Потрібно обробити і від"ємні значення
function maxNumber (a, b) {
    if (a>= b)
        return a;
    else
        return b;
}
console.log(maxNumber(10,9))

//3. Напишіть функцію, яка підсумує всі зарплати і повертає це значення. У прикладі вище результат має бути 1000.

let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500 
} 
function sumSalaries(salaries){
    let sum = 0;
    for (let salary of Object.values(salaries)){
       sum += salary 
}
return sum;
}
console.log(sumSalaries(salaries))

//3.1 Напишіть функцію, яка повертає ім’я та значення працівника, який отримує найбільшу зарплату.

let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500
} 
function highSal(obj){
    let highestVal = 0;
    let nameHigh;
    for (let key in obj){
        if(obj[key] > highestVal){
            highestVal = obj[key];
            nameHigh = key;
        }
    }
    return `${nameHigh} salary is ${highestVal}`
}
console.log(highSal(salaries))

//3.2 Створіть функцію multiplyNumeric (obj), яка помножує всі числові властивості об"єкта на 2

let menu = { width: 200, height: 300, title: "My menu" };
let multiplyNumeric = (obj) => {

    for (let key in obj){
    
    if (typeof(obj[key]) == "number")
 
    { obj[key] *=2; }

}
};
console.log(multiplyNumeric(menu));

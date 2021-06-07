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
    
    //let keys = Object.entries(salaries);
    let sum = 0 
    for (let key in salaries){
        if(salaries[key] > sum);
       
        
    }
    console.log(sum)
    
    // for (let key in salaries){
    //     console.log(key);
    // }

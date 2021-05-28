// Example 1
 
let age = '19'
const ternarCondition = age <= 90 ? 'Ваш возраст соответствует' : 'Ваш возраст не соответствует'
console.log(ternarCondition);


// Example 2
let names = prompt ('Будь ласка, введіть своє ім`я');
alert (`Привіт, ${names}  приємно познайомитися`);
let birthday = prompt ('Будь ласка, введіть рік народження ?');
const currentYear = new Date();
let years = currentYear.getFullYear() - birthday;
alert ('You are ' + years + ' years old');

//Example 3
let num = 55;
if (num < 60) {
    console.log(`current number ${num} equals to letter 'F'`);
} else if (num < 70){
    console.log(`current number ${num} equals to letter 'D'`);
} else if (num < 80){
    console.log(`current number ${num} equals to letter 'C'`);
} else if (num < 90){
    console.log(`current number ${num} equals to letter 'B'`);
} else if (num < 100){
    console.log(`current number ${num} equals to letter 'A'`);
} else {
    console.log(`current number ${num} not equals to any letters`);
}

//Example 4
let language = 'spanish';
switch (language) {
    case 'chinese or mandarin' :
        console.log('MOST number of native speakers!');
        break;
    case 'spanish' :
        console.log('2nd place in number of native speakers');
        break;
    case 'english' :
        console.log('3rd place');
        break;
    case 'hindi' :
        console.log('Number 4');
        break;
    case 'arabic' :
        console.log('5th most spoken language')
        break;
    default : 
        console.log('Great language too :D')
}

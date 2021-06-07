//Example 1 Напишіть функцію, яка повинна повертати суму всіх чисел усередині масиву. Функція повинна враховувати позитивні та від'ємні значення

const numbers = [1, -1, 2, 3];
    function sum(numbers) {
        let s = 0;
        for (i = 0; i < numbers.length; i++){
           s += numbers[i]
        }
        return s
     }
    console.log(sum(numbers));

//Example 2 Коли ви запускаєте функцію arrayFromRange, ...

const numbers = arrayFromRange(1, 4); 
function arrayFromRange(min, max) {
    for (let i = 0; i < arrayFromRange.length; ++i) {
        //if (arrayFromRange[i] > max) max = arrayFromRange[i];
        //if (arrayFromRange[i] < min) min = arrayFromRange[i];
        
    }
    console.log()
}

//Example 3 Потрібно створити функцію, яка повертатиме максимальне число з масиву

const numbers = [1, 2, 3, 4, 5];
const maxNumber = getMax(numbers);

function getMax([]) {
    let max = Math.max.apply(null, numbers)
    return max
    }
    
    console.log(maxNumber)
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

    //or 
    let reduce = numbers.reduce((sum, current) => sum +current,0);
    console.log(reduce);

//Example 2 Коли ви запускаєте функцію arrayFromRange, ...


function arrayFromRange(min, max) {
    let length = max-min;
    let arr = new Array();
    for (let i = 0; i < length; i++) {
        let a = min++;
        arr.push(a);
        
    }
    arr.push(max);
    return arr;
    
}

const numbers = arrayFromRange(1, 4);
console.log(numbers);

const negativeNumbers = arrayFromRange(-10, -8)
console.log(negativeNumbers);

//Example 3 Потрібно створити функцію, яка повертатиме максимальне число з масиву

const numbers = [1, 2, 3, 4, 5];
const maxNumb = getMax (numbers);

function getMax(someArray) {
    let maxNumb = 0;
    for (let numb of someArray){
        if (numb > maxNumb){
            maxNumb = numb;
            }
        }
        return maxNumb
    }
    console.log(maxNumb)

// Example 4 На основі масиву movies потрібно повернути усі фільми, які були випущені в 2021 році з рейтингом більше 4

let movies = [
    {title: 'a', year: 2021, rating: 4.7},
    {title: 'b', year: 2020, rating: 4.4},
    {title: 'c', year: 2021, rating: 4.3},
    {title: 'd', year: 2021, rating: 3.9},
    ]

    let movies2021 = movies.filter(function(movie) {
        return movie.year == 2021 && movie.rating > 4.0
    });
   
   movies2021.sort(function(a,b) {
    return b.rating - a.rating;
  });;
   

  //or
   let movieTitle = movies2021.map(a => a.title);
   console.log(movieTitle);

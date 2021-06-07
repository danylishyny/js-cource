let posts = [1, "field", true, undefined, function arr(){console.log} ,

[{title: 'John', age: 5,}], {}, {a: []}]

let firstItem = posts[0];
let lastItem = posts[posts.length-1];

console.log(firstItem)
console.log(lastItem)
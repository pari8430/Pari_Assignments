function test()
{
    console.log("Hello World");
}

function test2(num1, num2)
{
    return num1 + num2;
}

test();
let sum = test2(5, 10);
console.log("The sum is: " + sum);

const testme = () => console.log("This is an arrow function");
let sum2 = (n1, n2) => (n1 + n2);

testme();
console.log(sum2(20, 30));

var arr = [10, 20, 30, 40, 50];
arr.map((ele) => console.log(ele));

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(value => value * value);
console.log(squares);

const people = [{id : 1, name : "John", country : "USA"},
                {id : 2, name : "Alice", country : "UK"},
                {id : 3, name : "Bob", country : "Canada"}
]
const names = people.map(p => p.name);
console.log(names);

var filteredNumbers = numbers.filter(x => x > 3);
console.log(filteredNumbers);


console.log('hello world')

// function takes an input, does something, and can create an output

function addition(a, b) {
    // function body goes here --> what it's doing
    return a + b
}

let whatever1 = 1
const whatever2 = 2

whatever1 = "one"
// whatever2 = "two" // you cannot do this!

const myArrowFunc = (param,param2) => param + param2

// for loop --> goes through all the indices

const myArray = [5,6,7]

myArray.push(8)

// for (let index = 0; index < myArray.length; index++) {
//     myArray[index] += 5
// }

console.log(myArray)

// myArray.forEach( item => console.log(item + 5) )

myArray.forEach((oldNumber, index) => {
    myArray[index] = oldNumber + 4
})
// .forEach destructively mutates the old array

// myArray.map takes in a callback function
const mappedArray = myArray.map( item => item + 4 )
// the (anonymous) arrow function is our callback
// it gets called once for each item in the array

// map will return a new array

const two = 2

if (true) {

    const one = 1
    // console.log( two ) <--- will work since `two` is global scope
    // console.log( one ) <--- will work since `one` is in scope
    if (true) {
        console.log( one )
        console.log( two )

        const three = 3

        console.log(three)
    }
    // console.log( three ) <--- will not work since it's out of scope
}

// console.log( one ) <--- will not work since it's out of scope

function sayStuff() {
    // console.log( three ) <--- will not work since three is out of scope
    const four = 4
    console.log(four)
}

// console.log(four) <--- will not work since four is out of scope
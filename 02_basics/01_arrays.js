
const myArray = [0, 1, 2, 3, 4, 5]

console.log(myArray[2]);

//Array methods

myArray.push(6)
myArray.push(7)
myArray.pop()

console.log(myArray);

myArray.unshift(8)
myArray.shift()

console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArr = myArray.join()

console.log(myArray);
console.log(newArr);
console.log(typeof(newArr));

//slice , splice

console.log("A ",myArray);

const myarr1 = myArray.slice(1, 3)

console.log(myarr1);
console.log("B ", myArray);

const myarr2 = myArray.splice(1, 3)
console.log(myarr2);

a

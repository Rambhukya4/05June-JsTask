//1.array with the elements in reverse order.

let array1=["Ram","Raghu","Ramesh","Dilip","Shiva" ]
// let namesIsOrder = numbers.sort((a, b) =>  a - b  );
// console.log(namesIsOrder);
let orderReverse = ()=>array1.reverse();
document.write(`The reverese orde of an given array is ${orderReverse()}`
+"<br>")
console.log(`The reverese orde of an given array is ${orderReverse()}`)




//2. checking wehether the element is there in give arry or not

let checkElement = ()=>array1.includes("Ram");
document.write(checkElement()+"<br")
console.log(checkElement())



//3. function that takes an array and an element, and returns the index of the element in the array. If the element is not found, return -1.
const array2 = [1, 2, 3, 4, 5];
const findElementIndex = (array, element) => array.indexOf(element);
console.log(findElementIndex(array2, 3)); 
console.log(findElementIndex(array2, 10)); 

array3=["Ram","Raghu","Ramesh","Dilip","Shiva" ]
function findIndex(array,element){
    return array.indexOf(element)
}
console.log(findIndex(array3,"Ramesh"));
console.log(findIndex(array3, "Rambabu"))


//4.Write a function that takes an array, removes the second element, and inserts two new elements in its place. Return the modified array.
let array4=["Ram","Raghu","Ramesh","Dilip","Shiva"]
let removedVal =array4.splice(2,1);
console.log(`array after removel of Ramesh is = ${array4}`)
console.log(`removed value from array4 is ${removedVal} `)


//5. Write a function that takes an array and returns a new array containing the first three elements.
let array5=["Ram","Raghu","Ramesh","Dilip","Shiva"]
let firstThreeStudent=array5.splice(0,3);
console.log(firstThreeStudent);

//6 Write a function that takes two arrays and returns a new array that is the concatenation of the two arrays.
const arrayX=["Ram","Raghu","Shiva"]
let arrayY=["Dilip","Shirisha","shravey"]
let totalStdn=arrayX.concat(arrayY)
document.write("totalStdn")

//lastindexof
let fruits=["Apple","Banana","Grapes","Banana","mango","Kiwi","Banana"]
let indexPosition=fruits.indexOf("Banana");
console.log(indexPosition);
let lastIndexPosition=fruits.lastIndexOf("Banana");
console.log(`The index of lastelement(Banana) is = ${lastIndexPosition}`)


//7. Write a function that takes an array of strings and returns the array sorted in alphabetical order.

//on numbers
let array6=[7,5,6,3,1,2,4,9,8,10]
array6.sort((a,b)=>a-b);
console.log(array6)

//on strings
let array7=['banana', 'Apple', 'cherry','Charry', 'Date', 'elephant', 'Fig', 'grape'];
let orderdArray=array7.sort((a,b)=>a.localeCompare(b.toLowerCase()));
console.log(array7)


//9. Write a function that takes an array of numbers and returns a new array containing only the even numbers.


let array8=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let evenNum= array8.filter(array8=>array8%2===0);
console.log(evenNum)
//normal fun


function isEven(number){
    return number%2===0;
}
const array9=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const evenNumber = array9.filter(isEven);
console.log(evenNumber)



//10. Write a function that takes an array of numbers and returns the sum and multiplication of all the numbers in the array.


let array10=[8,4,5,7,2,4,]
let reducedArray =array10.reduce((accumulator,value)=>{
    // return accumulator+value
    return accumulator+value
},1);
console.log (reducedArray)

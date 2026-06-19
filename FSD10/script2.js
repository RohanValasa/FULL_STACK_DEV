const arr1 = [1,2,3,"rohan"];
let size = arr1.length;
console.log("Size of the array "+size);

//setting the small length 
arr1.length = 2;
console.log("New Size of the array "+arr1)
//setting the large length 
arr1.length = 10;
console.log("New Size of the array "+arr1)

let myList = arr1.toString();
console.log("String Converted array : "+myList);


let arr2 = [5,6,73,"tarun","hari",4.3]
console.log("Original Array : "+ arr2)
arr2.pop();
console.log("Array after popping : "+arr2)
let popped = arr2.pop();
console.log("Popped element : "+popped)


arr2.push("nithin")
console.log("Array after pushing : "+arr2)


let newLength = arr2.push("raj")
console.log("Push returns new length : "+newLength)

arr2.shift();
console.log("Array.shift() : "+arr2)

arr2.unshift(48);
console.log("Array.unshift()\n added 49 at the start :"+arr2)

const merged_arr = arr1.concat(arr2);
console.log("Merged array : "+merged_arr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("After Splice : "+fruits);

const citrus = fruits.slice(1);
console.log(citrus)
    




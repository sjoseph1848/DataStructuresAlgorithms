/*
Build a function that takes an array of numbers. 
The function should print the second to last value in the array. 
Return the first odd value in the array 
*/

function another(arr){
  console.log(arr.length -1)
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      
      return arr[i]
    }
  }
}

var a = [1,2,3,4]
var first = another(a)
console.log(first)
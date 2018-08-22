/*Create a function that takes arrays of numbers. 
The function should print the lowest value in the array, and 
return the highest value in the array. 
*/

function lowHigh(arr){
  var low = arr[0];
  var high = arr[0];
for(var i = 0; i < arr.length; i++){
  if(arr[i] < low){
    console.log("Num " + arr[i] + "What is Low " + low)
    low = arr[i];
    console.log("Num " + arr[i] + "What is Low " + low)
  } if (arr[i] > high){
    high = arr[i];
  }
}
  console.log(low);
  console.log(high);
  return high;
}

a = [5,1,2,3,4];
lowHigh(a);
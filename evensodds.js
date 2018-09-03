/*
Create a function that accepts an array. 
Every time that array has three odd values in a row
print "that's odd!". 
Every time that array has three evens in a row print "even more so"
*/



function evenOdds(arr) {
  var evencount = 0;
  var oddcount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      oddcount = 0;
      evencount++;
      if (evencount == 3) {
        evencount = 0;
        console.log("Even more so!");
      }
    } else {
      evencount = 0;
      oddcount++;
      if (oddcount == 3) {
        oddcount = 0;
        console.log("That's odd!");
      }
    }
  }
  return 0;
}
a = [2, 4, 6, 9, 11, 13];
evenOdds(a);
/*Set myNumber to 42. Set myName to your name
Now swap myNumber into myName & vice versa. 
*/

let myNumber = 42;
let myName = "SJ";
let temp = myName;

myName = myNumber;
myNumber = temp;

console.log(myNumber,myName);
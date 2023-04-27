function FirstReverse(str) {
  // Split the string into an array of characters
  var charArray = str.split("");

  // Reverse the array of characters
  var reversedArray = charArray.reverse();

  // Join the array of characters back into a string
  var reversedString = reversedArray.join("");

  // Return the reversed string
  return reversedString;
}
   
// keep this function call here 
console.log(FirstReverse(readline()));

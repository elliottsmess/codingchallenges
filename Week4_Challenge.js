function LongestWord(sen) { 

  // code goes here  
  sen = sen.replace(/[^a-zA-Z0-9\s]/g, '');
  var words = sen.split(' ');
  var longestWord = words[0];


   for (var i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}
// keep this function call here 
console.log(LongestWord(readline()));

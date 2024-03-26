
window.addEventListener("load",()=> {
    const button1 = document.getElementById("word-submit");

button1.addEventListener("click", isPalindrome);

function isPalindrome(){
  var wordCheck = document.getElementById("palindrome")
  
  var input = document.getElementById("word-input");

  var word = input.value;

  var wordLength = word.length;
  var v = (wordLength-1)
  var secondHalf = "";
  var firstHalf = "";
  for(var i = 0 ; i < Math.floor(wordLength/2);i++) {
     firstHalf += word[i];
     secondHalf += word[v];
      v--;
  };
  wordCheck.textContent = (firstHalf===secondHalf) ? word + " is a Palindrome!" : word+" isn't a Palindrome!"
  wordCheck.style.visibility = 'visible';
  
  /*test cases
  console.log(firstHalf);
  console.log(secondHalf)
  console.log(word);
  console.log(Math.floor(wordLength/2));
  */
  }
})




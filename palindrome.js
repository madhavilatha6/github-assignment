function checkPalindrome(string) {    
    const reversedString = string.split('').reverse().join('');
    if(string === reversedString)
          return true;
    else
          return false;
}
result = checkPalindrome("madhu")
if(result == true){
	console.log("The given string is Palindrome");
}
else{
  	console.log("The given string is NOT Palindrome");
}
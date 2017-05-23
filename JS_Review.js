//DATATYPES
var string = "string";
var number = 13;
var boolean = (1 < 2);
var array = [1, 2, 3];
var object = {
  key: value,
  key2: value2
};


//METHODS
var message = "Hello World";
var x = message.toUpperCase();
      //--> "HELLO WORLD"

var number = 1234;
var y = number.toString();
      //--> "1234"



//FUNCTION
var randomNum = function(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};




//FUNCTION WITH 3 METHODS
function reverseString(str) {
   // Step 1. Use the split() method to return a new array
   var splitString = str.split(""); // var splitString = "hello".split("");
   // ["h", "e", "l", "l", "o"]

   // Step 2. Use the reverse() method to reverse the new created array
   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
   // ["o", "l", "l", "e", "h"]

   // Step 3. Use the join() method to join all elements of the array into a string
   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
   // "olleh"

   //Step 4. Return the reversed string
   return joinArray; // "olleh"
}

reverseString("hello");

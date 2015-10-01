// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function findLargestNumber(numbers) {
  var biggest = numbers.reduce(function(biggestNum, currentNum) {
    if (currentNum > biggestNum) {
      return currentNum;
    } else {
      return biggestNum;
    } 
  });
  return biggest;
};


// ---------------------------
// 2. Find longest string
// ---------------------------

function findLongestString(letters) {
  var longest = letters.reduce(function(longestString, currentString){
    if (currentString.length > longestString.length) {
      return currentString;
    } else {
      return longestString;
    }
  });
  return longest;
};


// ---------------------------
// 3. Find even numbers
// ---------------------------

function evenNums(numbers) {
  var evens = numbers.filter(function(number){
    return number%2 === 0;
  });
  return evens;
};

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function oddNums(numbers) {
  var odds = numbers.filter(function(number){
    return number%2;
  });
  return odds;
};

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------


function findIs(strings){
  var findString = strings.filter(function(string){
    return string.indexOf('is') >= 0;
  });
  return findString;
};


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
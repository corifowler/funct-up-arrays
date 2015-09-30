// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
  if (a>b) {
    return a;
  } else 
    return b;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(c,d,e){
    if ((c > d) && (c > e)) {
      return c;
    } else if ((d > c) && (d > e)) {
      return d;
    } else {
      return e;
    };
  }

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if ((char === 'a')||(char === 'e')||(char === 'i')||(char === 'o')||(char === 'u')||(char === 'y')) {
    return true;
  } else {
    return false;
  };
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var translate = function(phrase) {
  var phraseArray = phrase.split('');
  var translatedArray = phraseArray.map(function(letter){
    if ((letter === 'b')||(letter === 'c')||(letter === 'd')||(letter === 'f')||(letter === 'g')||(letter === 'h')||(letter === 'j')||(letter === 'k')||(letter === 'l')||(letter === 'm')||(letter === 'n')||(letter === 'p')||(letter === 'q')||
        (letter === 'r')||(letter === 's')||(letter === 't')||(letter === 'v')||(letter === 'w')||(letter === 'x')||(letter === 'z')) {
      letter = letter + 'o' + letter;
    };
    return letter;
  });
  var finalPhrase = translatedArray.join('');
  return finalPhrase;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(stringPhrase){
   var stringArray = stringPhrase.split('');
   var backArray = stringArray.reverse();
   var backString = backArray.join('');
   return backString.toString();
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
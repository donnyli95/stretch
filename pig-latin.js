const words = process.argv.slice(2);

const piggy = function(word) {
  let output = word.slice(1) + word[0] + "ay";
  return output;
};

const pigLatin = function(words) {
  let newString = '';
  for (let i = 0; i < words.length; i++) {
    newString += piggy(words[i]) + ' ';
  }
  return newString;
};


console.log(pigLatin(words));
const loopyLighthouse = (range, multiples, words) => {
  let n = range[0];
  while (n < range[1] + 1) {
    let output = ''
    if (n % multiples[0] === 0 && n % multiples[1] === 0) {
      output += words[0] + words[1];
    } else if (n % multiples[0] === 0) {
      output += words[0];
    } else if (n % multiples[1] === 0) {
      output += words[1];
    } else {
      output = n;
    }
    n++;
    console.log(output);
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
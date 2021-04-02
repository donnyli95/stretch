const password = process.argv[2];

const obfuscate = (password) => {
  let output = '';

  for (let i = 0; i < password.length; i++) {
    if (password[i] === 'a') {
      output += '4';
    } else if (password[i] === 'e') {
      output += '3';
    } else if (password[i] === 'o') {
      output += '0';
    } else if (password[i] === 'l') {
      output += '1';
    } else {
      output += password[i];
    }
  }

  console.log(output);
  return output;
};

obfuscate(password);
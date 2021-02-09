module.exports = function check(str, bracketsConfig) {
  let openBrackets = bracketsConfig.map(item => item[0]);
  let closeBrackets = bracketsConfig.map(item => item[1]);
  let stackBrackets = [];
  str = str.split("");
  let openBracketsValue;
  let closeBracketsValue;

  // return bracketsConfig;

  for (i = 0; i < str.length; i++) {
    openBracketsValue = str[i];
    if (openBrackets.includes(openBracketsValue)) {
      if ( ( !closeBrackets.includes(openBracketsValue) ) || 
      (closeBrackets.includes(openBracketsValue) && !stackBrackets.includes(openBracketsValue))) {
        stackBrackets.push(openBracketsValue);
        continue;
      }
  }

    closeBracketsValue = str[i];
    if (closeBrackets.includes(closeBracketsValue)) {
      openBracketsValue = stackBrackets.pop();
      if (openBrackets.indexOf(openBracketsValue) != closeBrackets.indexOf(closeBracketsValue)) {
        return false;
      }
    }
  }

  if (stackBrackets.length != 0) {
    return false;
  }
  return true;
}




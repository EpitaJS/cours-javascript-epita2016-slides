
/*
 *
 ******* Array *******

 Array.push(<new item>)

 array.forEach(value => {
   ...
 });

 Array.map(value => {
   return <newValue>;
 });

 Array.reduce((accumulator, value) => {
   accumulator += value;
   return accumulator;
 }, 0);

 ******* String *******

 String.split(<separator>) -> Array

 String.toLowerCase()

 *
 */

export function tokenize(str) {
  let tokens = [];
  str.split(' ').forEach(token => {
    if (token.length) tokens.push(token);
  });
  return tokens;
}

export function stem(str) {
  return str.toLowerCase();
}

export function parse(str) {
  return tokenize(str).map(stem);
}

// hints : Array.forEach or
export function index(str) {
  return parse(str).reduce((acc, value) => {
    acc[value] = acc[value] || 0;
    acc[value]++;
    return acc;
  }, {})
}

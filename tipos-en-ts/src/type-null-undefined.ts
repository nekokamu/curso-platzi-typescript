// Tipo null
// Explicito
let nullVariable: null;
nullVariable = null;

// Es inferido como any
let otherVariable = null;
otherVariable = 'a';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// Tipo undefined
let undefinedVariable: undefined = undefined;
// Es inferido como any
let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null y Undefined como subtipos

let albumName: string;
//albumName = null;
//albumName = undefined;
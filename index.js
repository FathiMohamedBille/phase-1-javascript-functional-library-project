function myEach(collection, callback) {
if (Array.isArray(collection)) {
for (let i = 0; i < collection.length; i++) { 
callback(collection[i], i, collection);
 }
 } else if (typeof collection === 'object' && collection !== null) {
const keys = Object.keys(collection); for (let i = 0; i < keys.length; i++) {
 const key = keys[i]; callback(collection[key], key, collection); 
}
 }
  return collection; 
}
function myMap(collection, callback) {
let result = []; if (Array.isArray(collection)) {
for (let i = 0; i < collection.length; i++) { 
result.push(callback(collection[i], i, collection));
 }
 }
  else if (typeof collection === 'object' && collection !== null) {
 const keys = Object.keys(collection); for (let i = 0; i < keys.length; i++) { 
const key = keys[i]; result.push(callback(collection[key], key, collection)); 
} 
}
 return result; 
  } 
  function myReduce(collection, callback, initialValue) { 
let accumulator; let startIndex; if (Array.isArray(collection)) { 
accumulator = initialValue !== undefined ? initialValue : collection[0]; 
startIndex = initialValue !== undefined ? 0 : 1;
 for (let i = startIndex; i < collection.length; i++) {
 accumulator = callback(accumulator, collection[i], collection);
 }
 }
  else if (typeof collection === 'object' && collection !== null) { 
const keys = Object.keys(collection);
 accumulator = initialValue !== undefined ? initialValue : collection[keys[0]]; 
 startIndex = initialValue !== undefined ? 0 : 1; 
 for (let i = startIndex; i < keys.length; i++) { 
const key = keys[i]; accumulator = callback(accumulator, collection[key], collection);
 }
 }
  return accumulator;
 }
   
 const result = myReduce({ one: 10, two: 8, three: 5 }, function(acc, val) {
 return acc + val; }, 5); console.log(result); //Output should be 28

 function myFind(collection, predicate) {
 if (Array.isArray(collection)) { 
for (let i = 0; i < collection.length; i++) { 
if (predicate(collection[i])) { 
return collection[i]; 
}
 } 
}
 else if (typeof collection === 'object' && collection !== null) { 
const keys = Object.keys(collection); for (let i = 0; i < keys.length; i++) {
 const key = keys[i]; if (predicate(collection[key])) { 
return collection[key]; 
}
 }
 }
  return undefined;
    }
function myFilter(collection, predicate) {
 let result = []; if (Array.isArray(collection)) {
for (let i = 0; i < collection.length; i++) { 
if (predicate(collection[i])) {
 result.push(collection[i]);
 }
 }
 }
  else if (typeof collection === 'object' && collection !== null) { 
const keys = Object.keys(collection); for (let i = 0; i < keys.length; i++) { 
const key = keys[i]; if (predicate(collection[key])) { 
result.push(collection[key]); 
}
 }
 }
  return result;
   }
    function mySize(collection) { 
    if (Array.isArray(collection)) {
     return collection.length;
     }
      else if (typeof collection === 'object' && collection !== null) {
     return Object.keys(collection).length;
     } 
     return 0; 
     }
      function myFirst(array, n) {
     if (n === undefined) { 
    return array[0];
 } else {
     return array.slice(0, n);
     }
     }
     function myLast(array, n) { 
    if (n === undefined) { 
    return array[array.length - 1]; 
} else { 
    return array.slice(-n); 
}
 } 
 function myKeys(object) {
 return Object.keys(object);
 }
   function myValues(object) { 
return Object.values(object); 
}
  
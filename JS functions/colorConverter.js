
function colorConverter (rgbOrHex) {
 let value = rgbOrHex.toLowerCase();
 let result;
 // handles hex to rgb
function hexToRgb (hexValue) {
let noHash = hexValue.slice(1); 
let r = parseInt(noHash.substring(0, 2), 16);
let g = parseInt(noHash.substring(2, 4), 16);
let b = parseInt(noHash.substring(4, 6), 16);
 
let rgb = `rgb(${r}, ${g}, ${b})`;

 return rgb;
}
 // handles single rgb channels, complementary function to rgbToHex
 function singleChanneltoHex (rgb) {
  let singleHex = rgb.toString(16);
  if (singleHex.length === 1) {
   singleHex = singleHex.padStart(2, "0"); /* padStart(targetLength, padString) ensures the string is at least targetLength characters long.
If it’s shorter, it adds the padString to the start until it reaches that length.*/
  }
  return singleHex;

 }
// handles rgb to hex
function rgbTohex (n1, n2, n3) {
 
 let channel1 = singleChanneltoHex(n1);
 let channel2 = singleChanneltoHex(n2);
 let channel3 = singleChanneltoHex(n3);

  return `#${channel1}${channel2}${channel3}`
}
 // control flow inputs of main function
 if (value.startsWith('#')) {
 result = hexToRgb(value);
  
 } else if ( value.startsWith('rgb')) {
  
  let numbers = value.match(/\d+/g); // this regex looks for numbers in the string and store them in an array of numbers string, ignores the rest.
  numbers = numbers.map(Number); // using map and Number constructor turns array of string numbers into an array of numbers.
  result = rgbTohex(...numbers) // the spread operator ... allocates respectively the values in the array with the values to be placed in the function parameter. 
 }
 
return result;
}

colorConverter('#ffffff');
 //const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

 function toHex (rgb) {
  let singleHex = rgb.toString(16);
  if (singleHex.length === 1) {
   singleHex = singleHex.padStart(2, "0");
  }
  return singleHex;

 }


function rgbTohex (n1, n2, n3) {
 let number1 = toHex(n1);
 let number2 = toHex(n2);
 let number3 = toHex(n3);

  return `#${number1}${number2}${number3}`
}

rgbTohex(15, 12, 13);
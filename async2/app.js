const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order) // returs if resolved: resolve([order, total]);
.then((resolvedValueArray) => {// awaits,collects & store checkinventory return in resolvedValueArray
  // Write the correct return statement here:
 return processPayment(resolvedValueArray); // call resolvedValue .. into processPayment
})
.then((resolvedValueArray) => { // returns if resolved resolve([order, trackingNum])
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

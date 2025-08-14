var assert = require("assert");
var Calculate =  require('./index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('test if the output of 5! is equal to 120.', () => { 
//set up
const expectedResult = 120;
//exercise
const result = Calculate.factorial(5);
// verify 
assert.equal(result, expectedResult);
});

it('returns 6 when 3 is passed', () => {
//set up
const expectedResult = 6;
//exercise
const result = Calculate.factorial(3);
// verify 
assert.equal(result, expectedResult);

});
it('returns 1 when 0 is passed ', () => {
//set up
const expectedResult = 1;
//exercise
const result = Calculate.factorial(0);
// verify 
assert.equal(result, expectedResult);
});
});
});
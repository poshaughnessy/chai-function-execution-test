var chai = require('chai/chai');
var expect = chai.expect;

var myObject = require('../src/my-object');

describe("my-object", function () {
  
  it("should execute the `executeThisFunction` (check the logs output)", function() {
    expect(myObject.executeThisFunction()).to.equal(1);
  });

  it("should not execute the `doNotExecutionThisFunction` (check the logs output)", function() {
    expect(myObject.doNotExecutionThisFunction).to.exist;
  });

});
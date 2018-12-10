/**
 * AMD, CommonJS, Global compatible Script Wrapper
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
    /* istanbul ignore next */
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hexColorLuminance = factory();
  }
}(this, function () {

  var myObject = {
    executeThisFunction: function (hex, lum) {
      console.log('>>> This is OK to execute');
      return 1;
    },

    doNotExecutionThisFunction: function () {
      console.log('>>> This should NOT be called!');
      return 2;
    }

  };

  return myObject;

}));

var assert = require('assert');

var expand = require('../lib/expand');

describe('komc-util', function () {
  describe('#expand()', function () {
    it('normal case', function () {
      var a = [];
      expand(a, 2, 10);

      assert.equal(a.length, 10);
      for (var i = 0; i < a.length; i++) {
        assert.equal(2, a[i]);
      }
    });

    it('shallow copy case', function () {
      // shallow copy
      var a = [];
      var b = [{name: 'towry'}];
      expand(a, b, 11);
      assert.equal(a.length, 11);
      for (var i = 0; i < a.length; i++) {
        assert.equal(b[0], a[i][0]);
      }
    });

    it('deep copy case', function () {
      // deep copy
      var a = [];
      var b = {name: 'towry'};
      expand(a, b, 11, true);
      for (var i = 0; i < a.length; i++) {
        assert.notEqual(b, a[i]);
      }
    });

    it('with modifier', function () {
      var a = [];
      var b = {name: 'towry'};
      expand(a, b, 11, true, function (data, index) {
        if (index === 3) {
          data[index].name = "jack";
        }
      });

      assert.equal(a[3].name, "jack");
      assert.equal(a[0].name, "towry");
    })
  })
});

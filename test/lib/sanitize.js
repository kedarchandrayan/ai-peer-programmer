const chai = require('chai');
const assert = chai.assert;
const SanitizeRecursively = require('../../lib/sanitize');
const sanitizeRecursively = new SanitizeRecursively();

describe('lib/sanitize.js', function() {
  it('should sanitize string', async function() {
    const str = '<script>alert("hello");</script>hi';
    const sanitizedStr = sanitizeRecursively.sanitize_params_recursively(str);
    assert.equal(sanitizedStr, 'hi');
  });

  it('should sanitize object', async function() {
    const obj = {
      a: '<script>alert("hello");</script>hi',
      b: {
        c: '<script>alert("hello");</script>hi',
        d: {
          e: '<script>alert("hello");</script>hi'
        }
      }
    };
    const sanitizedObj = sanitizeRecursively.sanitize_params_recursively(obj);
    assert.equal(sanitizedObj.a, 'hi');
    assert.equal(sanitizedObj.b.c, 'hi');
    assert.equal(sanitizedObj.b.d.e, 'hi');
  });

  it('should sanitize array', async function() {
    const arr = [
      '<script>alert("hello");</script>hi',
      {
        a: '<script>alert("hello");</script>hi',
        b: {
          c: '<script>alert("hello");</script>hi',
          d: {
            e: '<script>alert("hello");</script>hi'
          }
        }
      }
    ];
    const sanitizedArr = sanitizeRecursively.sanitize_params_recursively(arr);
    assert.equal(sanitizedArr[0], 'hi');
    assert.equal(sanitizedArr[1].a, 'hi');
    assert.equal(sanitizedArr[1].b.c, 'hi');
    assert.equal(sanitizedArr[1].b.d.e, 'hi');
  });
});

describe('should sanitize object element of an array', function() {
    it('should sanitize object element of an array', async function() {
      const arr = [
        '<script>alert("hello");</script>hi',
        {
          a: '<script>alert("hello");</script>hi',
          b: {
            c: '<script>alert("hello");</script>hi',
            d: {
              e: '<script>alert("hello");</script>hi'
            }
          }
        }
      ];
      const sanitizedArr = sanitizeRecursively.sanitize_params_recursively(arr);
      assert.equal(sanitizedArr[0], 'hi');
      assert.equal(sanitizedArr[1].a, 'hi');
      assert.equal(sanitizedArr[1].b.c, 'hi');
      assert.equal(sanitizedArr[1].b.d.e, 'hi');
    });
  }
);

describe('should sanitize array value of an object', function() {
    it('should sanitize array value of an object', async function() {
      const obj = {
        a: '<script>alert("hello");</script>hi',
        b: [
          '<script>alert("hello");</script>hi',
          {
            c: '<script>alert("hello");</script>hi',
            d: {
              e: '<script>alert("hello");</script>hi'
            }
          }
        ]
      };
      const sanitizedObj = sanitizeRecursively.sanitize_params_recursively(obj);
      assert.equal(sanitizedObj.a, 'hi');
      assert.equal(sanitizedObj.b[0], 'hi');
      assert.equal(sanitizedObj.b[1].c, 'hi');
      assert.equal(sanitizedObj.b[1].d.e, 'hi');
    });
  }
);

const scenarios = [
  {
    name: 'should sanitize string',
    input: '<script>alert("hello");</script>hi',
    expected: 'hi'
  },
  {
    name: 'should sanitize object',
    input: {
      a: '<script>alert("hello");</script>hi',
      b: {
        c: '<script>alert("hello");</script>hi',
        d: {
          e: '<script>alert("hello");</script>hi'
        }
      }
    },
    expected: {
      a: 'hi',
      b: {
        c: 'hi',
        d: {
          e: 'hi'
        }
      }
    }
  }
];

describe('write a test for each scenario in the scenarios array', function() {
    scenarios.forEach(function(scenario) {
      it(scenario.name, async function() {
        const sanitizedObj = sanitizeRecursively.sanitize_params_recursively(scenario.input);
        assert.deepEqual(sanitizedObj, scenario.expected);
      });
    });
  }
);

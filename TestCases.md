# Test Cases
Full final working test case code in file `test/lib/sanitize.js`.

Let's see how GitHub Copilot proved helpful in writing test cases for a recursive sanitize parameters functionality 
in `lib/Sanitize.js` file. We create an empty file `test/lib/sanitize.js` and follow following steps.

## Experience 1: Initial test cases
We write the following line and wait for copilot to suggest.
```js
const chai = require('chai');
```

Copilot suggestion:
```js
const assert = chai.assert;
const SanitizeRecursively = require('../../../lib/sanitize');
const sanitizeRecursively = new SanitizeRecursively();

describe('lib/sanitize.js', function() {
    it('should sanitize string', async function() {
        const str = '<script>alert("hello");</script>';
        const sanitizedStr = sanitizeRecursively.sanitize_params_recursively(str);
        assert.equal(sanitizedStr, 'alert("hello");');
    });
    
    it('should sanitize object', async function() {
        const obj = {
        a: '<script>alert("hello");</script>',
        b: {
            c: '<script>alert("hello");</script>',
            d: {
            e: '<script>alert("hello");</script>'
            }
        }
        };
        const sanitizedObj = sanitizeRecursively.sanitize_params_recursively(obj);
        assert.equal(sanitizedObj.a, 'alert("hello");');
        assert.equal(sanitizedObj.b.c, 'alert("hello");');
        assert.equal(sanitizedObj.b.d.e, 'alert("hello");');
    });
    
    it('should sanitize array', async function() {
        const arr = [
        '<script>alert("hello");</script>',
        {
            a: '<script>alert("hello");</script>',
            b: {
            c: '<script>alert("hello");</script>',
            d: {
                e: '<script>alert("hello");</script>'
            }
            }
        }
        ];
        const sanitizedArr = sanitizeRecursively.sanitize_params_recursively(arr);
        assert.equal(sanitizedArr[0], 'alert("hello");');
        assert.equal(sanitizedArr[1].a, 'alert("hello");');
        assert.equal(sanitizedArr[1].b.c, 'alert("hello");');
        assert.equal(sanitizedArr[1].b.d.e, 'alert("hello");');
    });
 });

 describe('should sanitize array value of an object', function() {
    it('should sanitize array value of an object', async function() {
        const obj = {
        a: '<script>alert("hello");</script>',
        b: [
            '<script>alert("hello");</script>',
            {
            c: '<script>alert("hello");</script>',
            d: {
                e: '<script>alert("hello");</script>'
            }
            }
        ]
        };
        const sanitizedObj = sanitizeRecursively.sanitize_params_recursively(obj);
        assert.equal(sanitizedObj.a, 'alert("hello");');
        assert.equal(sanitizedObj.b[0], 'alert("hello");');
        assert.equal(sanitizedObj.b[1].c, 'alert("hello");');
        assert.equal(sanitizedObj.b[1].d.e, 'alert("hello");');
    });
 }
);
```

Note that the `lib/Sanitize.js` file was open in one of the tabs of vscode.

Although the cases look good for a first draft, we had to make following changes in it.
- require had wrong path. One `..` was extra.
- The implementation strips out everything which lies in between tags. Thus the inputs and expected data needed changes.

## Experience 2: Adding test cases by just writing the describe line.

We needed one more test case where the input is an array containing an object whose values need to be sanitized.

We write the following line and wait for copilot to suggest.
```js
describe('should sanitize object element of an array', function() {
```

Copilot suggestion:
```js
    it('should sanitize object element of an array', async function() {
        const arr = [
        '<script>alert("hello");</script>',
        {
            a: '<script>alert("hello");</script>',
            b: {
            c: '<script>alert("hello");</script>',
            d: {
                e: '<script>alert("hello");</script>'
            }
            }
        }
        ];
        const sanitizedArr = sanitizeRecursively.sanitize_params_recursively(arr);
        assert.equal(sanitizedArr[0], 'alert("hello");');
        assert.equal(sanitizedArr[1].a, 'alert("hello");');
        assert.equal(sanitizedArr[1].b.c, 'alert("hello");');
        assert.equal(sanitizedArr[1].b.d.e, 'alert("hello");');
    });
 }
);
```

Note that it recognized the type of input we need and wrote a case for it.

We had to make following change(s) in it.
- The implementation strips out everything which lies in between tags. Thus the inputs and expected data needed changes.

Similarly, one more test case was added.

Following is the output from the test case run:
```shell script
> npm test

> ai-peer-programmer@1.0.0 test
> ./node_modules/mocha/bin/_mocha ./test/*



  lib/sanitize.js
    ✔ should sanitize string
    ✔ should sanitize object
    ✔ should sanitize array

  should sanitize object element of an array
    ✔ should sanitize object element of an array

  should sanitize array value of an object
    ✔ should sanitize array value of an object


  5 passing (9ms)

```

## Experience 3: Writing test cases using an array of scenarios
Let's say, we need to write test cases for scenarios in following array:
```js
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
```

We write the following line and wait for copilot to suggest.
```js
describe('write a test for each scenario in the scenarios array', function() {
```

Copilot suggestion:
```js
    scenarios.forEach(function(scenario) {
        it(scenario.name, async function() {
            const sanitizedObj = sanitizeRecursively.sanitize_params_recursively(scenario.input);
            assert.deepEqual(sanitizedObj, scenario.expected);
        });
    });
}
);
```

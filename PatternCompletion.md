# Pattern completion

## Experience 1: Seed data
Suppose, we need an array of month names. We write the following line and wait for copilot to suggest.
```js
const months = 
```

Copilot completed it as follows.
```js
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

Now suppose, we want a different format of the month names, say all downcase. We write the following line and wait for copilot to suggest.
```js
const months = ['jan'
```

Copilot completed it as follows.
```js
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
```

Suppose we need a map of month number to month name. We write the following line and wait for copilot to suggest.
```js
const monthNumberToNameMap = {
```

Copilot completed it as follows.
```js
const monthNumberToNameMap = {
  1: 'jan',
  2: 'feb',
  3: 'mar',
  4: 'apr',
  5: 'may',
  6: 'jun',
  7: 'jul',
  8: 'aug',
  9: 'sep',
  10: 'oct',
  11: 'nov',
  12: 'dec'
};
```

NOTE: Names of variables, functions and classes should be as informative as possible.


/**
 * Find the common characters between two strings
 *
 * @param {string} a
 * @param {string} b
 */
class Draft1 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    const common = [];
    const a = this.a.split('');
    const b = this.b.split('');
    for (let i = 0; i < a.length; i++) {
      if (b.includes(a[i])) {
        common.push(a[i]);
      }
    }
    return common.join('');
  }
}

// What is the order of complexity of the code above?
// O(n) because of the for loop

// Note: that above answer is incorrect. The order of complexity is O(n^2) because of the includes method. The includes method is O(n) and it is called n times.

// Optimized version of the code above
class Draft2 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    const common = [];
    const a = this.a.split('');
    const b = this.b.split('');
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) !== -1) {
        common.push(a[i]);
      }
    }
    return common.join('');
  }
}

// What is the order of complexity of the code above?
// O(n) because of the for loop

// Note: that above answer is incorrect. The order of complexity is O(n^2) because of the indexOf method. The indexOf method is O(n) and it is called n times.

// Optimize the code above to be O(n)
class Draft3 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    const common = [];
    const a = this.a.split('');
    const b = this.b.split('');
    const bMap = {};
    for (let i = 0; i < b.length; i++) {
      bMap[b[i]] = true;
    }
    for (let i = 0; i < a.length; i++) {
      if (bMap[a[i]]) {
        common.push(a[i]);
      }
    }
    return common.join('');
  }
}

// What is the order of complexity of the code above?
// O(n) because of the for loop

// Refactor the code above to use Set
class Draft4 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    const common = [];
    const a = this.a.split('');
    const b = this.b.split('');
    const bSet = new Set(b);
    for (let i = 0; i < a.length; i++) {
      if (bSet.has(a[i])) {
        common.push(a[i]);
      }
    }
    return common.join('');
  }
}

// What is the order of complexity of the code above?
// O(n) because of the for loop

// Refactor the code above to use a Map
class Draft5 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    const common = [];
    const a = this.a.split('');
    const b = this.b.split('');
    const bMap = new Map();
    for (let i = 0; i < b.length; i++) {
      bMap.set(b[i], true);
    }
    for (let i = 0; i < a.length; i++) {
      if (bMap.has(a[i])) {
        common.push(a[i]);
      }
    }
    return common.join('');
  }
}

// What is the order of complexity of the code above?
// O(n) because of the for loop

// Explain the code of commonCharacters method of Draft1 class, in points
// 1. Create an empty array called common
// 2. Split the string a into an array of characters
// 3. Split the string b into an array of characters
// 4. Loop through the array of characters of a
// 5. Check if the array of characters of b includes the current character of a
// 6. If it does, push the current character of a into the common array
// 7. Return the common array joined into a string

// Explain the code of commonCharacters method of Draft5 class, in points
// 1. Create an empty array called common
// 2. Split the string a into an array of characters
// 3. Split the string b into an array of characters
// 4. Create an empty Map called bMap
// 5. Loop through the array of characters of b
// 6. Set the current character of b as a key in the bMap
// 7. Loop through the array of characters of a
// 8. Check if the bMap has the current character of a as a key
// 9. If it does, push the current character of a into the common array
// 10. Return the common array joined into a string

// Refactor the code Draft5 class to have more informative comments, explaining what each line of code does
class Draft6 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    // Create an empty array called common
    const common = [];
    // Split the string a into an array of characters
    const a = this.a.split('');
    // Split the string b into an array of characters
    const b = this.b.split('');
    // Create an empty Map called bMap
    const bMap = new Map();
    // Loop through the array of characters of b
    for (let i = 0; i < b.length; i++) {
      // Set the current character of b as a key in the bMap
      bMap.set(b[i], true);
    }
    // Loop through the array of characters of a
    for (let i = 0; i < a.length; i++) {
      // Check if the bMap has the current character of a as a key
      if (bMap.has(a[i])) {
        // If it does, push the current character of a into the common array
        common.push(a[i]);
      }
    }
    // Return the common array joined into a string
    return common.join('');
  }
}

// Give three sample input and output for the code of commonCharacters method of Draft6 class
// Input: 'abc', 'def'
// Output: ''
// Input: 'abc', 'defabc'
// Output: 'abc'
// Input: 'abc', 'defabcghi'
// Output: 'abc'

// What is wrong with the code of commonCharacters method of Draft2 class?
// The indexOf method is O(n) and it is called n times.

class Draft7 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  commonCharacters() {
    const common = [];
    const a = this.a.split('');
    const b = this.b.split('');
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        common.push(a[i]);
      }
    }
    return common.join('');
  }
}

// Find bugs in the code of commonCharacters method of Draft7 class
// The if statement should be if (b.includes(a[i]))

const inputString = 'Hello World 2019-01-01';

// extract the part of the string which is a date in the format YYYY-MM-DD
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec(inputString);
const year = match[1];
const month = match[2];
const day = match[3];


// validate a phone number
function validatePhoneNumber(phoneNumber) {
  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const match = regex.exec(phoneNumber);
  if (match) {
    return true;
  }
  return false;
}

// usage of the function
const phoneNumber = '(555) 555-5555';
const isValid = validatePhoneNumber(phoneNumber);
console.log(isValid); // true


// remove all whitespace from a string
const stringWithWhitespace = 'Hello World';
const stringWithoutWhitespace = stringWithWhitespace.replace(/\s/g, '');


// remove all non-alphanumeric characters from a string
const stringWithNonAlphaNumeric = 'Hello World 2019-01-01';
const stringWithAlphaNumeric = stringWithNonAlphaNumeric.replace(/[^a-zA-Z0-9]/g, '');


// regex to match a string that contains only letters
const regex1 = /^[a-zA-Z]+$/;
//usage
const string1 = 'Hello World';
const string2 = 'Hello World 2019-01-01';
const match1 = regex1.exec(string1);
const match2 = regex1.exec(string2);
console.log(match1); // ['Hello World', index: 0, input: 'Hello World']
console.log(match2); // null


// regex to extract the domain name from a URL
const regex2 = /:\/\/(.[^/]+)/;
const url = 'https://www.google.com/search?q=regex';
const match3 = regex2.exec(url);
const domain = match3[1];
console.log(domain); // www.google.com

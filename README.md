# primality.js
[![build status](https://secure.travis-ci.org/KenanY/primality.png)](http://travis-ci.org/KenanY/primality)

Primality is a JavaScript library for prime numbers.

## Download

 * [Development build](https://raw.github.com/KenanY/primality/1.2.0/primality.js)
 * [Production build](https://raw.github.com/KenanY/primality/1.2.0/primality.min.js)

## Features

  - Check the primality of a number
  - Works with numbers disguised as strings
  - Also does arrays
  - Checks if a pair of numbers are either
  [twin](https://en.wikipedia.org/wiki/Twin_prime) or
  [sexy](https://en.wikipedia.org/wiki/Sexy_prime) primes.
  - Less than 800 bytes minified and gzipped
  - AMD loader support

## Support

Primality has been tested in:

  - Chrome 23
  - Node.js 0.8.16

## Installation

In browsers:

``` html
<script src="primality.js"></script>
```

Using npm:

```
npm install primality
```

In Node.js and RingoJS v0.8.0+:

``` javascript
var primality = require('primality');
```

In RingoJS v0.7.0-:

``` javascript
var primality = require('primality').primality;
```

In Rhino:

``` javascript
load('primality.js');
```

In an AMD loader like RequireJS:

``` javascript
require({
  'paths': {
    'primality': 'path/to/primality'
  }
},
['primality'], function(primality) {
  console.log(primality.VERSION);
});
```

## Usage

It can't get any easier:

``` javascript
primality(7);
// => true

primality(6);
// => false

primality(new Number(11));
// => true

/**
 * Strings can be prime, too!
 */
primality('13');
// => true

primality(new String('14'));
// => false

/**
 * Primality can even do arrays!
 *
 * If any of the values of an array are not prime, we return false.
 */
primality([17, 19, 23]);
// => true

primality([17, 20, 23]);
// => false

/**
 * As a somewhat more advanced feature, Primality can check if a pair of numbers
 * is a twin or sexy prime.
 *
 * Twin primes are prime numbers that differ from another by two.
 *
 * Similarly, sexy primes are prime numbers that differ from each other by six
 */
primality.areTwinPrimes(3, 5)
// => true

primality.areSexyPrimes(5, 11)
// => true
```

## Release Notes

### 1.2.0

  - Added `areTwinPrimes` and `areSexyPrimes` functions
  - Inline variable initialization when parsing arrays
  - Updated the `isNaN` private function
  - Changed the IIFE

The full changelog is available [here](https://github.com/KenanY/primality/wiki/Changelog).
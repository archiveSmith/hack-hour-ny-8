// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num, i = 1) {
  let result = [];
  let pushItem = '';
  if (i % 3 === 0) {
    pushItem += 'fizz';
  }
  if (i % 5 === 0) {
    pushItem += 'buzz';
  }
  result.push(pushItem || i);
  if (i === num) {
    return result;
  }
  result = result.concat(fizzbuzz(num, i+1));

  return result;
}

module.exports = fizzbuzz;

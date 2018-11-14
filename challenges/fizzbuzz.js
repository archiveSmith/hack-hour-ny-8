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

function fizzbuzz(num) {
    // Multiple of 3 fizz
    // Multiple of 5 buzz
    // Multiple of both 3 and 5, fizzbuzz
    let final = [];
    for (let i = 1; i <= num; i++) {
        let output = "";
        // Adjust output based on fizzbuzz rules
        if (i % 3 === 0) output += "fizz";
        if (i % 5 === 0) output += "buzz";
        // Either push number or output depending on if output exists
        if (output === "") final.push(i);
        else final.push(output);
    }
    return final;
}

// For fun:
// Create a fizzbuz generator that takes an array of divisor:code pairs

function fizzbuzz2(goal, ...nums) {
    // Expected input: [20, 3, "fizz", 5, "buzz"]
    let divisors = [];
    for (let i = 0; i < nums.length; i+=2) {
        let output = "";
        
    }
}

module.exports = fizzbuzz;
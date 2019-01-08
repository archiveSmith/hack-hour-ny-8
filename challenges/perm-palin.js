/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {

    let cache = {
        length: 0,
        oddLetters: []

    }

    let split = str.split('')

    for(let i = 0; i < split.length; i++){

        if(cache.oddLetters.indexOf(split[i]) === -1 ){
            cache.oddLetters.push(split[i])
            cache.length++
            console.log('IF ===', cache)
        }else{
            cache.oddLetters.splice((cache.oddLetters.indexOf(split[i]) === -1));
            cache.length++
            console.log('ELSE ===', cache)
        }
    }

    return cache
	
}

console.log(permPalin('abab'));

module.exports = permPalin;
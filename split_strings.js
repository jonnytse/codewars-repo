//SPLIT STRINGS

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number 
// of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']


const solution = (string) => {
    return (string.match(/.{1,2}/g));    
}
console.log(solution('qwerty'));

//this only works for even-numbered strings...and references stack overflow 'How can I split a string into segments of n characters?' 
//SPLIT STRINGS

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number 
// of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']


const solution = (string) => {
    if (string.length % 2 === 0) {
        return (string.match(/.{1,2}/g));    
    } else {
        return (string.match(/.{1,2}/g).concat('_'))
    }
}
console.log(solution('qwertyi'));
// ... this only works for even-numbered strings...and references stack overflow 'How can I split a string into segments of n characters?'



const solution = (string) => {
    let solutionArray = []
    let stringSplit = string.split('')
    let lastCharacter = stringSplit[string.length - 1]
    if(stringSplit.length !== 0) {
       for (let i = 0; i < stringSplit.length - 1; i += 2) {
           solutionArray.push(stringSplit[i].concat(stringSplit[i + 1]))
       }
       solutionArray.push(lastCharacter.concat('_'))
    }    
    return solutionArray;
}
console.log(solution('qwertyi'));

// this only works for odd-numbered string length!
 
//SPLIT STRINGS

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number 
// of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']





//***** My horrible and long-assed version to pass all the tests. Jee-ZUS.

const solution = (string) => {
    let solutionArray = []
    let stringSplit = string.split('')
    let lastCharacter = stringSplit[string.length - 1]
    if(stringSplit.length % 2 !== 0) {
       for (let i = 0; i < stringSplit.length - 1; i += 2) {
           solutionArray.push(stringSplit[i].concat(stringSplit[i + 1]))
       }
       solutionArray.push(lastCharacter.concat('_'))
    } else {
        for (let i = 0; i < stringSplit.length; i += 2) {
            solutionArray.push(stringSplit[i].concat(stringSplit[i + 1]))
        }
    }    
    return solutionArray;
   }
   console.log(solution('qwerty'));
 

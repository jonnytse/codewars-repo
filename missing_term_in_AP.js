// An Arithmetic Progression is defined as one in which there is a 
// constant difference between the consecutive terms of a given series of numbers. 
// You are provided with consecutive elements of an Arithmetic Progression. 
// There is however one hitch: exactly one term from the original series is missing 
// from the set of numbers which have been given to you. The rest of the given series 
// is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 
// 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. 
// I found it quite fun to solve on paper using math, derive the algo that way. Have fun!


// const findMissing = (array) => {
//     let missingNumber = [];
//     for (let i = array.length - 1; i >= 0 ; i-- ) {
//         if (array[i] - array[i - 1] !== 2) {
//             missingNumber.push(array[i] - 2);
//             return missingNumber;
//         }
//     }
// }
// console.log(findMissing([1, 3, 5, 9, 11]));


// const findMissing = (array) => {
//     let missingNumber = [];
//     for (let i = array.length - 1; i >= 1 ; i-- ) {
//         missingNumber.push(array[i] - array[i - 1]);
//     }
//     return missingNumber;
// }
// console.log(findMissing([1, 3, 5, 9, 11]));



const findMissingNumber = (array) => {
    let APdifference = (array[array.length - 1] - array[0])/array.length;
    for (let i = 0; i < array.length; i++){
        if (array[i] + APdifference !== array[i + 1]) {
        return array[i] + APdifference;
        }
    }
}
console.log(findMissingNumber([1, 4, 7, 10, 13, 16, 22, 25]));
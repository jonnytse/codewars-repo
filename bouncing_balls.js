// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).


// //My original attempt
// const bouncingBall = (h, bounce, window) => {
//     let countArray = [h]
//     let heightAfterBounce = h * bounce
//     countArray.push(heightAfterBounce);
//     countArray.push(heightAfterBounce);


// console.log(countArray);
// return (countArray.length);
// }

// console.log(bouncingBall(30, 0.66, 1.5));




// //Solution found from internet
// function bouncingBall(h,  bounce,  window) {
//     if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
//     // a place to store number of times past window - initialized to 1
//     let times = 1;
//     // place to store current height - initialized to h
//     let currentHeight = h;
//     // while current height is greater than window height
//     while (currentHeight >= window) {
//       currentHeight *= bounce;
//       if (currentHeight > window) {
//         times += 2;
//       } else if (currentHeight === window) {
//         times += 1;
//       }
//     }
//   // return number of times past window
//   return times;
// }
// console.log(bouncingBall(3.0, 0.66, 1.5));
// console.log(bouncingBall(30.0, 0.66, 1.5));



const bouncingBalls = (h, bounce, window) => {
    if (h <= window) {
        return -1
    }
    let height = h
    let times = 1
    while (height > window) {
        height = height * bounce
        if (height > window) {
            times = times + 2
        }
    }
    return times
}

console.log(bouncingBalls(30, 0.66, 1.5));
// Write a function that when given a URL as a string, parses out just the domain name 
// and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// const domainName = (string) => {
//     let splitURL = string.split('');
//     console.log(splitURL);
// }

// console.log(domainName('www.amazon.co.uk'));

// const domainName = (url) => {
//     let splitURL = url.split('.') 
//     // console.log(splitURL);
//     let filteredURL = splitURL.filter(el => {
//         return (el !== 'https://www') && (el !== 'http://') && (el !== 'www') && (el !== 'uk') && (el !== 'co') && (el !== 'com');
//     })
//     return filteredURL;
// }

// console.log(domainName("http://google.com"));


const domainName = (url) => {
    const noPrefix = url.replace('http://','').replace('https://','').replace('www.','');
    const splitString = noPrefix.split('.');
    return splitString[0];
 }

console.log(domainName("www.amazon.co.uk"));
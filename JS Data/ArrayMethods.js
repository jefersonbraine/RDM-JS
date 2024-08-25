
//Array de exemplo para demonstrar methods do array
const arr = [1, 2, 3, 4, 5];

arr.push(6)                             // [1, 2, 3, 4, 5, 6]
arr.pop()                               // [1, 2, 3, 4, 5]
arr.shift()                             // [2, 3, 4, 5]
arr.unshift(0)                          // [0, 2, 3, 4, 5]
arr.concat([6, 7])                      // [0, 2, 3, 4, 5, 6, 7]
arr.slice(1, 3)                         // [2, 3]
arr.splice(1, 2)                        // [0, 4, 5 ]
arr.reverse()                           // [5, 4, 0]
arr.sort()                              // [0, 4, 5]
arr.indexOf(4)                          // 1
arr.includes(3)                         // true
arr.find(x => x > 3)                    // 4
arr.filter(x => x > 3)                  // [4, 5]
arr.map(x => x * 2)                     // [10, 8, 0]
arr.reduce((sum, x) => sum + x, 0)      // 9
arr.join('-')                           // '5-4-0'
arr.every(x => x > 2)                   // false
arr.some(x => x > 4)                    // true
arr.findIndex(x => x > 4)               // 0
arr.fill(9)                             // [9, 9, 9]
arr.copyWithin(0, 1)                    // [9, 9, 9]
arr.flatMap(x => [x, x * 2])            // [18, 18, 18]
arr.entries()                           // Array Iterator com key/value pairs
arr.keys()                              // Array Iterator com keys
arr.values()                            // Array Iterator com values
// const bar = (n) => {
//     let M = []
//     for (let i = 0; i < n; i++) {
//         M[i] = [];
//         for(let j = 0; j < n; j++) {
//             if (i === j || j === n - (i + 1)) {
//                 M[i][j] = 2;
//             }else if (( j > i && j < n - i) || (j <= i && j > n - j - i )){
//                 M[i][j] = 1;
//             }
//             else{
//                 M[i][j] = 0
//             }
//         }
//     }
//     return M
// }


const bar = (n) => {
    return Array.from({ length: n }, (func, item) =>
        Array.from({ length: n }, (func, el) =>
            item === el || el === n - (item + 1) ? 2
                : (el > item && el < n - item) || (el <= item && el > n - el - item) ? 1 : 0
        )
    );
};

console.log(bar(5))
// [
// [2,1,1,1,2],
// [0,2,1,2,0],
// [0,0,2,0,0],
// [0,2,1,2,0],
// [2,1,1,1,2],
// ]
console.log(bar(4))

// [
// [2,1,1,2],
// [0,2,2,0],
// [0,2,2,0],
// [2,1,1,2],
// ]
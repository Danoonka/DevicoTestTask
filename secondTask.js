const d = {
    left: {
        left: {
            left: 1,
            right: {left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
}

// const foo = (obj) => {
//     for (let p in obj) {
//         if (obj.hasOwnProperty(p)){
//             if(typeof obj[p] === 'object'){
//                 foo((obj[p]));
//             }else{
//                 obj[p] = obj[p] === 0 ? 1 : obj[p] === 1 ? 0 : obj[p];
//             }
//         }
//     }
// }

const foo = (obj) => {
    return Object.keys(obj).reduce((item, key) => {
        if (typeof obj[key] === 'object') {
            item[key] = foo(obj[key]);
        } else {
            item[key] = obj[key] === 0 ? 1 : obj[key] === 1 ? 0 : obj[key];
        }
        return item;
    }, {});
}

foo(d)
console.log(d)

// {
//     left: {
//         left: {
//             left: 0,
//             right: {
//                 left: 1,
//                 right: 0,
//             },
//         },
//         right: {
//             left: 1,
//             right: 0,
//         },
//     },
//     right: 0,
// }
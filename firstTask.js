let val = 0
// const calc = (value, operator) => {
//     switch(operator) {
//         case "+":
//             val += value;
//             break;
//         case "-":
//             val -= value;
//             break;
//         case "*":
//             val *= value;
//             break;
//         case "/":
//             val /= value;
//             break;
//     }
//     return console.log(val)
// }

const calc = (value, operator) => {
    val = operator === "+"
        ? val + value
        : operator === "-"
        ? val - value
        : operator === "*"
        ? val * value
        : operator === "/"
        ? val / value : console.log("exit")
    return console.log(val)
}

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
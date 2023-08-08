

// for (let i = 1; i <= 8; i++){
//     let starNum = "";
//     for (let j = 1; j <= i; j++){
//         let space = ' ' + j; 
//         starNum += space;
//     }
//     console.log(starNum);
// }

let str = '';
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        let space = ' ' + j;
        if (j <= i) str += space;
    }
    str += '\n';
}
console.log(str);
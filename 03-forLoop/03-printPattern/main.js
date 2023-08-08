
// i0j0
// i0j0 i0j1

for (let i = 0; i < 5; i++) {
    let star = "";
    for (let j = 0; j <= i; j++){
        star += "* "; 
    }
    console.log(`${star} \n`);
}

// let str = '';
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 4; j++) {
//         // j = 1,2,3,4
//         // i = 1,2,3,4
//         if (j <= i) str += '*';
//     }
//     str += '\n';
// }
// console.log(str);
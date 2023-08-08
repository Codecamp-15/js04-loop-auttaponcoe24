// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)




let sum = 0;
let even = 0;
let odd = 0;

for (let i = 1; i <= 100; i++) {
    // 1 : ผลรวมของเลขตั้งแต่ 1 - 100
    sum += i;
    
    // 2 : ผลรวมเลขคู่, เลขคี่
    if (i % 2 == 0) even += i;
    else odd += i;
    
    
}

console.log(`sum = ${sum}, even = ${even}, odd = ${odd}`);

// 3 : หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง
// ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2

let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0){
        // console.log(`${i}^2`);
        sumEvenSquare = sumEvenSquare + (i ** 2);
    } 
    if (i % 3 == 0) {
        sumThirdSquare = sumThirdSquare + (i ** 2);
    }
}
console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumThirdSQ : ${sumThirdSquare}`);
console.log(`Rusult is : ${sumEvenSquare - sumThirdSquare}`);

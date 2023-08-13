// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7 
// ELSE 
//     PRINT sum
//     PRINT average


// 1. รับตัวมา จนกว่าเจอ 0
// 2. เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// 3. ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// average = (num1 + num2 + ... + numN) / จำนวนN
// จำนวนN = count++ ของ num ที่เข้ามา;

let num = +prompt("Enter Number ?");
let sum = 0;
let count = 0;

do {
    sum += num;

    if( !isNaN(num) && num > 0 ){
        num = +prompt("Enter Number ?");
    } else if (num < 0 && isNaN(num) && num.trim()){
        num = 0;
    }

    count++;

} while (num >= 1);

let average = sum / count;

console.log(`sum = ${sum}, average = ${average}`);
// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->

// 4596 % 10 => remainder = 6 เป็นการเก็บเศษ
//  4596 - 6 => 4590 /10 = 459  เป็นการลดจำนวนหลัก

let num = +prompt("Input Number: ");

let sum = 0;
let count = 0;
while (num) {
    let remainder = num % 10;
    num = (num - remainder) / 10;
    sum += remainder;
    count++;
}
console.log(count, sum);
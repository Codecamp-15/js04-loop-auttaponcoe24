// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข

let num = +prompt("Input Number");

// Pattern Recognition
// 1150/10 -> 115 => count = 1;
// 115/10 -> 11.5 => count = 2;
// 11.5/10 -> 1.15 => count = 3;
// 1.15/10 -> 0.115 => count = 4;

let count = 0;

if (num < 0) num = -num; // แปลง ลบให้เท่ากับบวก

while(num >= 1){
    // console.log(num);
    count++;
    num = num / 10;
}
console.log(count);


// while (num) {
//     count++;
//     let remainder = num % 10;
//     num = (num - remainder) / 10;
// }


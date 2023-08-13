// ประเภทของ Loop
// - Condition Loop ตัดสินใจย่วาจะรันต่อไหม  จาก Boolean
// - Conunting Loop                     จาก ตัวเลข
// - List Loop                          จาก จำนวนของในรายการ

// console.log("starting...");

// let i = 1;

// กรณี หาร 3 ลงตัว
// while(i <= 20){
//     if((i % 5) === 0) {
//         console.log(`${i} : High Five`)
//     }
//     else if ((i % 3) == 0) {
//         console.log(i)
//     }

//     i++;
// }

// console.log("end...");


// FizzBuzz Problem
console.log("starting...");

let i = 1;

// กรณี หาร 3 ลงตัว
while(i <= 20){
    if((i % 3) == 0 && (i % 5) == 0){
        console.log("FizzBuzz");
    }
    else if((i % 5) === 0) {
        console.log(`${i} : Buzz`)
    }
    else if ((i % 3) == 0) {
        console.log(`${i} : Fizz`)
    }else {
        console.log(i);
    }
    
    i++;
}

console.log("end...");
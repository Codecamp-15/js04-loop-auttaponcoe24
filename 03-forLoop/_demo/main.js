// () = parenthesis
// {} = bracket
// [] = square bracket

// EX! : Examine Syntax
// for (let i = 2; i <= 20; i++) {
    // if (i % 2 == 0) console.log(i);
    // console.log(i);
    
// }

// EX2 : FizzBuzz
// for (let i = 1; i <= 20; i++) {
    
//     if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else if (i % 3 == 0) console.log ("Fizz");
//     else console.log(i);
// }

// EX3 : Skip Fizz
// for (let i = 1; i <= 20; i++) {
    
//     if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else if (i % 3 == 0) continue;
//     else console.log(i);
// }

// EX3B continue คือ update ค่าเริ่มรัน loop ถัดไป
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) console.log(i);
//     else continue;
//     console.log("even");
// }

// EX4 : Concat String

// let str = "";

// for (let i = 0; i <= 10; i++) {

//     // Guard
//     if (i % 3 == 0) {
//         continue; 
//     }
//     str += i;

// }
// console.log(str); // "1245678910" คือ หาร 3 ลงตัวจะถูก skip ไป

// EX5 : remove vowel (a, e, i, o, u)

// let src = "codecamp"
// let res = "" // cdcmp

// src.length => 8
// src[0] => c
// src[1] => o

// for (let i = 0; i < src.length; i++) {
//     let c = src[i];
//     if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') 
            // continue;
//     res += src[i];
    // '' + src[0] == '' + 'c' => 'c'
    // 'c' + src[1] == 'c' + 'o' => 'co'
// }

// for (let i = 0; i < src.length; i++) {
//     let c = src[i];
//     let isVowel = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
//     if (isVowel) continue;
//     res += src[i];
    // '' + src[0] == '' + 'c' => 'c'
    // 'c' + src[1] == 'c' + 'o' => 'co'
// }

// console.log(res);

// ADVANCE : Nested Loop;


// Mulitplication Table
for (let i = 2; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        // i = i * j;
        
        console.log(`${i} * ${j} = ${i * j}`);;
    }
    console.log('\n')
}
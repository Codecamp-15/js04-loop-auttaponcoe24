// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// 1. (i==1 || i%2 == 0 || i%3 == 0 || i%5==0 || i%7==0) คือ ตรวจสอบว่าตัวแปร i (ค่าตัวเลข) มีค่าเป็น 1 หรือ %(Mod – หารเอาเศษ) ด้วย 2 หรือ 3 หรือ 5 หรือ 7 มีค่าเป็น 0(ศูนย์) หรือไม่ ถ้าใช่เงื่อนไขที่ (1.) จะเป็นจริง
// 2. (i!=2 && i!=3 && i!=5 && i!=7) คือ ตรวจสอบว่าตัวแปร i (ค่าตัวเลข) ไม่เท่ากับ 2 และ 3 และ 5 และ 7 ถ้าใช่เงื่อนไขที่ (2.) จะเป็นจริง

// solu 1: me
// for (let i = 1; i <= 100; i++) {
//     if((i == 1 || i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) && 
//     (i != 2 && i != 3 && i != 5 && i != 7)) continue;

//     console.log(i);
// }

// solu 2:
for (let n = 2; n <= 100; n++) {
    let isPrime = true; // flag
    for (let divider = 2; divider < n; divider++) {
        // divider 2,3,4,...,n-1
        if(n % divider == 0) {
            isPrime = false;
            break;
        }
        // n=2 6/2 = 2.5 isPrime = true
        // n=3 6/3 = 1.6 isPrime = true
        // n=4 6/4 = 1.25 isPrime = true
        // n=5 
    }
    if (isPrime) {
        console.log(`Number ${n} is prime number`);
    }
}

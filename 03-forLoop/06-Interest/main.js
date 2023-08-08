// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)


let interestRate = 2.5;
let balance = 100000;
let newBalance;
//  newBalance = balance + Interest
// newBalance = balance + (balance *(interestRate/100));
sum = 0;

for (let i = 0; i < 10; i++) {
    sum += (balance *(interestRate/100));
}
newBalance = balance + sum;
console.log(`10 yesrs money : ${newBalance}`);

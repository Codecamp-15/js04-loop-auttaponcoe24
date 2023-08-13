// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย


// Program-1 : Input User-1
        // let ansNumber = prompt('Enter your magic number'); // => num, string : '', '   ', 'qwerasdf', '12'

        // let isNull = ansNumber === null;
        // let isEmpty = ansNumber.trim() === '';
        // let isNan = isNaN(ansNumber)

        // let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber)
        // let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
        // let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

        // if (isValid) {
        //     alert('Invalid Input');
        // } else if (outOfRange) {
        //     alert('Invalid Range');
        // } else if (isInRange) {
        //     alert('Try to guess number');
        // }

// v2 : รับ Input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อนจบโปรแกรม

let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number'); // null || ""

    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99

    if(isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if(outOfRange){
        alert('Invalid Range, Try 1-99');
    }
} while (isEmpty || isNan);

// Program 2 : Guess
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Invalid Range
// - Hint Too High, Too Low
// - ทายได้ไม่เกิน 5 ครั้ง หรือ n ครั้ง

let guessNumber;

do {
    guessNumber = prompt('Enter your answer')

    isEmpty = guessNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99

    if(isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if(outOfRange){
        alert('Invalid Range, Try 1-99');
    } else if(+guessNumber > +ansNumber) {
        alert('Too High')
    } else if(+guessNumber < +ansNumber) {
        alert('Too Low')
    } else if(+guessNumber === +ansNumber) {
        alert('correct')
    }
    
} while(+guessNumber != +ansNumber);
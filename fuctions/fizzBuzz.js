// mun javascript array ratkaisu

const fizz = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]
const buzz = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

let i = 0;

while (i <= 10) {
    let testNumber = Math.random() * 100;
    testNumber = Math.floor(testNumber) +1;
    if (fizz.includes(testNumber) && buzz.includes(testNumber)) {
        alert("FizzBuzz");
    } 
    else if (fizz.includes(testNumber)) {
        alert("fizz");
    }
    else if (buzz.includes(testNumber)) {
        alert("buzz");
    } else {
        alert(testNumber);
    }
    ++i
}


// Mikon mallivastaus, joka on helposti sovellettavissa myös muille kielille

for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz")
    } 
    else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz") 
    } else {
        console.log(i)
    }
}
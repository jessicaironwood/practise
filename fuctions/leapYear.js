// kuudelle riville kitjoitettava vastaus 
let year = prompt("Please input a year to calculate if it's a leap year.");
if (year % 4 = 0 && year % 100 !== 0 && year % 400 = 0) {
    return "Leap year."
}


// haaste loppuu




    // hyväksytty minun ratkaisu

    function isLeap(year){
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
            return "Leap year.";
        } else {
          return "Not leap year.";
        }
    }

    // kurssin esimerkki ratkaisu


   function isLeap(year){

    if (year % 4 === 0) {
       if (year % 100 === 0) {
        if (year % 400 === 0) {
            return "Leap year.";
        } else {
            return "Not leap year.";
        }
       } else {
            return "Leap year.";
       }
        } else {
            return "Not leap year.";
        }
    }


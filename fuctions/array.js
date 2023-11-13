// array.includes(tekstin)
//     vastaukseksi tulee boolean arvo true/false
// 

//  TEHTÄVÄ: vieralista-array. prompt kysyy käyttäjän nimee ja tarkistaa 
//             onko ko. nimi listalla  if true === alert "welcome" 
//              else (false) === alert "sorry, maybe next time."

let userName = prompt("What's your name?")
const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
if (guestList.includes(userName) === true) {
    alert("Welcome!")
} else {
    alert("Sorry, maybe next time.")
}
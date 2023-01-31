let userBirthYear   = +prompt("What is the year of your birth?")
let userBirthMonth  = +prompt("What is the month of your birth?")
let userBirthDay    = +prompt("What is the day of your birth")
let userName        = prompt("What is your name?")
let userSurname     = prompt("What is your surname?")
const currentYear   = 2023
// Astrological Zodiac symbol calculation 
let zodiak
switch (userBirthMonth) {
    case 1:
        userBirthDay >= 20 ? zodiak = 'Aquarius' : zodiak = 'Capricorn'
      break;
    case 2:
        userBirthDay >= 19 ? zodiak = 'Pisces' : zodiak = 'Aquarius'
    break;
    case 3:
        userBirthDay >= 21 ? zodiak = 'Aries ' : zodiak = 'Pisces'
    break;
    case 4:
        userBirthDay >= 20 ? zodiak = 'Taurus' : zodiak = 'Aries'
    break;
    case 5:
        userBirthDay >= 21 ? zodiak = 'Gemini' : zodiak = 'Taurus'
    break;
    case 6:
        userBirthDay >= 21 ? zodiak = 'Cancer' : zodiak = 'Gemini'
    break;
    case 7:
        userBirthDay >= 23 ? zodiak = 'Leo' : zodiak = 'Cancer'
    break;
    case 8:
        userBirthDay >= 23 ? zodiak = 'Virgo' : zodiak = 'Leo'
    break;
    case 9:
        userBirthDay >= 23 ? zodiak = 'Libra' : zodiak = 'Virgo'
    break;
    case 10:
        userBirthDay >= 23 ? zodiak = 'Scorpio' : zodiak = 'Libra'
    break;
    case 11:
        userBirthDay >= 23 ? zodiak = ' Sagittarius  ' : zodiak = 'Scorpio'
    break;
    case 12:
        userBirthDay >= 22 ? zodiak = 'Capricorn' : zodiak = 'Sagittarius'
    break;   
}

//leap year calculation
if(userBirthYear % 400 === 0 || (userBirthYear % 100 !=0 && (userBirthYear - userBirthYear % 100) % 4 ===0 ) ){
    document.write(`User Bio: ${userName} ${userSurname}, ${currentYear - userBirthYear} years old (leap year), ${zodiak}`)
}
else{
    document.write(`User Bio: ${userName} ${userSurname}, ${currentYear - userBirthYear} years old, ${zodiak}`)
}



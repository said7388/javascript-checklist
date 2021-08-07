const year = 2000;

if (year % 400 == 0){
    console.log("This year is a leap year.")
}
else if (year % 4 == 0 && year % 100 != 0){
    console.log("This year is a leap year")
}
else {
    console.log("this year is not a leap year.")
}
                          // level - 1



let age = prompt('Enter your age: ')
if (age >= 18) {
    console.log('You are old enough to drive')
}
else{
    console.log('you are able to drive')
}



let a = prompt('Ente a number: ')
let b = prompt('Enter another number: ')
if(a > b){
    console.log('a is greater then b')
}
else{
    console.log('a is less then b')
}



let n = prompt('Enter a number')
if (n % 2 == 0){
    console.log('n is an even number')
}
else{
    console.log('n is an odd number')
} 




                            // level - 2


let score = prompt('Enter number') 
switch (true) {
    case score >= 90:
        console.log('A')
        break;
    case score >= 70:
        console.log('B')
        break;
    case score >= 60:
        console.log('C')
        break;
    case score >= 50:
        console.log('D')
        break;
    default:
      console.log('F')                
}                           

             
let season = prompt('Enter the season') 
if (season == 'september' || season == 'october' || season == 'november'){
    console.log('The season is Autumn')
}  
else if (season == 'december' || season == 'january' || season == 'febuary'){
    console.log('The season is Winter')
}  
else if (season == 'march' || season == 'april' || season == 'may'){
    console.log('The season is Spring')
} 
else{
    console.log('please enter the vaild season')
}                      




let day = prompt('Enter the day')
if (day == 'monday' || day == 'tuseday' || day == 'wednesday' || day == 'thursday' || day == 'friday' ){
    console.log('working day')
}
else if (day == 'saturday' || day == 'sunday'){
    console.log('weekend')
}
else{
    console.log('Enter a vaild day')
}


   

                            // level - 3


let month = prompt('Enter a month: ')
if (month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december'){
    console.log('31 days') 
}
else if (month == 'febuary'){
    console.log('29 days')
}
else if (month == 'april'|| month == 'june' || month == 'september' || month == 'november'){
    console.log('30 days')
}
else {
    console.log('please enter a vaild month')
}


let year = prompt('Enter the leap year')
if ((year%4==0) && (year%100==0)){
   console.log('This is a leap year')
}
else if (year%400==0){
    console.log('This is a leap year')
}
else{
    console.log('please enter the vaild number')
}

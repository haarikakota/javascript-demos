function leapyear(year){
    if((year%4==0)&&(year%100!=0)||(year%400==0)){
        console.log("it is a leap year");
    }
    else{
        console.log("it is not a leap year");
    }
}
leapyear(2004);
leapyear(2019);
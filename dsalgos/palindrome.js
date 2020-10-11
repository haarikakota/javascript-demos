function palindrome(n){
    var t=n;
    var reverse=0;
    while(t!=0){
    reverse = reverse * 10;
      reverse = reverse + t%10;
      t = Math.floor(t/10);
    //   console.log(t);
    }
    if(n == reverse){
        console.log("It is palindrome");
    }
    else{
        console.log("It is not a palindrome");
    }
}
palindrome(1001);
palindrome(123);
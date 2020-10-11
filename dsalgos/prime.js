function isprime(n){
    var h=0;
    for(var i = 1 ; i <= n ; i++){
        if(n % i == 0 ){
        h=h+1;
    }
    }
    if(h == 2){
        console.log(h,"is prime number");
    }
    else{
        console.log( h,"is not a prime number");
    }
}
isprime(7);
isprime(42); 

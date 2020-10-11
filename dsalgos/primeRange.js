function prime(n){

for(var i=2; i<=n ;i++){

        var h = true;

        for(var j=2; j<i; j++){
            if(i%j === 0){
               h = false;
            }
        }
        if(h === true){
            console.log(i);
        }
    }
}
prime(100);
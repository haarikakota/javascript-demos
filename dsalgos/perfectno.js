function perfect(n){
    var i=0;
    var sum=0;
    while(i<n){
    if(n%i==0)
         sum=sum+i;
        i++;
}
if(sum == n){
    console.log("perfect number");
}
else{
    console.log("not a perfect number");
}
}
perfect(6);
perfect(28);
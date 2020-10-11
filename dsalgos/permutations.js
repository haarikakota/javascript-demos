function permutations(n,r){
    var nCr = fact(n)/(fact(r)*fact(n-r));
    var nPr = fact(n)/(fact(n-r));
   console.log(nCr);
   console.log(nPr);
}
function fact(x){
    var f=1;
    for(var i=1;i<=x;i++)
      f=f*i;
    return f;
}
permutations(3,2);
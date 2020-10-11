function gcd(a,b){
    while(a!=b)
    {
        if(a > b)
            a -= b;
        else
            b -= a;
    }
 return a;
}
function gcdArr(arr) {
    let result = gcd(arr[0], arr[1])
    for (var i=3; i<arr.length; i++) {
      result = gcd(result, arr[i])
    }
    return result;
  }
  console.log(gcdArr([1,2,3]));
  console.log(gcdArr([2, 4, 6, 8]));
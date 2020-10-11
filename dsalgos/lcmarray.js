function gcd(a,b) 
{ 
    if (b == 0) 
        return a; 
    return gcd(b, a % b); 
} 

function lcm(arr) 
{
    var ans = arr[0]; 
    for (var i = 1; i < arr.length; i++) 
        ans = (((arr[i] * ans)) / 
                (gcd(arr[i], ans))); 
  
    return ans; 
} 
console.log(lcm([2, 7, 3, 9, 4]));
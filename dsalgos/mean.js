function findMean(arr) 
{ 
    var sum = 0; 
    for (var i = 0; i < arr.length; i++)  
        sum += arr[i]; 
      
    return sum/arr.length;
} 
console.log(findMean([1, 3, 4, 2, 7, 5, 8, 6 ]));
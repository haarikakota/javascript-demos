function median(arr){
    var temp=0;
    var median=0;
    for(var i=0;i<arr.length-1;i++)                                                             
    {                                                                              
        for(var j=0; j<(arr.length)-i-1; j++)                                                       
        {                                                                            
            if(arr[j]<arr[j+1])                                                             
              {                                                                           
                temp = arr[j];                                                               
                arr[j] = arr[j+1];                                                             
                arr[j+1] = temp;                                                             
              }                                                                           
         }                                                                            
    }                                                                              
if( arr.length%2 == 0){                                                                
  median = arr[(arr.length/2)-1]/2+arr[(arr.length/2)]/2;     
}                                      
 else
 {                                                          
  median = arr[(arr.length/2)];  
    }
return median;  
}
    
console.log(median([1,4,7,5]));
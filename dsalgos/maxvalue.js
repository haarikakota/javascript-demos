function arrayMax(arr) {
    var len = arr.length,max =0;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };
  console.log(arrayMax([2,3,1,10]));
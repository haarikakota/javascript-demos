function swap(){
    var arr1=['a','b','c'];
    var arr2=['x','y','z'];
    var temp=arr1;
    arr1=arr2;
    arr2=temp;
    console.log("array1",arr1);
    console.log("array2",arr2);
}
swap();
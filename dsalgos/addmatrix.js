function sum(m1,m2){
    var result=[];
    result = m1.length;
    for(var i=0;i<result.length;i++){
        result[i]=m1[i].length;
        for(var j=0;j<result[i].length;j++){
            result[i][j]=m1[i][j]+m2[i][j];
        }
    }
    return result;
}
sum([1,2,3],[4,5,6]);
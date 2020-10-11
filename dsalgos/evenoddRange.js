function evenodd(n){
    var a1=[];
    var a2=[];
    for(var i=1;i<n;i++)
    {
        if(i%2 == 0){
                a2.push(i);
        }
    }
        console.log("Even numbers",a2);
        for(var j=1;j<=n;j++){
    if(j%2 !=0){
        a1.push(j);
}
}

console.log("odd number",a1);

}
evenodd(30);
function largest(a,b,c){
    if(a>=b && a>=c){
        console.log(a,"is largest number");
    }
    else if(b>=a && b>=c){
        console.log(b,"is largest number");
    }
    else{
        console.log(c,"is largest number");
    }
}
largest(20,30,50);
largest(70,20,10);
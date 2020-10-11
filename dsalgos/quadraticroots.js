function quadratic(a,b,c){
    var root = Math.sqrt(b*b - 4*a*c);
    var denominator = 2*a;
    var root1=((-b)+root)/denominator;
    var root2 =((-b)-root)/denominator;
    console.log(root1);
    console.log(root2);
}
quadratic(2,-11,5);
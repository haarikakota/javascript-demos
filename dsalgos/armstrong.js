function armstrong(x){
    var arm=0,a,b,c,d,num,power;
num=Number(x);
power = Number(x.length);
temp=num;
while(temp>0)
{
a=temp%10;
temp=parseInt(temp/10); 
arm=arm+Math.pow(a,power);
}
if(arm==num)
{
console.log("Armstrong number");
}
else
{
console.log("Not Armstrong number");
}
}

armstrong("123");
armstrong("371");
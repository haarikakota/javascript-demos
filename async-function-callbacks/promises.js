//What if the settIMeout doesnot worK and it should display a error only once without waiting for 5 seconds.
//And if there is a callback inside a callback and another callback and another callback it is callback hell 
//these two problems lead us to PROMISES

// function abc(callback){ 
//     let error=true;
//     callback(setTimeout(function(){
//         callback({data:"server response"},error);
//     },1000),error);
// }
// abc(function (x,err){
//     if(!err)
//     console.log(x);
//     else
//     console.log("there was an error");
// })



//Promises
const abc = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error){
            resolve({data:"response",
                        fun: ()=>console.log("Not funny")
                    });
                }
                else{
                    reject();
                }

        },1000);
    })
}
abc().
    then((data)=>{
            console.log(data.data);
            data.fun();
    }).
        catch((err)=>console.log('error'));
console.log("hello");

//Promises without error handling

const xyz=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({data:"response",
            fun: ()=>console.log("Not funny")
        });
        },2000);
    })
}
xyz().then((data)=>{
    console.log(data.data);
    data.fun();
})
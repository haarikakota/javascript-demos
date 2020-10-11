// const abc = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let error=false;
//             if(!error){
//             resolve({data:"response",
//                         fun: ()=>console.log("Not funny")
//                     });
//                 }
//                 else{
//                     reject();
//                 }

//         },1000);
//     })
// }
// abc().
//     then((data)=>{
//             console.log(data.data);
//             data.fun();
//     }).
//         catch((err)=>console.log('error'));
// console.log("hello");


const abc = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false;
            if(!error)  resolve({ data : "Server Response"});
            else    reject();  
     }, 2000);
    })
}
async function new_server(){
    const data = await abc();
    return data;
}
new_server().then(final_data => console.log(final_data.data));
console.log('Hi');


async function a(){
    return Promise.resolve(1);
}
a().then(alert);
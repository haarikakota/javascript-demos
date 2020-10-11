//Here it provides an error because doit() function is invoked javascript is not waiting for
// setTimeout and it performs its task and will not ensure the data from the setTimeout method even if the time is low.


//This leads to callbacks
//Callbacks are simple functions which are used to notify the calling instance when an asynchronous code block 
//has been executed and the result is available.

const doit= ()=>{
    setTimeout(()=>{
        return {
            data: "I am working inside."
        }
    },3000)
}
//doit() is invoked
const todo =  doit();
// data from setTimeout is not in todo beacauseit will not get invoked
console.log(todo.data);




//Now to overcome this problem we are going to use function call backs

//callback is like a variable name can use any name and it helps to invoke the method setTimeout

const doit = (callback) =>{
    setTimeout(()=>{
        callback({
            data:"I am working."
        })
    },3000)
}

//todo replaces with callback after waiting for 3 seconds it will provide the output
doit( (todo) =>{
    console.log(todo.data);
})

//Here this message will be displayed soon after the run command
console.log("I am working inside");

//
const h1=(cb)=>{
    setTimeout(()=>{
        cb({
            d1:"hello",
            d2:'gud mrng!',
            d3:'wt r u dng?'
           
        },
        {
            c1:'play',
            c2:'read'
        })
        cb({
            d1:'basket ball',
            d2:'table tennis',
            d3:'hockey'
        })
    },1000)
    console.log("hihihihihihihi");
}
h1((abc)=>{
    console.log(abc);
    console.log(abc.d1);
    // console.log(cb.d2);
    // console.log(cb.d3);
})

console.log("hello0");
console.log('hello1');
console.log('hello2');
console.log('hello3');
console.log('hello4');
console.log('hello5');

//
//This will work only for consoleing the data if we want to output the objects it is n
function abc(){
   
    const ghi=()=> console.log("data");
    setTimeout(ghi,1000);
}
abc();
//

function abc(xyz){
    setTimeout( function ghi(){
        xyz({
            dataa:"hi everyone",
        })
    },1000);  
}
abc((todo)=>{
    console.log(todo.dataa);
});

//
function abc(xyz,error){
    function ghi(){
        let error=false;
        xyz({
            dataa:"hi everyone",
        },error)
    }
    setTimeout(ghi,1000);
   
}
abc((todo,err)=>{
    if(!err)
    console.log(todo.dataa);
    else
    console.log("there was an error");
});



//callback hell

// levelOne() is called a high-order function because
// it accepts another function as its parameter.
function levelOne(value, callback) {
    var newScore = value + 5;
    callback(newScore);
}
// Please note that it is not mandatory to reference the callback function (line #3) as callback, it is named so just for better understanding.
function startGame() {
    var currentScore = 5;
    console.log('Game Started! Current score is ' + currentScore);
        // Here the second parameter we're passing to levelOne is the
        // callback function, i.e., a function that gets passed as a parameter.
        levelOne(currentScore, function (levelOneReturnedValue) {
            console.log('Level One reached! New score is ' + levelOneReturnedValue);
        });
}
startGame();



//

function levelOne(value, callback) {
var newScore = value + 5;
callback(newScore);
}
function levelTwo(value, callback) {
var newScore = value + 10;
callback(newScore);
}
function levelThree(value, callback) {
var newScore = value + 30;
callback(newScore);
}
// Note that it is not needed to reference the callback function as callback when we call levelOne(), levelTwo() or levelThree(), it can be named anything.
function startGame() {
var currentScore = 5;
console.log('Game Started! Current score is ' + currentScore);
levelOne(currentScore, function (levelOneReturnedValue) {
    console.log('Level One reached! New score is ' + levelOneReturnedValue);
    levelTwo(levelOneReturnedValue, function (levelTwoReturnedValue) {
        console.log('Level Two reached! New score is ' + levelTwoReturnedValue);
        levelThree(levelTwoReturnedValue, function (levelThreeReturnedValue) {
            console.log('Level Three reached! New score is ' + levelThreeReturnedValue);
        });
    });
});
}
startGame();



//
function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
  }
  function logQuote(quote){
    console.log(quote);
  }
  createQuote("eat your vegetables!", logQuote);

  //
  function ki(){
      setTimeout(()=>{
          print("i am gud");
      },1000)
  }
  ki()
  function print(x){
      console.log(x);

  }


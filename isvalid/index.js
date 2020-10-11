function isValidName(name){
    if(typeof(name) === 'string' && name.trim().length >= 3){
        return true;
    }
 
    else{
        return false;
    }
}
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
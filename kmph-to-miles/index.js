function kilometer(){
    var kms = prompt("Number of kilometers");
    var miles = kms * 0.62137;
    console.log(Math.floor(miles));
    document.getElementById("p1").innerHTML = `${Math.floor(miles)}`;
}
kilometer();
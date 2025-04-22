function checkemail(){
    let e = document.getElementById("email").value;
    if(e.length<6){
        alert("invalid email");
        return false;
    }
    return true;
}

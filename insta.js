function chose() {
 document.querySelector(".chose").classList.add("moveleft");
 document.querySelector(".chose").classList.remove("moveright");
 document.querySelector(".s1").style.color="gray";
 document.querySelector(".s2").style.color="white";

}
function chose2() {
    
    document.querySelector(".chose").classList.add("moveright");
    document.querySelector(".chose").classList.remove("moveleft");
    document.querySelector(".s1").style.color="white";
    document.querySelector(".s2").style.color="gray";
    
   }
   function follow(){
       var f=document.querySelector(".follow");
       if(f.innerHTML==="Follow"){
        f.innerHTML="Following";
        var count=document.querySelector(".fff");
         count.innerHTML="30"

        

       }
       else{
        f.innerHTML="Follow";
        var count=document.querySelector(".fff");
        count.innerHTML="29";
       }
   }
   function pop(){
   
   
    document.querySelector(".popup").classList.add("pop");
    document.querySelector(".blur").classList.add("blur2");
    document.querySelector("body").classList.add("blurred-background ");
   
}
function popoff(){
    document.querySelector(".popup").classList.remove("pop");
    document.querySelector(".blur").classList.remove("blur2");
    document.querySelector("body").classList.remove("blurred-background ");
   
      
}
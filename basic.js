function slide(){
    var slide=document.querySelector(".menubar");
    slide.classList.add("slideit");
    document.querySelector(".blur").classList.add("blur2");
    document.querySelector(".cancel").classList.add("display2");
}
function slide_back(){
    var slide=document.querySelector(".menubar");
    slide.classList.remove("slideit");
    document.querySelector(".blur").classList.remove("blur2");
    document.querySelector(".cancel").classList.remove("display2");
}
function function1(){
    document.querySelector(".freshimg").classList.add("disappear");
    document.querySelector(".nib").classList.add("appear");
    document.querySelector(".navbarrr").classList.add("z");
    document.querySelector(".navbar").classList.add("z");
    document.querySelector(".blur").classList.add("blur2");
}
function function2(){
    document.querySelector(".freshimg").classList.remove("disappear");
    document.querySelector(".navbarrr").classList.remove("z");
    document.querySelector(".navbar").classList.remove("z");
    document.querySelector(".nib").classList.remove("appear");
    document.querySelector(".blur").classList.remove("blur2");
}
function func1(){
    document.querySelector(".primeimg").classList.add("primeappear");
    document.querySelector(".nib2").classList.add("appear2");
    document.querySelector(".navbarrr").classList.add("z");
    document.querySelector(".navbar").classList.add("z");
    document.querySelector(".blur").classList.add("blur2");
}
function func2(){
    document.querySelector(".primeimg").classList.remove("primeappear");
    document.querySelector(".navbarrr").classList.remove("z");
    document.querySelector(".navbar").classList.remove("z");
    document.querySelector(".nib2").classList.remove("appear2");
    document.querySelector(".blur").classList.remove("blur2");
}
function app() {
    var flag = document.querySelector(".eeee");
    var display = window.getComputedStyle(flag).display;
    if (display === "none") {
        flag.style.display = "block";
        document.querySelector(".jk").innerHTML="see"+" "+"less"+"↑";
    } else {
        flag.style.display = "none";
        document.querySelector(".jk").innerHTML="see"+" "+"all"+"↓";
    }
}
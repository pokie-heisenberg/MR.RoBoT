let currentIndex = 0;

function slide(event) {
    let button = event.target;
    let slidesContainer = button.parentElement;

    if (currentIndex === 0) {
        slidesContainer.style.transform = `translateX(-49%)`;
        currentIndex = 1;
        button.innerHTML = "<";
    } else {
        slidesContainer.style.transform = `translateX(0%)`;
        currentIndex = 0;
        button.innerHTML = ">";
    }
}
function more() {
    var viewMoreSections = document.querySelectorAll(".Questions");
    var button = document.querySelector(".veiw");
    var questionDiv = document.querySelector(".question");


    var isHidden = Array.from(viewMoreSections).every(section => section.style.display === "none" || section.style.display === "");


    viewMoreSections.forEach(section => {
        section.style.display = isHidden ? "block" : "none";
    });

    button.innerHTML = isHidden ? "View Less" : "View More";


    questionDiv.style.height = isHidden ? "49vh" : "20vh";
}
function more2(event) {
    var button = event.target;
    var content = button.parentElement.nextElementSibling;


    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerHTML = "↓";

    }
    else {
        content.style.display = "none";
        button.innerHTML = "↑";

    }
}
function reveal(event){
    var button=document.querySelectorAll(".i");
    var a=event.target;
    if(a==button[0]){
        document.querySelector(".t").style.display="block";
    }
    if(a==button[1]){
        document.querySelector(".ig").style.display="block";
    }
    if(a==button[2]){
        document.querySelector(".f").style.display="block";
    }
    if(a==button[3]){
        document.querySelector(".y").style.display="block";
    }
    
    
}
function hide(event){
    var button=document.querySelectorAll(".i");
    var a=event.target;
    if(a==button[0]){
        document.querySelector(".t").style.display="none";
    }
    if(a==button[1]){
        document.querySelector(".ig").style.display="none";
    }
    if(a==button[2]){
        document.querySelector(".f").style.display="none";
    }
    if(a==button[3]){
        document.querySelector(".y").style.display="none";
    }
    
    
}

function searchs(){
  var button= document.querySelector(".search");
    if(button.style.display==="none"){
       button.style.display="block";
    
    }
    else{
        button.style.display="none";
        
    }
}
function reveal2(action){
   
   
    if(action==="s"){
        document.querySelector(".gotoamazon").style.display="block";
    }
    if(action==="se"){
        document.querySelector(".setting").style.display="block";
    }}
    function hide2(action){
   
        
        if(action==="s"){
            document.querySelector(".gotoamazon").style.display="none";
        }
        if(action==="se"){
            document.querySelector(".setting").style.display="none";
        }}
        index=0;
        function more3(){
           
            if(index===0){
            document.querySelector(".list").style.height="60vh";
            index=1;
        }
        else{
            document.querySelector(".list").style.height="20vh";
            index=0;
        }
    }
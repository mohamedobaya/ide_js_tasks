
var hiddenWords =document.getElementsByClassName("hidden"),
paragraph=document.getElementById("paragraph");
for(let i=0;i<hiddenWords.length;i++){
    hiddenWords[i].style.visibility = "hidden";
}
paragraph.addEventListener("mouseover",function(){
    for(let i=0;i<hiddenWords.length;i++){
        hiddenWords[i].style.visibility = "visible";
        hiddenWords[i].style.color="#2DB84B";
        hiddenWords[i].style.fontWeight="bold";
    }
    
});
paragraph.addEventListener("mouseout",function(){
    for(let i=0;i<hiddenWords.length;i++){
        hiddenWords[i].style.visibility = "hidden";
    }
    
});
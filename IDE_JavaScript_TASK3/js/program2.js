const colorSelect = document.getElementById("colorSelect"),
selectColor = document.getElementById("Prog2"),
paragraphBackground=document.getElementById("colored");

selectColor.addEventListener("click",function(){
    paragraphBackground.style.background  = colorSelect.value;
});
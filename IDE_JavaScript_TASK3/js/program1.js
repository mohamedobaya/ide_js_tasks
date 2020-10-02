const selectBox = document.querySelector("#items"),
removeB = document.getElementById("Prog1");
 

removeB.addEventListener("click", function(){
    selectBox.options[selectBox.selectedIndex].remove();
});
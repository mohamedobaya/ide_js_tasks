
//convert min to sec
function convert(min){
    
    return min*60;
}
//calculate football points
function footballPoints(wins ,draws,losses){
    
    return wins*3+draws;
}
//are the numbers equal ???
function isSameNum(x,y){
    
    return (x==y)? true : false;
}
// upvotes vs downvotes
function getVoteCount(upvotes,downvotes){
    
    let count=upvotes-downvotes;
    return (count>=0)? count : 0;
}
//click handle
function onClickHandle(id) {
    switch(id){
        case 1:
            var min=parseFloat(document.getElementById('minutes').value);
            printResult(convert(min),1);break;
        case 2:
            var wins=parseFloat(document.getElementById('wins').value);
            var draws=parseFloat(document.getElementById('draws').value);
            var losses=parseFloat(document.getElementById('losses').value);
            printResult(footballPoints(wins ,draws,losses),2);break;
        case 3:
            var x=parseFloat(document.getElementById('first').value);
            var y=parseFloat(document.getElementById('second').value);
            printResult(isSameNum(x,y),3);break;
        case 4:
            var upvotes=parseFloat(document.getElementById('upvote').value);
            var downvotes=parseFloat(document.getElementById('downvote').value);
            printResult(getVoteCount(upvotes,downvotes),4);break;
    }
}
//print function
function printResult(result,id) {
    switch(id){
        case 1:document.getElementById('result1').innerText = result;break;
        case 2:document.getElementById('result2').innerText =result;break;
        case 3:document.getElementById('result3').innerText =result;break;
        case 4:document.getElementById('result4').innerText =result;break;
    }
    
}
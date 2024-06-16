document.getElementById("fib1").addEventListener("mouseover",function reset(){
    document.getElementById("usn1").style.visibility="visible";
    document.getElementById("arrow1").style.transform= 'rotateX(180deg)';

})
document.getElementById("fib1").addEventListener("mouseout",function reset(){
    document.getElementById("usn1").style.visibility="hidden";
    document.getElementById("arrow1").style.transform ='rotateX(360deg)';
})

document.getElementById("fib2").addEventListener("mouseover",function reset(){
    document.getElementById("usn2").style.visibility="visible";
    document.getElementById("arrow2").style.transform= 'rotateX(180deg)';

})
document.getElementById("fib2").addEventListener("mouseout",function reset(){
    document.getElementById("usn2").style.visibility="hidden";
    document.getElementById("arrow2").style.transform ='rotateX(360deg)';
})


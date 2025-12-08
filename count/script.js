let count=0;
document.getElementById("incre").onclick=function(){
    count++;
    document.getElementById("count").textContent=count
}
document.getElementById("decre").onclick=function(){
    count--;
    document.getElementById("count").textContent=count
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("count").textContent=count
}
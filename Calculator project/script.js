function cal(val) {
    document.getElementById("a").value += val;
}
function solve() {
    let x = document.getElementById("a").value ;
    let y = eval(x);
    document.getElementById("a").value=y;
}
function clear() {
    document.getElementById("a").value +=" ";
}
function del(){
    let p = document.getElementById("a").value ;
    let q =(p.length-1)
    document.getElementById("a").value =q ;
}
function clr() {
    document.getElementById("a").value =" ";
    
}
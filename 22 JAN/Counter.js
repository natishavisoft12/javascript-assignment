let val=0
function clickHandle1(){
    val=val+1;
    let value = document.getElementById("type1")
    value.textContent=val;
    
}

const createCounter= ()=>{
    let count=0;
    return ()=>{
        count++;
        document.getElementById("type2").innerText=count;
    }
}
const counter = createCounter();
document.getElementById("increment2").addEventListener("click",counter)

const createCounter2= function(){
    let count=0;
    return function(){
        count++;
        document.getElementById("type3").innerText=count;
    }
}
const counter2 = createCounter2();
document.getElementById("increment3").addEventListener("click",counter2)

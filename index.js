var timeout

function debounceAdder(){
    clearInterval(timeout)
    timeout =setTimeout(function(){
        adder()
    },1000)


}



async function adder(){


    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    const elem=document.getElementById("finalSum")

    const response=await fetch("http://localhost:3000/sum?a="+n1+"&b="+n2)
    const ans= await response.text()
    elem.innerHTML=ans
    
    
    }
    

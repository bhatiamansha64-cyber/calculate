function appendToDisplay(a){
    document.getElementById("display").innerText +=a
}


function calculate(){
    let mystr = document.getElementById("display").innerText
     let sol=(eval(mystr))
    document.getElementById("display").innerText=sol

}



function allClear(){
    document.getElementById("display").innerText =""
}


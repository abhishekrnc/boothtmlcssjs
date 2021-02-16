function myfun(x,y) {
    return x+y
}

document.write(myfun(12,13))
alert("Welcome")

function myfun2() {
    var txt
    if(confirm('press a button')) {
        txt= 'you pressed ok'
    }
    else{
        txt='its got cancel'
    }
    document.getElementById('result').innerHTML=txt
}

 //document.getElementById('result').innerHTML=myfun(12,13)
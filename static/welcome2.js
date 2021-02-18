function validate() {

    if(document.myform.name.value == "") {

        alert("enter your name")
        
        document.myform.name.focus()
        return false
    }

    if(document.myform.zip.value == "" || isNaN(document.myform.zip.value))
}
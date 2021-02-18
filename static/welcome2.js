function validate() {

    if(document.myform.name.value == "") {

        alert("enter your name")
        
        document.myform.name.focus()
        return false
    }

    if(document.myform.zip.value == "" || isNaN(document.myform.zip.value || document.myform.zip.value.length !=5)) {
        alert("enter the zip code")
        document.myform.zip.focus()
        return false
    }

    if(document.myform.country.value == "-1") {
        alert("select the country")
        document.myform.country.focus()
        return false

}
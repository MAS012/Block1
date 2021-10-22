function formF() {
    var mail = document.getElementById("email").value.indexOf("@",".com");
    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    submitOK = "true";

    if (fname.length < 1 || fname.length > 10) {
        document.getElementById("warning1").style.display = "inline";
        submitOK = "false";
    }
    if (sname.length < 1 || sname.length > 10) {
        document.getElementById("warning2").style.display = "inline";
        submitOK = "false";
    }
    if (mail == -1) {
        document.getElementById("warning3").style.display = "inline";
        submitOK = "false";

    }
    if (submitOK == "false") {
        return false;
    }
    else return true;
        

}
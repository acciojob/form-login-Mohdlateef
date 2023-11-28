function getFormvalue() {
    //Write your code here
var value=document.getElementById("form1")
	var first=value.elements["fname"].value;
	var last=value.elements["lname"].value;
	alert(first+""+last);
}
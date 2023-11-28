function getFormvalue() {
    //Write your code here
var value=document.getElementById("form1")
	var first=value.elements["fname"].value;
	var last=value.elements["lname"].value;
	// var combine=first +"/n"+last;
	// alert(combine);
	alert(first+"\n"+last);
}
function clearscreen()
{
	document.getElementById("result").value="";

}

function display(value){
document.getElementById("result").value+=value;
}

function oparation()
{
 	document.getElementById("result").value=eval(document.getElementById("result").value);


}
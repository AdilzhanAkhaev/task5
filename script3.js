


var fac = document.getElementById('faculty');
var vib = fac.getElementsByTagName('option');


document.getElementById("addStudent").onclick = function() {reg()};
function reg(){
	
	var name=document.getElementById('name').value;
	var surname=document.getElementById('surname').value;
	
	var x = document.getElementById("faculty").selectedIndex;
	
	var list = document.getElementById('students')

	
	var tr = document.createElement('TR')
	var kon= '<td>'+name+'</td><td>'+surname+'</td><td><strong>'+vib[x].value+'</strong></td>'
	tr.innerHTML = kon;
	
	list.appendChild(tr)

}


function deter(){
			var s11=document.getElementById('s11').value;
			var s12=document.getElementById('s12').value;
			var s13=document.getElementById('s13').value;
			var s21=document.getElementById('s21').value;
			var s22=document.getElementById('s22').value;
			var s23=document.getElementById('s23').value;
			var s31=document.getElementById('s31').value;
			var s32=document.getElementById('s32').value;
			var s33=document.getElementById('s33').value;
			

			var z1=s11*s22*s33+s13*s21*s32+s31*s12*s23;
			var z2=s13*s22*s31+s11*s23*s32+s33*s12*s21;
			var det=z1-z2;
			document.getElementById("result").innerHTML =det;
		}

const button = document.querySelector('button');
button.addEventListener("click",deter);

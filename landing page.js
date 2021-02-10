var elemnt=document.getElementsByTagName('input');

function ChangeColor()   
     {  
      document.getElementById('f').setAttribute("style","background-color:black; color:white");  
     }  
	 
     function ChangeColor2()   
     {  
	 document.getElementById('s').setAttribute("style","background-color:white; color:black"); 
	 }
	 
	 function ChangeColor3()   
     {  
	 document.getElementById('t').setAttribute("style","background-color:white; color:black"); 
	 }
	 
	 function ChangeColor4()   
     {  
	 
	 }

function mouseOut(){
	for(var i=0;i<elemnt.length;i++){
	elemnt[i].removeAttribute("style");
	}
}

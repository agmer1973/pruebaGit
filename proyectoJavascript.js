var bloque1 = document.getElementById("git-1");
var bloque2 = document.getElementById("git-2");

function leer(){
	this.style.fontSize = "30px";
}

function noLeer(){
	this.style.fontSize = "15px";
}


bloque1.addEventListener("mouseover", leer);
bloque1.addEventListener("mouseout", noLeer);
bloque2.addEventListener("mouseover", leer);
bloque2.addEventListener("mouseout", noLeer);
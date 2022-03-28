let s;
s = document.getElementById("demo").firstChild.nodeValue;
alert(s);
let pera = document.createElement("p");
let para = document.createTextNode("New p3");
pera.appendChild(para);
let divValue = document.getElementById("newChild");
divValue.appendChild(pera);

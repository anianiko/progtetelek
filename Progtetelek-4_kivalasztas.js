//PROG TÉTELEK: 4.kiválasztás 
/* meg szeretnénk tudni azt, hogy a keresett érték 
  hanyadik helyen áll a listában 
  Fontos: optimális erőforrás kezelés! 
  Azaz nem optimális a for ciklussal végigmenni */

var tomb = [1,4,7,14,11,9];

var keresettErtek = 9;

var i = 0;      //segédváltozót kívül deklaráljuk

while(tomb[i] != keresettErtek && i < tomb.length)
	i++;
  
var eredmeny = i + 1;

alert(eredmeny);

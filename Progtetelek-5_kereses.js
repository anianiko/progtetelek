//PROG TÉTELEK: 5.keresés 
/* megkeressük az adott számot a tömbben, és ha benne van, akkor
kiiratjuk, hogy hányadik helyen van, de ha nincs benne, akkor
kiírjuk azt, hogy nincs benne. */

var tomb = [1,4,7,14,11,9];

var keresettErtek = 9;

var i = 0;      //segédváltozó

while(tomb[i] != keresettErtek && i < tomb.length)
	i++;

if (i<tomb.length) 
    alert('Van találat! ' +matchMedia(i+1));
else
    alert('Nincs találat!');
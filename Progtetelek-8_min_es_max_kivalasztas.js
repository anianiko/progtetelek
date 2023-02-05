//PROG TÉTELEK: 8.Minimum és Maximum kiválasztás 

var tomb = [2,3,4,5,1,10,7,8,9,6];

var meret = tomb.length;

//MIN értéket keressük:
var min = tomb[0];   //segédváltozó, amiben eltároljuk a legkisebb számunkat.
                     //feltételezzük az elején, hogy a tömb 1.eleme, azaz [0] lesz

//for ciklus kell, mert végig kell nézni a tömb MINDEN elemét
for(i=0; i<meret;i++)
    if(tomb[i] < min)
        min = tomb[i];

alert(min);

//MAX értéket keressük:
var max = 0; //minél alacsonyabb számról indítsuk!
            // Érdemes az adott ADATTÍPUS legalacsonyabb számát megadni

for (i = 0; i < meret; i++)
    if (tomb[i] > max)
        max = tomb[i];

alert(max);
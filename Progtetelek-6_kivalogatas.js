//PROG TÉTELEK: 6.kiválogatás 
/* ki szeretnénk válogatni bizonyos dolgokat az 1. tömbből,
  és át szeretném tenni (másolni) egy másik tömbbe */

var tomb = [1,4,7,14,11,9];

var meret = tomb.length;

var ujTomb = [];

var j = 0;      // segédváltozó

//minden értéket átmásolunk egy új tömbbe, ami nagyobb 6-nál:
for (i=0; i<meret; i++)
    if(tomb[i] > 6)
        ujTomb[j++] = tomb[i];

var ujTombMeret = j;

//Ellenőrzés:
for(i=0; i < meret; i++)
    alert(tomb[i]);

for(i=0; i < ujTombMeret; i++)
    alert(ujTomb[i]);
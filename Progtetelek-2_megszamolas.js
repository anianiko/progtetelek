//PROG TÉTELEK: 2.megszámolás
/* megszámoljuk azt, hogy egy tömbben hány elem nagyobb
   egy adott másik értéknél */

var tomb = [9,3,1,2,3,7,12];

var vizsgaltSzam = 5;
var szamlalo = 0;          //segédváltozó

for (i=0; i<tomb.length; i++) {
    if (tomb[i] > vizsgaltSzam) {
        szamlalo++;
    }
}

alert(szamlalo);

/* a kapcsos zárójelek elhagyhatóak lennének a fenti
for-nál és if-nél, mert csak egy feltételt adok meg bennük */
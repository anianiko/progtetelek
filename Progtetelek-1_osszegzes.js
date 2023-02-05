//PROG TÉTELEK: 1.összegzés

var tomb = [1,2,3,4,5];

var szum = 0;       //változó, ahol eltárolom majd az összegeket

for (i=0; i<tomb.length; i++) {     // az i egy segédváltozó
    szum = szum + tomb[i];
}

alert(szum);

/* a kapcsos zárójelek elhagyhatóak lennének a fenti
  for-nál, mert csak egy sort adtam meg benne */
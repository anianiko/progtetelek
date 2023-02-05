//PROG TÉTELEK: 3. eldöntés
/* egy adott tömbben megtalálható-e az adott szám vagy nem.
 Fontos: optimális erőforrás kezelés! 
 Azaz nem optimális a for ciklussal végigmenni */

var tomb = [1,4,7,14,11,9];

var keresendoSzam = 9;

var i = 0;         //segédváltozó

// csak addig fusson le, amíg talál egy olyan értéket, azaz:
/* addig futunk le, amíg i kisebb mint a tömb hossza és
  csak akkor megyünk tovább, hogyha az adott elem nem egyenlő
  azzal, amit keresünk. 
  Ha egyenlő, akkor kilépünk a while ciklusból! */

while (i<tomb.length && tomb[i] != keresendoSzam) {
    i++;
}

/* ha kilépünk a while ciklusból, akkor i biztosan kisebb a tömb hosszánál, 
  ezért adhatjuk meg ezt: */
  
if (i<tomb.length)
    alert('Találat!');
else
    alert('Nincs találat.');
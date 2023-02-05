//PROG TÉTELEK: 9.Metszet tétele 
/* megállapítható, hogy 2 tömbben mik azok az értékek/elemek, amik megegyeznek */

var tomb1 = [2,3,4,5,1,10,7,8,9,6];
var meret1 = tomb1.length;

var tomb2 = [44,5,13,10,7,12,14,61];
var meret2 = tomb2.length;

var metszetTomb = [];

var j;      //segédváltozó, nem inicializáljuk az értékét
var k = 0;  //segédváltozó

//többszörösen összetett ciklus:
for(i=0; i<meret1; i++) {
    j=0;    //minden egyes ciklus lefutásnál a j lenullázódik

    while(j<meret2 && tomb2[j] != tomb1[i])
        j++;
    if(j<meret2)
        metszetTomb[k++] = tomb1[i];
}

//Ellenőrzés:
for(v=0; v<metszetTomb.length; v++)
    alert(metszetTomb[v]);
//PROG TÉTELEK: 10.Unió tétele 
/* azt keressük (és azt fogjuk elmenteni egy 3. tömbbe), ami 
a 2 tömb unióját adják ki. 
Azaz a tomb3-ban minden érték benne lesz, ami a tomb1-ben és 
tomb2-ben is*/

var tomb1 = [2,3,4,5,1,10,7,8,9,6,6];
var meret1 = tomb1.length;

var tomb2 = [44,5,13,10,7,12,14,61];
var meret2 = tomb2.length;

var tombUnio = [];

for(i=0; i<meret1; i++)
    tombUnio[i] = tomb1[i]; //áttöltök egyesével minden elemet a tomb1-ből az unioTombbe
                            //HIBA EBBEN A KÓDBAN! 
                            //Ha tomb1-ben többször szerepel ugyanaz a szám, akkor 
                            //többször is fogja bemásolni azt a számot!!!

var k = meret1;

for(j=0; j<meret2; j++) {
    var i = 0;     //lenullázzuk az i változót, de ez az i nem ugyanaz, mint a fenti for i változója!
    while(i<meret1 && tomb1[i] != tomb2[j])
        i++;        //ha nincs egyezés, növeljük a sgédváltozónk értékét
    if(i > meret1){
        tombUnio[k++] = tomb2[j];
    }
}

//Ellenőrzés:
alert(tombUnio.length);
for(v=0; v<tombUnio.length; v++)  //a változók v helyett lehetnének i-k is!
    alert(tombUnio[v]);
//PROG TÉTELEK: 10.Unió tétele 
/* azt keressük (és azt fogjuk elmenteni egy 3. tömbbe), ami 
a 2 tömb unióját adják ki. 
Azaz a tomb3-ban minden érték benne lesz, ami a tomb1-ben és 
tomb2-ben is*/

var tomb1 = [2,3,5,1,10,61,8,6,6];
var meret1 = tomb1.length;

var tomb2 = [44,5,13,10,7,61,61];
var meret2 = tomb2.length;

var tombUnio = [];

/* áttöltök egyesével minden elemet a tomb1-ből az unioTombbe
figyelembe véve, hogy a tomb1 másolásánál NE LEGYEN EGYEZÉS AZ ELEMEK KÖZÖTT, pl: 6,6 */
var j;
var k=0;
for(i=0; i < meret1; i++) {
	j = i+1;
  while(j< meret1 && tomb1[i] != tomb1[j]){
  	j++;
  }if(j == meret1){
  	tombUnio[k++] = tomb1[i];
  }
}

var i;

for(j = 0; j < meret2; j++){
	i = 0;
  while(tomb1[i] != tomb2[j] && i < meret1){
    i++;					//ha nincs egyezés, növeljük a sgédváltozónk értékét
  }if(i >= meret1){
  	tombUnio[k++] = tomb2[j];
  }
}

/* Ellenőrzés egyesével felugró ablakkal:

alert(tombUnio.length);
for(v=0; v<tombUnio.length; v++)  //a változók v helyett lehetnének i-k is!
    alert(tombUnio[v]); */

//Ellenőrzés 1 ablakban:
alert(tombUnio);
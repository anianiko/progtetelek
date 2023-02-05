//PROG TÉTELEK: 7.szétválogatás 
//azaz szortírozunk.
/* egy meglévő tömbünk (tomb1) adatait/elemeit elemezzük, és 
egy bizonyos kondícióhoz kötjük azt, hogy
a benne lévő adat hogyan haladjon tovább
(lesz, amit egy másik (tomb2) tömbbe vezetünk át, és azokat, amiket
nem vezetünk át a tomb2-be, azt egy harmadik tömbbe (tomb3) vezetjük át */

var tomb1 = [1,2,3,4,5,6,7,8,9,10];
var meret = tomb1.length;

var tomb2 = [];
var tomb3 = [];

var j=0;
var k=0;

/* feltétel: minden, ami 5-nél nagyobb, bekerül a tomb2-be,
 és minden, ami 5 vagy annál kisebb, az bekerül a tomb3-ba */
for (i = 0; i < meret; i++)
    if (tomb1[i] > 5)
        tomb2[j++] = tomb1[i];
    else
        tomb3[k++] = tomb1[i];

//Ellenőrzés:
alert('Eredeti tömb');
for(i=0; i<tomb1.length; i++)
    alert(tomb1[i]);

alert('2. tömb');
for (i = 0; i < tomb2.length; i++)
    alert(tomb2[i]);

alert('3. tömb');
for (i = 0; i < tomb3.length; i++)
    alert(tomb3[i]);
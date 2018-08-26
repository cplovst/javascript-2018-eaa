/**
 * file: js-003-game.js
 **/

 // 1) lav en funktion der returnerer et helt tal
 let Rnd = function(){
   return Math.floor(Math.random()*5); // tal 0 .. 5
 }

 /*
 Vi har brug for et tal mellem 0 og 6
 */

 // 2) terningens tegning dummy
 let terningen = [
   '*',
   '**',
   '***',
   '****',
   '*****',
   '******'
 ];

 // dice.innerHTML = terningen[ Rnd() ];

 // 3) erstat stjernerne med billeder af terningsider

 // 4) knappen aktiveres: eventlistener

 let Klik = function() {
   // alert( terningen[Rnd()] ); // test
   dice.innerHTML = terningen[ Rnd() ];
 }

// tilføk eventlistener til knappen via id
 btn_throw.addEventListener("click", Klik);

// 5) Canvas

// 5.1) lav en funktion, der tegner på canvas
let FlytBrik = function() {
  // 5.2) context 2d
  let ctx = board.getContext("2d");
  // 5.3) animation kræver ren baggrund: slet alt
  ctx.clearRect(0, 0, board.width, board.height);

  // 5.4) farver
  ctx.strokeStyle = "pink";
  ctx.fillStyle = "yellow";

  // 5.5) kant skal have samme koordinater som rektanglet
  ctx.strokeRect(100,50,100,100);

  // 5.6) rektangel med fyld: 'fillstyle'
  ctx.fillRect(100,50,100,100);
}

  // 5.7 properties

// 6) Flyt noget:

  /*
  Kald funktionen FlytBrik() når man klikker på
  "Kast en terning".
  */


// 7) Grafisk

  /*
  Nu er dummyen klar til at du lægger din egen
  grafik på. Lad din brik hoppe til særlige x,y
  positioner. Brug evt. et objekt til at styre
  positioner, således at brikken hopper til
  passende steder på baggrundsbilledet.
  */

  // 8) HiScore

  // 9) Vundet når HiScore > X 

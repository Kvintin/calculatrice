function zero(){
  document.getElementById('principal').value = document.getElementById('principal').value + "0"; }
 
function un(){
  document.getElementById('principal').value = document.getElementById('principal').value + "1"; }
 
function deux(){
  document.getElementById('principal').value = document.getElementById('principal').value + "2"; }
 
function trois(){
  document.getElementById('principal').value = document.getElementById('principal').value + "3"; }
 
function quatre(){
  document.getElementById('principal').value = document.getElementById('principal').value + "4"; }
 
function cinq(){
  document.getElementById('principal').value = document.getElementById('principal').value + "5"; }
 
function six(){
  document.getElementById('principal').value = document.getElementById('principal').value + "6"; }
 
function sept(){
  document.getElementById('principal').value = document.getElementById('principal').value + "7"; }
 
function huit(){
  document.getElementById('principal').value = document.getElementById('principal').value + "8"; }
 
function neuf(){
  document.getElementById('principal').value = document.getElementById('principal').value + "9"; }
 
function virgule(){
  document.getElementById('principal').value = document.getElementById('principal').value + ","; } /*Marche pas*/
 
 
 
var memoireSigne;
var resultat;
 
 
function changeCases(){
  document.getElementById('memoire').value = document.getElementById('principal').value;
  document.getElementById('principal').value = ""; }
 
function clear(){
  alert("test"); /* Pour tester si elle se fait call par le bouton*/
  document.getElementById('principal').value = "";
  document.getElementById ('memoire').value = "";
  memoireSigne = 0;
  resultat = 0;
  alert("test"); /* Pour tester si elle se fait call par le bouton*/ }
 
function plus(){                                                             /*  Exemple valable pour les fonctions du même genre :  */
  if(document.getElementById('memoire').value == "") {changeCases();}             /*  if memoire vide on écrit la valeur de l'input principal dans la memoire et on clear le principal  */
  else {egal();                                                                  /*  else on execute la f egal() (on fait l'opération avec le dernier signe demandé et on attribut la valeur à la var resultat ect.. (voir f egal() )) */
        document.getElementById('memoire').value = resultat;                      /*  puis on met le resultat dans memoire  */
        document.getElementById('principal').value = "";}                         /*  et on clear le principal  */
  memoireSigne = 1; }                                                           /*  Pour finir on change memoireSigne.  */
 
function moins(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('principal').value = "";}
  memoireSigne = 2; }
 
function fois(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('principal').value = "";}
  memoireSigne = 3; }
 
function divise(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('principal').value = "";}
  memoireSigne = 4; }
 
 
 
function egal(){
  if (memoireSigne == 1) {
    resultat = parseFloat(document.getElementById('memoire').value) + parseFloat(document.getElementById('principal').value);}
 
  if (memoireSigne == 2) {
    resultat = parseFloat(document.getElementById('memoire').value) - parseFloat(document.getElementById('principal').value);}
 
  if (memoireSigne == 3) {
    resultat = parseFloat(document.getElementById('memoire').value) * parseFloat(document.getElementById('principal').value);} 
 
  if (memoireSigne == 4) {
    resultat = parseFloat(document.getElementById('memoire').value) / parseFloat(document.getElementById('principal').value);}   
 
document.getElementById('principal').value = resultat;
document.getElementById('memoire').value = ""; }
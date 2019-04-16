function init(){
//add your javascrip between these two lines of code
var button = document.getElementById('entrybutton');
button.addEventListener('click', function () {
var message = document.getElementbyId('entryinput').value;

alert("Phallyn Habercoss: " + message);
console.log(message);
document.getElementbyId('textoutput').innerHTML = message;
});


}
window.addEventListener('load', init);

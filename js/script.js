function init(){
//add your javascrip between these two lines of code
var message = document.getElementById('entryinput').value;
var button = document.getElementById('entrybutton');

button.addEventListener('click', function () {
alert("Phallyn Habercoss: " + message);
console.log(message);
document.getElementById('textoutput').innerHTML = message;
});
}
window.addEventListener('load', init);

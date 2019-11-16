/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//array of imgs
var imgs = ['imgH/NEWhangmanBlank.png', 'imgH/NEWhangmanRope.png', 'imgH/NEWhangmanOnlyHead.png',
	'imgH/NEWhangmannoRightarm.png', 'imgH/NEWhangmanOnlyArms.png', 'imgH/NEWhangmanTorso.png',
	'imgH/NEWhangmanNoRightLeg.png', 'imgH/NEWfullHangman.png'];

// Rajiv'Code
var outputText = "";
//Array that represents the output string which includes all of the letters clicked.
function clickKey(value) {
	outputText += value;
	input.value = outputText;
	myFunction();
}
;
//This function controls when the user clicks on the letter, it will pass the letter value
//as a parameter through the function and then add it to the outputText array.

function clearText() {
	for (var xb = 0; xb < getBox.length; xb++) {
		getBox[xb].innerHTML = "";
	}
}
;




function fSubmit() {




	document.getElementById("myForm").submit();
}
;


//play again onclik submit 
document.forms[0]['playAgin'].onclick = fSubmit;
document.forms[0][0].style.display = 'none';
document.forms[0][1].style.display = 'none';
document.forms[0][4].style.display = 'none';



var spans = document.getElementsByClassName('output');
var btns = document.getElementById('btns');
// store the user score 
var store = document.forms[0]['store'];
var form = document.forms[0];
// placeHolders container
var placeHolderContainer = document.getElementById('container');
// retrive the input form the DOM
var input = form[0];
// for debuggin 
var btn = form[1];
// the word that the user should input 
let word = "ZOOLOGY";
//delcare three variables to store input value the index of the input value and the index of the word that is bein comapred to 
let inputVal, inputIndex, wordIndex;
//placeholder variables
//  stores a placeholder as an html element
var placeHolder = "<div class='letter'></div>";
// hide the buttons 
takeVal();

//                window.addEventListener("load", takeVal);

function takeVal() {
	console.log(word);
	word = btn.value;
}
;
addPlaceHolders();



/// note: if you want to add a different word it should be  add here

// call the addPlaceHolders function to add 

// retrieve the placeHolder from the dom
var getBox = document.getElementsByClassName('letter');

var inputIndexCounter = -1;
// input on event assign the values to the vars and calls the compare function

input.addEventListener("input", myFunction);



function myFunction() {


	// input.oninput = function (event) {
	// assign the input value to the variable 
	// input value represents the value the user enters 
	inputVal = input.value;
	// for debugging 
	inputIndexCounter++;
	inputIndex = inputVal[inputIndexCounter];
	console.log(inputIndex + "    Input value: " + input.value);
	// call the compare function 
	compareIndexes();
	// cal if loss to to compare the index
	//    ifLoss();
	checkHtml();




}
;





// compare indexes of the word to the input user 
var i = 0;
var x = 0;
function compareIndexes() {
	for (i = 0; i < word.length; i++) {
		for (x = 0; x < inputVal.length; x++) {
			if (word[i] === inputVal[x]) {
				// test=false;
				//add a the matched letter to the placeholder
				//   console.log("condition works always");
				//  console.log("the value of word[i]: " + word[i] + "this is input val x: " + inputVal[x])
				getBox[i].innerHTML = word[i];
			} else if (word[i] !== inputVal[i]) {
				// console.log("this is wrong: " + inputVal[x]);
			}
		}
	}
}
;
//  addes placedholders
function  addPlaceHolders() {
	placeHolderContainer.innerHTML = "";
	for (var i = 0; i < word.length; i++)
		placeHolderContainer.innerHTML += placeHolder;
}


var c = -1;
function checkHtml() {
	c++;
	//  console.log("chekc html is called" + inputVal[c])
	checkIfWin();
	if (c < inputVal.length) {
		if (word.search(inputVal[c]) > -1) {

			console.log(word.search(inputVal[c]));
			var rem = word.search(inputVal[c]);
			word2 = word.replace(word[rem], '_');
			word = word2;
			//btn.value = word;
			//console.log(word);
			console.log("yes");

		} else {
			console.log("NO,addImage");
			ChangeImg();
		}
	}
}
;

var PicCounter = 1;


function ChangeImg()
{
	document.getElementById('hangmanImg').src = imgs[PicCounter];
	PicCounter++;

	//This is testing it will reset the pic
	if (PicCounter == 8) {
		loss();
		PicCounter = 1;
	}
}
;

function loss() {


	disableKeys();
	result("LOSE");
	store.value += 0;
	console.log("YOULOSE");
	//     fSubmit();
}
;


var shownWord = [];
function checkIfWin() {
	for (var b = 0; b < getBox.length; b++) {
		shownWord[b] = getBox[b].innerHTML;
	}
	if (shownWord.join('') == btn.value) {
		store.value += shownWord.length * 3;
		console.log("YOU WIN");
		result("WIN!");
	}

}
;

// show the output for the user 
function  result(msg) {
	disableKeys();
	spans[0].innerHTML = " YOU " + msg + "    The Word Was " + btn.value;
	spans[1].innerHTML = "    You Entered " + shownWord;
	btns.style.display = 'block';
}
;





// function disable the keyabord if the user win or loss 
function disableKeys() {
	document.getElementById("keyboard").style.pointerEvents = 'none';
}
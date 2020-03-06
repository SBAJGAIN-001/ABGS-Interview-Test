
/*first assignment*/

function changeColor() {
	var clr = document.getElementById("button");
	if (clr.style.background === 'red') {
		document.getElementById('button').style.background = 'blue';
	} else {
		document.getElementById('button').style.background = 'red';
	}
}

/*second assignment*/

function rotate(){
	counter = 0;
	var rotateBtn = document.getElementById('rotateBtn');
	var rotateBox = document.getElementById('rotate');

	rotateBtn.addEventListener('click', function(){
		if (counter === 0){
			rotateBox.style.transform = 'rotate(90deg)';
			counter = 1;
		} else {
			rotateBox.style.transform = 'rotate(0deg)';
			counter = 0;
		}
})};

/*third assignment*/

var mobile = ['Android', 'iOS'];
var pc = ['Windows', 'MacOs', 'Linux'];

function dropDown(platform){
	var options = [];
	var selection = document.getElementById('platformList');
	var tmp = '';
	selection.options.length = 0;
	switch (platform){
		case 'mobile' : options = mobile; break;
		case 'pc' : options = pc; break;
	}
	for (i=0; i<options.length; i++) {  

    tmp = options[i];
    selection.options[selection.options.length] = new Option(tmp,tmp,false,false);
  }
}

/*fourth assignment*/

var field = [];

for (var n = 0; n < 11; n++) {    
	var randomNum = Math.floor(Math.random() * 99);    
    field.push(randomNum);                 
}    

console.log(field);  

function countRange(array, min, max) {
    var count = 0;
    for (var i = 0, l = array.length, item; i < l; i++) {
        item = array[i];
        if ((min == null || item >= min) && (max == null || item <= max)) {
            count++;
        }
    }
    return count;
}

var first = countRange (field, 0, 10);
console.log('Between 0 & 10 = ' + first);

var first = countRange (field, 10, 20);
console.log('Between 10 & 20 = ' + first);

var first = countRange (field, 20, 30);
console.log('Between 20 & 30 = ' + first);

var first = countRange (field, 30, 40);
console.log('Between 30 & 40 = ' + first);

var first = countRange (field, 40, 50);
console.log('Between 40 & 50 = ' + first);

var first = countRange (field, 50, 60);
console.log('Between 50 & 60 = ' + first);

var first = countRange (field, 60, 70);
console.log('Between 60 & 70 = ' + first);

var first = countRange (field, 70, 80);
console.log('Between 70 & 80 = ' + first);

var first = countRange (field, 80, 90);
console.log('Between 80 & 90 = ' + first);

var first = countRange (field, 90, 100);
console.log('Between 90 & 100 = ' + first);


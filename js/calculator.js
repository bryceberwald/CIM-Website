//Make sure JS File is working properly
//console.log('Start of "calculator.js" file...');

//Number Declarations
var Number1 = document.getElementById("One");
var Number2 = document.getElementById("Two");
var Number3 = document.getElementById("Three");
var Number4 = document.getElementById("Four");
var Number5 = document.getElementById("Five");
var Number6 = document.getElementById("Six");
var Number7 = document.getElementById("Seven");
var Number8 = document.getElementById("Eight");
var Number9 = document.getElementById("Nine");
var Number0 = document.getElementById("Zero");

//Operator Declarations
var Add = document.getElementById("Add");
var Subtract = document.getElementById("Subtract");
var Multiply = document.getElementById("Multiply");
var Divide = document.getElementById("Divide");

//Commands
var Clear = document.getElementById("Clear");
var Equals = document.getElementById("Equals");

//More
var Answer = document.getElementById("Result");
var Total_Answer = document.getElementById("Result2");
var Accumulation = "";
//var operate = ""




//Number Button/Table Data Cell 'on Click' Listeners
Number1.addEventListener("click", function () {
    //console.log('1')
    Answer.innerHTML = Answer.innerHTML + '1'
    Accumulation = Accumulation + 1;
});

Number2.addEventListener("click", function () {
    //console.log('2')
    Answer.innerHTML = Answer.innerHTML + '2'
    Accumulation = Accumulation + 2;
});

Number3.addEventListener("click", function () {
    //console.log('3')
    Answer.innerHTML = Answer.innerHTML + '3'
    Accumulation = Accumulation + 3;
});

Number4.addEventListener("click", function () {
    //console.log('4')
    Answer.innerHTML = Answer.innerHTML + '4'
    Accumulation = Accumulation + 4;
});

Number5.addEventListener("click", function () {
    //console.log('5')
    Answer.innerHTML = Answer.innerHTML + '5'
    Accumulation = Accumulation + 5;
});

Number6.addEventListener("click", function () {
    //console.log('6')
    Answer.innerHTML = Answer.innerHTML + '6'
    Accumulation = Accumulation + 6;
});

Number7.addEventListener("click", function () {
    //console.log('7')
    Answer.innerHTML = Answer.innerHTML + '7'
    Accumulation = Accumulation + 7;
});

Number8.addEventListener("click", function () {
    //console.log('8')
    Answer.innerHTML = Answer.innerHTML + '8'
    Accumulation = Accumulation + 8;
});

Number9.addEventListener("click", function () {
    //console.log('9')
    Answer.innerHTML = Answer.innerHTML + '9'
    Accumulation = Accumulation + 9;
});

Number0.addEventListener("click", function () {
    //console.log('0')
    Answer.innerHTML = Answer.innerHTML + '0'
    Accumulation = Accumulation + 0;
});

//Operators 'on Click' Listeners
Add.addEventListener("click", function () {
    //console.log('+')
    Answer.innerHTML = Answer.innerHTML + '+'
    Accumulation = Accumulation + '+';
});

Subtract.addEventListener("click", function () {
    //console.log('-')
    Answer.innerHTML = Answer.innerHTML + '-'
    Accumulation = Accumulation + '-';
});

Multiply.addEventListener("click", function () {
    //console.log('*')
    Answer.innerHTML = Answer.innerHTML + '*'
    Accumulation = Accumulation + '*';
});

Divide.addEventListener("click", function () {
    //console.log('/')
    Answer.innerHTML = Answer.innerHTML + '/'
    Accumulation = Accumulation + '/';
});

//Command Event Listeners
Clear.addEventListener("click", function () {
    //console.log('Clear Command')
    Answer.innerHTML = ""
    Accumulation = ""
    Total_Answer.innerHTML = ""
});

Equals.addEventListener("click", function () {
    //console.log('Trying to calculate the answer...')
    //console.log(eval(Accumulation))
    Total_Answer.innerHTML = eval(Accumulation);
});


//Make sure JS File is working properly
//console.log('End of "calculator.js" file...');
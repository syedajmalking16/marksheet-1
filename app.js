alert("well come");
var name = prompt('enter your name');
var roll  = prompt('enter your roll number');
var  school = prompt('enter your school name');
var english= prompt('enter your english marks');
var islamiat = prompt('enter your islamiat marks')
var maths = prompt('enter your maths marks');
var html = prompt('enter your html marks');
var bio = prompt('enter your bio marks');
var obtained_marks = parseInt(english) + parseInt(islamiat) + parseInt(maths) + parseInt(html) + parseInt(bio);
var percentage = obtained_marks*100 / 500;

document.write("your name is: "+ name+ "<br>");
document.write("your roll is"+ roll+"<br>");
document.write("your school is:"+ school+"<br>" );
document.write("your total marks is:"+ obtained_marks+"<br>")
document.write("your percentage is:"+ percentage+"<br>")

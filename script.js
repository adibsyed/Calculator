
//  To check whether user input key is anything other than number
document.addEventListener('keyup', function(event) {
var text=document.getElementById("input").value;
if(event.key !== "1"&&event.key !== "2"&&event.key !== "3"&&event.key !== "4"&&event.key !== "5"&&event.key !== "6"&&event.key !== "7"&&event.key !== "8"&&event.key !== "9"&&event.key !== "0") {
alert('Only numbers are allowed');
document.getElementById("input").value=text.substring(0,text.length-1);
}
});


 // function to insert number from display         
function insert(num)
{ 
    document.getElementById("input").value=document.getElementById("input").value+num;
       
}

// function to display result of the calculation
function result()
{
    var exp=document.getElementById("input").value;
    var res= eval(document.getElementById("input").value);
    if(res)
{
    document.getElementById("input").value=exp+'\r\n'+res;
}  

// function to clear values
}
function clr()
{
    document.getElementById("input").value=" ";
}

// function to backspace one position
function back()
{
    var exp=document.getElementById("input").value;
    document.getElementById("input").value=exp.substring(0,exp.length-1);
}

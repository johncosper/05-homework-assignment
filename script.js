var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
console.log("Today is : " + daylist[day] + ".");  
var hour = today.getHours();  
var minute = today.getMinutes();   
var prepand = (hour >= 12)? " PM ":" AM ";  

hour = (hour >= 12)? hour - 12: hour;  

if (hour===0 && prepand===' PM ') {   
    if (minute===0) {   
        hour=12;  
        prepand=' Noon';  
    } else {   
        hour=12;  
        prepand=' PM';  
    }}   

if (hour===0 && prepand===' AM ') {   
    if (minute===0) {   
        hour=12;  
        prepand=' Midnight';  
    } else {   
        hour=12;  
        prepand=' AM';  
    }}   

console.log("Current Time : "+hour + prepand + " : " + minute);

var currentDay = document.getElementById('currentDay');
currentDay.innerHTML = "Current Time : "+hour + prepand + " : " + minute

    if (hour >= 10) {
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
    }
    if (hour >= 11) {
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
    }
    if (hour >= 12) {
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }
    if (hour >= 1) {
        var twelveAm = document.getElementById('12am');
        twelveAm.classList.remove('active');
        twelveAm.classList.add('past')
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }
    if (hour >= 2) {
        var onePm = document.getElementById('1pm');
        onePm.classList.remove('active');
        onePm.classList.add('past')
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }
    if (hour >= 3) {
        var twoPm = document.getElementById('2pm');
        twoPm.classList.remove('active');
        twoPm.classList.add('past')
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }
    if (hour >= 4) {
        var threePm = document.getElementById('3pm');
        threePm.classList.remove('active');
        threePm.classList.add('past')
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }
    if (hour >= 5) {
        var fourPm = document.getElementById('4pm');
        fourPm.classList.remove('active');
        fourPm.classList.add('past')
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }
    if (hour >= 6) {
        var fivePm = document.getElementById('5pm');
        fivePm.classList.remove('active');
        fivePm.classList.add('past')
        var nineAm = document.getElementById('9am');
        nineAm.classList.remove('active');
        nineAm.classList.add('past')
        var tenAm = document.getElementById('10am');
        tenAm.classList.remove('active');
        tenAm.classList.add('past')
        var elevenAm = document.getElementById('11am');
        elevenAm.classList.remove('active');
        elevenAm.classList.add('past')
    }

$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
        
    });   
});

$('#load').on('click', function(){
    
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 
});
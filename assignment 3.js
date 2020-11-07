/*
question 1 is done seprately 
*/
/*
2. Write a JavaScript function to get the difference between two dates in
days
Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 days
-28 days
*/
var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    console.log(date_diff_indays('12/02/2014', '11/04/2014'));
    

/*
3. Write a JavaScript program to get the width and height of the window
(any time the window is resized).
*/
function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";
}

/*
4. Write a JavaScript program to find the Armstrong numbers of 3 digits.
Go to the editor
Note: An Armstrong number of three digits is an integer such that the
sum of the cubes of its digits is equal to the number itself. For
example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 =
371.
*/
function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();


/*
5. Write a JavaScript function to get the least common multiple (LCM) of
two numbers
Note :
According to Wikipedia - A common multiple is a number that is a
multiple of two or more integers. The common multiples of 3 and 4
are 0, 12, 24, .... The least common multiple (LCM) of two numbers is
the smallest number (not zero) that is a multiple of both.
Test Data :
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));
Output :
15
30
*/
function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
 }
 
 function gcd_two_numbers(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log(lcm_two_numbers(3,15));
 console.log(lcm_two_numbers(10,15));
 
$(document).ready( function () {
//Button Counter
var counter = 0;

//Event listener
$('button').on('click', function () {
    counter = counter + 1;
console.log(counter);
    //Creating #firstDiv
    $('body').append('<div id ="firstDiv">' + 
    '<p id ="counterParagraph">' + '</p>' + '</div>');
    console.log(counter);
});



$('#counterParagraph').html('<p>' + counter + '</p>');

});
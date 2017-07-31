$(document).ready( function () {
//Button Counter
var counter = 0;

//Event listener
$('button').on('click', function () {
    counter = counter + 1;
    //Creating #firstDiv
    $('body').append('<div id ="firstDiv">' + 
    '<p id ="counterParagraph">' + '</p>' + '</div>');
    $('#counterParagraph').html('<p>' + counter + '</p>');
    $('body #firstDiv').append('<button>' + 'Swap' + '</button>' + '<button id = "delete">' + 'Delete' + '</button>')
  
});

$('#delete').on('click', function () {
              $(this).parent().parent().parent().remove();  
        });


//$('body #firstDiv').append('Cant' get my jQuery selectors to do shit when referencing an element that was created after my event handler. So I just tried to get em to work with every click.');


});
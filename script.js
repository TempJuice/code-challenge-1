$(document).ready( function () {

var counter = 0;
    $('.firstButton').on('click', function () {
        counter ++;
        $('#colorDivContainer').append('<div class ="firstDiv">' +
        '<p>' + counter + '</p>' +
        '<button>Swap</button>' +
        '<button id ="delete">Delete</button>' +
        '</div>');
    });

    $('#colorDivContainer').on('click', '#delete', function () {
        $(this).parent().remove();
    })
});
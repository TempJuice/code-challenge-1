$(document).ready( function () {

var counter = 0;
    $('button').on('click', function () {
        counter ++;
        $('body').append('<div class ="firstDiv">' +
        '<p>' + counter + '</p>' +
        '<button>Swap</button>' +
        '<button>Delete</button>' +
        '</div>');
    });
});
console.log($('p.text'));
// Equivalent of console.log(document.querySelectorAll('p.text'));

$('p.text').addClass('text-danger');

/*
$('a[href^="http"]').each(function(index, el) {
    $(this).click(function(event) {
        alert('Nop');
        event.preventDefault();
    });
});
*/
// OR
$('a[href^="http"]').click(function (event) { // facultative each
    alert('Nop');
    event.preventDefault();
});
// OR
/*
$('a[href^="http"]').click(event => { // facultative each ; use arrow function.
    alert('Nop');
    event.preventDefault();
});
*/

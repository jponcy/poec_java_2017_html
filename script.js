console.log('coucou');

// Remove menu.
// document.getElementById('menu').innerHTML = '';

for (var element of document.querySelectorAll('p.text')) {
    element.style.backgroundColor = 'red'
}

// Add a title (not the best solution, but the beast).
document.getElementById('menu').innerHTML = '<h1>Mon titre bourrin !</h1>'
        + document.getElementById('menu').innerHTML;

// Add confirm on link.
/*
for (var elt of document.getElementsByTagName('a')) {
    if (elt.getAttribute('href').indexOf('http') == 0) {
        elt.addEventListener('click', function (event) {
            if (!confirm('Ce site n\'est pas sur le même domaine, êtes vous sûr de pas faire une GRAVE bétise ?')) {
                event.preventDefault();
            }
        });
    }
}
// OR
*/
for (var elt of document.querySelectorAll('a[href^="http"]')) {
    elt.addEventListener('click', function(event) {
        if (!confirm('Ce site n\'est pas sur le même domaine, êtes vous sûr de pas faire une GRAVE bétise ?')) {
            event.preventDefault();
        }
    });
}

var briceFunction = function (event) {
    alert('J\'t\'ai cassé !!!');
    event.preventDefault();
    return false;
};

// for (var elt of document.getElementsByTagName('a')) {
//     elt.addEventListener('click', briceFunction);
// }

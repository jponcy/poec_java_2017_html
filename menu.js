if (typeof $ === typeof undefined) {
    console.error('Nop');
} else {
    var navLeft = $('<ul>')
        .addClass('nav navbar-nav')
        .append($('<li>')
            .addClass('dropdown')
            .append($('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">HTML <span class="caret"></span></a>'))
            .append($('<ul>')
                .addClass('dropdown-menu')
                .append($('<li>').append($('<a>')
                    .attr('href', 'cours.html')
                    .html('Cours')
                ))
                .append($('<li>').append($('<a>')
                    .attr('href', 'demo.html')
                    .html('Demo')
                ))
                .append($('<li>').addClass('divider').attr('role', 'separator'))
                .append($('<li>').append($('<a>')
                    .attr('href', 'tp.html')
                    .html('TP')
                ))
//             <!-- <li role="separator" class="divider"></li>
//             <li><a href="#">Separated link</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">One more separated link</a></li> -->
            )
    );

    var navRight = $('<div>')
        .addClass('collapse navbar-collapse')
        .attr('id', 'bs-example-navbar-collapse-1')
        .append($('<ul>')
            .addClass('nav navbar-nav navbar-right')
            .append($('<li>').append($('<a>')
                .attr({
                    'target': '_blank',
                    'href': 'https://www.w3.org/'
                })
                .html('W3C')
            ))
            .append($('<li>').append($('<a>')
                .attr({
                    'target': '_blank',
                    'href': 'https://www.w3schools.com/'
                })
                .html('W3 schools')
            ))
        )
    ;
    var menu = $('#menu').append($('<nav>')
        .addClass('navbar navbar-default')
        .html($('<div>')
            .addClass('container-fluid')
            .append($('<div>')
                .addClass('navbar-header')
                .append($('<button>')
                    .attr({
                        'type': 'button',
                        'data-toggle': 'collapse',
                        'data-target': '#bs-example-navbar-collapse-1',
                        'aria-expanded': 'false'
                    })
                    .addClass('navbar-toggle collapsed')
                    .html('<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>')
                )
                .append($('<a>')
                    .addClass('navbar-brand')
                    .attr('href', 'index.html')
                    .html('HTML/CSS/JS')
                )
            ) //!div
            .append($('<div>')
                .addClass('collapse navbar-collapse')
                .attr('id', 'bs-example-navbar-collapse-1')
                .append(navLeft)
                .append(navRight)
            )
        )
    );
}

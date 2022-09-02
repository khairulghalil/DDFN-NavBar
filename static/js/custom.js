/*  */
/***** navbar *****/
/*  */

function show(menus) {
    const button = document.querySelector('#' + menus + ' .nav_link');
    const tooltip = document.querySelector('#' + menus + ' .nav_list');

    var offset = -156;
    if (document.body.classList.contains('body-pd')) {
        offset = 0;
    }

    Popper.createPopper(button, tooltip, {
        placement: 'right-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, offset],
                },
            },
        ],
    });

    if (offset == 0 && tooltip.querySelector('a')) {
        button.classList.add("on_show");
        tooltip.style.display = "block";
    } else if (offset != 0) {
        button.classList.add("on_show");
        tooltip.style.display = "block";
    }
}

function hide(menus) {
    const button = document.querySelector('#' + menus + ' .nav_link');
    const tooltip = document.querySelector('#' + menus + ' .nav_list');

    button.classList.remove("on_show");
    tooltip.style.display = "none";
}
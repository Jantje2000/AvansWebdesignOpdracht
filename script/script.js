function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

$(window).resize(function(){
    // first delete all elements to prevent double elements
    $("#education-navbar").attr({"class": "", "data-toggle": "", "href": "#"}); //TODO: Ik moet nog maken dat hier de werkelijke link komt in plaats van de # die er nu staat.
    $(".caret").remove();
    $(".dropdown-menu").remove();

    if(isBreakpoint("xs") || isBreakpoint("sm")){ // and if you are on mobile phone you will get a dropdown menu
        $("#education-navbar").attr({"class": "dropdown-toggle", "data-toggle": "dropdown", "href": "#"}); // classes, datatoggle and href for dropdown menu
        $("#education-navbar").append('<span class="caret"></span>'); // add a icon which let see that this is a dropdown menu
        $("#education-navbar").after('<ul class="dropdown-menu">\n' +
                                        '<li><a href="#">Page 1-1</a></li>\n' +
                                        '<li><a href="#">Page 1-2</a></li>\n' +
                                        '<li><a href="#">Page 1-3</a></li>\n' +
                                    '</ul>') // and add the items of the dropdown menu
    }
});
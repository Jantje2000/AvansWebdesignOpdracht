var onResize = function(){
    // first delete all elements to prevent double elements
    $("#education-navbar").attr({"class": "", "data-toggle": "", "href": "#"}); //TODO: Ik moet nog maken dat hier de werkelijke link komt in plaats van de # die er nu staat.
    $(".caret").remove();
    $(".dropdown-menu").remove();
    $(".sidebar-nav").remove();

    if($("#collapsemenubutton").is(":visible")){ // and if you are on mobile phone you will get a dropdown menu
        $("#education-navbar").attr({"class": "dropdown-toggle", "data-toggle": "dropdown", "href": "#"}); // classes, datatoggle and href for dropdown menu
        $("#education-navbar").append('<span class="caret"></span>'); // add a icon which let see that this is a dropdown menu
        $("#education-navbar").after('<ul class="dropdown-menu">\n' +
                                        '<li><a href="opleiding.html#informatica">Wat is informatica</a></li>\n' +
                                        '<li><a href="opleiding.html#toelatingseisen">Toelatingseisen</a></li>\n' +
                                        '<li><a href="opleiding.hmtl#studieopbouw">Opbouw van de studie</a></li>\n' +
                                        '<li><a href="opleiding.html#studiepunten">Studiepunten</a></li>\n' +
                                        '<li><a href="opleiding.html#beroepen">Beroepen</a></li>\n' +
                                    '</ul>'); // and add the items of the dropdown menu
        $(".education-text").css("margin-left", "0px");
    }else{
        if(location.pathname.split("/")[location.pathname.split("/").length - 1] === "opleiding.html"){
            $(".sidebar").append('<div class="sidebar-nav navbar-collapse">\n' +
                '            <ul class="nav" id="side-menu">\n' +
                '                <li>\n' +
                '                    <a href="#informatica"> Wat is informatica</a>\n' +
                '                </li>\n' +
                '                <li>\n' +
                '                    <a href="#toelatingseisen"> Toelatingseisen</a>\n' +
                '                </li>\n' +
                '                <li>\n' +
                '                    <a href="#studieopbouw"> Opbouw van de studie</a>\n' +
                '                </li>\n' +
                '                <li>\n' +
                '                    <a href="#studiepunten"> Studiepunten</a>\n' +
                '                </li>\n' +
                '                <li>\n' +
                '                    <a href="#beroepen"> Beroepen</a>\n' +
                '                </li>\n' +
                '            </ul>\n' +
                '        </div>');
            $(".education-text").css("margin-left", "215px");
        }else{
            $("#education-navbar").attr("href", "opleiding.html");
        }
    }
};

$(document).ready(onResize);

$(window).bind('resize', onResize);
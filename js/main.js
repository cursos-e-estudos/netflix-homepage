// iniciando o carrousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

let olderMovie = $('.selectedMovie');

let nameMovie = $('.selectMovieName');
let olderName;

let descri = $('.selectMovieDescription');
let olderDescrip;

let clicked = false;

let listOfClassesOfMyElement;

//hover hilda
$('.buttonHilda').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Hilda");
    descri.html("Ao sair da floresta onde vive e ir para a cidade, a destemida Hilda vive aventuras incríveis com os novos amigos e criaturas mágicas que encontra pelo caminho.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('hilda');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "hilda")
    {
        olderMovie.removeClass('hilda');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover carmen
$('.buttonCarmen').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Carmen Sandiego");
    descri.html("A superladra Carmen Sandiego roda o mundo para frustrar os planos malignos da academia V.I.L.E., com a ajuda de seus engenhosos companheiros.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('carmen');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "carmen")
    {
        olderMovie.removeClass('carmen');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover 3 la embaixo
$('.button3embaixo').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Os 3 Lá Embaixo: Contos da Arcadia");
        descri.html("Ao chegarem à Terra, dois jovens alienígenas em fuga tentam se infiltrar entre humanos e escapar de caçadores de recompensa intergaláticos.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('laEmbaixo');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "laEmbaixo")
    {
        olderMovie.removeClass('laEmbaixo');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover final space
$('.buttonSpace').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Final Space");
    descri.html("Um humano prisioneiro no espaço e um incrível alienígena destruidor de planetas partem em uma aventura interestelar para salvar o universo.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('space');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "space")
    {
        olderMovie.removeClass('space');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

//hover sense8
$('.buttonSense').hover(function() {/*if aqui */
    listOfClassesOfMyElement = $(olderMovie).attr('class').split(/\s+/);

    olderDescrip = descri.html();
    olderName = nameMovie.html();
    console.log(olderName);
    olderMovie.removeClass();
    nameMovie.html("Sense8");
    descri.html("Das criadoras de “Matrix” e “Babylon 5”, esta série segue oito desconhecidos que passam a compartilhar sentimentos e habilidades enquanto tentam evitar seu extermínio.");
    olderMovie.addClass('selectedMovie');
    olderMovie.addClass('sense8');

}, function() { /*else aqui */
    if(clicked == false && listOfClassesOfMyElement[1] != "sense8")
    {
        olderMovie.removeClass('sense8');
        olderMovie.addClass(listOfClassesOfMyElement[1]);
        nameMovie.html(olderName);
        descri.html(olderDescrip);
    }
    clicked = false;
});

$(document).ready(function() {
     
    $('.buttonHilda').on('click', function(event){
        clicked = true;
        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('hilda');
        nameMovie.html("Hilda");
        descri.html("Ao sair da floresta onde vive e ir para a cidade, a destemida Hilda vive aventuras incríveis com os novos amigos e criaturas mágicas que encontra pelo caminho.");
    });
    $('.buttonCarmen').on('click', function(event){
        clicked = true;
        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('carmen');

        nameMovie.html("Carmen Sandiego");
        descri.html("A superladra Carmen Sandiego roda o mundo para frustrar os planos malignos da academia V.I.L.E., com a ajuda de seus engenhosos companheiros.");
    })
    $('.button3embaixo').on('click', function(event){
        clicked = true;

        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('laEmbaixo');

        nameMovie.html("Os 3 Lá Embaixo: Contos da Arcadia");
        descri.html("Ao chegarem à Terra, dois jovens alienígenas em fuga tentam se infiltrar entre humanos e escapar de caçadores de recompensa intergaláticos.");
    });
    $('.buttonSpace').on('click', function(event){
        clicked = true;

        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('space');
        nameMovie.html("Final Space");
        descri.html("Um humano prisioneiro no espaço e um incrível alienígena destruidor de planetas partem em uma aventura interestelar para salvar o universo.");
    });

    $('.buttonSense8').on('click', function(event){
        clicked = true;

        olderMovie.removeClass();
        olderMovie.addClass('selectedMovie');
        olderMovie.addClass('sense8');

        nameMovie.html("Sense8");
        descri.html("Das criadoras de “Matrix” e “Babylon 5”, esta série segue oito desconhecidos que passam a compartilhar sentimentos e habilidades enquanto tentam evitar seu extermínio.");
      });


});


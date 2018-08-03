let quiSommes = document.querySelector(".quiSommes")
let conseil = document.querySelector(".conseil")
let formations = document.querySelector(".formations")
let solutions = document.querySelector(".solutions")
let forum = document.querySelector(".forum")

let sousMenu = document.querySelector(".sousMenu")

let firstOf4 = document.querySelector(".firstOf4")

let sm1 = document.querySelector(".sm1")
let sm2 = document.querySelector(".sm2")
let sm3 = document.querySelector(".sm3")
let sm4 = document.querySelector(".sm4")
let sm5 = document.querySelector(".sm5")

let smC = document.querySelector(".smC")
/*
quiSommes.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');


    //sousMenu.classList.add('opacity');
    //sousMenu.classList.add('sousMenuMove');
    sousMenu.classList.add('marginQuiSommesNous');
    sousMenu.classList.remove('marginSolution');
    sousMenu.classList.remove('marginFormations');


    smC.classList.remove('smS');
    /*
        sm1.classList.remove('col-lg-2');
        sm2.classList.remove('col-lg-2');
        sm3.classList.remove('col-lg-2');

        sm1.classList.add('col-lg-1');
        sm2.classList.add('col-lg-1');
        sm3.classList.add('col-lg-1');
    */
//firstOf4.classList.add('col-lg-offset-4');
//firstOf4.classList.remove('col-lg-offset-3');

/*


    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)



    sm1.innerHTML = 'Nos valeurs'
    sm2.innerHTML = 'notre équipe'
    sm3.innerHTML = 'Pédagogie'
    sm4.innerHTML = 'Testimonial'
    sm5.innerHTML = ''




})

solutions.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');

    //sousMenu.classList.add('opacity');
    sousMenu.classList.remove('marginQuiSommesNous');
    sousMenu.classList.add('marginSolution');
    sousMenu.classList.remove('marginFormations');

    smC.classList.add('smS');

    /*
        sm1.classList.remove('col-lg-1');
        sm2.classList.remove('col-lg-1');
        sm3.classList.remove('col-lg-1');

        sm1.classList.add('col-lg-2');
        sm2.classList.add('col-lg-2');
        sm3.classList.add('col-lg-2');
    */
//firstOf4.classList.add('col-lg-offset-3');
//firstOf4.classList.remove('col-lg-offset-4');

/*


    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)


    sm1.innerHTML = 'École de vente'
    sm2.innerHTML = 'École de management'
    sm3.innerHTML = 'Coaching'
    sm4.innerHTML = 'digital learning'
    sm5.innerHTML = 'Quizz'




})

formations.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');

    sousMenu.classList.remove('marginQuiSommesNous');
    sousMenu.classList.remove('marginSolution');
    sousMenu.classList.add('marginFormations');

    smC.classList.remove('smS');

    sm1.setAttribute('href', 'pages/mana.html')
    sm2.setAttribute('href', 'pages/vente.html')
    sm3.setAttribute('href', 'pages/comunication.html')

    /*
        sm1.classList.remove('col-lg-1');
        sm2.classList.remove('col-lg-1');
        sm3.classList.remove('col-lg-1');

        sm1.classList.add('col-lg-2');
        sm2.classList.add('col-lg-2');
        sm3.classList.add('col-lg-2');
    */
//firstOf4.classList.add('col-lg-offset-3');
//firstOf4.classList.remove('col-lg-offset-4');

/*
    
    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)


    sm1.innerHTML = 'Management'
    sm2.innerHTML = 'Vente & négociation'
    sm3.innerHTML = 'Comunication'
    sm4.innerHTML = ''
    sm5.innerHTML = ''



})

*/

forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');
    sousMenu.classList.add('marginConseil');
    sousMenu.classList.remove('marginQuiSommesNous');
    sousMenu.classList.remove('marginSolution');
    //sousMenu.classList.add('marginFormations');

    smC.classList.remove('smS');

    sm1.classList.remove('col-lg-1');
    sm2.classList.remove('col-lg-1');
    sm3.classList.remove('col-lg-1');

    sm2.innerHTML = ''
    sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="inscription.html">contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.html">Devis</a>'
    sm4.innerHTML = ''

    //sm1.classList.add('col-lg-2');
    //sm2.classList.add('col-lg-2');
    //sm3.classList.add('col-lg-2');

    //firstOf4.classList.add('col-lg-offset-3');
    //firstOf4.classList.remove('col-lg-offset-4');



    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)

    sm2.innerHTML = ''
    sm1.innerHTML = 'À la une'
    sm2.innerHTML = 'Contact'
    sm3.innerHTML = 'Devis'
    sm4.innerHTML = ''


    sm1.setAttribute('href', 'pages/news.html')
    sm2.setAttribute('href', 'pages/inscription.html')
    sm3.setAttribute('href', 'pages/devis.html')
    sm4.setAttribute('href', 'formateur.html')





})

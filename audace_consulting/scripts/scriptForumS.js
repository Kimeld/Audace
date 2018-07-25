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

let contenuVente = document.querySelector(".contenuVente")
let contenuCom = document.querySelector(".contenuCom")
let contenuManagement = document.querySelector(".contenuManagement")

let titreFormation = document.querySelector(".titreFormation")
let texte = document.querySelector(".texte")

let milieux = document.querySelector(".milieux")

let modules = document.querySelector(".modules")



scrollbars.visible = false;



sousMenu.classList.remove('marginQuiSommesNous');
sousMenu.classList.remove('marginSolution');
sousMenu.classList.add('marginConseil');
//sousMenu.classList.add('marginFormations');

smC.classList.remove('smS');

sm1.classList.remove('col-lg-1');
sm2.classList.remove('col-lg-1');
sm3.classList.remove('col-lg-1');

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


sm1.setAttribute('href', '../pages/news.html')
sm2.setAttribute('href', '../pages/inscription.html')
sm3.setAttribute('href', '../pages/devis.html')
sm4.setAttribute('href', '../pages/formateur.html')

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


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscritption.html')
    sm3.setAttribute('href', 'devis.html')
    sm4.setAttribute('href', 'formateur.html')




})

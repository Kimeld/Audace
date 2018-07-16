let quiSommes = document.querySelector(".quiSommes")
let conseil = document.querySelector(".conseil")
let formations = document.querySelector(".formations")
let solutions = document.querySelector(".solutions")
let forum = document.querySelector("forum")

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
    sousMenu.classList.add('marginSolution');
    sousMenu.classList.remove('marginFormations');


window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu');
    sousMenu.classList.add('sousMenuMove');
}, 200)


sm1.innerHTML = 'École de vente'
sm2.innerHTML = 'École de management'
sm3.innerHTML = 'Coaching'
sm4.innerHTML = 'digital learning'
sm5.innerHTML = 'Quizz'


sm1.setAttribute('href', 'ecoleVente.html')
sm2.setAttribute('href', 'ecolemanagement.html')
sm3.setAttribute('href', 'coaching.html')
sm4.setAttribute('href', 'digital.html')
sm5.setAttribute('href', 'quizz.html')



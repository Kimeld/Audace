let quiSommes = document.querySelector(".quiSommes")
let conseil = document.querySelector(".conseil")
let formations = document.querySelector(".formations")
let solutions = document.querySelector(".solutions")
let forum = document.querySelector(".forum")
let contenu = document.querySelector(".contenu")

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

let submit = document.querySelector(".submit")

let submit0 = document.querySelector(".submit0")

let souscrireImg = document.querySelector(".souscrireImg")
let souscrireImg2 = document.querySelector(".souscrireImg2")

scrollbars.visible = false



sousMenu.classList.remove('marginQuiSommesNous')
sousMenu.classList.remove('marginSolution')
sousMenu.classList.add('marginConseil')

smC.classList.remove('smS')

sm1.classList.remove('col-lg-1')
sm2.classList.remove('col-lg-1')
sm3.classList.remove('col-lg-1')



window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu')
    sousMenu.classList.add('sousMenuMove')
}, 200)

sm2.innerHTML = ''
sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
sm2.innerHTML = '<a class="deco" href="inscription.php">Contact</a>'
sm3.innerHTML = '<a class="deco" href="devis.php">Devis</a>'
sm4.innerHTML = ''


  sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.php')
    sm3.setAttribute('href', 'devis.php')
sm4.setAttribute('href', '../pages/formateur.html')

forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu')
    sousMenu.classList.remove('sousMenuMove')
    sousMenu.classList.add('marginConseil')

    sousMenu.classList.remove('marginQuiSommesNous')
    sousMenu.classList.remove('marginSolution')
    //sousMenu.classList.add('marginFormations');

    smC.classList.remove('smS')

    sm1.classList.remove('col-lg-1')
    sm2.classList.remove('col-lg-1')
    sm3.classList.remove('col-lg-1')

    //sm1.classList.add('col-lg-2');
    //sm2.classList.add('col-lg-2');
    //sm3.classList.add('col-lg-2');

    //firstOf4.classList.add('col-lg-offset-3');
    //firstOf4.classList.remove('col-lg-offset-4');



    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu')
        sousMenu.classList.add('sousMenuMove')
    }, 200)

    sm2.innerHTML = ''
    sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="inscription.php">Contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.php">Devis</a>'
    sm4.innerHTML = ''


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscritption.php')
    sm3.setAttribute('href', 'devis.php')
    sm4.setAttribute('href', 'formateur.html')




})



submit.addEventListener('mouseover', () => {


    souscrireImg.setAttribute('src', "../images/Bouton%20valider.png")


})

submit.addEventListener('mouseout', () => {


    souscrireImg.setAttribute('src', "../images/Bouton%20gris%20Valider.png")


})

submit0.addEventListener('mouseover', () => {


    souscrireImg2.setAttribute('src', "../images/Bouton%20valider.png")


})

submit0.addEventListener('mouseout', () => {


    souscrireImg2.setAttribute('src', "../images/Bouton%20gris%20Valider.png")


})

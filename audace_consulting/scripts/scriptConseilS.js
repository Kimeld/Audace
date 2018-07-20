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

window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu');
    sousMenu.classList.add('sousMenuMove');
}, 200)


sm1.innerHTML = 'Audit'
sm2.innerHTML = 'Consulting'
sm3.innerHTML = 'Business consulting'
sm4.innerHTML = ''
sm5.innerHTML = ''

/*
sm1.setAttribute('href', 'audit.html')
sm2.setAttribute('href', 'consulting.html')
sm3.setAttribute('href', 'business.html')
*/

sm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Audit'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

sm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Consulting'
        texte.innerHTML = 'Nous vous guidons et nous répondons à vos besoins par des solutions adaptées et innovantes. AUDACE Consulting accompagne les entreprises dans l’optimisation des ressources humaines et financières, dans le choix des partenaires pour une évolution du chiffre d’affaires et pour une meilleure rentabilité. <br> Notre cœur de métier est : <br> - l’audit <br> - le benchmark <br> - la transformation <br> - la performance opérationnelle'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

sm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Business consulting '
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})



forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');

    sousMenu.classList.remove('marginQuiSommesNous');
    sousMenu.classList.remove('marginSolution');
    sousMenu.classList.remove('marginConseil');
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

    sm1.innerHTML = ''
    sm2.innerHTML = 'À la une'
    sm3.innerHTML = 'Contact'
    sm4.innerHTML = ''
    sm5.innerHTML = ''


    sm1.setAttribute('href', 'mana.html')
    sm2.setAttribute('href', 'news.html')
    sm3.setAttribute('href', 'inscription.html')
    sm4.setAttribute('href', 'formateur.html')




})

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

let Msm1 = document.querySelector(".Msm1")
let Msm2 = document.querySelector(".Msm2")
let Msm3 = document.querySelector(".Msm3")
let Msm4 = document.querySelector(".Msm4")
let Msm5 = document.querySelector(".Msm5")




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
        titreFormation.innerHTML = 'École de vente'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

sm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'École de management'
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
        titreFormation.innerHTML = 'Coaching '
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})


sm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'digital learning'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

sm5.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Quizz'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})


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
    sm5.innerHTML = ''


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.html')
    sm3.setAttribute('href', 'devis.html')
    sm4.setAttribute('href', 'formateur.html')




})


Msm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'École de vente'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

Msm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'École de management'
        texte.innerHTML = 'Nous vous guidons et nous répondons à vos besoins par des solutions adaptées et innovantes. AUDACE Consulting accompagne les entreprises dans l’optimisation des ressources humaines et financières, dans le choix des partenaires pour une évolution du chiffre d’affaires et pour une meilleure rentabilité. <br> Notre cœur de métier est : <br> - l’audit <br> - le benchmark <br> - la transformation <br> - la performance opérationnelle'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

Msm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Coaching '
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})


Msm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'digital learning'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

Msm5.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Quizz'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')

    }, 200)

})

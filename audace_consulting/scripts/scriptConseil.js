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

let bouttonMsousMenu = document.querySelectorAll(".bouttonMsousMenu")
let MsousMenu = document.querySelectorAll(".MsousMenu")
let mobileTestiImg = document.querySelector(".mobileTestiImg")
let MsousMenuBusiness = document.querySelector(".MsousMenuBusiness")

let MsousMenuAudit = document.querySelector(".MsousMenuAudit")

let MsousMenuConsulting = document.querySelector(".MsousMenuConsulting")

let fond = document.querySelector(".fond")

let Msm1 = document.querySelector(".Msm1")
let Msm2 = document.querySelector(".Msm2")
let Msm3 = document.querySelector(".Msm3")
let Msm4 = document.querySelector(".Msm4")

//////////////////////////////////////////////////////////
//CONTENU
/////////////////////////////////////////////////////////

let titreAudit = "Un diagnostic précis"
let texteAudit = "Nos consultants auditionnent, recueillent les informations et observent le fonctionnement des entreprises pour réaliser un diagnostic précis de la situation. Notre audit a pour objectif de déterminer les axes de travail tant sur le plan des ressources humaines que sur le plan des ressources financières. "

let titreConseil = "Des solutions pertinentes"
let texteConseil = "AUDACE Consulting vous conseille dans la résolution de vos problématiques en faisant émerger des solutions adéquates.<br>Notre cœur de métier est : <br> - le benchmark <br> - la transformation <br> - la performance opérationnelle"

let titreBusiness = "Des stratégies rentables"
let texteBusiness = "Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. Nos consultants bénéficient d’une solide expérience commerciale, sont formés et maîtrisent l’utilisation de nos outils. Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement."

//////////////////////////

scrollbars.visible = false;

sousMenu.classList.remove('marginQuiSommesNous')
sousMenu.classList.remove('marginSolution')
sousMenu.classList.add('marginConseil')

window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu')
    sousMenu.classList.add('sousMenuMove')
}, 200)


sm1.innerHTML = 'Audit'
sm2.innerHTML = 'Consulting'
sm3.innerHTML = 'Business consulting'
sm4.innerHTML = ''
sm5.innerHTML = ''

sm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm1.classList.remove('sm11')
    sm1.classList.add('red')

    fond.classList.remove('fondConseil')
     fond.classList.remove('fond')
    fond.classList.remove('fondConsulting')
    fond.classList.add('fondAudit')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreAudit
        texte.innerHTML = texteAudit
        contenuVente.classList.remove('animationContenu')

    }, 200)

})

sm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.remove('sm12')
    sm2.classList.add('red')
    
      fond.classList.remove('fondConseil')
     fond.classList.remove('fondbusiness')
    fond.classList.remove('fondAudit')
    fond.classList.add('fondConsulting')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreConseil
        texte.innerHTML = texteConseil
        contenuVente.classList.remove('animationContenu')

    }, 200)

})

sm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm3.classList.remove('sm13')
    sm3.classList.add('red')

    fond.classList.remove('fondConsulting')
      fond.classList.remove('fondConseil')
     fond.classList.remove('fondAudit')
    fond.classList.add('fondBusiness')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreBusiness
        texte.innerHTML = texteBusiness
        contenuVente.classList.remove('animationContenu')

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


    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)

    sm2.innerHTML = ''
    sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="inscription.php">contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.php">Devis</a>'
    sm4.innerHTML = ''


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.php')
    sm3.setAttribute('href', 'devis.php')
    sm4.setAttribute('href', 'formateur.html')

})

Msm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')





    MsousMenuAudit.classList.add('white2')

    MsousMenuConsulting.classList.remove('white2')

    MsousMenuBusiness.classList.remove('white2')




    bouttonMsousMenu[0].classList.add('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.remove('red2')


    mobileTestiImg.classList.add('mobileAudit')
    mobileTestiImg.classList.remove('mobileBusiness')
    mobileTestiImg.classList.remove('mobileConsul')
    mobileTestiImg.classList.remove('mobileconseil')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreAudit
        texte.innerHTML = texteAudit
        contenuVente.classList.remove('animationContenu')

    }, 200)
})


Msm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')





    MsousMenuAudit.classList.remove('white2')

    MsousMenuConsulting.classList.add('white2')

    MsousMenuBusiness.classList.remove('white2')

    
 

    mobileTestiImg.classList.remove('mobileAudit')
    mobileTestiImg.classList.remove('mobileBusiness')
      mobileTestiImg.classList.remove('mobileconseil')
        mobileTestiImg.classList.add('mobileConsul')

    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.add('red2')

    bouttonMsousMenu[2].classList.remove('red2')





    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreConseil
        texte.innerHTML = texteConseil
        contenuVente.classList.remove('animationContenu')

    }, 200)
})

Msm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')




    MsousMenuAudit.classList.remove('white2')

    MsousMenuConsulting.classList.remove('white2')


    MsousMenuBusiness.classList.add('white2')


    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.add('red2')
    
    
    mobileTestiImg.classList.remove('mobileAudit')
    mobileTestiImg.classList.add('mobileBusiness')
     mobileTestiImg.classList.remove('mobileConsul')
    mobileTestiImg.classList.remove('mobileconseil')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreBusiness
        texte.innerHTML = texteBusiness
        contenuVente.classList.remove('animationContenu')

    }, 200)
})

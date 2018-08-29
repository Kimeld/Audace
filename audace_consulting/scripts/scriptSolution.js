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

let fond = document.querySelector(".fond")

let Msm1 = document.querySelector(".Msm1")
let Msm2 = document.querySelector(".Msm2")
let Msm3 = document.querySelector(".Msm3")
let Msm4 = document.querySelector(".Msm4")
let Msm5 = document.querySelector(".Msm5")


//////////////////////////////////////////////////////////
//CONTENU
/////////////////////////////////////////////////////////

let titreSell = "Booster vos compétences"
let texteSell = "Audace Consulting vous propose de concevoir et animer un parcours de vente pour vos équipes commerciales pour répondre précisément à vos besoins de développement et/ou de renforcement des compétences. Ce parcours de formation allie les techniques de vente, l’approche comportementale et l’assertivité. Véritable booster de compétences, ce parcours est centré sur les besoins et motivations de vos clients."

let titreMana = "Dynamiser votre management"
let texteMana = "Pour harmoniser la politique managériale au sein de votre entreprise, Audace Consulting crée sur-mesure un parcours manager garantissant l’intégrité de vos valeurs, la satisfaction de vos besoins dans le respect de vos budgets temps et financier. De la position n+1 au management motivationnel, nos formateurs développent les compétences de vos managers pour accroître les performances de vos équipes."

let titreCoaching = "Une vison à long terme"
let texteCoaching = "AUDACE Consulting considère le coaching comme le cheminement vers un état désiré de manière élégante afin d’obtenir le maximum de résultat. Le coaching post-formation facilite le Développement Durable de la Formation qui est essentiel pour un  ancrage des compétences sur le long terme."

let titreDigi = "Une solution confortable"
let texteDigi = "Audace Consulting développe aussi pour vous une solution de formation distancielle qui présente un double avantage : Le premier avantage, les collaborateurs de votre entreprise bénéficieront de leur temps de formation dans le confort de leur environnement de travail habituel ; ils pourront adapter leur temps de formation, à leur guise, en fonction de leur planning et sans répercussions."

let titreQuizz = "Votre outil post-formation"
let texteQuizz = "Le profil comportemental couleur est un outil fiable qui donne accès aux forces vives des entreprises, une meilleure connaissance de soi (forces et points de développement) dans sa fonction professionnelle, une perception adéquate des autres (collaborateurs, collègues, manager) pour une communication efficiente afin de favoriser une prise en compte plus concrète de la situation.Le profil comportemental couleur s’applique à tous les domaines de formation et de conseil et dans tous les domaines d’activité."

//////////////////////////


scrollbars.visible = false;

sousMenu.classList.remove('marginQuiSommesNous')
sousMenu.classList.add('marginSolution')
sousMenu.classList.remove('marginFormations')


window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu')
    sousMenu.classList.add('sousMenuMove')
}, 200)


sm1.innerHTML = 'Selling School '
sm2.innerHTML = 'Management School'
sm3.innerHTML = 'Coaching'
sm4.innerHTML = 'Digital learning'
sm5.innerHTML = 'Quizz'

/*
sm1.setAttribute('href', 'audit.html')
sm2.setAttribute('href', 'consulting.html')
sm3.setAttribute('href', 'business.html')
*/

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
    
     fond.classList.remove('imgDigitale')
     fond.classList.remove('imgSolution')
    fond.classList.remove('imgManSch')
    fond.classList.remove('imgProfile')
    fond.classList.add('imgSellSch')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreSell
        texte.innerHTML = texteSell
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
    
     fond.classList.remove('imgDigitale')
     fond.classList.remove('imgSolution')
    fond.classList.remove('imgSellSch')
    fond.classList.remove('imgProfile')
    fond.classList.add('imgManSch')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreMana
        texte.innerHTML = texteMana
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

    

    
    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreCoaching
        texte.innerHTML = texteCoaching
        contenuVente.classList.remove('animationContenu')

    }, 200)

})


sm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm2.classList.add('sm14')
    sm2.classList.remove('red')
    sm4.classList.remove('sm14')
    sm4.classList.add('red')

        
     fond.classList.remove('imgSolution')
    fond.classList.remove('imgSellSch')
    fond.classList.remove('imgManSch')
    fond.classList.remove('imgProfile')
    fond.classList.add('imgDigitale')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreDigi
        contenuVente.classList.remove('animationContenu')
         texte.innerHTML = texteDigi


    }, 200)

})

sm5.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

       fond.classList.remove('imgDigitale')
     fond.classList.remove('imgSolution')
    fond.classList.remove('imgSellSch')
    fond.classList.remove('imgManSch')
    fond.classList.add('imgProfile')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreQuizz
        texte.innerHTML = texteQuizz
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})


forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu')
    sousMenu.classList.remove('sousMenuMove')
    sousMenu.classList.add('marginConseil')
    sousMenu.classList.remove('marginQuiSommesNous')
    sousMenu.classList.remove('marginSolution')



    smC.classList.remove('smS');

    sm1.classList.remove('col-lg-1')
    sm2.classList.remove('col-lg-1')
    sm3.classList.remove('col-lg-1')

    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu')
        sousMenu.classList.add('sousMenuMove')
    }, 200)

    sm5.innerHTML = ''
    sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="inscription.html">Contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.html">Devis</a>'
    sm4.innerHTML = ''

      sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.php')
    sm3.setAttribute('href', 'devis.php')
    sm4.setAttribute('href', 'formateur.html')




})


Msm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    //sm1.classList.add('sm11')
    MsousMenu[0].classList.add('white2')
    MsousMenuBusiness.classList.remove('white2')
    //sm2.classList.add('sm12')
    MsousMenu[1].classList.remove('white2')
    //sm4.classList.add('sm14')
    MsousMenu[2].classList.remove('white2')
    //sm3.classList.remove('sm13')
    MsousMenu[3].classList.remove('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.add('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.remove('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.remove('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.remove('red2')
    bouttonMsousMenu[4].classList.remove('red2')
    
    mobileTestiImg.classList.add('mobileSellSch')
    mobileTestiImg.classList.remove('mobileDigital')
    mobileTestiImg.classList.remove('mobileQSNSolution')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreSell
        texte.innerHTML = texteSell
        contenuVente.classList.remove('animationContenu')
    }, 200)

})

Msm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    //sm1.classList.add('sm11')
    MsousMenu[0].classList.remove('white2')
    MsousMenuBusiness.classList.add('white2')
    //sm2.classList.add('sm12')
    MsousMenu[1].classList.remove('white2')
    //sm4.classList.add('sm14')
    MsousMenu[2].classList.remove('white2')
    //sm3.classList.remove('sm13')
    MsousMenu[3].classList.remove('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.remove('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.add('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.remove('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.remove('red2')
    bouttonMsousMenu[4].classList.remove('red2')
    
    mobileTestiImg.classList.add('mobileManSch')
    mobileTestiImg.classList.remove('mobileDigital')
    mobileTestiImg.classList.remove('mobileQSNSolution')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreMana
        texte.innerHTML = texteMana
        contenuVente.classList.remove('animationContenu')
        milieux.classList.remove('opacityM')
    }, 200)

})

Msm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    //sm1.classList.add('sm11')
    MsousMenu[0].classList.remove('white2')
    MsousMenuBusiness.classList.remove('white2')
    //sm2.classList.add('sm12')
    MsousMenu[1].classList.add('white2')
    //sm4.classList.add('sm14')
    MsousMenu[3].classList.remove('white2')
    //sm3.classList.remove('sm13')
    MsousMenu[2].classList.remove('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.remove('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.remove('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.add('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.remove('red2')
    bouttonMsousMenu[4].classList.remove('red2')
    
    mobileTestiImg.classList.add('mobileQSNSolution')
    mobileTestiImg.classList.remove('mobileDigital')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreCoaching
        texte.innerHTML = texteCoaching
        contenuVente.classList.remove('animationContenu')

    }, 200)

})


Msm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')



    //sm1.classList.add('sm11')
    MsousMenu[0].classList.remove('white2')
    MsousMenuBusiness.classList.remove('white2')
    //sm2.classList.add('sm12')
    MsousMenu[1].classList.remove('white2')
    //sm4.classList.add('sm14')
    MsousMenu[3].classList.remove('white2')
    //sm3.classList.remove('sm13')
    MsousMenu[2].classList.add('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.remove('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.remove('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.remove('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.add('red2')
    bouttonMsousMenu[4].classList.remove('red2')
    
    mobileTestiImg.classList.remove('mobileQSNSolution')
    mobileTestiImg.classList.add('mobileDigital')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreDigi
        texte.innerHTML = texteDigi
        contenuVente.classList.remove('animationContenu')

    }, 200)

})

Msm5.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    //sm1.classList.add('sm11')
    MsousMenu[0].classList.remove('white2')
    MsousMenuBusiness.classList.remove('white2')
    //sm2.classList.add('sm12')
    MsousMenu[1].classList.remove('white2')
    //sm4.classList.add('sm14')
    MsousMenu[3].classList.add('white2')
    //sm3.classList.remove('sm13')
    MsousMenu[2].classList.remove('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.remove('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.remove('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.remove('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.remove('red2')
    bouttonMsousMenu[4].classList.add('red2')
    
    mobileTestiImg.classList.add('mobileQSNSolution')
    mobileTestiImg.classList.remove('mobileDigital')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreQuizz
        texte.innerHTML = texteQuizz
        contenuVente.classList.remove('animationContenu')

    }, 200)

})

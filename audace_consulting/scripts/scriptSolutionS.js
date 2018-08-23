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

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Booster votre force de vente'
        texte.innerHTML = 'Audace Consulting vous propose de concevoir et animer un parcours de vente pour vos équipes commerciales pour répondre précisément à vos besoins de développement et/ou de renforcement des compétences. Ce parcours de formation allie les techniques de vente, l’approche comportementale et l’assertivité. Véritable booster de compétences, ce parcours est centré sur les besoins et motivations de vos clients. '
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

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Oser un management dynamique '
        texte.innerHTML = 'Pour harmoniser la politique managériale au sein de votre entreprise, Audace Consulting crée sur-mesure un parcours manager garantissant l’intégrité de vos valeurs, la satisfaction de vos besoins dans le respect de vos budgets temps et financier. De la position n+1 au management motivationnel, nos formateurs développent les compétences de vos managers pour accroître les performances de vos équipes.'
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
        titreFormation.innerHTML = 'Coaching '
        texte.innerHTML = 'AUDACE Consulting considère le coaching comme le cheminement vers un état désiré de manière élégante afin d’obtenir le maximum de résultat. Le coaching post-formation facilite le Développement Durable de la Formation qui est essentiel pour un  ancrage des compétences sur le long terme.   '
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
    fond.classList.remove('imgQualite')
    fond.classList.remove('imgTestimonial')
    fond.classList.remove('imgPedagogie')
    fond.classList.add('imgDigitale')



    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Digital learning'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')



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
    sm2.setAttribute('href', 'inscription.html')
    sm3.setAttribute('href', 'devis.html')
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

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Booster votre force de vente'
        texte.innerHTML = 'Audace Consulting vous propose de concevoir et animer un parcours de vente pour vos équipes commerciales pour répondre précisément à vos besoins de développement et/ou de renforcement des compétences souhaitées. Ce parcours de formation allie les techniques de vente, l’approche comportementale et l’assertivité. Véritable booster de compétences, ce parcours est centré sur les besoins et motivations des clients. '
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

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Osez un management dynamique '
        texte.innerHTML = 'Pour harmoniser la politique managériale au sein de votre entreprise, Audace Consulting crée sur-mesure un parcours manager garantissant l’intégrité de vos valeurs, la satisfaction de vos besoins et dans le respect de vos budgets temps et financier.De la position n+1 pour le … ? au management motivationnel, nos formateurs développent les compétences de vos managers pour accroître les performances de vos équipes.'
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


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Coaching '
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
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

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Digital learning'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
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


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Quizz'
        texte.innerHTML = 'Notre division stratégie commerciale accompagne les entreprises dans le développement de leur chiffre d’affaires. <br> <br> Nos consultants commerciaux bénéficient d’une solide expérience dans de grandes entreprises où la part commerciale est prépondérante. <br> <br> Ils sont tous formés et maîtrisent l’utilisation de nos outils. <br> Nous nous engageons à trouver des solutions adaptées pour les entreprises afin d’obtenir le meilleur retour sur investissement.'
        contenuVente.classList.remove('animationContenu')

    }, 200)

})

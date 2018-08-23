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
let fond = document.querySelector(".fond")
let titreTexte = document.querySelector(".titreEtTexte")

let milieux = document.querySelector(".milieux")

let modules = document.querySelector(".modules")
let ref = document.querySelector(".ref")
let allRef = document.querySelector(".allRef")

let titreModule1 = document.querySelector(".titreModule1")
let titreModule2 = document.querySelector(".titreModule2")
let titreModule3 = document.querySelector(".titreModule3")
let titreModule4 = document.querySelector(".titreModule4")
let titreModule5 = document.querySelector(".titreModule5")
let titreModule6 = document.querySelector(".titreModule6")
let titreModule7 = document.querySelector(".titreModule7")

let popOne = document.querySelector(".one")
let popTwo = document.querySelector(".two")
let popThree = document.querySelector(".three")
let popFour = document.querySelector(".four")
let popFive = document.querySelector(".five")
let popSix = document.querySelector(".six")
let popSeven = document.querySelector(".seven")

let titrePopUp = document.querySelector(".titrePopUp")
let firstTexteH2 = document.querySelector(".firstTexteH2")
let firstTexteP = document.querySelector(".firstTexteP")
let secondTexteH2 = document.querySelector(".secondTexteH2")
let secondTexteP = document.querySelector(".secondTexteP")
let thirdTexteH2 = document.querySelector(".thirdTexteH2")
let thirdTexteP = document.querySelector(".thirdTexteP")

let key = document.querySelector(".key")

let close = document.querySelector(".close")

let bouttonMsousMenu = document.querySelectorAll(".bouttonMsousMenu")
let MsousMenu = document.querySelectorAll(".MsousMenu")
let mobileTestiImg = document.querySelector(".mobileTestiImg")


let Msm1 = document.querySelector(".Msm1")
let Msm2 = document.querySelector(".Msm2")
let Msm3 = document.querySelector(".Msm3")
let Msm4 = document.querySelector(".Msm4")

scrollbars.visible = false

window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu')
    sousMenu.classList.add('sousMenuMove')
}, 200)


sm1.innerHTML = 'Nos valeurs'
sm2.innerHTML = 'Notre équipe'
sm3.innerHTML = 'Pédagogie'
sm4.innerHTML = 'Testimonial'
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

    titreTexte.classList.remove('titreEtTexteTESTI')

    titreTexte.classList.remove('opacityM')

    fond.classList.remove('imgEquipe')
    fond.classList.remove('imgEquipe2')
    fond.classList.remove('imgPedagogie')
    fond.classList.remove('imgTestimonial')
    fond.classList.add('imgQualite')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = "La performance et l'humain"
        texte.innerHTML = "Audace Consulting prône une démarche tournée vers l’humain. Afin de faire de l’individu la pierre angulaire de l’entreprise, nous sommes résolument convaincus que la personne est la solution-clé pour que l'entreprise atteigne ses objectifs et optimise ses résultats. Nous accompagnons les entreprises et leurs forces vives avec les valeurs suivantes : Performance, Développement et Bienveillance"
        contenuVente.classList.remove('animationContenu')


    }, 200)
})


sm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    titreTexte.classList.remove('opacityM')

    titreTexte.classList.remove('titreEtTexteTESTI')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.remove('sm12')
    sm2.classList.add('red')

    fond.classList.remove('imgQualite')
    fond.classList.remove('imgTestimonial')
    fond.classList.remove('imgPedagogie')
    fond.classList.add('imgEquipe2')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Une équipe centrée<br>sur vos besoins'
        texte.innerHTML = 'Nos consultants sont tous formés au décryptage de comportement et à la Programmation Neuro-Linguistique (PNL). Ils suivent continuellement des formations afin de toujours maintenir leur niveau d’expertise avec pour leitmotiv compétence, rigueur et qualité. Ils accompagnent les collaborateurs dans leur démarche de changement. '
        contenuVente.classList.remove('animationContenu')


    }, 200)
})

sm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    titreTexte.classList.remove('titreEtTexteTESTI')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm3.classList.remove('sm13')
    sm3.classList.add('red')

    fond.classList.remove('imgQualite')
    fond.classList.remove('imgTestimonial')

    fond.classList.remove('imgEquipe')
    fond.classList.remove('imgTestimonial')
    fond.classList.remove('imgEquipe2')

    titreTexte.classList.remove('opacityM')

    fond.classList.add('imgPedagogie')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'L’insight allié à l’opérationnel '
        texte.innerHTML = 'Notre philosophie privilégie une approche comportementale. Nos modules de formation déclenchent les insight nécessaires à la flexibilité comportementale Nos sessions sont pragmatiques - 80 % d’activité et de training pour 20 % de théorie -,  nous garantissons le développement des compétences des participants afin qu’ils soient opérationnels et confortables dès la fin de la formation'
        contenuVente.classList.remove('animationContenu')


    }, 200)
})

sm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    //titreTexte.classList.add('opacityM')

    titreTexte.classList.add('titreEtTexteTESTI')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm2.classList.add('sm14')
    sm2.classList.remove('red')
    sm4.classList.remove('sm14')
    sm4.classList.add('red')

    fond.classList.remove('imgPedagogie')

    fond.classList.remove('imgQualite')
    fond.classList.remove('imgEquipe')
    fond.classList.remove('imgEquipe2')
    fond.classList.add('imgTestimonial')



    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = ' Les clients qui<br>nous font confiance'
        texte.innerHTML = ''
        contenuVente.classList.remove('animationContenu')

    }, 200)
})






forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu')
    sousMenu.classList.remove('sousMenuMove')
    sousMenu.classList.add('marginConseil')
    sousMenu.classList.remove('marginQuiSommesNous')
    sousMenu.classList.remove('marginSolution')


    smC.classList.remove('smS')


    sm1.classList.remove('col-lg-1')
    sm2.classList.remove('col-lg-1')
    sm3.classList.remove('col-lg-1')





    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)

    sm2.innerHTML = ''
    sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="inscription.html">contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.html">Devis</a>'
    sm4.innerHTML = ''


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscritption.html')
    sm3.setAttribute('href', 'devis.html')
    sm4.setAttribute('href', 'formateur.html')




})


Msm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    fond.classList.remove('imgEquipe')
    fond.classList.add('imgQualite')

    titreTexte.classList.remove('opacityM')


    MsousMenu[0].classList.add('white2')

    MsousMenu[1].classList.remove('white2')

    MsousMenu[2].classList.remove('white2')

    MsousMenu[3].classList.remove('white2')


    bouttonMsousMenu[0].classList.add('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.remove('red2')

    bouttonMsousMenu[3].classList.remove('red2')

    mobileTestiImg.classList.remove('mobileTesti')
    mobileTestiImg.classList.remove('mobilePedagogie')
    mobileTestiImg.classList.remove('mobileEquipe')
    mobileTestiImg.classList.add('mobileValeur')
    mobileTestiImg.classList.remove('mobileQSN')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Performance, Développement, Bienveillance'
        texte.innerHTML = 'Audace Consulting prône une démarche tournée vers l’humain. Afin de faire de l’individu la pierre angulaire de l’entreprise, nous sommes résolument convaincu que la personne est la solution-clé pour que l entreprise atteigne ses objectifs et optimise ses résultats. Nous accompagnons les entreprises et leurs forces vives avec des valeurs suivantes : Performance, Développement et bienveillance'
        contenuVente.classList.remove('animationContenu')


    }, 200)
})


Msm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    titreTexte.classList.remove('opacityM')

    fond.classList.remove('imgQualite')
    fond.classList.add('imgEquipe')


    MsousMenu[0].classList.remove('white2')

    MsousMenu[1].classList.add('white2')

    MsousMenu[2].classList.remove('white2')

    MsousMenu[3].classList.remove('white2')


    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.add('red2')

    bouttonMsousMenu[2].classList.remove('red2')

    bouttonMsousMenu[3].classList.remove('red2')

    mobileTestiImg.classList.remove('mobileTesti')
    mobileTestiImg.classList.remove('mobilePedagogie')
    mobileTestiImg.classList.add('mobileEquipe')
    mobileTestiImg.classList.remove('mobileValeur')
    mobileTestiImg.classList.remove('mobileQSN')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Une équipe centrée sur vos besoins'
        texte.innerHTML = 'Nos consultants sont tous formés au décryptage de comportement et à la Programmation Neuro-Linguistique (PNL). Ils suivent continuellement des formations afin de toujours maintenir leur niveau d’expertise avec pour leitmotiv compétence, rigueur et qualité.Ils accompagnent les collaborateurs dans leur démarche de changement. '
        contenuVente.classList.remove('animationContenu')


    }, 200)
})

Msm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    titreTexte.classList.remove('opacityM')


    MsousMenu[0].classList.remove('white2')

    MsousMenu[1].classList.remove('white2')

    MsousMenu[3].classList.remove('white2')

    MsousMenu[2].classList.add('white2')


    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.add('red2')

    bouttonMsousMenu[3].classList.remove('red2')

    mobileTestiImg.classList.remove('mobileTesti')
    mobileTestiImg.classList.add('mobilePedagogie')
    mobileTestiImg.classList.remove('mobileEquipe')
    mobileTestiImg.classList.remove('mobileValeurremove')
    mobileTestiImg.classList.remove('mobileQSN')





    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'L’insight allié à l’opérationnel '
        texte.innerHTML = 'Notre philosophie privilégie une approche comportementale où nos modules de formation déclenche les insight nécessaires à la flexibilité comportementale requise dans toute relation interpersonnelle. En synergie avec nos sessions sont pragmatiques - 80 % d’activité et de training pour 20 % de théorie -,  nous garantissions le développement des compétences des participants afin qu’ils soient opérationnels et confortables dès la fin de la formation'
        contenuVente.classList.remove('animationContenu')


    }, 200)
})

Msm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    titreTexte.classList.remove('opacityM')


    MsousMenu[0].classList.remove('white2')

    MsousMenu[1].classList.remove('white2')

    MsousMenu[3].classList.add('white2')

    MsousMenu[2].classList.remove('white2')


    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.remove('red2')

    bouttonMsousMenu[3].classList.add('red2')

    fond.classList.remove('imgPedagogie')

    fond.classList.remove('imgQualite')
    fond.classList.remove('imgEquipe')
    fond.classList.remove('imgEquipe2')
    fond.classList.add('imgTestimonial')

    mobileTestiImg.classList.add('mobileTesti')
    mobileTestiImg.classList.remove('mobilePedagogie')
    mobileTestiImg.classList.remove('mobileEquipe')
    mobileTestiImg.classList.remove('mobileValeur')
    mobileTestiImg.classList.remove('mobileQSN')





    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = ' Les partenaires qui nous ont fait confiance'
        texte.innerHTML = ''
        contenuVente.classList.remove('animationContenu')
    })
})

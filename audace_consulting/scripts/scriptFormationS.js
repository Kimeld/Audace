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

let milieux = document.querySelector(".milieux")

let modules = document.querySelector(".modules")

let bouttonMsousMenu = document.querySelectorAll(".bouttonMsousMenu")
let MsousMenu = document.querySelectorAll(".MsousMenu")
let MsousMenuBusiness = document.querySelectorAll(".MsousMenuBusiness")
let mobileTestiImg = document.querySelector(".mobileTestiImg")


let Msm1 = document.querySelector(".Msm1")
let Msm2 = document.querySelector(".Msm2")
let Msm3 = document.querySelector(".Msm3")
let Msm4 = document.querySelector(".Msm4")

scrollbars.visible = false;


formations.classList.add('red')

window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu');
    sousMenu.classList.add('sousMenuMove');
}, 200)


sm1.innerHTML = 'Management'
sm2.innerHTML = 'Vente & négociation'
sm3.innerHTML = 'Communication'
sm4.innerHTML = 'Formation de formateur'
sm5.innerHTML = ''

sm1.setAttribute('href', 'mana.html')
sm2.setAttribute('href', 'vente.html')
sm3.setAttribute('href', 'comunication.html')
sm4.setAttribute('href', 'formateur.html')



MsousMenu[0].innerHTML = '<a class="deco" href="mana.html" class="deco">Management</a>'
MsousMenuBusiness[0].innerHTML = '<a class="deco" href="vente.html" class="deco">Vente & négociation</a>'
MsousMenu[1].innerHTML = '<a class="deco" href="comunication.html" class="deco">Communication</a>'
MsousMenuBusiness[1].innerHTML = '<a class="deco" href="formateur.html" class="deco">Formation de formateur</a>'



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
        sousMenu.classList.add('animationSousMenu')
        sousMenu.classList.add('sousMenuMove')
    }, 200)

    sm2.innerHTML = ''
    sm1.innerHTML = 'À la une'
    sm2.innerHTML = 'Contact'
    sm3.innerHTML = 'Devis'
    sm4.innerHTML = ''


  sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.php')
    sm3.setAttribute('href', 'devis.php')
    sm4.setAttribute('href', 'formateur.html')




})

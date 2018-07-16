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



scrollbars.visible = false;

//sousMenu.classList.add('marginFormations');
//sousMenu.classList.add('marginQuiSommesNous');


window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu');
    sousMenu.classList.add('sousMenuMove');
}, 200)


sm1.innerHTML = 'Nos valeurs'
sm2.innerHTML = 'Notre équipe'
sm3.innerHTML = 'Pédagogie'
sm4.innerHTML = 'Testimonial'
sm5.innerHTML = ''


sm1.setAttribute('href', 'valeur.html')
sm2.setAttribute('href', 'equipe.html')
sm3.setAttribute('href', 'pedagogie.html')
sm4.setAttribute('href', 'testimonial.html')

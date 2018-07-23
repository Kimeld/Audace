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

/*

sm1.setAttribute('href', 'valeur.html')

sm2.setAttribute('href', 'equipe.html')
sm3.setAttribute('href', 'pedagogie.html')
sm4.setAttribute('href', 'testimonial.html')
*/

sm1.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Nos valeurs'
        texte.innerHTML = 'Nous croyons énormément à la capacité de tout un chacun à «Oser pour réussir » Pour cela, nous optimisons le « Savoir être » pour développer le « Savoir faire » des managers et collaborateurs au travers des valeurs suivantes : <br> - Performance <br> - Développement durable de la formation <br> - Bienveillance'
        contenuVente.classList.remove('animationContenu')


    }, 200)
})


sm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Notre équipe'
        texte.innerHTML = 'Une équipe à votre écoute et à votre service AUDACE Consulting est constituée de consultants tous formés aux différents outils de mesure de la personnalité,à la Programmation Neuro-Linguistique PNL, et sont en formation continue afin de toujours maintenir :  <br> Une équipe de formateurs compétents <br> Une organisation solide et rigoureuse  <br> Une proposition de solutions sur mesure <br> Un respect des délais  <br> Une orientation vers l’efficacité <br> Un feedback clair et précis'
        contenuVente.classList.remove('animationContenu')


    }, 200)
})

sm3.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Pédagogie'
        texte.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, asperiores mollitia repellat illo ullam animi vel, delectus reprehenderit sint dicta culpa eveniet molestiae eos magnam, nulla libero quam reiciendis dignissimos?'
        contenuVente.classList.remove('animationContenu')


    }, 200)
})

sm4.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Testimonial'
        texte.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, asperiores mollitia repellat illo ullam animi vel, delectus reprehenderit sint dicta culpa eveniet molestiae eos magnam, nulla libero quam reiciendis dignissimos?'
        contenuVente.classList.remove('animationContenu')

    }, 200)
})






forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');

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

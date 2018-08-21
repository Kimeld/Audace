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

sousMenu.classList.add('marginQuiSommesNous');

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


sm2.addEventListener('click', () => {

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Notre équipe'
        texte.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, asperiores mollitia repellat illo ullam animi vel, delectus reprehenderit sint dicta culpa eveniet molestiae eos magnam, nulla libero quam reiciendis dignissimos?'
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
sousMenu.classList.add('marginConseil');
    sousMenu.classList.remove('marginQuiSommesNous');
    sousMenu.classList.remove('marginSolution');
  

    smC.classList.remove('smS');

    sm1.classList.remove('col-lg-1');
    sm2.classList.remove('col-lg-1');
    sm3.classList.remove('col-lg-1');

   



    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)

    sm2.innerHTML = ''
    sm1.innerHTML = 'À la une'
    sm2.innerHTML = 'Contact'
    sm3.innerHTML = 'Devis'
    sm4.innerHTML = ''


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscritption.html')
    sm3.setAttribute('href', 'devis.html')
    sm4.setAttribute('href', 'formateur.html')




})


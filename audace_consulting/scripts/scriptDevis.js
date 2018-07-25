let contenu = document.querySelector(".contenu")
let bouttonPre = document.querySelector(".bouttonPre")
let bouttonSui = document.querySelector(".bouttonSui")
let rep1 = document.querySelector(".rep1")
let rep2 = document.querySelector(".rep2")
let rep3 = document.querySelector(".rep3")
let rep4 = document.querySelector(".rep4")
let i = 0

bouttonSui.addEventListener('click', () => {



    if (i >= 0 && i < 3) {
        i++

        if (i == 1) {
            rep2.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

        } else if (i == 2) {
            rep3.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

        } else if (i == 3) {
            rep4.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

        }

    }

})

bouttonPre.addEventListener('click', () => {



    if (i > 0 && i <= 3) {
        i--


        if (i == 0) {
            rep2.classList.remove('repActive')
            bouttonPre.classList.add('preInvi')

            contenu.classList.add('contenuActive')
            contenu.classList.remove('contenuNoActive')

        } else if (i == 1) {
            rep3.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

        } else if (i == 2) {
            rep4.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')
        }

    }

})
/*
if (i == 0) {
    contenu.classList.add('contenuActive')
} else {
    contenu.classList.remove('contenuActive')
    contenu.classList.add('contenuNoActive')
}
*/

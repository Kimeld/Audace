let contenu = document.querySelector(".contenu")
let contenu2 = document.querySelector(".contenu2")
let contenu3 = document.querySelector(".contenu3")
let contenu4 = document.querySelector(".contenu4")

let FG = document.querySelector(".FG")
let FD = document.querySelector(".FD")

let navPro = document.querySelector(".navPro")
let navPro2 = document.querySelector(".navPro2")
let navPro3 = document.querySelector(".navPro3")

let cercle1 = document.querySelector(".cercle1")
let cercle2 = document.querySelector(".cercle2")
let cercle3 = document.querySelector(".cercle3")


let audit = document.querySelector(".audit")
let checkAudit = document.querySelector(".checkAudit")
let auditSelect = 0

let consulting = document.querySelector(".consulting")
let checkConsulting = document.querySelector(".checkConsulting")
let consultingSelect = 0

let business = document.querySelector(".business")
let checkBusiness = document.querySelector(".checkBusiness")
let businessSelect = 0


let contenuMana = document.querySelector('.contenuMana')
let programmeContenuMana = document.querySelector('.programmeContenuMana')
let managementContenu = document.querySelector('.managementContenu')
let programmeContenuManaSelect = 0

let position = document.querySelector('.position')
let checkPosition = document.querySelector('.checkPosition')
let positionSelect = 0

let eVente = document.querySelector(".eVente")
let checkeVente = document.querySelector(".checkeVente")
let eVenteSelect = 0

let eMana = document.querySelector(".eMana")
let checkeMana = document.querySelector(".checkeMana")
let eManaSelect = 0

let eCoach = document.querySelector(".eCoach")
let checkeCoach = document.querySelector(".checkeCoach")
let eCoachSelect = 0

let eDigi = document.querySelector(".eDigi")
let checkeDigi = document.querySelector(".checkeDigi")
let eDigiSelect = 0

let eQuiz = document.querySelector(".eQuiz")
let checkeQuiz = document.querySelector(".checkeQuiz")
let eQuizSelect = 0


let bouttonPre = document.querySelector(".bouttonPre")
let bouttonSui = document.querySelector(".bouttonSui")

let rep1 = document.querySelector(".rep1")
let rep2 = document.querySelector(".rep2")
let rep3 = document.querySelector(".rep3")
let rep4 = document.querySelector(".rep4")
let i = 0
let y = 0

bouttonSui.addEventListener('click', () => {



    if (i >= 0 && i < 3) {
        i++

        if (i == 1) {
            rep2.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

            contenu2.classList.add('contenuActive')
            contenu2.classList.remove('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')

        } else if (i == 2) {
            rep3.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.add('contenuActive')
            contenu3.classList.remove('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')



        } else if (i == 3) {
            rep4.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.add('contenuActive')
            contenu4.classList.remove('contenuNoActive')

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

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')

        } else if (i == 1) {
            rep3.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

            contenu2.classList.add('contenuActive')
            contenu2.classList.remove('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')

        } else if (i == 2) {
            rep4.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu.classList.remove('contenuActive')
            contenu.classList.add('contenuNoActive')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.add('contenuActive')
            contenu3.classList.remove('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')
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


cercle1.addEventListener('click', () => {

    cercle1.classList.add('cercleActive')
    cercle2.classList.remove('cercleActive')
    cercle3.classList.remove('cercleActive')

    cercle1.classList.add('cercleActive')
    cercle2.classList.remove('cercleActive')
    cercle3.classList.remove('cercleActive')

    navPro3.classList.remove('none')
    window.setTimeout(() => {
        navPro3.classList.remove('contenuNoActive2')
    }, 500)

    navPro2.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro2.classList.add('none')
    }, 500)


    navPro.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro.classList.add('none')
    }, 500)

})

cercle2.addEventListener('click', () => {

    cercle1.classList.remove('cercleActive')
    cercle2.classList.add('cercleActive')
    cercle3.classList.remove('cercleActive')

    navPro3.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro3.classList.add('none')
    }, 500)

    navPro2.classList.remove('none')
    window.setTimeout(() => {
        navPro2.classList.remove('contenuNoActive2')
    }, 500)

    navPro.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro.classList.add('none')
    }, 500)

})

cercle3.addEventListener('click', () => {

    cercle1.classList.remove('cercleActive')
    cercle2.classList.remove('cercleActive')
    cercle3.classList.add('cercleActive')

    navPro3.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro3.classList.add('none')
    }, 500)

    navPro2.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro2.classList.add('none')
    }, 500)

    navPro.classList.remove('none')
    window.setTimeout(() => {
        navPro.classList.remove('contenuNoActive2')
    }, 500)

})

FD.addEventListener('click', () => {



    if (y >= 0 && y < 2) {
        y++

        if (y == 1) {
            cercle1.classList.remove('cercleActive')
            cercle2.classList.add('cercleActive')
            cercle3.classList.remove('cercleActive')

            navPro3.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro3.classList.add('none')
            }, 500)

            navPro2.classList.remove('none')
            window.setTimeout(() => {
                navPro2.classList.remove('contenuNoActive2')
            }, 500)

            navPro.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro.classList.add('none')
            }, 500)

        } else if (y == 2) {
            cercle1.classList.remove('cercleActive')
            cercle2.classList.remove('cercleActive')
            cercle3.classList.add('cercleActive')

            navPro3.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro3.classList.add('none')
            }, 500)

            navPro2.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro2.classList.add('none')
            }, 500)

            navPro.classList.remove('none')
            window.setTimeout(() => {
                navPro.classList.remove('contenuNoActive2')
            }, 500)


        }

    }

})

FG.addEventListener('click', () => {



    if (y > 0 && y <= 2) {
        y--

        if (y == 0) {
            cercle1.classList.add('cercleActive')
            cercle2.classList.remove('cercleActive')
            cercle3.classList.remove('cercleActive')

            navPro3.classList.remove('none')
            window.setTimeout(() => {
                navPro3.classList.remove('contenuNoActive2')
            }, 500)

            navPro2.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro2.classList.add('none')
            }, 500)


            navPro.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro.classList.add('none')
            }, 500)

        } else if (y == 1) {
            cercle1.classList.remove('cercleActive')
            cercle2.classList.add('cercleActive')
            cercle3.classList.remove('cercleActive')

            navPro3.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro3.classList.add('none')
            }, 500)

            navPro2.classList.remove('contenuNoActive2')
            window.setTimeout(() => {
                navPro2.classList.remove('none')
            }, 500)


            navPro.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro.classList.add('none')
            }, 500)

        }

    }

})

audit.addEventListener('click', () => {

    if (auditSelect == 0) {
        checkAudit.setAttribute('src', '../images/check.png')
        auditSelect++
    } else {
        checkAudit.setAttribute('src', '../images/plus-circle.png')
        auditSelect--

    }



})

consulting.addEventListener('click', () => {

    if (consultingSelect == 0) {
        checkConsulting.setAttribute('src', '../images/check.png')
        consultingSelect++
    } else {
        checkConsulting.setAttribute('src', '../images/plus-circle.png')
        consultingSelect--

    }



})

business.addEventListener('click', () => {

    if (businessSelect == 0) {
        checkBusiness.setAttribute('src', '../images/check.png')
        businessSelect++
    } else {
        checkBusiness.setAttribute('src', '../images/plus-circle.png')
        businessSelect--

    }



})

eVente.addEventListener('click', () => {

    if (eVenteSelect == 0) {
        checkeVente.setAttribute('src', '../images/check.png')
        eVenteSelect++
    } else {
        checkeVente.setAttribute('src', '../images/plus-circle.png')
        eVenteSelect--

    }



})

eMana.addEventListener('click', () => {

    if (eManaSelect == 0) {
        checkeMana.setAttribute('src', '../images/check.png')
        eManaSelect++
    } else {
        checkeMana.setAttribute('src', '../images/plus-circle.png')
        eManaSelect--

    }



})

eCoach.addEventListener('click', () => {

    if (eCoachSelect == 0) {
        checkeCoach.setAttribute('src', '../images/check.png')
        eCoachSelect++
    } else {
        checkeCoach.setAttribute('src', '../images/plus-circle.png')
        eCoachSelect--

    }



})

eDigi.addEventListener('click', () => {

    if (eDigiSelect == 0) {
        checkeDigi.setAttribute('src', '../images/check.png')
        eDigiSelect++
    } else {
        checkeDigi.setAttribute('src', '../images/plus-circle.png')
        eDigiSelect--

    }



})

eQuiz.addEventListener('click', () => {

    if (eQuizSelect == 0) {
        checkeQuiz.setAttribute('src', '../images/check.png')
        eQuizSelect++
    } else {
        checkeQuiz.setAttribute('src', '../images/plus-circle.png')
        eQuizSelect--

    }



})

contenuMana.addEventListener('click', () => {



    if (programmeContenuManaSelect == 0) {
        programmeContenuMana.classList.add('open')
        managementContenu.classList.remove('none')
        programmeContenuManaSelect++
    } else {
        programmeContenuMana.classList.remove('open')
        managementContenu.classList.add('none')
        programmeContenuManaSelect--

    }


})

position.addEventListener('click', () => {

    if (positionSelect == 0) {
        checkPosition.setAttribute('src', '../images/check.png')
        positionSelect++
    } else {
        checkPosition.setAttribute('src', '../images/plus-circle.png')
        positionSelect--

    }



})

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

let contenu1 = document.querySelector(".contenu1")
let contenu2 = document.querySelector(".contenu2")
let contenu3 = document.querySelector(".contenu3")

let FG = document.querySelector(".FG")
let FD = document.querySelector(".FD")

let navPro = document.querySelector(".navPro")
let navPro2 = document.querySelector(".navPro2")
let navPro3 = document.querySelector(".navPro3")
let navPro4 = document.querySelector(".navPro4")

let cercle1 = document.querySelector(".cercle1")
let cercle2 = document.querySelector(".cercle2")
let cercle3 = document.querySelector(".cercle3")
let cercle4 = document.querySelector(".cercle4")

let chevrons = document.querySelectorAll(".chevron")

let list = document.querySelector(".list")
let listNbrs = document.querySelector(".listNbrs")
let tab = new Array(28)

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

let couleur = document.querySelector('.couleur')
let checkCouleur = document.querySelector('.checkCouleur')
let couleurSelect = 0

let situationnel = document.querySelector('.situationnel')
let checkSituationnel = document.querySelector('.checkSituationnel')
let situationnelSelect = 0

let motivationnel = document.querySelector('.motivationnel')
let checkMotivationnel = document.querySelector('.checkMotivationnel')
let motivationnelSelect = 0

let projet = document.querySelector('.projet')
let checkPojet = document.querySelector('.checkPojet')
let projetSelect = 0


let contenuVent = document.querySelector('.contenuVent')
let programmeContenuVente = document.querySelector('.programmeContenuVente')
let venteContenu = document.querySelector('.venteContenu')
let programmeContenuVenteSelect = 0

let technique = document.querySelector('.technique')
let checkTechnique = document.querySelector('.checkTechnique')
let techniqueSelect = 0

let couleurV = document.querySelector('.couleurV')
let checkCouleurV = document.querySelector('.checkCouleurV')
let couleurVSelect = 0

let assertive = document.querySelector('.assertive')
let checkAssertive = document.querySelector('.checkAssertive')
let assertiveSelect = 0

let gociation = document.querySelector('.gociation')
let checkGociation = document.querySelector('.checkGociation')
let gociationSelect = 0



let contenuComunication = document.querySelector('.contenuComunication')
let programmeContenuComunication = document.querySelector('.programmeContenuComunication')
let comunicationContenu = document.querySelector('.comunicationContenu')
let programmeContenuComunicationSelect = 0

let relationnelle = document.querySelector('.relationnelle')
let checkRelationnelle = document.querySelector('.checkRelationnelle')
let relationnelleSelect = 0

let assertivit = document.querySelector('.assertivit')
let checkAssertivit = document.querySelector('.checkAssertivit')
let assertivitSelect = 0

let situations = document.querySelector('.situations')
let checkSituations = document.querySelector('.checkSituations')
let situationsSelect = 0

let publique = document.querySelector('.publique')
let checkPublique = document.querySelector('.checkPublique')
let publiqueSelect = 0

let board = document.querySelector('.board')
let checkBoard = document.querySelector('.checkBoard')
let boardSelect = 0


let contenuFormateur = document.querySelector('.contenuFormateur')
let programmeContenuformateur = document.querySelector('.programmeContenuformateur')
let formateurContenu = document.querySelector('.formateurContenu')
let programmeContenuformateurSelect = 0

let animateur = document.querySelector('.animateur')
let checkAnimateur = document.querySelector('.checkAnimateur')
let animateurSelect = 0

let coach = document.querySelector('.coach')
let checkCoach = document.querySelector('.checkCoach')
let coachSelect = 0

let assertif = document.querySelector('.assertif')
let checkAssertif = document.querySelector('.checkAssertif')
let assertifSelect = 0




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



let equipe = document.querySelector(".equipe")
let checkEquipe = document.querySelector(".checkEquipe")
let equipeSelect = 0

let individuel = document.querySelector(".individuel")
let checkIndividuel = document.querySelector(".checkIndividuel")
let individuelSelect = 0

let manager = document.querySelector(".manager")
let checkManager = document.querySelector(".checkManager")
let managerSelect = 0

let recruteur = document.querySelector(".recruteur")
let checkRecruteur = document.querySelector(".checkRecruteur")
let recruteurSelect = 0


let bouttonPre = document.querySelector(".bouttonPre")
let bouttonSui = document.querySelector(".bouttonSui")

let rep1 = document.querySelector(".rep1")
let rep2 = document.querySelector(".rep2")
let rep3 = document.querySelector(".rep3")
let rep4 = document.querySelector(".rep4")
let i = 0
let y = 0
let a = 0

let PM = document.querySelector(".PM")
let PV = document.querySelector(".PV")
let PC = document.querySelector(".PC")
let PF = document.querySelector(".PF")


bouttonSui.addEventListener('click', () => {

    for (a = 0; a <= 28; a++) {
        if (tab[a]) {
            list.innerHTML += '<div><span class="ecartimgF"> ' + tab[a] + '</span></div>'
            listNbrs.innerHTML += ' <div class="form-group ecart"><textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea> </div> '

        } else {
            list.innerHTML += ''
            listNbrs.innerHTML += ''

        }
    }

    /*if (auditSelect == 1) {
        list.innerHTML = '<div><img src="../images/x-circle.png" alt=""><span class="ecartimgF"> ' + tab[0] + '</span></div>'
    } else {
        list.innerHTML = ''

    }*/

    if (i >= 0 && i < 2) {
        i++

        if (i == 1) {

            rep2.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

            contenu2.classList.remove('none')

            window.setTimeout(() => {
                contenu1.classList.add('none')
                contenu2.classList.add('contenuActive')
                contenu2.classList.remove('contenuNoActive')

            }, 800)


            /*
            rep2.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')
            contenu1.classList.add('absolute')

            contenu2.classList.remove('fixed')


            window.setTimeout(() => {
                contenu1.classList.add('fixed')
                contenu2.classList.remove('contenuNoActive')
                contenu2.classList.add('contenuActive')
            }, 500)
            */



        } else if (i == 2) {
            rep3.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.remove('none')

            window.setTimeout(() => {
                contenu2.classList.add('none')
                contenu3.classList.add('contenuActive')
                contenu3.classList.remove('contenuNoActive')

            }, 800)


        }
        /*else if (i == 3) {
                   rep4.classList.add('repActive')
                   bouttonPre.classList.remove('preInvi')

                   contenu1.classList.remove('contenuActive')
                   contenu1.classList.add('contenuNoActive')

                   contenu2.classList.remove('contenuActive')
                   contenu2.classList.add('contenuNoActive')

                   contenu3.classList.remove('contenuActive')
                   contenu3.classList.add('contenuNoActive')


               }*/

    }

})

bouttonPre.addEventListener('click', () => {

    list.innerHTML = ''
    listNbrs.innerHTML = ''


    if (i > 0 && i <= 2) {
        i--


        if (i == 0) {
            rep2.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu1.classList.remove('none')

            window.setTimeout(() => {
                contenu2.classList.add('none')
                contenu1.classList.add('contenuActive')
                contenu1.classList.remove('contenuNoActive')

            }, 800)



        } else if (i == 1) {
            rep3.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu2.classList.remove('none')

            window.setTimeout(() => {
                contenu3.classList.add('none')
                contenu2.classList.add('contenuActive')
                contenu2.classList.remove('contenuNoActive')

            }, 800)



        }
        /*else if (i == 2) {
            rep4.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.add('contenuActive')
            contenu3.classList.remove('contenuNoActive')






        }
*/
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
    cercle4.classList.remove('cercleActive')


    navPro4.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro4.classList.add('none')
    }, 500)

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
    cercle4.classList.remove('cercleActive')

    navPro4.classList.add('none')
    window.setTimeout(() => {
        navPro4.classList.add('contenuNoActive2')
    }, 500)


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
    cercle4.classList.remove('cercleActive')

    navPro4.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro4.classList.add('none')
    }, 500)


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

cercle4.addEventListener('click', () => {

    cercle1.classList.remove('cercleActive')
    cercle2.classList.remove('cercleActive')
    cercle3.classList.remove('cercleActive')
    cercle4.classList.add('cercleActive')

    navPro4.classList.remove('none')
    window.setTimeout(() => {
        navPro4.classList.remove('contenuNoActive2')
    }, 500)

    navPro3.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro3.classList.add('none')
    }, 500)

    navPro2.classList.add('contenuNoActive2')
    window.setTimeout(() => {
        navPro2.classList.add('none')
    }, 500)

    navPro.classList.add('none')
    window.setTimeout(() => {
        navPro.classList.add('contenuNoActive2')
    }, 500)

})

FD.addEventListener('click', () => {



    if (y >= 0 && y < 3) {
        y++

        if (y == 1) {
            cercle1.classList.remove('cercleActive')
            cercle2.classList.add('cercleActive')
            cercle3.classList.remove('cercleActive')
            cercle4.classList.remove('cercleActive')

            navPro4.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro4.classList.add('none')
            }, 500)


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
            cercle4.classList.remove('cercleActive')

            navPro4.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro4.classList.add('none')
            }, 500)

            navPro3.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro3.classList.add('none')
            }, 500)

            navPro2.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro2.classList.add('none')
            }, 500)

            navPro.classList.remove('contenuNoActive2')
            window.setTimeout(() => {
                navPro.classList.remove('none')
            }, 500)


        } else if (y == 3) {
            cercle1.classList.remove('cercleActive')
            cercle2.classList.remove('cercleActive')
            cercle3.classList.remove('cercleActive')
            cercle4.classList.add('cercleActive')

            navPro4.classList.remove('none')
            window.setTimeout(() => {
                navPro4.classList.remove('contenuNoActive2')
            }, 500)

            navPro3.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro3.classList.add('none')
            }, 500)

            navPro2.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro2.classList.add('none')
            }, 500)

            navPro.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro.classList.add('none')
            }, 500)


        }

    }

})

FG.addEventListener('click', () => {



    if (y > 0 && y <= 3) {
        y--

        if (y == 0) {
            cercle1.classList.add('cercleActive')
            cercle2.classList.remove('cercleActive')
            cercle3.classList.remove('cercleActive')
            cercle4.classList.remove('cercleActive')

            navPro4.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro4.classList.add('none')
            }, 500)

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
            cercle4.classList.remove('cercleActive')

            navPro4.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro4.classList.add('none')
            }, 500)

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

        } else if (y == 2) {
            cercle1.classList.remove('cercleActive')
            cercle2.classList.remove('cercleActive')
            cercle3.classList.add('cercleActive')
            cercle4.classList.remove('cercleActive')

            navPro4.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro4.classList.add('none')
            }, 500)

            navPro3.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro3.classList.add('none')
            }, 500)

            navPro2.classList.add('contenuNoActive2')
            window.setTimeout(() => {
                navPro2.classList.add('none')
            }, 500)

            navPro.classList.remove('contenuNoActive2')
            window.setTimeout(() => {
                navPro.classList.remove('none')
            }, 500)

        }


    }

})

audit.addEventListener('click', () => {

    if (auditSelect == 0) {
        checkAudit.setAttribute('src', '../images/check.png')
        tab[0] = "audit"
        auditSelect++
    } else {
        checkAudit.setAttribute('src', '../images/plus-circle.png')
        tab.splice(0, 1)
        auditSelect--

    }



})

consulting.addEventListener('click', () => {

    if (consultingSelect == 0) {
        checkConsulting.setAttribute('src', '../images/check.png')
        tab[1] = "Consulting"
        consultingSelect++
    } else {
        checkConsulting.setAttribute('src', '../images/plus-circle.png')
        tab.splice(1, 1)
        consultingSelect--

    }



})

business.addEventListener('click', () => {

    if (businessSelect == 0) {
        checkBusiness.setAttribute('src', '../images/check.png')
        tab[2] = "Bussiness consulting"
        businessSelect++
    } else {
        checkBusiness.setAttribute('src', '../images/plus-circle.png')
        tab.splice(2, 1)
        businessSelect--

    }



})

eVente.addEventListener('click', () => {

    if (eVenteSelect == 0) {
        checkeVente.setAttribute('src', '../images/check.png')
        tab[3] = "École de vente"
        eVenteSelect++
    } else {
        checkeVente.setAttribute('src', '../images/plus-circle.png')
        tab.splice(3, 1)
        eVenteSelect--

    }



})

eMana.addEventListener('click', () => {

    if (eManaSelect == 0) {
        checkeMana.setAttribute('src', '../images/check.png')
        tab[4] = "École de management"
        eManaSelect++
    } else {
        checkeMana.setAttribute('src', '../images/plus-circle.png')
        tab.splice(4, 1)
        eManaSelect--

    }



})

eCoach.addEventListener('click', () => {

    if (eCoachSelect == 0) {
        checkeCoach.setAttribute('src', '../images/check.png')
        tab[5] = "Coaching"
        eCoachSelect++
    } else {
        checkeCoach.setAttribute('src', '../images/plus-circle.png')
        tab.splice(5, 1)
        eCoachSelect--

    }



})

eDigi.addEventListener('click', () => {

    if (eDigiSelect == 0) {
        checkeDigi.setAttribute('src', '../images/check.png')
        tab[6] = "digital learning"
        eDigiSelect++
    } else {
        checkeDigi.setAttribute('src', '../images/plus-circle.png')
        tab.splice(6, 1)
        eDigiSelect--

    }



})



equipe.addEventListener('click', () => {

    if (equipeSelect == 0) {
        checkEquipe.setAttribute('src', '../images/check.png')
        tab[7] = "Profile équipe"
        equipeSelect++
    } else {
        checkEquipe.setAttribute('src', '../images/plus-circle.png')
        tab.splice(7, 1)
        equipeSelect--

    }



})

individuel.addEventListener('click', () => {

    if (individuelSelect == 0) {
        checkIndividuel.setAttribute('src', '../images/check.png')
        tab[8] = "Profile individuel"
        individuelSelect++
    } else {
        checkIndividuel.setAttribute('src', '../images/plus-circle.png')
        tab.splice(8, 1)
        individuelSelect--

    }



})

manager.addEventListener('click', () => {

    if (managerSelect == 0) {
        checkManager.setAttribute('src', '../images/check.png')
        tab[9] = "Profile manager"
        managerSelect++
    } else {
        checkManager.setAttribute('src', '../images/plus-circle.png')
        tab.splice(9, 1)
        managerSelect--

    }



})


recruteur.addEventListener('click', () => {

    if (recruteurSelect == 0) {
        checkRecruteur.setAttribute('src', '../images/check.png')
        tab[10] = "Profile recruteur"
        recruteurSelect++
    } else {
        checkRecruteur.setAttribute('src', '../images/plus-circle.png')
        tab.splice(10, 1)
        recruteurSelect--

    }



})




contenuMana.addEventListener('click', () => {



    if (programmeContenuManaSelect == 0) {

        chevrons[0].classList.add('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuMana.classList.add('open')
        managementContenu.classList.remove('none')

        PV.classList.remove('P4')
        PM.classList.remove('P4')
        PC.classList.remove('P4')
        PF.classList.remove('P4')

        PV.classList.remove('P5')
        PM.classList.remove('P5')
        PC.classList.remove('P5')
        PF.classList.remove('P5')

        PF.classList.remove('P3')
        PM.classList.remove('P3')
        PV.classList.remove('P3')
        PC.classList.remove('P3')

        PM.classList.remove('P5')
        PV.classList.add('P5')
        PC.classList.add('P5')
        PF.classList.add('P5')

        programmeContenuVente.classList.remove('open')
        venteContenu.classList.add('none')
        programmeContenuVenteSelect = 0

        programmeContenuComunication.classList.remove('open')
        comunicationContenu.classList.add('none')
        programmeContenuComunicationSelect = 0

        programmeContenuformateur.classList.remove('open')
        formateurContenu.classList.add('none')
        programmeContenuformateurSelect = 0


        programmeContenuManaSelect = 1
    } else {
        chevrons[0].classList.remove('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuMana.classList.remove('open')
        managementContenu.classList.add('none')

        PV.classList.remove('P5')
        PM.classList.remove('P5')
        PC.classList.remove('P5')
        PF.classList.remove('P5')


        programmeContenuManaSelect = 0

    }


})

position.addEventListener('click', () => {

    if (positionSelect == 0) {
        checkPosition.setAttribute('src', '../images/check.png')
        tab[11] = "Position N + 1"
        positionSelect++
    } else {
        checkPosition.setAttribute('src', '../images/plus-circle.png')
        tab.splice(11, 1)
        positionSelect--

    }
})

couleur.addEventListener('click', () => {

    if (couleurSelect == 0) {
        checkCouleur.setAttribute('src', '../images/check.png')
        tab[12] = "Couleur du management"
        couleurSelect++
    } else {
        checkCouleur.setAttribute('src', '../images/plus-circle.png')
        tab.splice(12, 1)
        couleurSelect--

    }
})

situationnel.addEventListener('click', () => {

    if (situationnelSelect == 0) {
        checkSituationnel.setAttribute('src', '../images/check.png')
        tab[13] = "Management Situationnel"
        situationnelSelect++
    } else {
        checkSituationnel.setAttribute('src', '../images/plus-circle.png')
        tab.splice(13, 1)
        situationnelSelect--

    }
})

motivationnel.addEventListener('click', () => {

    if (motivationnelSelect == 0) {
        checkMotivationnel.setAttribute('src', '../images/check.png')
        tab[14] = "Management motivationnel"
        motivationnelSelect++
    } else {
        checkMotivationnel.setAttribute('src', '../images/plus-circle.png')
        tab.splice(14, 1)
        motivationnelSelect--

    }
})

projet.addEventListener('click', () => {

    if (projetSelect == 0) {
        checkPojet.setAttribute('src', '../images/check.png')
        tab[15] = "Management de projet"
        projetSelect++
    } else {
        checkPojet.setAttribute('src', '../images/plus-circle.png')
        tab.splice(15, 1)
        projetSelect--

    }
})



contenuVent.addEventListener('click', () => {



    if (programmeContenuVenteSelect == 0) {
        chevrons[1].classList.add('chevronRotate')
        chevrons[0].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuVente.classList.add('open')
        venteContenu.classList.remove('none')



        PV.classList.remove('P5')
        PM.classList.remove('P5')
        PC.classList.remove('P5')
        PF.classList.remove('P5')

        PF.classList.remove('P3')
        PM.classList.remove('P3')
        PV.classList.remove('P3')
        PC.classList.remove('P3')

        PV.classList.remove('P4')
        PM.classList.add('P4')
        PC.classList.add('P4')
        PF.classList.add('P4')

        programmeContenuMana.classList.remove('open')
        managementContenu.classList.add('none')
        programmeContenuManaSelect = 0

        programmeContenuComunication.classList.remove('open')
        comunicationContenu.classList.add('none')
        programmeContenuComunicationSelect = 0

        programmeContenuformateur.classList.remove('open')
        formateurContenu.classList.add('none')
        programmeContenuformateurSelect = 0

        programmeContenuVenteSelect = 1
    } else {
        chevrons[0].classList.remove('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuVente.classList.remove('open')
        venteContenu.classList.add('none')
        PV.classList.remove('P4')
        PM.classList.remove('P4')
        PC.classList.remove('P4')
        PF.classList.remove('P4')



        programmeContenuVenteSelect = 0

    }


})

technique.addEventListener('click', () => {

    if (techniqueSelect == 0) {
        checkTechnique.setAttribute('src', '../images/check.png')
        tab[16] = "Technique de ventes"
        techniqueSelect++
    } else {
        checkTechnique.setAttribute('src', '../images/plus-circle.png')
        tab.splice(16, 1)
        techniqueSelect--

    }
})

couleurV.addEventListener('click', () => {

    if (couleurVSelect == 0) {
        checkCouleurV.setAttribute('src', '../images/check.png')
        tab[17] = "Couleur de ventes"
        couleurVSelect++
    } else {
        checkCouleurV.setAttribute('src', '../images/plus-circle.png')
        tab.splice(17, 1)
        couleurVSelect--

    }
})

assertive.addEventListener('click', () => {

    if (assertiveSelect == 0) {
        checkAssertive.setAttribute('src', '../images/check.png')
        tab[18] = "Ventes assertive"
        assertiveSelect++
    } else {
        checkAssertive.setAttribute('src', '../images/plus-circle.png')
        tab.splice(18, 1)
        assertiveSelect--

    }
})

gociation.addEventListener('click', () => {

    if (gociationSelect == 0) {
        checkGociation.setAttribute('src', '../images/check.png')
        gociationSelect++
        tab[19] = "La négociation"
    } else {
        checkGociation.setAttribute('src', '../images/plus-circle.png')
        tab.splice(19, 1)
        gociationSelect--

    }
})


contenuComunication.addEventListener('click', () => {



    if (programmeContenuComunicationSelect == 0) {
        chevrons[2].classList.add('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[0].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuComunication.classList.add('open')
        comunicationContenu.classList.remove('none')

        PV.classList.remove('P4')
        PM.classList.remove('P4')
        PC.classList.remove('P4')
        PF.classList.remove('P4')



        PF.classList.remove('P3')
        PM.classList.remove('P3')
        PV.classList.remove('P3')
        PC.classList.remove('P3')

        PC.classList.remove('P5')
        PM.classList.add('P5')
        PV.classList.add('P5')
        PF.classList.add('P5')

        programmeContenuMana.classList.remove('open')
        managementContenu.classList.add('none')
        programmeContenuManaSelect = 0

        programmeContenuVente.classList.remove('open')
        venteContenu.classList.add('none')
        programmeContenuVenteSelect = 0

        programmeContenuformateur.classList.remove('open')
        formateurContenu.classList.add('none')
        programmeContenuformateurSelect = 0

        programmeContenuComunicationSelect = 1
    } else {
        chevrons[0].classList.remove('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuComunication.classList.remove('open')
        comunicationContenu.classList.add('none')

        PV.classList.remove('P5')
        PM.classList.remove('P5')
        PC.classList.remove('P5')
        PF.classList.remove('P5')



        programmeContenuComunicationSelect = 0

    }


})

relationnelle.addEventListener('click', () => {

    if (relationnelleSelect == 0) {
        checkRelationnelle.setAttribute('src', '../images/check.png')
        tab[20] = "Fléxibilité relationnel"
        relationnelleSelect++
    } else {
        checkRelationnelle.setAttribute('src', '../images/plus-circle.png')
        tab.splice(20, 1)
        relationnelleSelect--

    }
})

assertivit.addEventListener('click', () => {

    if (assertivitSelect == 0) {
        checkAssertivit.setAttribute('src', '../images/check.png')
        tab[21] = "Communiquer avec assertivité"
        assertivitSelect++
    } else {
        checkAssertivit.setAttribute('src', '../images/plus-circle.png')
        tab.splice(21, 1)
        assertivitSelect--

    }
})

situations.addEventListener('click', () => {

    if (situationsSelect == 0) {
        checkSituations.setAttribute('src', '../images/check.png')
        tab[22] = "Gestion de situations dangereuses"
        situationsSelect++
    } else {
        checkSituations.setAttribute('src', '../images/plus-circle.png')
        tab.splice(22, 1)
        situationsSelect--

    }
})

publique.addEventListener('click', () => {

    if (publiqueSelect == 0) {
        checkPublique.setAttribute('src', '../images/check.png')
        tab[23] = "Parler en publique"
        publiqueSelect++
    } else {
        checkPublique.setAttribute('src', '../images/plus-circle.png')
        tab.splice(23, 1)
        publiqueSelect--

    }
})

board.addEventListener('click', () => {

    if (boardSelect == 0) {
        checkBoard.setAttribute('src', '../images/check.png')
        tab[24] = "Gérer un board"
        boardSelect++
    } else {
        checkBoard.setAttribute('src', '../images/plus-circle.png')
        tab.splice(24, 1)
        boardSelect--

    }
})


contenuFormateur.addEventListener('click', () => {



    if (programmeContenuformateurSelect == 0) {
        chevrons[3].classList.add('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[0].classList.remove('chevronRotate')

        programmeContenuformateur.classList.add('open')
        formateurContenu.classList.remove('none')

        PV.classList.remove('P4')
        PM.classList.remove('P4')
        PC.classList.remove('P4')
        PF.classList.remove('P4')

        PV.classList.remove('P5')
        PM.classList.remove('P5')
        PC.classList.remove('P5')
        PF.classList.remove('P5')


        PF.classList.remove('P3')
        PM.classList.add('P3')
        PV.classList.add('P3')
        PC.classList.add('P3')

        programmeContenuMana.classList.remove('open')
        managementContenu.classList.add('none')
        programmeContenuManaSelect = 0

        programmeContenuVente.classList.remove('open')
        venteContenu.classList.add('none')
        programmeContenuVenteSelect = 0

        programmeContenuComunication.classList.remove('open')
        comunicationContenu.classList.add('none')
        programmeContenuComunicationSelect = 0

        programmeContenuformateurSelect = 1
    } else {
        chevrons[0].classList.remove('chevronRotate')
        chevrons[1].classList.remove('chevronRotate')
        chevrons[2].classList.remove('chevronRotate')
        chevrons[3].classList.remove('chevronRotate')

        programmeContenuformateur.classList.remove('open')
        formateurContenu.classList.add('none')

        PF.classList.remove('P3')
        PM.classList.remove('P3')
        PV.classList.remove('P3')
        PC.classList.remove('P3')




        programmeContenuformateurSelect = 0

    }


})

animateur.addEventListener('click', () => {

    if (animateurSelect == 0) {
        checkAnimateur.setAttribute('src', '../images/check.png')
        tab[25] = "Formateur animateur"
        animateurSelect++
    } else {
        checkAnimateur.setAttribute('src', '../images/plus-circle.png')
        tab.splice(25, 1)
        animateurSelect--

    }
})

coach.addEventListener('click', () => {

    if (coachSelect == 0) {
        checkCoach.setAttribute('src', '../images/check.png')
        tab[26] = "Formateur coach"
        coachSelect++
    } else {
        checkCoach.setAttribute('src', '../images/plus-circle.png')
        tab.splice(26, 1)
        coachSelect--

    }
})

assertif.addEventListener('click', () => {

    if (assertifSelect == 0) {
        checkAssertif.setAttribute('src', '../images/check.png')
        tab[27] = "Formateur assertif"
        assertifSelect++
    } else {
        checkAssertif.setAttribute('src', '../images/plus-circle.png')
        tab.splice(27, 1)
        assertifSelect--

    }
})

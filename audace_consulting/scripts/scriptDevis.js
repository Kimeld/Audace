let contenu1 = document.querySelector(".contenu1")
let contenu2 = document.querySelector(".contenu2")
let contenu3 = document.querySelector(".contenu3")
let contenu4 = document.querySelector(".contenu4")

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

bouttonSui.addEventListener('click', () => {



    if (i >= 0 && i < 2) {
        i++

        if (i == 1) {
            rep2.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

            contenu2.classList.add('contenuActive')
            contenu2.classList.remove('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')

        } else if (i == 2) {
            rep3.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.add('contenuActive')
            contenu3.classList.remove('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')



        } else if (i == 3) {
            rep4.classList.add('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

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



    if (i > 0 && i <= 2) {
        i--


        if (i == 0) {
            rep2.classList.remove('repActive')
            bouttonPre.classList.add('preInvi')

            contenu1.classList.add('contenuActive')
            contenu1.classList.remove('contenuNoActive')

            contenu2.classList.remove('contenuActive')
            contenu2.classList.add('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')

        } else if (i == 1) {
            rep3.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

            contenu2.classList.add('contenuActive')
            contenu2.classList.remove('contenuNoActive')

            contenu3.classList.remove('contenuActive')
            contenu3.classList.add('contenuNoActive')

            contenu4.classList.remove('contenuActive')
            contenu4.classList.add('contenuNoActive')

        } else if (i == 2) {
            rep4.classList.remove('repActive')
            bouttonPre.classList.remove('preInvi')

            contenu1.classList.remove('contenuActive')
            contenu1.classList.add('contenuNoActive')

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



equipe.addEventListener('click', () => {

    if (equipeSelect == 0) {
        checkEquipe.setAttribute('src', '../images/check.png')
        equipeSelect++
    } else {
        checkEquipe.setAttribute('src', '../images/plus-circle.png')
        equipeSelect--

    }



})

individuel.addEventListener('click', () => {

    if (individuelSelect == 0) {
        checkIndividuel.setAttribute('src', '../images/check.png')
        individuelSelect++
    } else {
        checkIndividuel.setAttribute('src', '../images/plus-circle.png')
        individuelSelect--

    }



})

manager.addEventListener('click', () => {

    if (managerSelect == 0) {
        checkManager.setAttribute('src', '../images/check.png')
        managerSelect++
    } else {
        checkManager.setAttribute('src', '../images/plus-circle.png')
        managerSelect--

    }



})


recruteur.addEventListener('click', () => {

    if (recruteurSelect == 0) {
        checkRecruteur.setAttribute('src', '../images/check.png')
        recruteurSelect++
    } else {
        checkRecruteur.setAttribute('src', '../images/plus-circle.png')
        recruteurSelect--

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

couleur.addEventListener('click', () => {

    if (couleurSelect == 0) {
        checkCouleur.setAttribute('src', '../images/check.png')
        couleurSelect++
    } else {
        checkCouleur.setAttribute('src', '../images/plus-circle.png')
        couleurSelect--

    }
})

situationnel.addEventListener('click', () => {

    if (situationnelSelect == 0) {
        checkSituationnel.setAttribute('src', '../images/check.png')
        situationnelSelect++
    } else {
        checkSituationnel.setAttribute('src', '../images/plus-circle.png')
        situationnelSelect--

    }
})

motivationnel.addEventListener('click', () => {

    if (motivationnelSelect == 0) {
        checkMotivationnel.setAttribute('src', '../images/check.png')
        motivationnelSelect++
    } else {
        checkMotivationnel.setAttribute('src', '../images/plus-circle.png')
        motivationnelSelect--

    }
})

projet.addEventListener('click', () => {

    if (projetSelect == 0) {
        checkPojet.setAttribute('src', '../images/check.png')
        projetSelect++
    } else {
        checkPojet.setAttribute('src', '../images/plus-circle.png')
        projetSelect--

    }
})



contenuVent.addEventListener('click', () => {



    if (programmeContenuVenteSelect == 0) {
        programmeContenuVente.classList.add('open')
        venteContenu.classList.remove('none')
        programmeContenuVenteSelect++
    } else {
        programmeContenuVente.classList.remove('open')
        venteContenu.classList.add('none')
        programmeContenuVenteSelect--

    }


})

technique.addEventListener('click', () => {

    if (techniqueSelect == 0) {
        checkTechnique.setAttribute('src', '../images/check.png')
        techniqueSelect++
    } else {
        checkTechnique.setAttribute('src', '../images/plus-circle.png')
        techniqueSelect--

    }
})

couleurV.addEventListener('click', () => {

    if (couleurVSelect == 0) {
        checkCouleurV.setAttribute('src', '../images/check.png')
        couleurVSelect++
    } else {
        checkCouleurV.setAttribute('src', '../images/plus-circle.png')
        couleurVSelect--

    }
})

assertive.addEventListener('click', () => {

    if (assertiveSelect == 0) {
        checkAssertive.setAttribute('src', '../images/check.png')
        assertiveSelect++
    } else {
        checkAssertive.setAttribute('src', '../images/plus-circle.png')
        assertiveSelect--

    }
})

gociation.addEventListener('click', () => {

    if (gociationSelect == 0) {
        checkGociation.setAttribute('src', '../images/check.png')
        gociationSelect++
    } else {
        checkGociation.setAttribute('src', '../images/plus-circle.png')
        gociationSelect--

    }
})


contenuComunication.addEventListener('click', () => {



    if (programmeContenuComunicationSelect == 0) {
        programmeContenuComunication.classList.add('open')
        comunicationContenu.classList.remove('none')
        programmeContenuComunicationSelect++
    } else {
        programmeContenuComunication.classList.remove('open')
        comunicationContenu.classList.add('none')
        programmeContenuComunicationSelect--

    }


})

relationnelle.addEventListener('click', () => {

    if (relationnelleSelect == 0) {
        checkRelationnelle.setAttribute('src', '../images/check.png')
        relationnelleSelect++
    } else {
        checkRelationnelle.setAttribute('src', '../images/plus-circle.png')
        relationnelleSelect--

    }
})

assertivit.addEventListener('click', () => {

    if (assertivitSelect == 0) {
        checkAssertivit.setAttribute('src', '../images/check.png')
        assertivitSelect++
    } else {
        checkAssertivit.setAttribute('src', '../images/plus-circle.png')
        assertivitSelect--

    }
})

situations.addEventListener('click', () => {

    if (situationsSelect == 0) {
        checkSituations.setAttribute('src', '../images/check.png')
        situationsSelect++
    } else {
        checkSituations.setAttribute('src', '../images/plus-circle.png')
        situationsSelect--

    }
})

publique.addEventListener('click', () => {

    if (publiqueSelect == 0) {
        checkPublique.setAttribute('src', '../images/check.png')
        publiqueSelect++
    } else {
        checkPublique.setAttribute('src', '../images/plus-circle.png')
        publiqueSelect--

    }
})

board.addEventListener('click', () => {

    if (boardSelect == 0) {
        checkBoard.setAttribute('src', '../images/check.png')
        boardSelect++
    } else {
        checkBoard.setAttribute('src', '../images/plus-circle.png')
        boardSelect--

    }
})


contenuFormateur.addEventListener('click', () => {



    if (programmeContenuformateurSelect == 0) {
        programmeContenuformateur.classList.add('open')
        formateurContenu.classList.remove('none')
        programmeContenuformateurSelect++
    } else {
        programmeContenuformateur.classList.remove('open')
        formateurContenu.classList.add('none')
        programmeContenuformateurSelect--

    }


})

animateur.addEventListener('click', () => {

    if (animateurSelect == 0) {
        checkAnimateur.setAttribute('src', '../images/check.png')
        animateurSelect++
    } else {
        checkAnimateur.setAttribute('src', '../images/plus-circle.png')
        animateurSelect--

    }
})

coach.addEventListener('click', () => {

    if (coachSelect == 0) {
        checkCoach.setAttribute('src', '../images/check.png')
        coachSelect++
    } else {
        checkCoach.setAttribute('src', '../images/plus-circle.png')
        coachSelect--

    }
})

assertif.addEventListener('click', () => {

    if (assertifSelect == 0) {
        checkAssertif.setAttribute('src', '../images/check.png')
        assertifSelect++
    } else {
        checkAssertif.setAttribute('src', '../images/plus-circle.png')
        assertifSelect--

    }
})

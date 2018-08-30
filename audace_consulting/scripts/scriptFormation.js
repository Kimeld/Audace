let quiSommes = document.querySelector(".quiSommes");
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
let fond = document.querySelector(".fond")
let texteFormation = document.querySelector(".texte")
let imgPop = document.querySelector(".imgPop")

let milieux = document.querySelector(".milieux")

let module = document.querySelectorAll(".module")
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
let MsousMenuBusiness = document.querySelectorAll(".MsousMenuBusiness")
let mobileTestiImg = document.querySelector(".mobileTestiImg")


let Msm1 = document.querySelector(".Msm1")
let Msm2 = document.querySelector(".Msm2")
let Msm3 = document.querySelector(".Msm3")
let Msm4 = document.querySelector(".Msm4")

let MpopContenu0 = document.querySelector(".MpopContenu0")
let MpopContenu1 = document.querySelector(".MpopContenu1")
let MpopContenu2 = document.querySelector(".MpopContenu2")
let MpopContenu3 = document.querySelector(".MpopContenu3")
let MpopContenu4 = document.querySelector(".MpopContenu4")

let MpopContenuLeft = document.querySelector(".MpopContenuLeft")
let MpopContenuRight = document.querySelector(".MpopContenuRight")

let titreMpop0 = document.querySelector(".titreMpop0")
let paraMpop01 = document.querySelector(".paraMpop01")
let paraMpop02 = document.querySelector(".paraMpop02")
let paraMpop03 = document.querySelector(".paraMpop03")

let titreMpop1 = document.querySelector(".titreMpop1")
let paraMpop11 = document.querySelector(".paraMpop11")
let paraMpop12 = document.querySelector(".paraMpop12")
let paraMpop13 = document.querySelector(".paraMpop13")

let titreMpop2 = document.querySelector(".titreMpop2")
let paraMpop21 = document.querySelector(".paraMpop21")
let paraMpop22 = document.querySelector(".paraMpop22")
let paraMpop23 = document.querySelector(".paraMpop23")

let titreMpop3 = document.querySelector(".titreMpop3")
let paraMpop31 = document.querySelector(".paraMpop31")
let paraMpop32 = document.querySelector(".paraMpop32")
let paraMpop33 = document.querySelector(".paraMpop33")

let titreMpop4 = document.querySelector(".titreMpop4")
let paraMpop41 = document.querySelector(".paraMpop41")
let paraMpop42 = document.querySelector(".paraMpop42")
let paraMpop43 = document.querySelector(".paraMpop43")

let timeForma = document.querySelector(".sablier div")
let timeForma0 = document.querySelectorAll(".sablier1 div")

let i = 0
let e = 5

let MpopupCercleImg = document.querySelectorAll(".MpopupCercleImg")
let MimgPopup = [5]

//////////////////////////////////////////////////////////
//CONTENU
/////////////////////////////////////////////////////////

let titreManag = "Optimiser votre management"
let texteManag = "L’impact du manager est primordial pour la performance et pour renforcer la cohésion d’équipe. A l’issue des formations, les managers sauront adapter leur communication aux profils comportementaux des collaborateurs, motiver leurs équipes, développer les performances de chacun. Notre objectif est de développer le leadership managérial."

let titreVente = "Stimuler vos forces de vente"
let texteVente = "La capacité d’une entreprise à réaliser un chiffre d’affaires à la hauteur de ses exigences dépend des bénéfices apportés par les produit(s) promu(s) et en grande partie à la qualité des forces de vente. Les participants seront capables d’adapter la vente et la négociation au profil du client, de gagner en efficience et en pertinence, pour accroître la satisfaction et la fidélisation du client."

let titreCom = "Optimiser<br>votre communication"
let texteCom = "Nos modules permettent aux participants d’optimiser leur communication interpersonnelle et leur flexibilité relationnelle de par une meilleure connaissance de soi, la perception des autres et l’évaluation des situations. Les participants sauront communiquer avec assertivité. Les participants disposeront également de toutes les clés essentielles de communication dans diverses situations telles que les situations délicates, la prise de parole et l’animation de débat…"

let titreForm = "Former avec aisance"
let texteForm = "Audace Consulting développe aussi pour vous une solution de formation distancielle qui présente un double avantage : Le premier avantage, les collaborateurs de votre entreprise bénéficieront de leur temps de formation dans le confort de leur environnement de travail habituel ; ils pourront adapter leur temps de formation, à leur guise, en fonction de leur planning et sans répercussions."

//POPUP

let popupTitrePosition = "Position n+1"
let popupBenef = "A l’issue de la formation chaque participant connaitra et pourra appliquer les bases du management."
let popupObjectifPosition = "Savoir adopter une posture managériale avec son équipe <br> Savoir adopter une communication efficace et productive"
let popupCompPosition = "Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants"
let popupTimePosition = "3 jours"

let popupTitreCouleurMan = "Couleurs du management"
let popupBenefCouleurMan = "Les couleurs du management permet à tout manager de reconnaître le comportement de chaque membre de son équipe afin d’adapter sa communication et ainsi optimiser la performance collective."
let popupObjectifCouleurMan = "Savoir adopter une posture managériale avec son équipe <br> Savoir adopter une communication efficace et productive"
let popupCompCouleurMan = "Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> S’approprier la communication assertive <br> Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants"
let popupTimeCouleurMan = ""

let popupTitreManagementSitu = "Management situationnel"
let popupBenefManagementSitu = "Le management situationnel permet de manager chaque membre de l’équipe en fonction de sa motivation et de son niveau d’expertise. Un management sur mesure en fonction des différentes missions"
let popupObjectifManagementSitu = "Savoir manager en fonction du niveau de développement de chaque membre de son équipe"
let popupCompManagementSitu = "Savoir reconnaitre et s’adapter au DEMA de chaque <br> collaborateur <br> Savoir diagnostiquer le niveau de développement<br> Savoir manager en fonction du niveau de développement <br> et en fonction des situations"
let popupTimeManagementSitu = ""

let popupTitreManaMoti = "Management motivationnel"
let popupBenefManaMoti = "Le management motivationnel permet au manager d’être proche de ses collaborateurs et de travailler dans un partenariat qui les motive dans leur quotidien"
let popupObjectifManaMoti = "Savoir manager dans un esprit motivationnel <br> Savoir manager avec les compétences motivationnel <br> Savoir manager avec les processus motivationnel"
let popupCompManaMoti = "Savoir manager dans le partenariat avec empathie <br> Savoir accompagner son collaborateurs dans l’évocation <br> Savoir être centré sur son collaborateur <br> Savoir utiliser les processus motivationnel pour accompagner son collaborateur dans ses plans d’action"
let popupTimeManaMoti = ""

let popupTitreManaPro = "Management de projet"
let popupBenefManaPro = "Le chef de projet saura mener un projet avec plus d’aisance, afin d’atteindre des résultats et de fédérer un certain nombre de personnes autour de l’atteinte de résultats"
let popupObjectifManaPro = "Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> Savoir mener un projet"
let popupCompManaPro = "Comprendre le Business case <br> Savoir construire son Business case <br> S’approprier les comportements qui favorisent la décision <br> Apprendre à gérer les liens avec les différents acteurs <br> Savoir clôturer le projet"
let popupTimeManaPro = ""

let popupTitreTech = "Techniques de vente"
let popupBenefTech = "Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats"
let popupObjectifTech = "Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> Savoir mener un projet"
let popupCompTech = "Comprendre ce qu’est un business case <br> Savoir construire son Business case <br> S’approprier les comportements qui favorisent la décision <br> Apprendre à gérer les liens avec les différents acteurs <br> Savoir Clôturer le projet"
let popupTimeTech = ""

let popupTitreCoulVente = "Couleurs de la vente"
let popupBenefCoulVente = "Chaque participant sera capable d’adapter les 4 comportements lors de ses face-faces pour obtenir davantage d’adhésion"
let popupObjectifCoulVente = "Être capable d’adapter sa communication face-face après avoir reconnu les préférences comportementales de ses interlocuteurs"
let popupCompCoulVente = "– Savoir adopter les codes de communication des 4 comportements dominants <br> – Savoir appliquer les 4 comportements aux différentes étapes de la vente<br> – S’entraîner à gérer les typologies opposées"
let popupTimeCoulVente = ""

let popupTitreVenteAss = "Vente assertive"
let popupBenefVenteAss = "À l’issue de la formation chaque participant pourra gérer une situation de vente face face avec authenticité pour créer un vrai partenariat avec son client"
let popupObjectifVenteAss = "Être capable de défendre son point de vue au cours d’une vente avec assurance.<br>Savoir entendre un point de vue opposé avec sérénité et avec assertivité."
let popupCompVenteAss = "Savoir utiliser le DESC, dire oui ou dire non <br> Savoir présenter l’objectif de sa visite afin de le faire accepter <br> Savoir questionner sans freins personnels pour obtenir les informations cruciales et les motivations <br> Savoir adopter une argumentation convaincante et ciblée sans crainte <br>  Gérer ses peurs pour oser conclure, s’engager et engager <br> Savoir dire oui et non. "
let popupTimeVenteAss = ""

let popupTitreNego = "Communiquer avec assertivité"
let popupBenefNego = "A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées"
let popupObjectifNego = "Être capable d’adopter une posture assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situations"
let popupCompNego = "Savoir adopter une posture Assertive <br> S’approprier la méthodologie de la communication assertive <br> Savoir gérer les situations avec assertivité"
let popupTimeNego = ""


let popupTitreFlex = "La flexibilité relationnelle"
let popupBenefFlex = "A l’issue de la formation chaque participant aura une meilleure connaissance de soi et des autres, sera capable d’adopter une communication plus flexible pour une mise en relation plus efficace"
let popupObjectifFlex = "Etre capable de décrypter les comportements de ses interlocuteurs pour adapter sa communication"
let popupCompFlex = "Savoir reconnaître les 4 comportements du modèle couleur <br> Savoir faire preuve de flexibilité comportementale face aux 4 comportements <br> Savoir adopter la communication des 4 comportements du modèle couleur"
let popupTimeFlex = ""

let popupTitreComAss = "Communiquer avec assertivité"
let popupBenefComAss = "A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées"
let popupObjectifComAss = "–Être capable d’adopter une posture assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situations"
let popupCompComAss = "Savoir adopter une posture Assertive <br> S’approprier la méthodologie de la communication assertive <br> Savoir gérer les situations avec assertivité"
let popupTimeComAss = ""

let popupTitreSituDel = "Gestion des situations délicates"
let popupBenefSituDel = "A l’issue de la formation chaque participant sera capable d’analyser sa situation et de l’aborder sous un autre angle"
let popupObjectifSituDel = "– Être capable d’appréhender les situations délicates sous d’autres angles afin d’adopter l’approche relationnelle, la stratégie de négociation et/ou la décision adéquates."
let popupCompSituDel = "Savoir reconnaître la nature de la situation <br> Savoir gérer des situations d’ordre Relationnel <br> Savoir gérer des situations qui relèvent de la Négociation <br> Savoir gérer des situations qui relèvent à la fois de la Relation et de la Négociation"
let popupTimeSituDel = ""


let popupTitreParolePub = "Prise de parole en public"
let popupBenefParolePub = "A l’issue de la formation chaque participant sera capable de réaliser des présentations impactantes  et percutantes"
let popupObjectifParolePub = "- Être capable de prendre la parole en public avec aisance et d’animer ses 	présentations avec efficacité et fluidité dans l’atteinte d’un objectif prédéfini"
let popupCompParolePub = "Savoir préparer sa prise de parole en public <br>Savoir définir le fond et trouver la forme du message<br>Savoir introduire et conclure sa prise de parole en public"
let popupTimeParolePub = ""

let popupTitreBoard = "Gérer un board"
let popupBenefBoard = "A l’issue de la formation chaque participant sera capable de gérer un board avec aisance et sérénité pour faciliter la production de livrables"
let popupObjectifBoard = "Être capable d’animer un board avec professionnalisme et de gérer les différents comportements des participants"
let popupCompBoard = "S’approprier les techniques d’animation de groupes<br> S’approprier les techniques de conduite de débats<br> Savoir adopter la posture d’animateur de débat communiquer avec un interlocuteur avec un comportement différent"
let popupTimeBoard = ""

let popupTitreFormaAnim = "Formateur animateur"
let popupBenefFormaAnim = "A l’issue de la formation, chaque formateur saura animer des sessions de formations dans un climat permettant le développement des compétences de ses participants"
let popupObjectifFormaAnim = "Apprendre à animer une session de formation <br> S’approprier les techniques de transmission des savoirs <br> S’approprier les techniques d’animation"
let popupCompFormaAnim = "Comprendre et apprendre  à gérer le comportement de l’apprenant <br> S’approprier la posture du formateur <br> Apprendre à  gérer les moments clés de la formation"
let popupTimeFormaAnim = ""

let popupTitreFormaCoach = "Formateur coach"
let popupBenefFormaCoach = "A l’issue de la formation chaque formateur pourra coacher ses apprenants dans le développement de leurs compétences"
let popupObjectifFormaCoach = "Apprendre à accompagner  et à coacher sur le terrain les stagiaires en formation dans l’objectif de les développer et de pérenniser les acquis de la formation"
let popupCompFormaCoach = "Savoir faire preuve de flexibilité comportementale <br> Savoir repérer la motivation des apprenants <br> Savoir faire un feedback aux apprenants<br> Savoir coacher les apprenants par la définition d’objectifs adéquats"
let popupTimeFormaCoach = ""

let popupTitreFormaAss = "Formateur assertif"
let popupBenefFormaAss = "A la fin de la formation chaque participant sera capable de se positionner en tant que formateur en toute légitimité face à ses apprenants.n"
let popupObjectifFormaAss = "A la fin de la formation chaque participant sera capable de former les apprenants avec une posture assertive, de coopération et de gérer les différentes situations rencontrées lors des sessions de formation"
let popupCompFormaAss = "– Savoir utiliser la méthode DESC en toute situation <br> - Savoir dire non, savoir dire oui à un apprenant <br> - Savoir faire une critique et faire face à une critique <br> - Savoir formuler une demande"
let popupTimeFormaAss = ""


//////////////////////////

scrollbars.visible = false;

sousMenu.classList.add('marginFormations');
//sousMenu.classList.add('marginQuiSommesNous');


window.setTimeout(() => {
    sousMenu.classList.add('animationSousMenu');
    sousMenu.classList.add('sousMenuMove');
}, 200)

/*
setTimeout(function () {



    sousMenu.classList.add('animationSousMenu');
    sousMenu.classList.add('sousMenuMove');


}, 200);
*/

sm1.innerHTML = 'Management'
sm2.innerHTML = 'Vente & négociation'
sm3.innerHTML = 'Communication'
sm4.innerHTML = 'Formation de formateur'
sm5.innerHTML = ''





if (key.innerHTML == 'comunication') {

    MimgPopup[0] = '../images/Flexibilte_rela.png'
    MimgPopup[1] = '../images/Communication_assertive.png'
    MimgPopup[2] = '../images/Situations_difficiles.png'
    MimgPopup[3] = '../images/Parole_public_button.png'
    MimgPopup[4] = '../images/Gérer_board.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

    module[0].classList.add('flexiRelaImg')
    module[1].classList.add('comAssertivImg')
    module[2].classList.add('gestionImg')
    module[3].classList.add('parlerImg')
    module[4].classList.add('boardImg')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'comunication.html')


    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm3.classList.remove('sm13')
    sm3.classList.add('red')

    fond.classList.add('imgCom')


     window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreCom
        texteFormation.innerHTML = texteCom
        contenuVente.classList.remove('animationContenu')

    }, 200)


    popOne.classList.remove('opacityM')
    popFive.classList.remove('opacityM')



    ref.classList.add('col-lg-offset-1')
    ref.classList.remove('col-lg-offset-2')
    allRef.classList.add('modules')
    allRef.classList.remove('modulesFormation')



    titreModule1.innerHTML = 'La flexibilité relationnelle '
    titreModule2.innerHTML = 'Communiquer<br>avec assertivité'
    titreModule3.innerHTML = 'Gestion des situations délicates'
    titreModule4.innerHTML = 'Parler<br>en public'
    titreModule5.innerHTML = 'Gérer <br> un board'



    popOne.setAttribute('title', 'La flexibilité relationnelle')
    popTwo.setAttribute('title', 'Communiquer avec assertivité')
    popThree.setAttribute('title', 'Gestion situations délicates')
    popFour.setAttribute('title', 'Parler en publique')
    popFive.setAttribute('title', 'Gérer <br> un board')

    titreModule1.classList.add('titreModuleFlex')

    titreModule4.classList.remove('titreModuleVentePublique')
    titreModule4.classList.remove('titreModuleVenteAssertive')


    close.setAttribute('href', 'comunication.html')

    imgPop.classList.remove('formateurImg')
    imgPop.classList.remove('coachImg')
    imgPop.classList.remove('formatAssertifImg')

    imgPop.classList.remove('techniqueImg')
    imgPop.classList.remove('couleurImg')
    imgPop.classList.remove('assertiveImg')
    imgPop.classList.remove('negoImg')

    imgPop.classList.remove('positionImg')
    imgPop.classList.remove('FlxibilitImg')
    imgPop.classList.remove('managementSituImg')
    imgPop.classList.remove('managementMotivImg')
    imgPop.classList.remove('managementProjetImg')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitrePosition
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenef
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifPosition
        thirdTexteH2.innerHTML = 'Compétences à développer'
        thirdTexteP.innerHTML = popupCompPosition
        imgPop.classList.add('positionImg')
        timeForma.innerHTML = popupTimePosition 

    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreCouleurMan
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefCouleurMan
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifCouleurMan
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompCouleurMan
        imgPop.classList.add('FlxibilitImg')
        timeForma.innerHTML = popupTimeCompCouleurMan

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreManagementSitu
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefManagementSitu
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifManagementSitu
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompManagementSitu
        imgPop.classList.add('managementSituImg')
        timeForma.innerHTML = popupTimeManagementSitu

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreManaMoti
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefManaMoti
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifManaMoti
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompManaMoti
        imgPop.classList.add('managementMotivImg')
        timeForma.innerHTML = popupTimeManagementMoti

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreManaPro
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefManaPro
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifManaPro
        thirdTexteH2.innerHTML = 'Compétences à développer'
        thirdTexteP.innerHTML = popupCompManaPro
        imgPop.classList.add('managementProjetImg')
        timeForma.innerHTML = popupTimeManaPro

    })

     titreMpop0.innerHTML = popupTitreFlex
    paraMpop01.innerHTML = popupBenefFlex
    paraMpop02.innerHTML = popupObjectifFlex
    paraMpop03.innerHTML = popupCompFlex

    titreMpop1.innerHTML = popupTitreComAss
    paraMpop11.innerHTML = popupBenefComAss
    paraMpop12.innerHTML = popupObjectifComAss
    paraMpop13.innerHTML = popupCompComAss

    titreMpop2.innerHTML = popupTitreSituDel
    paraMpop21.innerHTML = popupBenefSituDel
    paraMpop22.innerHTML = popupObjectifSituDel
    paraMpop23.innerHTML = popupCompComAss

    titreMpop3.innerHTML = popupTitreParolePub
    paraMpop31.innerHTML = popupBenefParolePub
    paraMpop32.innerHTML = popupObjectifParolePub
    paraMpop33.innerHTML = popupCompParolePub

    titreMpop4.innerHTML = popupTitreBoard
    paraMpop41.innerHTML = popupBenefBoard
    paraMpop42.innerHTML = popupObjectifBoard
    paraMpop43.innerHTML = popupCompBoard


} 

else if (key.innerHTML == 'mana') {

    MimgPopup[0] = '../images/Position_n+1_button.png'
    MimgPopup[1] = '../images/Couleurs_management.png'
    MimgPopup[2] = '../images/Management_situa_button.png'
    MimgPopup[3] = '../images/Management_Moti_button.png'
    MimgPopup[4] = '../images/Manag_projet.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

    module[0].classList.add('positionImg')
    module[1].classList.add('FlxibilitImg')
    module[2].classList.add('managementSituImg')
    module[3].classList.add('managementMotivImg')
    module[4].classList.add('managementProjetImg')

    sm1.classList.add('surBrilliance')


    popOne.classList.remove('opacityM')
    popFive.classList.remove('opacityM')
    popSix.classList.add('opacityM')
    popSeven.classList.add('opacityM')

    fond.classList.add('imgMana')


    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm1.classList.remove('sm11')
    sm1.classList.add('red')

    ref.classList.add('col-lg-offset-1')
    ref.classList.remove('col-lg-offset-2')
    allRef.classList.add('modules')
    allRef.classList.remove('modulesFormation')



    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreManag
        texteFormation.innerHTML = texteManag
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreModule1.innerHTML = 'Position n+1'
    titreModule2.innerHTML = 'Fléxibilité managériale'
    titreModule3.innerHTML = 'Management situationnel'
    titreModule4.innerHTML = 'Management motivationnel'
    titreModule5.innerHTML = 'Management de projet'

    titreModule4.classList.remove('titreModuleVenteAssertive')

    titreModule5.classList.remove('titreModuleNego')
    titreModule4.classList.remove('titreModuleVentePublique')
    titreModule4.classList.remove('titreModuleVenteAssertive')
    titreModule5.classList.remove('titreModuleVentePublique')


    popOne.setAttribute('title', 'Position n+1')
    popTwo.setAttribute('title', 'Fléxibilité manegériale')
    popFour.setAttribute('title', 'Management de projet')
    popFive.setAttribute('title', 'Management situationnel')

    close.setAttribute('href', 'mana.html')

    imgPop.classList.remove('formateurImg')
    imgPop.classList.remove('coachImg')
    imgPop.classList.remove('formatAssertifImg')

    imgPop.classList.remove('flexiRelaImg')
    imgPop.classList.remove('comAssertivImg')
    imgPop.classList.remove('gestionImg')
    imgPop.classList.remove('parlerImg')
    imgPop.classList.remove('boardImg')

    imgPop.classList.remove('techniqueImg')
    imgPop.classList.remove('couleurImg')
    imgPop.classList.remove('assertiveImg')
    imgPop.classList.remove('negoImg')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Position n+1'
        firstTexteH2.innerHTML = 'Position n+1'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant connaitra et pourra appliquer les bases du management. '
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'
        imgPop.classList.add('positionImg')
        timeForma.innerHTML = popupTimePosition 
    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Couleurs du management'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Les couleurs du management permet à tout manager de reconnaître le comportement de chaque membre de son équipe afind’adapter sa communication et ainsi optimiser la performance collective.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'
        imgPop.classList.add('FlxibilitImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management situationnel'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = ' Le management situationnel permet de manager chaque membre de l’équipe en fonction de sa motivation et de son niveau d’expertise. Un management sur mesure en fonction des différentes missions'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir manager en fonction du niveau de développement de chaque membre de son équipe'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir reconnaitre et s’adapter au DEMA de chaque <br> collaborateur <br> – Savoir diagnostiquer le niveau de développement<br> – Savoir manager en fonction du niveau de développement <br> et en fonction des situations'
        imgPop.classList.add('managementSituImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management motivationnel'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le management motivationnel permet au manager d’être proche de ses collaborateurs et de travailler dans un partenariat qui les motive dans leur quotidien'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir manager dans un esprit motivationnel <br> – Savoir manager avec les compétences motivationnelles <br> – Savoir manager avec les processus motivationnels'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir manager dans le partenariat avec empathie <br> – Savoir accompagner son collaborateur dans l’évocation <br> – Savoir être centré sur son collaborateur <br> – Savoir utiliser les processus motivationnels pour accompagner son collaborateur dans ses plans d’action'
        imgPop.classList.add('managementMotivImg')

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management de projet'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’atteindre des résultats et de fédérer un certain nombre de personnes autour de l’atteinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = 'Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre le Business case <br>  – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir clôturer le projet'
        imgPop.classList.add('managementProjetImg')

    })
    
     titreMpop0.innerHTML = popupTitrePosition
    paraMpop01.innerHTML = popupTitrePosition
    paraMpop02.innerHTML = popupObjectifPosition
    paraMpop03.innerHTML = popupCompPosition
    timeForma0[0].innerHTML = popupTimePosition 

    titreMpop1.innerHTML = popupTitreCouleurMan
    paraMpop11.innerHTML = popupBenefCouleurMan
    paraMpop12.innerHTML = popupObjectifCouleurMan
    paraMpop13.innerHTML = popupCompCouleurMan
    timeForma0[1].innerHTML = popupTimePosition

    titreMpop2.innerHTML = popupTitreManagementSitu
    paraMpop21.innerHTML = popupBenefManagementSitu
    paraMpop22.innerHTML = popupObjectifManagementSitu
    paraMpop23.innerHTML = popupCompManagementSitu
     timeForma0[2].innerHTML = popupTimePosition

    titreMpop3.innerHTML = popupTitreManaMoti
    paraMpop31.innerHTML = popupBenefManaMoti
    paraMpop32.innerHTML = popupObjectifManaMoti
    paraMpop33.innerHTML = popupCompManaMoti
     timeForma0[3].innerHTML = popupTimePosition

    titreMpop4.innerHTML = popupTitreManaPro
    paraMpop41.innerHTML = popupBenefManaPro
    paraMpop42.innerHTML = popupObjectifManaPro
    paraMpop43.innerHTML = popupCompManaPro
     timeForma0[4].innerHTML = popupTimePosition




} 

else if (key.innerHTML == 'vente') {

    MimgPopup[0] = '../images/Technique_vente.png'
    MimgPopup[1] = '../images/Couleurs_vente.png'
    MimgPopup[2] = '../images/Couleurs_vente.png'
    MimgPopup[3] = '../images/Vente_assertive_button.png'
    MimgPopup[4] = '../images/Nego_vente.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

    module[0].classList.add('techniqueImg')
    module[1].classList.add('couleurImg')
    module[2].classList.add('assertiveImg')
    module[3].classList.add('negoImg')


    sm2.classList.add('surBrilliance')



    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.remove('sm12')
    sm2.classList.add('red')

    popFive.classList.add('none')

    fond.classList.add('imgVente')

    modules.classList.add('modulesVentes')

      window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreVente
        texteFormation.innerHTML = texteVente
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreModule1.innerHTML = 'Techniques de vente'
    titreModule2.innerHTML = 'Couleur<br>de la ventes'
    titreModule3.innerHTML = 'Vente assertive'
    titreModule4.classList.remove('titreModuleVentePublique')
    titreModule4.classList.remove('titreModuleVenteAssertive')
    titreModule4.innerHTML = 'Négociation'
    titreModule5.classList.add('titreModuleNego')
    titreModule5.innerHTML = 'La négociation'


    popOne.setAttribute('title', 'Technique de vente')
    popTwo.setAttribute('title', 'Couleurs de <br> la ventes')
    popFour.setAttribute('title', 'Ventes assertive')
    popFive.setAttribute('title', 'La négociation')

    popOne.classList.add('moduleVenteOne')
    popTwo.classList.add('moduleVenteTwo')


    close.setAttribute('href', 'vente.html')

    imgPop.classList.remove('formateurImg')
    imgPop.classList.remove('coachImg')
    imgPop.classList.remove('formatAssertifImg')

    imgPop.classList.remove('flexiRelaImg')
    imgPop.classList.remove('comAssertivImg')
    imgPop.classList.remove('gestionImg')
    imgPop.classList.remove('parlerImg')
    imgPop.classList.remove('boardImg')

    imgPop.classList.remove('positionImg')
    imgPop.classList.remove('FlxibilitImg')
    imgPop.classList.remove('managementSituImg')
    imgPop.classList.remove('managementMotivImg')
    imgPop.classList.remove('managementProjetImg')

     popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreTech
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefTech
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifTech
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompTech
        imgPop.classList.add('techniqueImg')
        timeForma.innerHTML = popupTimeTech

    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreCoulVente
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefCoulVente
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifCoulVente
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompCoulVente
        imgPop.classList.add('couleurImg')
        timeForma.innerHTML = popupTimeCoulVente

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreVenteAss
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefVenteAss
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifVenteAss
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompVenteAss
        imgPop.classList.add('assertiveImg')
        timeForma.innerHTML = popupTimeVenteAss
    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreNego
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefNego
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifNego
         thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompNego
        imgPop.classList.add('negoImg')
        timeForma.innerHTML = popupTimeNego

    })

       titreMpop0.innerHTML = popupTitreTech
    paraMpop01.innerHTML = popupBenefTech
    paraMpop02.innerHTML = popupObjectifTech
    paraMpop03.innerHTML = popupCompTech

    titreMpop1.innerHTML = popupTitreCoulVente
    paraMpop11.innerHTML = popupBenefCoulVente
    paraMpop12.innerHTML = popupObjectifCoulVente
    paraMpop13.innerHTML = popupCompCoulVente

    titreMpop2.innerHTML = popupTitreVenteAss
    paraMpop21.innerHTML = popupBenefVenteAss
    paraMpop22.innerHTML = popupObjectifVenteAss
    paraMpop23.innerHTML = popupCompVenteAss

    titreMpop3.innerHTML = popupTitreNego
    paraMpop31.innerHTML = popupBenefNego
    paraMpop32.innerHTML = popupObjectifNego
    paraMpop33.innerHTML = popupCompNego

    titreMpop4.innerHTML = popupTitreFlex
    paraMpop41.innerHTML = popupBenefFlex
    paraMpop42.innerHTML = popupObjectifFlex
    paraMpop43.innerHTML = popupCompFlex

} 

else if (key.innerHTML == 'formateur') {

    MimgPopup[0] = '..//images/formateur_animateur.png'
    MimgPopup[1] = '../images/Formateur_coach_button.png'
    MimgPopup[2] = '../images/Formateur_assertif.png'
    MimgPopup[3] = '../images/Image%20de%20fond%20test.png'
    MimgPopup[4] = '../images/Formateur_assertif.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

    module[1].classList.add('formateurImg')
    module[2].classList.add('coachImg')
    module[3].classList.add('formatAssertifImg')


    sm4.classList.add('surBrilliance')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'formateur.html')

    titreModule4.classList.remove('titreModuleVentePublique');
    titreModule4.classList.add('titreModuleVenteAssertive');

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm2.classList.add('sm14')
    sm2.classList.remove('red')
    sm4.classList.remove('sm14')
    sm4.classList.add('red')

    popOne.classList.add('none')
    popFive.classList.add('none')
    popSix.classList.add('none')
    popSeven.classList.add('none')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreForm
         texteFormation.innerHTML = texteForm
        contenuVente.classList.remove('animationContenu')

    }, 200)


    ref.classList.add('col-lg-offset-1')
    ref.classList.remove('col-lg-offset-2')
    allRef.classList.add('modules')
    allRef.classList.remove('modulesFormation')



    titreModule2.innerHTML = 'Formateur animateur'
    titreModule3.innerHTML = 'Formateur coach '
    titreModule4.innerHTML = 'Formateur assertif'



    popOne.setAttribute('title', 'Technique de vente')
    popTwo.setAttribute('title', 'La couleur de la ventes')
    popFour.setAttribute('title', 'Ventes assertive')
    popFive.setAttribute('title', 'La négociation')

    close.setAttribute('href', 'formateur.html')

    titreModule4.classList.remove('titreModuleVenteAssertive')

    imgPop.classList.remove('flexiRelaImg')
    imgPop.classList.remove('comAssertivImg')
    imgPop.classList.remove('gestionImg')
    imgPop.classList.remove('parlerImg')
    imgPop.classList.remove('boardImg')

    imgPop.classList.remove('techniqueImg')
    imgPop.classList.remove('couleurImg')
    imgPop.classList.remove('assertiveImg')
    imgPop.classList.remove('negoImg')

    imgPop.classList.remove('positionImg')
    imgPop.classList.remove('FlxibilitImg')
    imgPop.classList.remove('managementSituImg')
    imgPop.classList.remove('managementMotivImg')
    imgPop.classList.remove('managementPrimgPop')



    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFormaAnim
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFormaAnim
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFormaAnim
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFormaAnim
        imgPop.classList.add('formateurImg')
         timeForma.innerHTML = popupTimeFormaAnim

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFormaCoach
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFormaCoach
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFormaCoach
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFormaCoach
        imgPop.classList.add('coachImg')
         timeForma.innerHTML = popupTimeFormaCoach

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFormaAss
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFormaAss
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFormaAss
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFormaAss
        imgPop.classList.add('formatAssertifImg')
         timeForma.innerHTML = popupTimeFormaAss

    })
    
     titreMpop0.innerHTML = popupTitreFormaAnim
    paraMpop01.innerHTML = popupBenefFormaAnim
    paraMpop02.innerHTML = popupObjectifFormaAnim
    paraMpop03.innerHTML = popupCompFormaAnim

    titreMpop1.innerHTML = popupTitreFormaCoach
    paraMpop11.innerHTML = popupBenefFormaCoach
    paraMpop12.innerHTML = popupObjectifFormaCoach
    paraMpop13.innerHTML = popupCompFormaCoach

    titreMpop2.innerHTML = popupTitreFormaAss
    paraMpop21.innerHTML = popupBenefFormaAss
    paraMpop22.innerHTML = popupObjectifFormaAss
    paraMpop23.innerHTML = popupCompFormaAss

    titreMpop3.innerHTML = ''
    paraMpop31.innerHTML = ''
    paraMpop32.innerHTML = ''
    paraMpop33.innerHTML = ''

    titreMpop4.innerHTML = ''
    paraMpop41.innerHTML = ''
    paraMpop42.innerHTML = ''
    paraMpop43.innerHTML = ''

}


sm1.addEventListener('click', () => {

    module[1].classList.remove('formateurImg')
    module[2].classList.remove('coachImg')
    module[3].classList.remove('formatAssertifImg')

    module[0].classList.remove('flexiRelaImg')
    module[1].classList.remove('comAssertivImg')
    module[2].classList.remove('gestionImg')
    module[3].classList.remove('parlerImg')
    module[4].classList.remove('boardImg')

    module[0].classList.remove('techniqueImg')
    module[1].classList.remove('couleurImg')
    module[2].classList.remove('assertiveImg')
    module[3].classList.remove('negoImg')

    module[0].classList.add('positionImg')
    module[1].classList.add('FlxibilitImg')
    module[2].classList.add('managementSituImg')
    module[3].classList.add('managementMotivImg')
    module[4].classList.add('managementProjetImg')

    sm1.classList.add('surBrilliance')

    modules.classList.remove('modulesVentes')

    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm1.classList.remove('sm11')
    sm1.classList.add('red')

    fond.classList.remove('imgCom')
    fond.classList.remove('imgVente')
        fond.classList.remove('imgFormateur')
    fond.classList.add('imgMana')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'mana.html')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreManag
        texteFormation.innerHTML = texteManag
        contenuVente.classList.remove('animationContenu')

    }, 200)



    popOne.classList.remove('none')
    popFive.classList.remove('none')


    titreModule1.innerHTML = 'Position n+1'
    titreModule2.innerHTML = 'Fléxibilité managériale'
    titreModule3.innerHTML = 'Management situationnel'
    titreModule4.innerHTML = 'Management motivationnel'
    titreModule5.innerHTML = 'Management de projet'

    titreModule4.classList.remove('titreModuleVenteAssertive')

    titreModule5.classList.remove('titreModuleNego')

    titreModule3.classList.remove('titreModuleCoach')

    titreModule4.classList.remove('titreModuleVenteAssertive')

    titreModule5.classList.remove('titreModuleNego')
    titreModule4.classList.remove('titreModuleVentePublique')

    titreModule1.classList.remove('titreModuleFlex')

    popOne.setAttribute('title', 'Position n+1')
    popTwo.setAttribute('title', 'Couleurs du management')
    popFour.setAttribute('title', 'Management de projet')
    popFive.setAttribute('title', 'Management situationnel')

    popOne.classList.remove('moduleVenteOne')
    popTwo.classList.remove('moduleVenteTwo')

    close.setAttribute('href', 'mana.html')

    imgPop.classList.remove('formateurImg')
    imgPop.classList.remove('coachImg')
    imgPop.classList.remove('formatAssertifImg')

    imgPop.classList.remove('flexiRelaImg')
    imgPop.classList.remove('comAssertivImg')
    imgPop.classList.remove('gestionImg')
    imgPop.classList.remove('parlerImg')
    imgPop.classList.remove('boardImg')

    imgPop.classList.remove('techniqueImg')
    imgPop.classList.remove('couleurImg')
    imgPop.classList.remove('assertiveImg')
    imgPop.classList.remove('negoImg')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitrePosition
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenef
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifPosition
        thirdTexteH2.innerHTML = 'Compétences à développer'
        thirdTexteP.innerHTML = popupCompPosition
        imgPop.classList.add('positionImg')
        timeForma.innerHTML = popupTimePosition 

    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreCouleurMan
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefCouleurMan
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifCouleurMan
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompCouleurMan
        imgPop.classList.add('FlxibilitImg')
        timeForma.innerHTML = popupTimeCompCouleurMan

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreManagementSitu
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefManagementSitu
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifManagementSitu
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompManagementSitu
        imgPop.classList.add('managementSituImg')
        timeForma.innerHTML = popupTimeManagementSitu

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreManaMoti
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefManaMoti
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifManaMoti
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompManaMoti
        imgPop.classList.add('managementMotivImg')
        timeForma.innerHTML = popupTimeManagementMoti

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreManaPro
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefManaPro
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifManaPro
        thirdTexteH2.innerHTML = 'Compétences à développer'
        thirdTexteP.innerHTML = popupCompManaPro
        imgPop.classList.add('managementProjetImg')
        timeForma.innerHTML = popupTimeManaPro

    })


})

sm2.addEventListener('click', () => {

    module[1].classList.remove('formateurImg')
    module[2].classList.remove('coachImg')
    module[3].classList.remove('formatAssertifImg')

    module[0].classList.remove('flexiRelaImg')
    module[1].classList.remove('comAssertivImg')
    module[2].classList.remove('gestionImg')
    module[3].classList.remove('parlerImg')
    module[4].classList.remove('boardImg')

    module[0].classList.remove('positionImg')
    module[1].classList.remove('FlxibilitImg')
    module[2].classList.remove('managementSituImg')
    module[3].classList.remove('managementMotivImg')
    module[4].classList.remove('managementProjetImg')

    module[0].classList.add('techniqueImg')
    module[1].classList.add('couleurImg')
    module[2].classList.add('assertiveImg')
    module[3].classList.add('negoImg')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'vente.html')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm2.classList.remove('sm12')
    sm2.classList.add('red')

    fond.classList.remove('imgCom')
    fond.classList.remove('imgMana')
        fond.classList.remove('imgFormateur')
    fond.classList.add('imgVente')

    modules.classList.add('modulesVentes')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreVente
        texteFormation.innerHTML = texteVente
        contenuVente.classList.remove('animationContenu')

    }, 200)

    popOne.classList.remove('none')
    popFive.classList.add('none')




    titreModule1.innerHTML = 'Techniques de vente'
    titreModule2.innerHTML = 'Couleurs de <br> la ventes'
    titreModule3.innerHTML = 'Vente assertive'
    titreModule4.classList.add('titreModuleVenteAssertive')
    titreModule4.innerHTML = 'Négociation'
    titreModule5.classList.add('titreModuleNego')
    titreModule5.innerHTML = 'La négociation'

    titreModule3.classList.remove('titreModuleCoach')

    popOne.setAttribute('title', 'Technique de vente')
    popTwo.setAttribute('title', 'La couleur de <br> la ventes')
    popFour.setAttribute('title', 'Ventes assertive')
    popFive.setAttribute('title', 'La négociation')

    popOne.classList.add('moduleVenteOne')
    popTwo.classList.add('moduleVenteTwo')

    close.setAttribute('href', 'vente.html')

    imgPop.classList.remove('formateurImg')
    imgPop.classList.remove('coachImg')
    imgPop.classList.remove('formatAssertifImg')

    imgPop.classList.remove('flexiRelaImg')
    imgPop.classList.remove('comAssertivImg')
    imgPop.classList.remove('gestionImg')
    imgPop.classList.remove('parlerImg')
    imgPop.classList.remove('boardImg')

    imgPop.classList.remove('positionImg')
    imgPop.classList.remove('FlxibilitImg')
    imgPop.classList.remove('managementSituImg')
    imgPop.classList.remove('managementMotivImg')
    imgPop.classList.remove('managementProjetImg')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreTech
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefTech
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifTech
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompTech
        imgPop.classList.add('techniqueImg')
        timeForma.innerHTML = popupTimeTech

    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreCoulVente
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefCoulVente
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifCoulVente
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompCoulVente
        imgPop.classList.add('couleurImg')
        timeForma.innerHTML = popupTimeCoulVente

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreVenteAss
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefVenteAss
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifVenteAss
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompVenteAss
        imgPop.classList.add('assertiveImg')
        timeForma.innerHTML = popupTimeVenteAss
    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreNego
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefNego
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifNego
         thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompNego
        imgPop.classList.add('negoImg')
        timeForma.innerHTML = popupTimeNego

    })




})

sm3.addEventListener('click', () => {

    module[1].classList.remove('formateurImg')
    module[2].classList.remove('coachImg')
    module[3].classList.remove('formatAssertifImg')

    module[0].classList.remove('techniqueImg')
    module[1].classList.remove('couleurImg')
    module[2].classList.remove('assertiveImg')
    module[3].classList.remove('negoImg')

    module[0].classList.remove('positionImg')
    module[1].classList.remove('FlxibilitImg')
    module[2].classList.remove('managementSituImg')
    module[3].classList.remove('managementMotivImg')
    module[4].classList.remove('managementProjetImg')

    module[0].classList.add('flexiRelaImg')
    module[1].classList.add('comAssertivImg')
    module[2].classList.add('gestionImg')
    module[3].classList.add('parlerImg')
    module[4].classList.add('boardImg')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'comunication.html')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm2.classList.add('sm12')
    sm2.classList.remove('red')
    sm4.classList.add('sm14')
    sm4.classList.remove('red')
    sm3.classList.remove('sm13')
    sm3.classList.add('red')

    fond.classList.remove('imgMana')
    fond.classList.remove('imgVente')
    fond.classList.remove('imgFormateur')
    fond.classList.add('imgCom')


    modules.classList.remove('modulesVentes')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreCom
        texteFormation.innerHTML = texteCom
        contenuVente.classList.remove('animationContenu')

    }, 200)


    popOne.classList.remove('opacityM')
    popFive.classList.remove('opacityM')

    popFive.classList.remove('none')
    popOne.classList.remove('none')


    titreModule1.innerHTML = 'La flexibilité relationnelle '
    titreModule2.innerHTML = 'Communiquer avec assertivité'
    titreModule3.innerHTML = 'Gestion situations délicates'
    titreModule4.innerHTML = 'Parler en public'
    titreModule5.innerHTML = 'Gérer <br> un board'

    titreModule4.classList.remove('titreModuleVentePublique')
    titreModule4.classList.remove('titreModuleVenteAssertive')
    titreModule5.classList.add('titreModuleVentePublique')


    titreModule5.classList.remove('titreModuleNego')

    titreModule3.classList.remove('titreModuleCoach')


    popOne.setAttribute('title', 'La flexibilité relationnelle')
    popTwo.setAttribute('title', 'Communiquer avec assertivité')
    popFour.setAttribute('title', 'Gestion des situations délicates')
    popFive.setAttribute('title', 'Gérer <br> un board')

    popOne.classList.remove('moduleVenteOne')
    popTwo.classList.remove('moduleVenteTwo')

    titreModule1.classList.add('titreModuleFlex')


    close.setAttribute('href', 'comunication.html')

    imgPop.classList.remove('formateurImg')
    imgPop.classList.remove('coachImg')
    imgPop.classList.remove('formatAssertifImg')

    imgPop.classList.remove('techniqueImg')
    imgPop.classList.remove('couleurImg')
    imgPop.classList.remove('assertiveImg')
    imgPop.classList.remove('negoImg')

    imgPop.classList.remove('positionImg')
    imgPop.classList.remove('FlxibilitImg')
    imgPop.classList.remove('managementSituImg')
    imgPop.classList.remove('managementMotivImg')
    imgPop.classList.remove('managementProjetImg')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFlex
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFlex
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFlex
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFlex
        imgPop.classList.add('flexiRelaImg')
        timeForma.innerHTML = popupTimeFlex


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreComAss
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefComAss
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifComAss
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompComAss
        imgPop.classList.add('comAssertivImg')
        timeForma.innerHTML = popupTimeComAss

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreSituDel
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefSituDel
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifSituDel
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompSituDel
        imgPop.classList.add('gestionImg')
        timeForma.innerHTML = popupTimeSituDel

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreParolePub
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefParolePub
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifParolePub
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompParolePub
        imgPop.classList.add('parlerImg')
        timeForma.innerHTML = popupTimeParolePub

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreBoard
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefBoard
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifBoard
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompBoard
        imgPop.classList.add('boardImg')
        timeForma.innerHTML = popupTimeBoard

    })



})


sm4.addEventListener('click', () => {

    module[0].classList.remove('flexiRelaImg')
    module[1].classList.remove('comAssertivImg')
    module[2].classList.remove('gestionImg')
    module[3].classList.remove('parlerImg')
    module[4].classList.remove('boardImg')

    module[0].classList.remove('techniqueImg')
    module[1].classList.remove('couleurImg')
    module[2].classList.remove('assertiveImg')
    module[3].classList.remove('negoImg')

    module[0].classList.remove('positionImg')
    module[1].classList.remove('FlxibilitImg')
    module[2].classList.remove('managementSituImg')
    module[3].classList.remove('managementMotivImg')
    module[4].classList.remove('managementProjetImg')

    module[1].classList.add('formateurImg')
    module[2].classList.add('coachImg')
    module[3].classList.add('formatAssertifImg')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'formateur.html')

    sm1.classList.add('sm11')
    sm1.classList.remove('red')
    sm3.classList.add('sm13')
    sm3.classList.remove('red')
    sm2.classList.add('sm14')
    sm2.classList.remove('red')
    sm4.classList.remove('sm14')
    sm4.classList.add('red')

    modules.classList.remove('modulesVentes')
    fond.classList.remove('imgCom')


    fond.classList.remove('imgMana')
    fond.classList.remove('imgVente')
    fond.classList.add('imgFormateur')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreForm
         texteFormation.innerHTML = texteForm
        contenuVente.classList.remove('animationContenu')

    }, 200)


    popOne.classList.add('none')
    popFive.classList.add('none')





    titreModule2.innerHTML = 'Formateur animateur'
    titreModule3.innerHTML = 'Formateur coach '
    titreModule4.innerHTML = 'Formateur assertif'

    titreModule3.classList.remove('titreModuleCoach')
    titreModule4.classList.remove('titreModuleVentePublique');


    titreModule5.classList.remove('titreModuleNego')
    titreModule4.classList.remove('titreModuleVenteAssertive')

    popThree.setAttribute('title', 'Formateur coach')
    popTwo.setAttribute('title', 'Formateur animateur')
    popFour.setAttribute('title', 'Formateur assertif')

    popOne.classList.remove('moduleVenteOne')
    popTwo.classList.remove('moduleVenteTwo')


    close.setAttribute('href', 'formateur.html')

    imgPop.classList.remove('flexiRelaImg')
    imgPop.classList.remove('comAssertivImg')
    imgPop.classList.remove('gestionImg')
    imgPop.classList.remove('parlerImg')
    imgPop.classList.remove('boardImg')

    imgPop.classList.remove('techniqueImg')
    imgPop.classList.remove('couleurImg')
    imgPop.classList.remove('assertiveImg')
    imgPop.classList.remove('negoImg')

    imgPop.classList.remove('positionImg')
    imgPop.classList.remove('FlxibilitImg')
    imgPop.classList.remove('managementSituImg')
    imgPop.classList.remove('managementMotivImg')
    imgPop.classList.remove('managementPrimgPop')

    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFormaAnim
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFormaAnim
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFormaAnim
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFormaAnim
        imgPop.classList.add('formateurImg')
         timeForma.innerHTML = popupTimeFormaAnim

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFormaCoach
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFormaCoach
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFormaCoach
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFormaCoach
        imgPop.classList.add('coachImg')
         timeForma.innerHTML = popupTimeFormaCoach

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = popupTitreFormaAss
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = popupBenefFormaAss
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = popupObjectifFormaAss
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = popupCompFormaAss
        imgPop.classList.add('formatAssertifImg')
         timeForma.innerHTML = popupTimeFormaAss

    })



})



forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu');
    sousMenu.classList.remove('sousMenuMove');
    sousMenu.classList.add('marginConseil');
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


    sm1.innerHTML = '<a class="deco" href="news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="inscription.php">contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.php">Devis</a>'
    sm4.innerHTML = ''


      sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.php')
    sm3.setAttribute('href', 'devis.php')
    sm4.setAttribute('href', 'formateur.html')




})


Msm1.addEventListener('click', () => {

    e = 4
    i = 0

    MimgPopup[0] = '../images/Position_n+1_button.png'
    MimgPopup[1] = '../images/Couleurs_management.png'
    MimgPopup[2] = '../images/Management_situa_button.png'
    MimgPopup[3] = '../images/Management_Moti_button.png'
    MimgPopup[4] = '../images/Manag_projet.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])


    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    fond.classList.remove('imgEquipe')
    fond.classList.add('imgMana')

    MpopContenu1.classList.remove('contenuActive')
    MpopContenu1.classList.add('contenuNoActive')
    MpopContenu2.classList.remove('contenuActive')
    MpopContenu2.classList.add('contenuNoActive')
    MpopContenu3.classList.remove('contenuActive')
    MpopContenu3.classList.add('contenuNoActive')
    MpopContenu4.classList.remove('contenuActive')
    MpopContenu4.classList.add('contenuNoActive')

    MpopContenu0.classList.remove('displayNone')
    
 


    window.setTimeout(() => {


        MpopContenu1.classList.add('displayNone')
        MpopContenu2.classList.add('displayNone')
        MpopContenu3.classList.add('displayNone')
        MpopContenu4.classList.add('displayNone')

        MpopContenu0.classList.add('contenuActive')
        MpopContenu0.classList.remove('contenuNoActive')


    }, 800)


    //sm1.classList.add('sm11')
    MsousMenu[0].classList.add('white2')
    //sm2.classList.add('sm12')
    MsousMenuBusiness[0].classList.remove('white2')
    //sm4.classList.add('sm14')
    MsousMenu[1].classList.remove('white2')
    //sm3.classList.remove('sm13')
    MsousMenuBusiness[1].classList.remove('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.add('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.remove('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.remove('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.remove('red2')

    mobileTestiImg.classList.remove('mobileFormateur')
    mobileTestiImg.classList.remove('mobileCom')
    mobileTestiImg.classList.remove('mobileVente')
    mobileTestiImg.classList.add('mobileMana')
    mobileTestiImg.classList.remove('mobileQSN')

   window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreManag
        texteFormation.innerHTML = texteManag
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = popupTitrePosition
    paraMpop01.innerHTML = popupTitrePosition
    paraMpop02.innerHTML = popupObjectifPosition
    paraMpop03.innerHTML = popupCompPosition
    timeForma0[0].innerHTML = popupTimePosition 

    titreMpop1.innerHTML = popupTitreCouleurMan
    paraMpop11.innerHTML = popupBenefCouleurMan
    paraMpop12.innerHTML = popupObjectifCouleurMan
    paraMpop13.innerHTML = popupCompCouleurMan
    timeForma0[1].innerHTML = popupTimeCouleurMan

    titreMpop2.innerHTML = popupTitreManagementSitu
    paraMpop21.innerHTML = popupBenefManagementSitu
    paraMpop22.innerHTML = popupObjectifManagementSitu
    paraMpop23.innerHTML = popupCompManagementSitu
     timeForma0[2].innerHTML = popupTimeManagementSitu

    titreMpop3.innerHTML = popupTitreManaMoti
    paraMpop31.innerHTML = popupBenefManaMoti
    paraMpop32.innerHTML = popupObjectifManaMoti
    paraMpop33.innerHTML = popupCompManaMoti
     timeForma0[3].innerHTML = popupTimeManaMoti

    titreMpop4.innerHTML = popupTitreManaPro
    paraMpop41.innerHTML = popupBenefManaPro
    paraMpop42.innerHTML = popupObjectifManaPro
    paraMpop43.innerHTML = popupCompManaPro
     timeForma0[4].innerHTML = popupTimeManaPro



})


Msm2.addEventListener('click', () => {

    e = 3
    i = 0

    MimgPopup[0] = '../images/Technique_vente.png'
    MimgPopup[1] = '../images/Couleurs_vente.png'
    MimgPopup[2] = '../images/Vente_assertive_button.png'
    MimgPopup[3] = '../images/Nego_vente.png'
    MimgPopup[4] = '../images/Nego_vente.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

    module[0].classList.add('techniqueImg')
    module[1].classList.add('couleurImg')
    module[2].classList.add('assertiveImg')
    module[3].classList.add('negoImg')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')

    MpopContenu1.classList.remove('contenuActive')
    MpopContenu1.classList.add('contenuNoActive')
    MpopContenu2.classList.remove('contenuActive')
    MpopContenu2.classList.add('contenuNoActive')
    MpopContenu3.classList.remove('contenuActive')
    MpopContenu3.classList.add('contenuNoActive')
    MpopContenu4.classList.remove('contenuActive')
    MpopContenu4.classList.add('contenuNoActive')

    MpopContenu0.classList.remove('displayNone')


    window.setTimeout(() => {


        MpopContenu1.classList.add('displayNone')
        MpopContenu2.classList.add('displayNone')
        MpopContenu3.classList.add('displayNone')
        MpopContenu4.classList.add('displayNone')

        MpopContenu0.classList.add('contenuActive')
        MpopContenu0.classList.remove('contenuNoActive')


    }, 800)



    fond.classList.remove('imgQualite')
    fond.classList.add('imgEquipe')

    //sm1.classList.add('sm11')
    MsousMenu[0].classList.remove('white2')
    //sm2.classList.add('sm12')
    MsousMenuBusiness[0].classList.add('white2')
    //sm4.classList.add('sm14')
    MsousMenu[1].classList.remove('white2')
    //sm3.classList.remove('sm13')
    MsousMenuBusiness[1].classList.remove('white2')

    //sm1.classList.add('sm11')
    bouttonMsousMenu[0].classList.remove('red2')
    //sm2.classList.add('sm12')
    bouttonMsousMenu[1].classList.add('red2')
    //sm4.classList.add('sm14')
    bouttonMsousMenu[2].classList.remove('red2')
    //sm3.classList.remove('sm13')
    bouttonMsousMenu[3].classList.remove('red2')

    mobileTestiImg.classList.remove('mobileFormateur')
    mobileTestiImg.classList.remove('mobileCom')
    mobileTestiImg.classList.add('mobileVente')
    mobileTestiImg.classList.remove('mobileMana')
    mobileTestiImg.classList.remove('mobileQSN')

     window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreVente
        texteFormation.innerHTML = texteVente
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = popupTitreTech
    paraMpop01.innerHTML = popupBenefTech
    paraMpop02.innerHTML = popupObjectifTech
    paraMpop03.innerHTML = popupCompTech
    timeForma0[0].innerHTML = popupTimeTech

    titreMpop1.innerHTML = popupTitreCoulVente
    paraMpop11.innerHTML = popupBenefCoulVente
    paraMpop12.innerHTML = popupObjectifCoulVente
    paraMpop13.innerHTML = popupCompCoulVente
    timeForma0[1].innerHTML = popupTimeCoulVente 

    titreMpop2.innerHTML = popupTitreVenteAss
    paraMpop21.innerHTML = popupBenefVenteAss
    paraMpop22.innerHTML = popupObjectifVenteAss
    paraMpop23.innerHTML = popupCompVenteAss
    timeForma0[2].innerHTML = popupTimeVenteAss
    
    titreMpop3.innerHTML = popupTitreNego
    paraMpop31.innerHTML = popupBenefNego
    paraMpop32.innerHTML = popupObjectifNego
    paraMpop33.innerHTML = popupCompNego
    timeForma0[3].innerHTML = popupTimeNego 
    
    titreMpop4.innerHTML = popupTitreFlex
    paraMpop41.innerHTML = popupBenefFlex
    paraMpop42.innerHTML = popupObjectifFlex
    paraMpop43.innerHTML = popupCompFlex
    timeForma0[4].innerHTML = popupTimeFlex 
    
})

Msm3.addEventListener('click', () => {

    e = 4
    i = 0

    MimgPopup[0] = '../images/Flexibilte_rela.png'
    MimgPopup[1] = '../images/Communication_assertive.png'
    MimgPopup[2] = '../images/Situations_difficiles.png'
    MimgPopup[3] = '../images/Parole_public_button.png'
    MimgPopup[4] = '../images/Gérer_board.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

    module[0].classList.add('flexiRelaImg')
    module[1].classList.add('comAssertivImg')
    module[2].classList.add('gestionImg')
    module[3].classList.add('parlerImg')
    module[4].classList.add('boardImg')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    MpopContenu1.classList.remove('contenuActive')
    MpopContenu1.classList.add('contenuNoActive')
    MpopContenu2.classList.remove('contenuActive')
    MpopContenu2.classList.add('contenuNoActive')
    MpopContenu3.classList.remove('contenuActive')
    MpopContenu3.classList.add('contenuNoActive')
    MpopContenu4.classList.remove('contenuActive')
    MpopContenu4.classList.add('contenuNoActive')

    MpopContenu0.classList.remove('displayNone')


    window.setTimeout(() => {


        MpopContenu1.classList.add('displayNone')
        MpopContenu2.classList.add('displayNone')
        MpopContenu3.classList.add('displayNone')
        MpopContenu4.classList.add('displayNone')

        MpopContenu0.classList.add('contenuActive')
        MpopContenu0.classList.remove('contenuNoActive')


    }, 800)




    MsousMenu[0].classList.remove('white2')

    MsousMenuBusiness[0].classList.remove('white2')

    MsousMenu[1].classList.add('white2')

    MsousMenuBusiness[1].classList.remove('white2')


    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.add('red2')

    bouttonMsousMenu[3].classList.remove('red2')

    mobileTestiImg.classList.remove('mobileFormateur')
    mobileTestiImg.classList.add('mobileCom')
    mobileTestiImg.classList.remove('mobileVente')
    mobileTestiImg.classList.remove('mobileMana')
    mobileTestiImg.classList.remove('mobileQSN')

     window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreCom
        texteFormation.innerHTML = texteCom
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = popupTitreFlex
    paraMpop01.innerHTML = popupBenefFlex
    paraMpop02.innerHTML = popupObjectifFlex
    paraMpop03.innerHTML = popupCompFlex
    timeForma0[0].innerHTML = popupTimeFlex

    titreMpop1.innerHTML = popupTitreComAss
    paraMpop11.innerHTML = popupBenefComAss
    paraMpop12.innerHTML = popupObjectifComAss
    paraMpop13.innerHTML = popupCompComAss
    timeForma0[1].innerHTML = popupTimeFlex 
    
    titreMpop2.innerHTML = popupTitreSituDel
    paraMpop21.innerHTML = popupBenefSituDel
    paraMpop22.innerHTML = popupObjectifSituDel
    paraMpop23.innerHTML = popupCompComAss
    timeForma0[2].innerHTML = popupTimeFlex 
    
    titreMpop3.innerHTML = popupTitreParolePub
    paraMpop31.innerHTML = popupBenefParolePub
    paraMpop32.innerHTML = popupObjectifParolePub
    paraMpop33.innerHTML = popupCompParolePub
    timeForma0[3].innerHTML = popupTimeFlex 
    
    titreMpop4.innerHTML = popupTitreBoard
    paraMpop41.innerHTML = popupBenefBoard
    paraMpop42.innerHTML = popupObjectifBoard
    paraMpop43.innerHTML = popupCompBoard
    timeForma0[4].innerHTML = popupTimeFlex 

})

Msm4.addEventListener('click', () => {

    e = 2
    i = 0

    MimgPopup[0] = '..//images/formateur_animateur.png'
    MimgPopup[1] = '../images/Formateur_coach_button.png'
    MimgPopup[2] = '../images/Formateur_assertif.png'
    MimgPopup[3] = '../images/Image%20de%20fond%20test.png'
    MimgPopup[4] = '../images/Formateur_assertif.png'

    MpopupCercleImg[0].setAttribute('src', MimgPopup[0])
    MpopupCercleImg[1].setAttribute('src', MimgPopup[1])
    MpopupCercleImg[2].setAttribute('src', MimgPopup[2])
    MpopupCercleImg[3].setAttribute('src', MimgPopup[3])
    MpopupCercleImg[4].setAttribute('src', MimgPopup[4])



    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')


    MpopContenu1.classList.remove('contenuActive')
    MpopContenu1.classList.add('contenuNoActive')
    MpopContenu2.classList.remove('contenuActive')
    MpopContenu2.classList.add('contenuNoActive')
    MpopContenu3.classList.remove('contenuActive')
    MpopContenu3.classList.add('contenuNoActive')
    MpopContenu4.classList.remove('contenuActive')
    MpopContenu4.classList.add('contenuNoActive')

    MpopContenu0.classList.remove('displayNone')


    window.setTimeout(() => {


        MpopContenu1.classList.add('displayNone')
        MpopContenu2.classList.add('displayNone')
        MpopContenu3.classList.add('displayNone')
        MpopContenu4.classList.add('displayNone')

        MpopContenu0.classList.add('contenuActive')
        MpopContenu0.classList.remove('contenuNoActive')


    }, 800)




    MsousMenu[0].classList.remove('white2')

    MsousMenuBusiness[0].classList.remove('white2')

    MsousMenu[1].classList.remove('white2')

    MsousMenuBusiness[1].classList.add('white2')


    bouttonMsousMenu[0].classList.remove('red2')

    bouttonMsousMenu[1].classList.remove('red2')

    bouttonMsousMenu[2].classList.remove('red2')

    bouttonMsousMenu[3].classList.add('red2')

    fond.classList.remove('imgPedagogie')
     fond.classList.remove('imgMana')
    fond.classList.remove('imgQualite')
    fond.classList.remove('imgEquipe')
    fond.classList.remove('imgEquipe2')
    fond.classList.add('imgFormateur')

    mobileTestiImg.classList.add('mobileFormateur')
    mobileTestiImg.classList.remove('mobileCom')
    mobileTestiImg.classList.remove('mobileVente')
    mobileTestiImg.classList.remove('mobileMana')
    mobileTestiImg.classList.remove('mobileQSN')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = titreForm 
        texteFormation.innerHTML = texteForm
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = popupTitreFormaAnim
    paraMpop01.innerHTML = popupBenefFormaAnim
    paraMpop02.innerHTML = popupObjectifFormaAnim
    paraMpop03.innerHTML = popupCompFormaAnim
    timeForma0[0].innerHTML = popupTimeFormaAnim

    titreMpop1.innerHTML = popupTitreFormaCoach
    paraMpop11.innerHTML = popupBenefFormaCoach
    paraMpop12.innerHTML = popupObjectifFormaCoach
    paraMpop13.innerHTML = popupCompFormaCoach
    timeForma0[1].innerHTML = popupTimeFormaCoach
    
    titreMpop2.innerHTML = popupTitreFormaAss
    paraMpop21.innerHTML = popupBenefFormaAss
    paraMpop22.innerHTML = popupObjectifFormaAss
    paraMpop23.innerHTML = popupCompFormaAss
    timeForma0[2].innerHTML = popupTimeFormaAss
    
    titreMpop3.innerHTML = ''
    paraMpop31.innerHTML = ''
    paraMpop32.innerHTML = ''
    paraMpop33.innerHTML = ''

    titreMpop4.innerHTML = ''
    paraMpop41.innerHTML = ''
    paraMpop42.innerHTML = ''
    paraMpop43.innerHTML = ''



})

MpopContenuRight.addEventListener('click', () => {



    if (i >= 0 && i < e) {
        i++

        if (i == 1) {



            MpopContenu0.classList.remove('contenuActive')
            MpopContenu0.classList.add('contenuNoActive')

            MpopContenu1.classList.remove('displayNone')

            MpopupCercleImg[1].setAttribute('src', MimgPopup[1])

            window.setTimeout(() => {


                MpopContenu0.classList.add('displayNone')

                MpopContenu1.classList.add('contenuActive')
                MpopContenu1.classList.remove('contenuNoActive')


            }, 300)



        } else if (i == 2) {


            MpopContenu1.classList.remove('contenuActive')
            MpopContenu1.classList.add('contenuNoActive')

            MpopContenu2.classList.remove('displayNone')


            MpopupCercleImg[2].setAttribute('src', MimgPopup[2])

            window.setTimeout(() => {


                MpopContenu1.classList.add('displayNone')

                MpopContenu2.classList.add('contenuActive')
                MpopContenu2.classList.remove('contenuNoActive')



            }, 300)




        } else if (i == 3) {

            MpopContenu2.classList.remove('contenuActive')
            MpopContenu2.classList.add('contenuNoActive')

            MpopContenu3.classList.remove('displayNone')

            MpopupCercleImg[3].setAttribute('src', MimgPopup[3])

            window.setTimeout(() => {

                MpopContenu2.classList.add('displayNone')

                MpopContenu3.classList.add('contenuActive')
                MpopContenu3.classList.remove('contenuNoActive')
            }, 300)


        } else if (i == 4) {

            MpopContenu3.classList.remove('contenuActive')
            MpopContenu3.classList.add('contenuNoActive')

            MpopContenu4.classList.remove('displayNone')

            MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

            window.setTimeout(() => {

                MpopContenu3.classList.add('displayNone')

                MpopContenu4.classList.add('contenuActive')
                MpopContenu4.classList.remove('contenuNoActive')
            }, 300)


        }

    }

})

MpopContenuLeft.addEventListener('click', () => {



    if (i > 0 && i <= e) {
        i--

        if (i == 0) {



            MpopContenu1.classList.remove('contenuActive')
            MpopContenu1.classList.add('contenuNoActive')

            MpopContenu0.classList.remove('displayNone')

            MpopupCercleImg[0].setAttribute('src', MimgPopup[0])

            window.setTimeout(() => {


                MpopContenu1.classList.add('displayNone')

                MpopContenu0.classList.add('contenuActive')
                MpopContenu0.classList.remove('contenuNoActive')


            }, 300)



        } else if (i == 1) {




            MpopContenu2.classList.remove('contenuActive')
            MpopContenu2.classList.add('contenuNoActive')

            MpopContenu1.classList.remove('displayNone')

            MpopupCercleImg[1].setAttribute('src', MimgPopup[1])

            window.setTimeout(() => {


                MpopContenu2.classList.add('displayNone')

                MpopContenu1.classList.add('contenuActive')
                MpopContenu1.classList.remove('contenuNoActive')


            }, 300)




        } else if (i == 2) {



            MpopContenu3.classList.remove('contenuActive')
            MpopContenu3.classList.add('contenuNoActive')

            MpopContenu2.classList.remove('displayNone')

            MpopupCercleImg[2].setAttribute('src', MimgPopup[2])

            window.setTimeout(() => {

                MpopContenu3.classList.add('displayNone')



                MpopContenu2.classList.add('contenuActive')
                MpopContenu2.classList.remove('contenuNoActive')



            }, 300)


        } else if (i == 3) {



            MpopContenu4.classList.remove('contenuActive')
            MpopContenu4.classList.add('contenuNoActive')


            MpopContenu3.classList.remove('displayNone')

            MpopupCercleImg[3].setAttribute('src', MimgPopup[3])

            window.setTimeout(() => {

                MpopContenu4.classList.add('displayNone')



                MpopContenu3.classList.add('contenuActive')
                MpopContenu3.classList.remove('contenuNoActive')
            }, 300)


        } else if (i == 4) {

            MpopContenu3.classList.remove('contenuActive')
            MpopContenu3.classList.add('contenuNoActive')

            MpopContenu4.classList.remove('displayNone')

            MpopupCercleImg[4].setAttribute('src', MimgPopup[4])

            window.setTimeout(() => {

                MpopContenu3.classList.add('displayNone')

                MpopContenu4.classList.add('contenuActive')
                MpopContenu4.classList.remove('contenuNoActive')
            }, 300)


        }

    }

})

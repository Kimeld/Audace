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

let i = 0
let e = 5

let MpopupCercleImg = document.querySelectorAll(".MpopupCercleImg")
let MimgPopup = [5]


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
        titreFormation.innerHTML = 'Optimiser<br>votre communication'
        texteFormation.innerHTML = 'Nos modules permettent d’améliorer votre communication interpersonnelle et votre flexibilité relationnelle.'
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

        titrePopUp.innerHTML = 'La flexibilité relationnelle'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant aura une meilleure connaissance de soi et des autres, sera capable d’adopter une communication plus flexible pour une mise en relation plus efficace'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Etre capable de décrypter les comportements de ses interlocuteurs pour adapter sa communication'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '- Savoir reconnaître les 4 comportements du modèle couleur <br> - Savoir faire preuve de flexibilité comportementale face aux 4 comportements <br> - Savoir adopter la communication des 4 comportements du modèle couleur'
        imgPop.classList.add('flexiRelaImg')


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Communiquer avec assertivité'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situations'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter une posture Assertive <br> - S’approprier la méthodologie de la communication assertive <br> -Savoir gérer les situations avec assertivité'
        imgPop.classList.add('comAssertivImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gestion des situations délicates'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’analyser sa situation et de l’aborder sous un autre angle'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’appréhender les situations délicates sous d’autres angles afin d’adopter l’approche relationnelle, la stratégie de négociation et/ou la décision adéquates.'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '–  Savoir reconnaître la nature de la situation <br> - Savoir gérer des situations d’ordre Relationnel <br> - Savoir gérer des situations qui relèvent de la Négociation <br> - Savoir gérer des situations qui relèvent à la fois de la Relation et de la Négociation'
        imgPop.classList.add('gestionImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Prise de parole en public'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de réaliser des présentations impactantes  et percutantes'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable de prendre la parole en public avec aisance et d’animer ses 	présentations avec efficacité et fluidité dans l’atteinte d’un objectif prédéfini'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir préparer sa prise de parole en public <br> -Savoir définir le fond et trouver la forme du message<br> -Savoir introduire et conclure sa prise de parole en public'
        imgPop.classList.add('parlerImg')

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gérer un board'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de gérer un board avec aisance et sérénité pour faciliter la production de livrables'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable d’animer un board avec professionnalisme et de gérer les différents comportements des participants'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– S’approprier les techniques d’animation de groupes<br> - S’approprier les techniques de conduite de débats<br> - Savoir adopter la posture d’animateur de débat Communiquer avec un interlocuteur avec un comportement différent'
        imgPop.classList.add('boardImg')

    })


} else if (key.innerHTML == 'mana') {

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



    texteFormation.innerHTML = 'L’impact du manager est primordial pour la performance et la cohésion d’équipe. Nous aidons les managers à devenir plus performants avec leurs collaborateurs. Pour parvenir à ce résultat nous mettons à disposition des outils simples et efficaces.'

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
        secondTexteP.innerHTML = '– Savoir manager dans un esprit motivationnel <br> – Savoir manager avec les compétences motivationnel <br> – Savoir manager avec les processus motivationnel'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir manager dans le partenariat avec empathie <br> – Savoir accompagner son collaborateurs dans l’évocation <br> – Savoir être centré sur son collaborateur <br> – Savoir utiliser les processus motivationnel pour accompagner son collaborateur dans ses plans d’action'
        imgPop.classList.add('managementMotivImg')

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management de projet'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’atteindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un Business case <br>  – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'
        imgPop.classList.add('managementProjetImg')

    })


} else if (key.innerHTML == 'vente') {

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

    texteFormation.innerHTML = 'La capacité d’une entreprise à réaliser un chiffre d’affaires à la hauteur de ses exigences dépend des bénéfices apportés par les produit(s) promu(s) et en grande partie à la qualité des forces de vente;'

    titreModule1.innerHTML = 'Techniques de vente'
    titreModule2.innerHTML = 'La couleur<br>de la ventes'
    titreModule3.innerHTML = 'Vente assertive'
    titreModule4.classList.remove('titreModuleVentePublique')
    titreModule4.classList.remove('titreModuleVenteAssertive')
    titreModule4.innerHTML = 'Négociation'
    titreModule5.classList.add('titreModuleNego')
    titreModule5.innerHTML = 'La négociation'


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

        titrePopUp.innerHTML = 'Techniques de vente'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un business case <br> – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'
        imgPop.classList.add('techniqueImg')

    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Les couleurs de la ventes'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Chaque participant sera capable d’adapter les 4 comportements lors de ses face-faces pour obtenir davantage d’adhésion'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adapter sa communication face-face après avoir reconnu les préférences comportementales de ses interlocuteurs'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter les codes de communication des 4 comportements dominants <br> – Savoir appliquer les 4 comportements aux différentes étapes de la vente (de l’objectif à l’engagement) <br> – S’entraîner à gérer les typologies opposées'
        imgPop.classList.add('couleurImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Ventes assertive'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaque participant pourra gérer une situation de vente face face avec authenticité pour créer un vrai partenariat avec son client'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable de défendre son point de vue au cours d’une vente avec assurance.<br> - Savoir entendre un point de vue opposé avec sérénité et avec assertivité.'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser le DESC, dire oui ou dire non <br> – Savoir présenter l’objectif de sa visite afin de le faire accepter <br> – Savoir questionner sans freins personnels pour obtenir les informations cruciales et les motivations <br> – Savoir adopter une argumentation convaincante et ciblée sans crainte <br>  – Gérer ses peurs pour oser conclure, s’engager et engager <br> - Savoir dire oui et non. '
        imgPop.classList.add('assertiveImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La négociation'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaqueparticipant pourra négocier sans ambiguité afin d’aboutir à une coopération Gagnant/gagnant en toute sérénité'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture de négociateur aguerri <br> – Être capable de négocier avec efficience dans une relation de coopération gagnant/gagnant'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre la différence entre vente et négociation <br>– Savoir préparer sa négociation : méthode et outils <br> – Savoir à négocier de manière raisonnée en 3 temps <br> – Savoir gérer les situations difficiles'
        imgPop.classList.add('negoImg')

    })


} else if (key.innerHTML == 'formateur') {

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
        titreFormation.innerHTML = 'Former avec aisance'
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

        titrePopUp.innerHTML = 'Formateur animateur'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation, chaque formateur saura animer des sessions de formations dans un climat permettant le développement des compétences de ses participants'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = 'Apprendre à animer une session de formation <br>S’approprier les techniques de transmission des savoirs <br>S’approprier les techniques d’animation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Comprendre et apprendre  à gérer le comportement de l’apprenant <br>S’approprier la posture du formateur <br>Apprendre à  gérer les moments clés de la formation'
        imgPop.classList.add('formateurImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur coach '
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque formateur pourra coacher ses apprenants dans le développement de leurs compétences '
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = 'Apprendre à accompagner  et à coacher sur le terrain les stagiaires en formation dans l’objectif de les développer et de pérenniser les acquis de la formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Savoir faire preuve de flexibilité comportementale <br> Savoir repérer la motivation des apprenants <br>Savoir faire un feedback aux apprenants<br>Savoir coacher les apprenants par la définition d’objectifs adéquats'
        imgPop.classList.add('coachImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur assertif'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A la fin de la formation chaque participant sera capable de se positionner en tant que formateur en toute légitimité face à ses apprenants.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = 'A la fin de la formation chaque participant sera capable de former les apprenants avec une posture assertive, de coopération et de gérer les différentes situations rencontrées lors des sessions de formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Savoir utiliser la méthode DESC en toute situation <br>Savoir dire non, savoir dire oui à un apprenant <br>Savoir faire une critique et faire face à une critique <br>Savoir formuler une demande'
        imgPop.classList.add('formatAssertifImg')

    })

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
    fond.classList.add('imgMana')

    contenuVente.classList.add('contenuMove')
    contenuVente.classList.add('animationContenu')
    close.setAttribute('href', 'mana.html')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Optimiser votre managerial'
        texteFormation.innerHTML = 'Développer votre performance managériale. L’impact du manager est primordial pour la performance et la cohésion d’équipe. Nous aidons les managers à devenir plus performants avec leurs collaborateurs. Pour parvenir à ce résultat nous mettons à disposition des outils simples et efficaces.'
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
    popTwo.setAttribute('title', 'Fléxibilité manegériale')
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

        titrePopUp.innerHTML = 'Position n+1'
        firstTexteH2.innerHTML = 'Position n+1'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant connaitra et pourra appliquer les bases du management. '
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'
        imgPop.classList.add('positionImg')

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
        secondTexteP.innerHTML = '– Savoir manager dans un esprit motivationnel <br> – Savoir manager avec les compétences motivationnel <br> – Savoir manager avec les processus motivationnel'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir manager dans le partenariat avec empathie <br> – Savoir accompagner son collaborateurs dans l’évocation <br> – Savoir être centré sur son collaborateur <br> – Savoir utiliser les processus motivationnel pour accompagner son collaborateur dans ses plans d’action'
        imgPop.classList.add('managementMotivImg')

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management de projet'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’atteindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un Business case <br>  – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'
        imgPop.classList.add('managementProjetImg')

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
    fond.classList.add('imgVente')

    modules.classList.add('modulesVentes')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Renforcer vos forces de vente'
        texteFormation.innerHTML = 'Développer votre efficacité commerciale. La capacité d’une entreprise à réaliser un chiffre d’affaires à la hauteur de ses exigences dépend des bénéfices apportés par les produit(s) promu(s) et en grande partie à la qualité des forces de vente'
        contenuVente.classList.remove('animationContenu')

    }, 200)

    popOne.classList.remove('none')
    popFive.classList.add('none')




    titreModule1.innerHTML = 'Techniques de vente'
    titreModule2.innerHTML = 'La couleur <br> de la ventes'
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

        titrePopUp.innerHTML = 'Techniques de vente'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un business case <br> – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'
        imgPop.classList.add('techniqueImg')

    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Les couleurs de la ventes'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Chaque participant sera capable d’adapter les 4 comportements lors de ses face-faces pour obtenir davantage d’adhésion'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adapter sa communication face-face après avoir reconnu les préférences comportementales de ses interlocuteurs'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter les codes de communication des 4 comportements dominants <br> – Savoir appliquer les 4 comportements aux différentes étapes de la vente (de l’objectif à l’engagement) <br> – S’entraîner à gérer les typologies opposées'
        imgPop.classList.add('couleurImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Ventes assertive'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaque participant pourra gérer une situation de vente face face avec authenticité pour créer un vrai partenariat avec son client'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable de défendre son point de vue au cours d’une vente avec assurance.<br> - Savoir entendre un point de vue opposé avec sérénité et avec assertivité.'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser le DESC, dire oui ou dire non <br> – Savoir présenter l’objectif de sa visite afin de le faire accepter <br> – Savoir questionner sans freins personnels pour obtenir les informations cruciales et les motivations <br> – Savoir adopter une argumentation convaincante et ciblée sans crainte <br>  – Gérer ses peurs pour oser conclure, s’engager et engager <br> - Savoir dire oui et non. '
        imgPop.classList.add('assertiveImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La négociation'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaqueparticipant pourra négocier sans ambiguité afin d’aboutir à une coopération Gagnant/gagnant en toute sérénité'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture de négociateur aguerri <br> – Être capable de négocier avec efficience dans une relation de coopération gagnant/gagnant'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre la différence entre vente et négociation <br>– Savoir préparer sa négociation : méthode et outils <br> – Savoir à négocier de manière raisonnée en 3 temps <br> – Savoir gérer les situations difficiles'
        imgPop.classList.add('negoImg')

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
    fond.classList.add('imgCom')


    modules.classList.remove('modulesVentes')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Optimiser<br>votre communication'
        texteFormation.innerHTML = 'Optimiser votre communication Nos modules permettent d’améliorer votre communication interpersonnelle et votre flexibilité relationnelle.'
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

        titrePopUp.innerHTML = 'La flexibilité relationnelle'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant aura une meilleure connaissance de soi et des autres, sera capable d’adopter une communication plus flexible pour une mise en relation plus efficace'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Etre capable de décrypter les comportements de ses interlocuteurs pour adapter sa communication'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '- Savoir reconnaître les 4 comportements du modèle couleur <br> - Savoir faire preuve de flexibilité comportementale face aux 4 comportements <br> - Savoir adopter la communication des 4 comportements du modèle couleur'
        imgPop.classList.add('flexiRelaImg')


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Communiquer avec assertivité'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situations'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter une posture Assertive <br> - S’approprier la méthodologie de la communication assertive <br> -Savoir gérer les situations avec assertivité'
        imgPop.classList.add('comAssertivImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gestion des situations délicates'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’analyser sa situation et de l’aborder sous un autre angle'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’appréhender les situations délicates sous d’autres angles afin d’adopter l’approche relationnelle, la stratégie de négociation et/ou la décision adéquates.'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '–  Savoir reconnaître la nature de la situation <br> - Savoir gérer des situations d’ordre Relationnel <br> - Savoir gérer des situations qui relèvent de la Négociation <br> - Savoir gérer des situations qui relèvent à la fois de la Relation et de la Négociation'
        imgPop.classList.add('gestionImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Prise de parole en public'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de réaliser des présentations impactantes  et percutantes'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable de prendre la parole en public avec aisance et d’animer ses 	présentations avec efficacité et fluidité dans l’atteinte d’un objectif prédéfini'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir préparer sa prise de parole en public <br> -Savoir définir le fond et trouver la forme du message<br> -Savoir introduire et conclure sa prise de parole en public'
        imgPop.classList.add('parlerImg')

    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gérer un board'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de gérer un board avec aisance et sérénité pour faciliter la production de livrables'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable d’animer un board avec professionnalisme et de gérer les différents comportements des participants'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– S’approprier les techniques d’animation de groupes<br> - S’approprier les techniques de conduite de débats<br> - Savoir adopter la posture d’animateur de débat Communiquer avec un interlocuteur avec un comportement différent'
        imgPop.classList.add('boardImg')

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
        titreFormation.innerHTML = 'Former avec aisance'
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

        titrePopUp.innerHTML = 'Formateur animateur'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation, chaque formateur saura animer des sessions de formations dans un climat permettant le développement des compétences de ses participants'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Apprendre à animer une session de formation <br> -S’approprier les techniques de transmission des savoirs <br> -S’approprier les techniques d’animation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre et apprendre  à gérer le comportement de l’apprenant <br> - S’approprier la posture du formateur <br> - Apprendre à  gérer les moments clés de la formation'
        imgPop.classList.add('formateurImg')

    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur coach '
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque formateur pourra coacher ses apprenants dans le développement de leurs compétences '
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Apprendre à accompagner  et à coacher sur le terrain les stagiaires en formation dans l’objectif de les développer et de pérenniser les acquis de la formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir faire preuve de flexibilité comportementale <br> Savoir repérer la motivation des apprenants <br> -Savoir faire un feedback aux apprenants<br> - Savoir coacher les apprenants par la définition d’objectifs adéquats'
        imgPop.classList.add('coachImg')

    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur assertif'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A la fin de la formation chaque participant sera capable de se positionner en tant que formateur en toute légitimité face à ses apprenants.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– A la fin de la formation chaque participant sera capable de former les apprenants avec une posture assertive, de coopération et de gérer les différentes situations rencontrées lors des sessions de formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser la méthode DESC en toute situation <br> - Savoir dire non, savoir dire oui à un apprenant <br> - Savoir faire une critique et faire face à une critique <br> - Savoir formuler une demande'
        imgPop.classList.add('formatAssertifImg')

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
    sm2.innerHTML = '<a class="deco" href="inscription.html">contact</a>'
    sm3.innerHTML = '<a class="deco" href="devis.html">Devis</a>'
    sm4.innerHTML = ''


    sm1.setAttribute('href', 'news.html')
    sm2.setAttribute('href', 'inscription.html')
    sm3.setAttribute('href', 'devis.html')
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
    fond.classList.add('imgQualite')

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
        titreFormation.innerHTML = ' Développez votre performance managériale'
        texteFormation.innerHTML = 'Développer votre performance managériale. L’impact du manager est primordial pour la performance et la cohésion d’équipe. Nous aidons les managers à devenir plus performants avec leurs collaborateurs. Pour parvenir à ce résultat nous mettons à disposition des outils simples et efficaces.'
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = 'Position n+1'
    paraMpop01.innerHTML = 'Position n+1'
    paraMpop02.innerHTML = '– Savoir adopter une posture managériale avec son équipe<br>– Savoir adopter une communication efficace et productive'
    paraMpop03.innerHTML = '– Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'

    titreMpop1.innerHTML = 'Couleurs du management'
    paraMpop11.innerHTML = 'La flexibilité managériale permet à tout manager de reconnaître le comportement de chaque membre de son équipe afind’adapter sa communication et ainsi optimiser la performance collective'
    paraMpop12.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
    paraMpop13.innerHTML = ' Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'

    titreMpop2.innerHTML = 'Management situationnel'
    paraMpop21.innerHTML = 'Le management situationnel permet de manager chaque membre de l’équipe en fonction de sa motivation et de son niveau d’expertise. Un management sur mesure en fonction des différentes missions'
    paraMpop22.innerHTML = '– Savoir manager en fonction du niveau de développement de chaque membre de son équipe'
    paraMpop23.innerHTML = '– Savoir reconnaitre et s’adapter au DEMA de chaque <br> collaborateur <br> – Savoir diagnostiquer le niveau de développement<br> – Savoir manager en fonction du niveau de développement <br> et en fonction des situations'

    titreMpop3.innerHTML = 'Management motivationnel'
    paraMpop31.innerHTML = 'Le management motivationnel permet au manager d’être proche de ses collaborateurs et de travailler dans un partenariat qui les motive dans leur quotidien'
    paraMpop32.innerHTML = '– Savoir manager dans un esprit motivationnel <br> – Savoir manager avec les compétences motivationnel <br> – Savoir manager avec les processus motivationnel'
    paraMpop33.innerHTML = '– Savoir manager dans le partenariat avec empathie <br> – Savoir accompagner son collaborateurs dans l’évocation <br> – Savoir être centré sur son collaborateur <br> – Savoir utiliser les processus motivationnel pour accompagner son collaborateur dans ses plans d’action'

    titreMpop4.innerHTML = 'Management de projet'
    paraMpop41.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’a`eindre des résultats et de fédérer un certain nombre de personnes autour de l’a`einte de résultats'
    paraMpop42.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br>– Savoir mener un projet'
    paraMpop43.innerHTML = '– Comprendre ce qu’est un business case<br>– Savoir construire son Business case<br>– S’approprier les comportements qui favorisent ladécision<br>– Apprendre à gérer les liens avec les différents acteurs<br>– Savoir Clôturer le projet'



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
        titreFormation.innerHTML = 'Améliorez votre efficacité commerciale'
        texteFormation.innerHTML = 'Développer votre efficacité commerciale. La capacité d’une entreprise à réaliser un chiffre d’affaires à la hauteur de ses exigences dépend des bénéfices apportés par les produit(s) promu(s) et en grande partie à la qualité des forces de vente'
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = 'Technique de vente'
    paraMpop01.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
    paraMpop02.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
    paraMpop03.innerHTML = '– Comprendre ce qu’est un business case <br> – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'

    titreMpop1.innerHTML = 'La couleur de la ventes'
    paraMpop11.innerHTML = 'Chaque participant sera capable d’adapter les 4 comportements lors de ses face-face pour obtenir davantage d’adhésion'
    paraMpop12.innerHTML = '– Être capable d’adapter sa communication face-face après avoir reconnu les préférences comportementales de ses interlocuteurs'
    paraMpop13.innerHTML = '– Savoir adopter les codes de communication des 4 comportements dominants <br> – Savoir appliquer les 4 comportements aux différents étapes de la vente (de l’objectif à l’engagement) <br> – S’entraîner à gérer les typologies opposées'

    titreMpop2.innerHTML = 'Ventes assertive'
    paraMpop21.innerHTML = 'À l’issue de la formation chaque participant pourra gérer une situation de vente face face avec authenticité pour créer un vrai partenariat avec son client'
    paraMpop22.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
    paraMpop23.innerHTML = '– Savoir utiliser le DESC, dire oui ou dire non <br> – Savoir présenter l’objectif de sa visite afin de le faireaccepter <br> – Savoir questionner sans freins personnels pour obtenir les informations cruciales et les motivations <br> – Savoir adopter une argumentation convaincante et ciblée sans crainte face aux pharmaciens <br> – Savoir répondre aux objections et utiliser les modes de communication pour comprendre les motivations <br> – Gérer ses peurs pour oser conclure, s’engager et engager'

    titreMpop3.innerHTML = 'La négociation'
    paraMpop31.innerHTML = 'À l’issue de la formation chaqueparticipant pourra négocier sans ambiguité afin d’aboutir à une ? Gagnant/gagnant en toute sérénité'
    paraMpop32.innerHTML = '– Être capable d’adopter une posture de négociateur aguerrit <br> – Être capable de négocier avec efficience dans une relattion de coopération gagnant/gagnant'
    paraMpop33.innerHTML = '– Comprendre la différence entre vente et négociation <br>– Savoir préparer sa négociation : méthode et outils <br> – Savoir à Négocier de manière raisonnée en 3 temps <br> – Savoir Gérer les situations difficiles'

    titreMpop4.innerHTML = 'Management de projet'
    paraMpop41.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’a`eindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
    paraMpop42.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br>– Savoir mener un projet'
    paraMpop43.innerHTML = '– Comprendre ce qu’est un business case<br>– Savoir construire son Business case<br>– S’approprier les comportements qui favorisent ladécision<br>– Apprendre à gérer les liens avec les différents acteurs<br>– Savoir Clôturer le projet'

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
        titreFormation.innerHTML = 'Optimisez votre communication'
        texteFormation.innerHTML = 'Optimiser votre communication Nos modules permettent d’améliorer votre communication interpersonnelle et votre flexibilité relationnelle.'
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = 'La flexibilité relationnelle'
    paraMpop01.innerHTML = 'A l’issue de la formation chaque participant aura une meilleure connaissance de soi et des autres, sera capable d’adopter une communication plus flexible pour une mise en relation plus efficace'
    paraMpop02.innerHTML = '– Etre capable de décrypter les comportements de ses interlocuteurs pour adapter sa communication'
    paraMpop03.innerHTML = '- Savoir reconnaître les 4 comportements du modèle couleur <br> - Savoir faire preuve de flexibilité comportementale face aux 4 comportements <br> - Savoir adopter la communication des 4 comportements du modèle couleur'

    titreMpop1.innerHTML = 'Communiquer avec assertivité'
    paraMpop11.innerHTML = 'A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées'
    paraMpop12.innerHTML = '– Être capable d’adopter une posture Assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situationse'
    paraMpop13.innerHTML = '– Savoir adopter une posture Assertive <br> - S’approprier la méthodologie de la communication assertive <br> -Savoir gérer les situations avec assertivité'

    titreMpop2.innerHTML = 'Gestion des situations délicates'
    paraMpop21.innerHTML = 'A l’issue de la formation chaque participant sera capable d’analyser sa situation et de l’aborder sous un autre angle'
    paraMpop22.innerHTML = '– Être capable d’appréhender les situations délicates sous d’autres angles afin d’adopter l’approche relationnelle, la stratégie de négociation et/ou la décision adéquates.'
    paraMpop23.innerHTML = '– Savoir reconnaître la nature de la situation <br> - Savoir gérer des situations d’ordre Relationnel <br> - Savoir gérer des situations qui relèvent de la Négociation <br> - Savoir gérer des situations qui relèvent à la fois de la Relation et de la Négociation'

    titreMpop3.innerHTML = 'Prise de parole en public'
    paraMpop31.innerHTML = 'A l’issue de la formation chaque participant sera capable de réaliser des présentations impactantes  et percutantes'
    paraMpop32.innerHTML = '- Être capable de prendre la parole en public avec aisance et d’animer ses 	présentations avec efficacité et fluidité dans l’atteinte d’un objectif prédéfini'
    paraMpop33.innerHTML = '– Savoir préparer sa prise de parole en public <br> -Savoir définir le fond et trouver la forme du message<br> -Savoir introduire et conclure sa prise de parole en public'

    titreMpop4.innerHTML = 'Gérer un board avec professionnalisme'
    paraMpop41.innerHTML = 'A l’issue de la formation chaque participant sera capable de gérer un board avec aisance et sérénité pour faciliter la production de livrables'
    paraMpop42.innerHTML = '- Être capable d’animer un board avec professionnalisme et de gérer les différents comportements des participants'
    paraMpop43.innerHTML = '– S’approprier les techniques d’animation de groupes<br> - S’approprier les techniques de conduite de débats<br> - Savoir adopter la posture d’animateur de débat Communiquer avec un interlocuteur avec un comportement différent'

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

    fond.classList.remove('imgQualite')
    fond.classList.remove('imgEquipe')
    fond.classList.remove('imgEquipe2')
    fond.classList.add('imgTestimonial')

    mobileTestiImg.classList.add('mobileFormateur')
    mobileTestiImg.classList.remove('mobileCom')
    mobileTestiImg.classList.remove('mobileVente')
    mobileTestiImg.classList.remove('mobileMana')
    mobileTestiImg.classList.remove('mobileQSN')


    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Animez, accompagnez et développez les collaborateurs'
        contenuVente.classList.remove('animationContenu')

    }, 200)

    titreMpop0.innerHTML = 'Formateur animateur'
    paraMpop01.innerHTML = 'A l’issue de la formation, chaque formateur saura animer des sessions de formations dans un climat permettant le développement des compétences de ses participants'
    paraMpop02.innerHTML = 'Apprendre à animer une session de formation <br>S’approprier les techniques de transmission des savoirs <br>S’approprier les techniques d’animation'
    paraMpop03.innerHTML = 'Comprendre et apprendre à gérer le comportement de l’apprenant <br>S’approprier la posture du formateur <br>Apprendre à gérer les moments clés de la formation'

    titreMpop1.innerHTML = 'Formateur coach'
    paraMpop11.innerHTML = 'A l’issue de la formation chaque formateur pourra coacher ses apprenants dans le développement de leurs compétences'
    paraMpop12.innerHTML = 'Apprendre à accompagner et à coacher sur le terrain les stagiaires en formation dans l’objectif de les développer et de pérenniser les acquis de la formation'
    paraMpop13.innerHTML = 'Savoir faire preuve de flexibilité comportementale <br> Savoir repérer la motivation des apprenants <br>Savoir faire un feedback aux apprenants<br>Savoir coacher les apprenants par la définition d’objectifs adéquats'

    titreMpop2.innerHTML = 'Formateur assertif'
    paraMpop21.innerHTML = 'A la fin de la formation chaque participant sera capable de se positionner en tant que formateur en toute légitimité face à ses apprenants'
    paraMpop22.innerHTML = 'A la fin de la formation chaque participant sera capable de former les apprenants avec une posture assertive, de coopération et de gérer les différentes situations rencontrées lors des sessions de formation'
    paraMpop23.innerHTML = 'Savoir utiliser la méthode DESC en toute situation <br>Savoir dire non, savoir dire oui à un apprenant <br>Savoir faire une critique et faire face à une critique <br>Savoir formuler une demande'

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

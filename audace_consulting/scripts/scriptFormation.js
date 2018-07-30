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
        titreFormation.innerHTML = 'Communication'
        texteFormation.innerHTML = 'Optimiser votre communication Nos modules permettent d’améliorer votre communication interpersonnelle et votre flexibilité relationnelle.'
        contenuVente.classList.remove('animationContenu')

    }, 200)

            
    popOne.classList.remove('opacityM')
    popFive.classList.remove('opacityM')



    ref.classList.add('col-lg-offset-1')
    ref.classList.remove('col-lg-offset-2')
    allRef.classList.add('modules')
    allRef.classList.remove('modulesFormation')



    titreModule1.innerHTML = 'La flexibilité relationnelle '
    titreModule2.innerHTML = 'Communiquer avec assertivité'
    titreModule3.innerHTML = 'Gestion situations délicates'
    titreModule4.innerHTML = 'Parler en publique'
    titreModule5.innerHTML = 'Gérer <br> un board'



    popOne.setAttribute('title', 'La flexibilité relationnelle')
    popTwo.setAttribute('title', 'Communiquer avec assertivité')
    popThree.setAttribute('title', 'Gestion situations délicates')
    popFour.setAttribute('title', 'Parler en publique')
    popFive.setAttribute('title', 'Gérer <br> un board')

    titreModule1.classList.add('titreModuleFlex')


    close.setAttribute('href', 'comunication.html')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La flexibilité relationnelle'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant aura une meilleure connaissance de soi et des autres, sera capable d’adopter une communication plus flexible pour une mise en relation plus efficace'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Etre capable de décrypter les comportements de ses interlocuteurs pour adapter sa communication'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '- Savoir reconnaître les 4 comportements du modèle couleur <br> - Savoir faire preuve de flexibilité comportementale face aux 4 comportements <br> - Savoir adopter la communication des 4 comportements du modèle couleur'


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Communiquer avec assertivité'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture Assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situations'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter une posture Assertive <br> - S’approprier la méthodologie de la communication assertive <br> -Savoir gérer les situations avec assertivité'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gestion des situations délicates'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’analyser sa situation et de l’aborder sous un autre angle'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’appréhender les situations délicates sous d’autres angles afin d’adopter l’approche relationnelle, la stratégie de négociation et/ou la décision adéquates.'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '–  Savoir reconnaître la nature de la situation <br> - Savoir gérer des situations d’ordre Relationnel <br> - Savoir gérer des situations qui relèvent de la Négociation <br> - Savoir gérer des situations qui relèvent à la fois de la Relation et de la Négociation'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Prise de parole en public'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de réaliser des présentations impactantes  et percutantes'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable de prendre la parole en public avec aisance et d’animer ses 	présentations avec efficacité et fluidité dans l’atteinte d’un objectif prédéfini'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir préparer sa prise de parole en public <br> -Savoir définir le fond et trouver la forme du message<br> -Savoir introduire et conclure sa prise de parole en public'


    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gérer un board avec professionnalisme'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de gérer un board avec aisance et sérénité pour faciliter la production de livrables'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable d’animer un board avec professionnalisme et de gérer les différents comportements des participants'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– S’approprier les techniques d’animation de groupes<br> - S’approprier les techniques de conduite de débats<br> - Savoir adopter la posture d’animateur de débat Communiquer avec un interlocuteur avec un comportement différent'


    })


} else if (key.innerHTML == 'mana') {

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

    texteFormation.innerHTML = 'Développer votre performance managériale. L’impact du manager est primordial pour la performance et la cohésion d’équipe. Nous aidons les managers à devenir plus performants avec leurs collaborateurs. Pour parvenir à ce résultat nous mettons à disposition des outils simples et efficaces.'

    titreModule1.innerHTML = 'Position n+1'
    titreModule2.innerHTML = 'Fléxibilité manegériale'
    titreModule3.innerHTML = 'Management situationnel'
    titreModule4.innerHTML = 'Management motivationnel'
    titreModule5.innerHTML = 'Management de projet'

    titreModule4.classList.remove('titreModuleVenteAssertive')

    titreModule5.classList.remove('titreModuleNego')

    popOne.setAttribute('title', 'Position n+1')
    popTwo.setAttribute('title', 'Fléxibilité manegériale')
    popFour.setAttribute('title', 'Management de projet')
    popFive.setAttribute('title', 'Management situationnel')

    close.setAttribute('href', 'mana.html')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Position n+1'
        firstTexteH2.innerHTML = 'Position n+1'
        firstTexteP.innerHTML = 'Position n+1'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Couleurs du management'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'La flexibilité managériale permet à tout manager de reconnaître le comportement de chaque membre de son équipe afind’adapter sa communication et ainsi optimiser la performance collective.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management situationnel'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = ' Le management situationnel permet de manager chaque membre de l’équipe en fonction de sa motivation et de son niveau d’expertise. Un management sur mesure en fonction des différentes missions'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir manager en fonction du niveau de développement de chaque membre de son équipe'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir reconnaitre et s’adapter au DEMA de chaque <br> collaborateur <br> – Savoir diagnostiquer le niveau de développement<br> – Savoir manager en fonction du niveau de développement <br> et en fonction des situations'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management motivationnel'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le management motivationnel permet au manager d’être proche de ses collaborateurs et de travailler dans un partenariat qui les motive dans leur quotidien'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir manager dans un esprit motivationnel <br> – Savoir manager avec les compétences motivationnel <br> – Savoir manager avec les processus motivationnel'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir manager dans le partenariat avec empathie <br> – Savoir accompagner son collaborateurs dans l’évocation <br> – Savoir être centré sur son collaborateur <br> – Savoir utiliser les processus motivationnel pour accompagner son collaborateur dans ses plans d’action'


    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management de projet'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un business case <br>  – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent ladécision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'


    })

} else if (key.innerHTML == 'vente') {

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

    texteFormation.innerHTML = 'Développer votre efficacité commerciale. La capacité d’une entreprise à réaliser un chiffre d’affaires à la hauteur de ses exigences dépend des bénéfices apportés par les produit(s) promu(s) et en grande partie à la qualité des forces de vente'

    titreModule1.innerHTML = 'Technique de vente'
    titreModule2.innerHTML = 'La couleur de <br> la ventes'
    titreModule3.innerHTML = 'Ventes assertive'
    titreModule4.classList.add('titreModuleVenteAssertive');
    titreModule4.innerHTML = 'La négociation'
    titreModule5.classList.add('titreModuleNego');
    titreModule5.innerHTML = 'La négociation'

    popOne.setAttribute('title', 'Technique de vente')
    popTwo.setAttribute('title', 'La couleur de <br> la ventes')
    popFour.setAttribute('title', 'Ventes assertive')
    popFive.setAttribute('title', 'La négociation')

    popOne.classList.add('moduleVenteOne')
    popTwo.classList.add('moduleVenteTwo')


    close.setAttribute('href', 'vente.html')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Technique de vente'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un business case <br> – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La couleur de la ventes'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Chaque participant sera capable d’adapter les 4 comportements lors de ses face-face pour obtenir davantage d’adhésion'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adapter sa communication face-face après avoir reconnu les préférences comportementales de ses interlocuteurs'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter les codes de communication des 4 comportements dominants <br> – Savoir appliquer les 4 comportements aux différents étapes de la vente (de l’objectif à l’engagement) <br> – S’entraîner à gérer les typologies opposées'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Ventes assertive'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaque participant pourra gérer une situation de vente face face avec authenticité pour créer un vrai partenariat avec son client'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser le DESC, dire oui ou dire non <br> – Savoir présenter l’objectif de sa visite afin de le faireaccepter <br> – Savoir questionner sans freins personnels pour obtenir les informations cruciales et les motivations <br> – Savoir adopter une argumentation convaincante et ciblée sans crainte face aux pharmaciens <br> – Savoir répondre aux objections et utiliser les modes de communication pour comprendre les motivations <br> – Gérer ses peurs pour oser conclure, s’engager et engager'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La négociation'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaqueparticipant pourra négocier sans ambiguité afin d’aboutir à une ? Gagnant/gagnant en toute sérénité'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture de négociateur aguerrit <br> – Être capable de négocier avec efficience dans une relattion de coopération gagnant/gagnant'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre la différence entre vente et négociation <br>– Savoir préparer sa négociation : méthode et outils <br> – Savoir à Négocier de manière raisonnée en 3 temps <br> – Savoir Gérer les situations difficiles'


    })


} else if (key.innerHTML == 'formateur') {

    sm4.classList.add('surBrilliance')

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

    popOne.classList.add('none')
    popFive.classList.add('none')
    popSix.classList.add('none')
    popSeven.classList.add('none')

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Formation de formateur'
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

    titreModule4.classList.add('titreModuleVenteAssertive');

    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur animateur'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation, chaque formateur saura animer des sessions de formations dans un climat permettant le développement des compétences de ses participants'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Apprendre à animer une session de formation <br> -S’approprier les techniques de transmission des savoirs <br> -S’approprier les techniques d’animation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre et apprendre  à gérer le comportement de l’apprenant <br> - S’approprier la posture du formateur <br> - Apprendre à  gérer les moments clés de la formation'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur coach '
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque formateur pourra coacher ses apprenants dans le développement de leurs compétences '
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Apprendre à accompagner  et à coacher sur le terrain les stagiaires en formation dans l’objectif de les développer et de pérenniser les acquis de la formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir faire preuve de flexibilité comportementale <br> Savoir repérer la motivation des apprenants <br> -Savoir faire un feedback aux apprenants<br> - Savoir coacher les apprenants par la définition d’objectifs adéquats'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur assertif'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A la fin de la formation chaque participant sera capable de se positionner en tant que formateur en toute légitimité face à ses apprenants.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– A la fin de la formation chaque participant sera capable de former les apprenants avec une posture assertive, de coopération et de gérer les différentes situations rencontrées lors des sessions de formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser la méthode DESC en toute situation <br> - Savoir dire non, savoir dire oui à un apprenant <br> - Savoir faire une critique et faire face à une critique <br> - Savoir formuler une demande'


    })

}




sm1.addEventListener('click', () => {

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
        titreFormation.innerHTML = ' Développez votre performance managériale'
        texteFormation.innerHTML = 'Développer votre performance managériale. L’impact du manager est primordial pour la performance et la cohésion d’équipe. Nous aidons les managers à devenir plus performants avec leurs collaborateurs. Pour parvenir à ce résultat nous mettons à disposition des outils simples et efficaces.'
        contenuVente.classList.remove('animationContenu')

    }, 200)



    popOne.classList.remove('none')
    popFive.classList.remove('none')


    titreModule1.innerHTML = 'Position n+1'
    titreModule2.innerHTML = 'Fléxibilité manegériale'
    titreModule3.innerHTML = 'Management situationnel'
    titreModule4.innerHTML = 'Management motivationnel'
    titreModule5.innerHTML = 'Management de projet'

    titreModule4.classList.remove('titreModuleVenteAssertive')

    titreModule5.classList.remove('titreModuleNego')

    titreModule3.classList.remove('titreModuleCoach')

    popOne.setAttribute('title', 'Position n+1')
    popTwo.setAttribute('title', 'Fléxibilité manegériale')
    popFour.setAttribute('title', 'Management de projet')
    popFive.setAttribute('title', 'Management situationnel')

    popOne.classList.remove('moduleVenteOne')
    popTwo.classList.remove('moduleVenteTwo')

    close.setAttribute('href', 'mana.html')

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Position n+1'
        firstTexteH2.innerHTML = 'Position n+1'
        firstTexteP.innerHTML = 'Position n+1'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = 'Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Couleurs du management'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'La flexibilité managériale permet à tout manager de reconnaître le comportement de chaque membre de son équipe afind’adapter sa communication et ainsi optimiser la performance collective.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir adopter une posture managériale avec son équipe <br> – Savoir adopter une communication efficace et productive'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre et s’approprier la posture managériale adéquate et les techniques de debrief <br> – S’approprier la communication assertive <br> – Savoir formuler un feedback objectif, productif et permetant la mise en énergie des participants'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management situationnel'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = ' Le management situationnel permet de manager chaque membre de l’équipe en fonction de sa motivation et de son niveau d’expertise. Un management sur mesure en fonction des différentes missions'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir manager en fonction du niveau de développement de chaque membre de son équipe'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir reconnaitre et s’adapter au DEMA de chaque <br> collaborateur <br> – Savoir diagnostiquer le niveau de développement<br> – Savoir manager en fonction du niveau de développement <br> et en fonction des situations'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management motivationnel'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le management motivationnel permet au manager d’être proche de ses collaborateurs et de travailler dans un partenariat qui les motive dans leur quotidien'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir manager dans un esprit motivationnel <br> – Savoir manager avec les compétences motivationnel <br> – Savoir manager avec les processus motivationnel'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir manager dans le partenariat avec empathie <br> – Savoir accompagner son collaborateurs dans l’évocation <br> – Savoir être centré sur son collaborateur <br> – Savoir utiliser les processus motivationnel pour accompagner son collaborateur dans ses plans d’action'


    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Management de projet'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un business case <br>  – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent ladécision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'


    })


})

sm2.addEventListener('click', () => {

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
        titreFormation.innerHTML = 'Améliorez votre efficacité commerciale'
        texteFormation.innerHTML = 'Développer votre efficacité commerciale. La capacité d’une entreprise à réaliser un chiffre d’affaires à la hauteur de ses exigences dépend des bénéfices apportés par les produit(s) promu(s) et en grande partie à la qualité des forces de vente'
        contenuVente.classList.remove('animationContenu')

    }, 200)

    popOne.classList.remove('none')
    popFive.classList.add('none')




    titreModule1.innerHTML = 'Technique de vente'
    titreModule2.innerHTML = 'La couleur de <br> la ventes'
    titreModule3.innerHTML = 'Ventes assertive'
    titreModule4.classList.add('titreModuleVenteAssertive')
    titreModule4.innerHTML = 'La négociation'
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

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Technique de vente'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Le chef de projet saura mener un projet avec plus d’aisance, afin d’ateindre des résultats et de fédérer un certain nombre de personnes autour de l’ateinte de résultats'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre ce qu’est un business case <br> – Savoir construire son Business case <br> – S’approprier les comportements qui favorisent la décision <br> – Apprendre à gérer les liens avec les différents acteurs <br> – Savoir Clôturer le projet'


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La couleur de la ventes'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'Chaque participant sera capable d’adapter les 4 comportements lors de ses face-face pour obtenir davantage d’adhésion'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adapter sa communication face-face après avoir reconnu les préférences comportementales de ses interlocuteurs'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter les codes de communication des 4 comportements dominants <br> – Savoir appliquer les 4 comportements aux différents étapes de la vente (de l’objectif à l’engagement) <br> – S’entraîner à gérer les typologies opposées'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Ventes assertive'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaque participant pourra gérer une situation de vente face face avec authenticité pour créer un vrai partenariat avec son client'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Savoir transformer une idée, problème, objectif ou demande en mode de travail <br> – Savoir mener un projet'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser le DESC, dire oui ou dire non <br> – Savoir présenter l’objectif de sa visite afin de le faireaccepter <br> – Savoir questionner sans freins personnels pour obtenir les informations cruciales et les motivations <br> – Savoir adopter une argumentation convaincante et ciblée sans crainte face aux pharmaciens <br> – Savoir répondre aux objections et utiliser les modes de communication pour comprendre les motivations <br> – Gérer ses peurs pour oser conclure, s’engager et engager'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La négociation'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'À l’issue de la formation chaqueparticipant pourra négocier sans ambiguité afin d’aboutir à une ? Gagnant/gagnant en toute sérénité'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture de négociateur aguerrit <br> – Être capable de négocier avec efficience dans une relattion de coopération gagnant/gagnant'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre la différence entre vente et négociation <br>– Savoir préparer sa négociation : méthode et outils <br> – Savoir à Négocier de manière raisonnée en 3 temps <br> – Savoir Gérer les situations difficiles'


    })



})

sm3.addEventListener('click', () => {

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
        titreFormation.innerHTML = 'Optimisez votre communication'
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
    titreModule4.innerHTML = 'Parler en publique'
    titreModule5.innerHTML = 'Gérer <br> un board'


    titreModule4.classList.add('titreModuleVenteAssertive')
    titreModule5.classList.add('titreModuleVenteAssertive')


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

    popOne.addEventListener('click', () => {

        titrePopUp.innerHTML = 'La flexibilité relationnelle'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant aura une meilleure connaissance de soi et des autres, sera capable d’adopter une communication plus flexible pour une mise en relation plus efficace'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Etre capable de décrypter les comportements de ses interlocuteurs pour adapter sa communication'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '- Savoir reconnaître les 4 comportements du modèle couleur <br> - Savoir faire preuve de flexibilité comportementale face aux 4 comportements <br> - Savoir adopter la communication des 4 comportements du modèle couleur'


    })
    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Communiquer avec assertivité'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’oser dire en toute légitimité et oser entendre avec empathie quelque soit les situations rencontrées'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’adopter une posture Assertive pour communiquer avec authenticité et développer une coopération <br> Oser entendre et oser dire en toute légitimité et en toutes situations'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir adopter une posture Assertive <br> - S’approprier la méthodologie de la communication assertive <br> -Savoir gérer les situations avec assertivité'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gestion des situations délicates'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable d’analyser sa situation et de l’aborder sous un autre angle'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Être capable d’appréhender les situations délicates sous d’autres angles afin d’adopter l’approche relationnelle, la stratégie de négociation et/ou la décision adéquates.'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '–  Savoir reconnaître la nature de la situation <br> - Savoir gérer des situations d’ordre Relationnel <br> - Savoir gérer des situations qui relèvent de la Négociation <br> - Savoir gérer des situations qui relèvent à la fois de la Relation et de la Négociation'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Prise de parole en public'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de réaliser des présentations impactantes  et percutantes'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable de prendre la parole en public avec aisance et d’animer ses 	présentations avec efficacité et fluidité dans l’atteinte d’un objectif prédéfini'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir préparer sa prise de parole en public <br> -Savoir définir le fond et trouver la forme du message<br> -Savoir introduire et conclure sa prise de parole en public'


    })
    popFive.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Gérer un board avec professionnalisme'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque participant sera capable de gérer un board avec aisance et sérénité pour faciliter la production de livrables'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '- Être capable d’animer un board avec professionnalisme et de gérer les différents comportements des participants'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– S’approprier les techniques d’animation de groupes<br> - S’approprier les techniques de conduite de débats<br> - Savoir adopter la posture d’animateur de débat Communiquer avec un interlocuteur avec un comportement différent'


    })


})


sm4.addEventListener('click', () => {

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

    window.setTimeout(() => {
        contenuVente.classList.remove('contenuMove')
        titreFormation.innerHTML = 'Animez, accompagnez et développez les collaborateurs'
        contenuVente.classList.remove('animationContenu')

    }, 200)


    popOne.classList.add('none')
    popFive.classList.add('none')





    titreModule2.innerHTML = 'Formateur animateur'
    titreModule3.innerHTML = 'Formateur coach '
    titreModule4.innerHTML = 'Formateur assertif'

    titreModule3.classList.remove('titreModuleCoach')
    titreModule4.classList.add('titreModuleVenteAssertive');

    titreModule5.classList.remove('titreModuleNego')


    popThree.setAttribute('title', 'Formateur coach')
    popTwo.setAttribute('title', 'Formateur animateur')
    popFour.setAttribute('title', 'Formateur assertif')

    popOne.classList.remove('moduleVenteOne')
    popTwo.classList.remove('moduleVenteTwo')


    close.setAttribute('href', 'formateur.html')

    popTwo.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur animateur'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation, chaque formateur saura animer des sessions de formations dans un climat permettant le développement des compétences de ses participants'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Apprendre à animer une session de formation <br> -S’approprier les techniques de transmission des savoirs <br> -S’approprier les techniques d’animation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Comprendre et apprendre  à gérer le comportement de l’apprenant <br> - S’approprier la posture du formateur <br> - Apprendre à  gérer les moments clés de la formation'


    })
    popThree.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur coach '
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A l’issue de la formation chaque formateur pourra coacher ses apprenants dans le développement de leurs compétences '
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– Apprendre à accompagner  et à coacher sur le terrain les stagiaires en formation dans l’objectif de les développer et de pérenniser les acquis de la formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir faire preuve de flexibilité comportementale <br> Savoir repérer la motivation des apprenants <br> -Savoir faire un feedback aux apprenants<br> - Savoir coacher les apprenants par la définition d’objectifs adéquats'


    })
    popFour.addEventListener('click', () => {

        titrePopUp.innerHTML = 'Formateur assertif'
        firstTexteH2.innerHTML = 'Le bénéfice'
        firstTexteP.innerHTML = 'A la fin de la formation chaque participant sera capable de se positionner en tant que formateur en toute légitimité face à ses apprenants.'
        secondTexteH2.innerHTML = 'Objectifs'
        secondTexteP.innerHTML = '– A la fin de la formation chaque participant sera capable de former les apprenants avec une posture assertive, de coopération et de gérer les différentes situations rencontrées lors des sessions de formation'
        thirdTexteH2.innerHTML = 'Compétences à développer '
        thirdTexteP.innerHTML = '– Savoir utiliser la méthode DESC en toute situation <br> - Savoir dire non, savoir dire oui à un apprenant <br> - Savoir faire une critique et faire face à une critique <br> - Savoir formuler une demande'


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

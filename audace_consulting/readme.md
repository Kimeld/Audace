/////////////////////
# Audace consulting #
////////////////////
 
 
> HTML 
> CSS
> Javascript ()
> PHP
> éditeur de code source : Brackets


/////////////////////
# Instructions#
////////////////////


######
# Changer le texte//
######

> Les textes sont modifiable de deux manière différentes :

- À l'aide du HTML

- À l'aide du script

> Seul les textes d'ouverture suivant sont modifiables avec le HTML :

Qui sommes-nous, Conseil, Formations, Solutions et coaching

> Comment modifier le texte en HTML :

- Vous devez ouvrir le fichier HTML qui correspond au texte (quiSommesNous.html/conseil.html/formations.html/solution.html)

- Une fois ouvert, taper dans la recherche de caractère la "classe" titreFormation ou texte pour trouver le titre ou le texte

- Ensuite vous pouvez effectuer les modification à l'interieur des balise, h1 pour modifier le titre et p pour modifier le texte

- Sauvegarder

> Comment modifier le texte en Javascript :

- Vous devez ouvrir le fichier Script qui correspond au texte (scriptQuiSommesNous.html/scriptConseil.html/Scriptformations.html/scriptSolution.html)

- Lorsque le fichier est ouvert, taper dans la recherche de caractère "//CONTENU"

- Une fois trouver vous pouvez devrez pouvoir lire en dessous l'ensemble des valeur corresspondant à des titres et des textes (par exemple : let titreValeurs = "La performance et l'humain")

- Après avoir trouver la valeur corespondante rempliser le nouveau texte à l'interieur des guillemet 

-Sauvegarder

######
# Changer les images//
######

> Les Image sont modifiable de deux manière différentes :

- À l'aide du CSS

- À l'aide en remplaçant les images par d'autre ayant le MEME nom

> Comment modifier le texte en CSS :

- Pour modifier les images vous allez devoir ouvrir le fichier css correspond :
>
quiSommesNous.html & solution.html & formation.html --> formation.css
conseil.html --> styleConseil.css
mana.html & vente.html & comunication.html & formateur.html --> styleFormations

- Lorsque le fichier est ouvert, taper dans la recherche de caractère ".img" pour les images pour le responsive PC ou ".mobile" pour les image responsive mobile

- Une fois trouver vous pouvez devrez pouvoir lire en dessous l'ensemble des classe corresspondant aux images 
par exemple :

.imgEquipe2 {
    width: 595px;
    height: 300px;
    top: 150px;
    right: 50px;
    background-image: url(../images/equipe.png);
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.5s;
}

- Pour modifier l'image veuilliez inscrire l'url (chemin de l'image) dans les parenthèse de "background-image"

- Sauvegarder


/////////////////////
# Beug restant #
////////////////////


> À partir de 387px de largeur les deux bloc de texte du footer ne sont plus aligné (voir: headeretfooter.css--> ligne 890 )



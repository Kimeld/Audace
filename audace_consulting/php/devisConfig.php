<?php

$param1 = json_encode($_GET);
$param2 = json_encode($_POST);






//echo  $param2;


//echo json_encode($_GET['Nom']);


if(!empty($_GET) && !empty($_POST))
{
   $prepare = $pdo->prepare('INSERT INTO devis (Entreprise, Nom, Prenom, Fonction, Tel, Email, Ville, Pays, Object, Formation_et_Nombre_de_personne) VALUES (:Entreprise, :Nom, :Prenom, :Fonction, :Tel, :Email, :Ville, :Pays, :Object, :Formation_et_Nombre_de_personne)');


$prepare->bindValue(':Entreprise', $_GET['Entreprise']);
$prepare->bindValue(':Nom', $_GET['Nom']);
$prepare->bindValue(':Prenom', $_GET['Prenom']);
$prepare->bindValue(':Fonction', $_GET['Fonction']);
$prepare->bindValue(':Tel', $_GET['Tel']);
$prepare->bindValue(':Email', $_GET['Email']);
$prepare->bindValue(':Ville', $_GET['Ville']);
$prepare->bindValue(':Pays', $_GET['Pays']);
$prepare->bindValue(':Object', $_GET['Object']);
$prepare->bindValue(':Formation_et_Nombre_de_personne', $param2);

   




$execute = $prepare->execute();
    
}

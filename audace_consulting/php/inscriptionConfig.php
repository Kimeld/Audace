<?php








//echo  $param2;





if(!empty($_GET))
{
   $prepare = $pdo->prepare('INSERT INTO contact (Entreprise, Nom, Prenom, Fonction, Tel, Email, Ville, Pays, Object, Letter) VALUES (:Entreprise, :Nom, :Prenom, :Fonction, :Tel, :Email, :Ville, :Pays, :Object, :Letter)');


$prepare->bindValue(':Entreprise', $_GET['Entreprise']);
$prepare->bindValue(':Nom', $_GET['Nom']);
$prepare->bindValue(':Prenom', $_GET['Prenom']);
$prepare->bindValue(':Fonction', $_GET['Fonction']);
$prepare->bindValue(':Tel', $_GET['Tel']);
$prepare->bindValue(':Email', $_GET['Email']);
$prepare->bindValue(':Ville', $_GET['Ville']);
$prepare->bindValue(':Pays', $_GET['Pays']);
$prepare->bindValue(':Object', $_GET['Object']);
$prepare->bindValue(':Letter', $_GET['Letter']);

   




$execute = $prepare->execute();
    
}

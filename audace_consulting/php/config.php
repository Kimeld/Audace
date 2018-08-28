<?php
// Connexion variables cpses_apjs2wbnha@localhost
/*
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', 'apart521_AD');
define('DB_USER', 'cpses_apy9rotk08');
define('DB_PASS', 'audace98douk');
*/

define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', 'audace_consulting');
define('DB_USER', 'root');
define('DB_PASS', 'root');

/*
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', 'apart521_ac');
define('DB_USER', 'apart521_ac');
define('DB_PASS', 'ac0ser&reussir');
*/
try
{
    // Try to connect to database
    $pdo = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';port='.DB_PORT, DB_USER, DB_PASS);

    // Set fetch mode to object
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
}
catch (Exception $e)
{
    // Failed to connect
    die('Could not connect');
}

// Delete next line if working
//die('All good ;)');
/*
echo '<pre>';
echo  json_encode($_GET["param1"]);
echo '</pre>';
echo '<pre>';
echo  json_encode($_GET["param2"]);
echo '</pre>';
echo '<pre>';
echo  json_encode($GET['Nom']);
echo '</pre>';
*/

/*
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
*/  
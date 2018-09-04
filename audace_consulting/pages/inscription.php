<?php
 
    include '../php/config.php';
    include '../php/inscriptionConfig.php';


?>

<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Inscriptions | Audace Consulting</title>
    <link rel="stylesheet" href="../styles/reset.css" />

    <link rel="stylesheet" href="../styles/bootstrap.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
    <link rel="stylesheet" href="../styles/styleInscription.css" />
    <link rel="stylesheet" href="../styles/headeretfooter.css" />
    <link rel="stylesheet" href="../styles/popup.css" />

    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="../images/favicon.png" type="image/png">
    <link rel="icon" sizes="32x32" href="../images/favicon-32.png" type="image/png">
    <link rel="icon" sizes="64x64" href="../images/favicon-64.png" type="image/png">
    <link rel="icon" sizes="96x96" href="../images/favicon-96.png" type="image/png">

</head>

<body>


    <div class="pos-f-t burger">
        <div class="collapse burgerDiv " id="navbarToggleExternalContent">
            <div class="p-4 burgerDiv navBackColor2 ">
                <a href="quiSommesNous.html" class="menuA ">Qui sommes nous ?</a>



                <a href="conseil.html" class="menuA">Conseil</a>

                <a href="formation.html" class="menuA">Formations</a>

                <a href="solution.html" class="menuA">Solution et coaching</a>

                <h5 class="menuA">Forum</h5>
                <a href="news.html" class="MsousMenuF">À la une</a>
                <a href="inscription.html" class="MsousMenuF">Contact</a>
                <a href="devis.html" class="MsousMenuF">Devis</a>


            </div>
        </div>
        <nav class="navbar navBack navbar-dark navBackColor3">
            <button class="navbar-toggler buttonPos navBackColor1" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="imgBurger"><img src="../images/LogoAudaceAC-OR.png" alt="">
                <h4>Menu</h4>
            </div>

        </nav>
    </div>

    <header class="container-fluid menuContainer">
        <div class="menu col-lg-12 ">
            <div class="imgLogo "><a href="../index.html"><img src="../images/LogoAudaceAC-OR.png" alt=""></a></div>
            <div class="category  col-sm-1 col-sm-offset-1 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1 col-xl-2 col-xl-offset-1"><a href="quiSommesNous.html" class="quiSommes">Qui sommes-nous ?</a></div>
            <div class="category col-sm-1 col-sm-offset-1 col-md-1 col-md-offset-1 col-lg-1 col-lg-offset-1  col-xl-1 col-xl-offset-1"><a href="conseil.html" class="conseil">Conseil</a></div>
            <div class="category col-sm-1 col-sm-offset-1 col-md-1 col-md-offset-1 col-lg-1  col-lg-offset-1  col-xl-1 col-xl-offset-1"><a href="formation.html" class="formations">Formations </a></div>
            <div class="category col-sm-1 col-sm-offset-1 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1 col-xl-2 col-xl-offset-1"><a href="solution.html" class="solutions">Solutions et Coaching</a></div>
            <div class="category col-sm-1 col-sm-offset-1 col-md-1 col-md-offset-1 col-lg-1 col-lg-offset-1 col-xl-1 col-xl-offset-1"><a href="#" class="forum">Forum</a></div>

        </div>

    </header>
    <container class="container-fluid underMenuDiv ">
        <div class="underMenu col-lg-12 col-lg-offset-0"></div>
    </container>
    <div class="container-fluid secondMenu">
        <div class="sousMenu  col-lg-12">
            <div class=" firstOf4 col-sm-1 col-md-2  col-lg-2 col-lg-offset-3"><span href="#" class="sm1 sm11"></span></div>
            <div class="col-sm-4  col-md-2 col-lg-2 col-lg-offset-1 "><span href="#" class="sm2 sm12"></span></div>
            <div class="col-sm-4 col-md-2  col-lg-2 col-lg-offset-0 smC "><span href="#" class="sm3 sm13"></span></div>
            <div class="col-sm-4  col-md-2  col-lg-2 col-lg-offset-0 "><span href="#" class="sm4 sm14"></span></div>
            <div class="col-sm-4  col-md-2  col-lg-2 col-lg-offset-0 "><span href="#" class="sm5 sm15"></span></div>
        </div>

    </div>

    <div class="container-fluid contenu">
        <div class="col-12 col-lg-8 offset-lg-2">
            <div class="description col-lg-10 col-lg-offset-1">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo ad explicabo minima enim, consequuntur quidem provident ab, maiores, modi inventore. Aliquam maxime dignissimos deleniti ad modi, repellendus debitis doloribus?</p>
            </div>
            <div class="form col-12 col-md-8 offset-md-2">

                <div class="pastille col-sm-3 col-sm-offset-0"><img src="../images/LogoAudaceAC-OR.png" alt=""></div>
                <form action="#" method="get" class="col-sm-10 offset-sm-1">
                    <div class="row align-items-start">
                        <div class="col-sm-6 offset-sm-0 col-10 offset-1 ">
                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Entreprise</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Entreprise">

                            </div>

                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Nom</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Nom" height="100">

                            </div>

                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Prénom</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Prenom">

                            </div>
                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Fonction</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Fonction">

                            </div>
                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Tel.</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Tel">

                            </div>

                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="formWhite" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email">

                            </div>

                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Ville</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Ville">

                            </div>

                            <div class="form-group champs">
                                <label for="exampleInputEmail1">Pays</label>
                                <input type="text" class="formWhite" id="exampleInputEmail1" name="Pays">

                            </div>


                        </div>
                        <div class="col-sm-4 offset-sm-0 col-10 offset-1  second">

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Object (facultatif)</label>
                                <textarea class="formWhiteObject" id="exampleFormControlTextarea1" rows="10" name="Object"></textarea>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" name="Letter">
                                <label class="form-check-label" for="exampleCheck1">je souhaite reçevoir la newsletter</label>
                            </div>
                            <div class="souscrire">
                                <img class="souscrireImg" src="../images/Bouton%20gris%20Valider.png" alt="">
                            </div>
                            <button type="submit" class="btn btn-light submit"> souscrire</button>
                            <button type="submit" class="btn btn-light submit0 none"> souscrire</button>
                            <div class="network">
                                <a href="https://www.facebook.com/audaceconsulting/?hc_ref=ARSvORTghtA3nkvlstqvfWbaAsXkeQbCSBmkZmNTZ9nlYZQsUQ9roXzqPq75S8y1_oM&fref=nf" class="face"><img src="../images/facebook.svg" alt=""></a>
                                <a href="https://www.linkedin.com/company/audace-consulting/" class="linke"><img src="../images/linkedin.svg" alt=""></a>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <footer class="container-fluid footer">

        <div class="arbo col-6 col-sm-3 offset-0 col-md-3 offset-md-2 col-lg-3 offset-md-3">
            <div><a href="#">Home</a></div>
            <div><a href="#">Qui sommes nous ?</a></div>
            <div><a href="#">Conseil</a></div>
            <div><a href="#">Formations</a></div>
            <div><a href="#">Solutions et coaching</a></div>
            <div><a href="#">forum</a></div>
        </div>
        <div class="contact col-3 offset-0 offset-sm-4 offset-md-1   ">
            <div><a href="inscription.html">Contact</a></div>
            <div><a href="inscription.html">NewsLetter</a></div>
            <div><a href="devis.html">Devis</a></div>

            <div class="network">
                <a href="https://www.facebook.com/audaceconsulting/?hc_ref=ARSvORTghtA3nkvlstqvfWbaAsXkeQbCSBmkZmNTZ9nlYZQsUQ9roXzqPq75S8y1_oM&fref=nf" class="face"><img src="../images/facebook.svg" alt=""></a>
                <a href="https://www.linkedin.com/company/audace-consulting/" class="linke"><img src="../images/linkedin.svg" alt=""></a>
            </div>
        </div>



        </div>


    </footer>




    <script src="../scripts/scriptForum.js"></script>
    <script src="../scripts/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</body>

</html>

<?php
 
    include '../php/config.php';
    include '../php/devisConfig.php';


?>

    <!doctype html>
    <html lang="fr">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Devis | Audace Consulting</title>
        <link rel="stylesheet" href="../styles/reset.css" />

        <link rel="stylesheet" href="../styles/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
        <link rel="stylesheet" href="../styles/styleDevis.css" />
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

        <div class="container-fluid contenu1 contenuActive">
            <div class="col-12 offset-0 col-sm-8 offset-sm-2">
                <div class="description col-sm-10 offset-1">
                    <h1>Devis</h1>
                    <p>Saisir vos coordonnées :</p>
                </div>
                <div class="form col-12 col-md-8 offset-md-2">

                    <div class="pastille col-3 offset-0"><img src="../images/LogoAudaceAC-OR.png" alt=""></div>

                    <form action="#" method="get" class="f2 col-sm-10 offset-sm-1">
                        <div class="row align-items-start">
                            <div class="col-sm-6 offset-sm-0 col-10 offset-1 ">
                                <div class="form-group champs">
                                    <label for="exampleInputEmail1">Entreprise</label>

                                    <input type="text" class="formWhite entreprise" id="exampleInputEmail1" height="100" name="Entreprise">

                                </div>

                                <div class="form-group champs">
                                    <label for="exampleInputEmail1">Nom</label>
                                    <input type="text" class="formWhite" id="exampleInputEmail1" aria-describedby="emailHelp" height="100" name="Nom">
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
                                    <input type="email" class="formWhite" id="exampleInputEmail1" name="Email">

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
                                    <textarea class="formWhiteObject" id="exampleFormControlTextarea1" rows="6" name="Object"></textarea>
                                </div>

                                <div class="souscrire">
                                    <img class="souscrireImg" src="../images/Bouton%20gris%20Valider.png" alt="">
                                </div>
                                <input class="submit offset-1" type="submit">
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div class="container-fluid contenu2 none contenuNoActive">
            <div class="col-12 offset-0 col-sm-12 col-md-12 offset-md-">

                <div class="description col-12 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2">
                    <h1>Devis</h1>
                    <p>Choisissez vos programmes :</p>
                </div>
                <div class="navForm col-12 offset-0 row align-items-start">

                    <div class="fleche FG col-sm-1 col-sm-offset-0 "><img src="../images/arrow-left-circle.png" alt=""></div>
                    <div class="trait col-12 offset-0 col-sm-12 offset-sm-0 col-md-12 offset-md-0 col-lg-8 offset-lg-1 ">



                        <div class="cercleForm cercle1 cercleActive"></div>
                        <a class="cercleFormTitres titreMana ">Conseil</a>

                        <div class="cercleForm cercle2"> </div>
                        <a class="cercleFormTitres titreConseil">Formation</a>

                        <div class="cercleForm cercle3"></div>
                        <a class="cercleFormTitres titreSolution">Solution  & coaching</a>

                        <div class="cercleForm cercle4"></div>
                        <a class="cercleFormTitres titreProfile">Profils</a>


                    </div>
                    <div class="fleche FD col-1 col-sm-offset-1"><img src="../images/arrow-right-circle.png" alt=""></div>

                </div>
                <div class="navPro none col-sm-12">
                    <div class="programme eVente">
                        <span>École de vente</span><img class="checkeVente" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme eMana">
                        <span>École de management</span><img class="checkeMana" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme eCoach">
                        <span>Coaching</span><img class="checkeCoach" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme eDigi">
                        <span>digital learning</span><img class="checkeDigi" src="../images/plus-circle.png" alt="">
                    </div>

                </div>
                <div class="navPro3  col-sm-12">
                    <div class="programme audit">
                        <span>Audit</span><img class="checkAudit" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme consulting">
                        <span>Consulting</span><img class="checkConsulting" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme business">
                        <span>Business consulting</span><img class="checkBusiness" src="../images/plus-circle.png" alt="">
                    </div>

                </div>
                <div class="navPro4 none  col-sm-12">
                    <div class="programme equipe">
                        <span>Equipe</span><img class="checkEquipe" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme individuel">
                        <span>Individuel</span><img class="checkIndividuel" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme manager">
                        <span>Manager</span><img class="checkManager" src="../images/plus-circle.png" alt="">
                    </div>
                    <div class="programme recruteur">
                        <span>Recruteur/Mobilité</span><img class="checkRecruteur" src="../images/plus-circle.png" alt="">
                    </div>

                </div>
                <div class="navPro2 none  col-sm-12">
                    <div class="programme PM ">
                        <div class="programmeContenuMana">
                            <div class="contenuMana">Management</div>
                            <div class="managementContenu none">

                                <div><span class="position">Position N+1<img class="checkPosition" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="couleur">Couleur du management<img class="checkCouleur" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="situationnel">Management situationnel<img class="checkSituationnel" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="motivationnel">Management motivationnel<img class="checkMotivationnel" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="projet">Management de projet<img class="checkPojet" src="../images/plus-circle.png" alt=""></span></div>

                            </div>
                        </div>
                        <img class="chevron" src="../images/chevron-left.png" alt="">
                    </div>

                    <div class="programme PV">
                        <div class="programmeContenuVente">
                            <div class="contenuVent">Vente & négociation</div>
                            <div class="venteContenu none">

                                <div><span class="technique">Technique de vente<img class="checkTechnique" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="couleurV">La couleur de 
la ventes<img class="checkCouleurV" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="assertive">Ventes assertive<img class="checkAssertive" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="gociation">La négociation<img class="checkGociation" src="../images/plus-circle.png" alt=""></span></div>



                            </div>
                        </div>
                        <img class="chevron" src="../images/chevron-left.png" alt="">
                    </div>

                    <div class="programme PC">
                        <div class="programmeContenuComunication">
                            <div class="contenuComunication">Comunication</div>
                            <div class="comunicationContenu none">

                                <div><span class="relationnelle ">La flexibilité relationnelle<img class="checkRelationnelle " src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="assertivit">Communiquer avec assertivité<img class="checkAssertivit" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="situations">Gestion situations délicates<img class="checkSituations" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="publique">Parler en publique<img class="checkPublique" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="board">Gérer 
un board<img class="checkBoard" src="../images/plus-circle.png" alt=""></span></div>

                            </div>
                        </div>
                        <img class="chevron" src="../images/chevron-left.png" alt="">
                    </div>

                    <div class="programme PF">
                        <div class="programmeContenuformateur">
                            <div class="contenuFormateur">Formation de formateur</div>
                            <div class="formateurContenu none">

                                <div><span class="animateur">Formateur animateur<img class="checkAnimateur" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="coach">Formateur coach<img class="checkCoach" src="../images/plus-circle.png" alt=""></span></div>

                                <div><span class="assertif">Formateur assertif<img class="checkAssertif" src="../images/plus-circle.png" alt=""></span></div>



                            </div>
                        </div>
                        <img class="chevron" src="../images/chevron-left.png" alt="">
                    </div>

                </div>

            </div>
        </div>

        <div class="container-fluid contenu3 none contenuNoActive">
            <div class="col-12 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2 ">
                <div class="description col-sm-10 col-sm-offset-1">
                    <h1>Devis</h1>
                    <p>Vos programmes choisi :</p>
                </div>
                <div class="form f col-12 offset-0 col-sm-8 offset-sm-2 ">
                    <form class="" action="#" method="post">
                        <div class="row align-items-start">

                            <div class="listGroupe col-5 offset-1 offset-sm-2">
                                <img src="../images/shopping-cart-empty-side-view.png" alt="">
                                <div class="list">

                                </div>

                            </div>
                            <div class="nbrs col-3 offset-0">
                                <img src="../images/team.png" alt="">

                                <div class="form-group ecart listNbrs">

                                </div>

                                <div class="souscrire2">
                                    <img class="souscrireImg2" src="../images/Bouton%20gris%20Valider.png" alt="">
                                </div>
                                <input class="submit0" type="submit">


                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>



        <div class="container-fluid footerPush ">
            <div class="sectionNav col-12 offset-0 col-sm-8 offset-sm-2">
                <div class="bouttonPre preInvi "></div>
                <div class="boutonRep col-sm-12">
                    <div class="rep1 repActive"></div>
                    <div class="rep2"></div>
                    <div class="rep3"></div>

                </div>

                <div class="bouttonSui">
                    <!--<form class="submitDevis none" action="#" method="get">
                        <input type="button" onclick="envoyer(this)" value="Envoyer">
                        <input type="hidden" id="param1" name="param1" value="">
                        <input type="hidden" id="param2" name="param2" value="">
                        <input type="hidden" id="param3" name="param3" value="">
                    </form>-->
                </div>
            </div>
        </div>

        <!-- <form action="devis.php" method="get">
            <input type="button" onclick="envoyer(this)" value="Envoyer">
            <input type="hidden" id="param1" name="param1" value="">
             <input type="hidden" id="param2" name="param2" value="">
        </form>-->

        <div class="none tabForm1"><?= json_encode($_GET); ?></div>
        <div class="none tabForm2"><?= json_encode($_POST); ?></div>

        <footer class="container-fluid footer">

            <div class="arbo col-6 col-sm-3 offset-0 col-md-3 offset-md-2 col-lg-3 offset-md-3">
                <div><a href="#">Home</a></div>
                <div><a href="#">Qui sommes nous ?</a></div>
                <div><a href="#">Conseil</a></div>
                <div><a href="#">Formations</a></div>
                <div><a href="#">Solutions et coaching</a></div>
                <div><a href="#">forum</a></div>
            </div>
            <div class="contact col-3 offset-0 offset-sm-4 offset-md-1 ">
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
        <script src="../scripts/scriptDevis.js"></script>
        <script src="../scripts/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    </body>

    </html>

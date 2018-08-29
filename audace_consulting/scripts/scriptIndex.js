let quiSommes = document.querySelector(".quiSommes")
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

let test = new Array(5)

test[0] = 1
test[1] = 1

var x="Ceci est une variable JS";
function envoyer(elt)
{
 document.getElementById("param1").value=test;
 elt.form.submit();
}

forum.addEventListener('click', () => {
    console.log(quiSommes)

    sousMenu.classList.remove('animationSousMenu')
    sousMenu.classList.remove('sousMenuMove')
    sousMenu.classList.add('marginConseil')
    sousMenu.classList.remove('marginQuiSommesNous')
    sousMenu.classList.remove('marginSolution')

    smC.classList.remove('smS')

    sm1.classList.remove('col-lg-1')
    sm2.classList.remove('col-lg-1')
    sm3.classList.remove('col-lg-1')

    sm2.innerHTML = ''
    sm1.innerHTML = '<a class="deco" href="pages/news.html">À la une</a>'
    sm2.innerHTML = '<a class="deco" href="pages/inscription.php">contact</a>'
    sm3.innerHTML = '<a class="deco" href="pages/devis.php">Devis</a>'
    sm4.innerHTML = ''

    window.setTimeout(() => {
        sousMenu.classList.add('animationSousMenu');
        sousMenu.classList.add('sousMenuMove');
    }, 200)
   

})

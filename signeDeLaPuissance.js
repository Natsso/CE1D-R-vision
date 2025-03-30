//Variable

var nombre_colonne_ex = 2;
var nombre_colonne_sol = 2;
var nombre_exo = 16;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML = "Détermine le signe de ces calculs";

//Crée titre Feuille
document.getElementById("exercice").innerHTML = "Signe d'une puissance - Exercices";

//Crée titre Solutions
document.getElementById("solution").innerHTML = "Signe d'une puissance - Solutions";
document.getElementById("solution").style.display = "block";

//Constante

//Créer le nombre de colonne que contiendra le tableau exercice
var nb_col_ex = nombre_colonne_ex;

for (i = 1; i <= nombre_colonne_ex; i++) {
    var newDiv = document.createElement("div");
    document.getElementById("tableau_exo").appendChild(newDiv);
    newDiv.setAttribute('class', "colonne");
    newDiv.setAttribute('id', "colex" + i);

    var newList = document.createElement("ol");
    document.getElementById("colex" + i).appendChild(newList);
    newList.setAttribute('class', "numero_exo");
    newList.setAttribute('id', "textexo" + i);
}

//Créer le nombre de colonne que contiendra le tableau solution
var nb_col_sol = nombre_colonne_sol;

for (i = 1; i <= nombre_colonne_sol; i++) {

    var newDiv = document.createElement("div");
    document.getElementById("tableau_solution").appendChild(newDiv);
    newDiv.setAttribute('class', "colonne");
    newDiv.setAttribute('id', "colsol" + i);

    var newList = document.createElement("ol");
    document.getElementById("colsol" + i).appendChild(newList);
    newList.setAttribute('class', "numero_sol");
    newList.setAttribute('id', "listsol" + i);
}




var sol = [];
var textexo = "";

generation_exo();

//Succession exercice
function generation_exo() {

    //Reset contenu colonners
    for (i = 1; i <= nb_col_ex; i++) {
        document.getElementById("textexo" + i).innerHTML = "";
    }

    for (i = 1; i <= nb_col_sol; i++) {
        document.getElementById("listsol" + i).innerHTML = "";
    }
    var frequence_ex = [1, 1, 2];
    shuffle(frequence_ex);
    numero_exo = 0;

    //Génération de chaque exo
    for (boucle1 = 0; boucle1 < nombre_exo; boucle1++) {

        var col_ex = Math.floor((boucle1) / Math.ceil(nombre_exo / nb_col_ex)) + 1;
        var col_sol = Math.floor((boucle1) / Math.ceil(nombre_exo / nb_col_sol)) + 1;



        if (numero_exo == frequence_ex.length) {
            numero_exo = 0;
            shuffle(frequence_ex);
        }
        cas_exo = frequence_ex[numero_exo];
        if (cas_exo == 1) {
            cas1();
        } else if (cas_exo == 2) {
            cas1();
        }

        numero_exo++;

    }

    //Ajustement hauteur des exos

    for (boucle10 = 0; boucle10 < nombre_exo; boucle10++) {

        var newSol = document.getElementById("solexo" + boucle10);
        newSol.style.height = "auto";

        var newExo = document.getElementById("exo" + boucle10);
        newExo.style.height = "auto";
    }

    //Fonctions exercices

    function cas1() {

        var a = Math.floor(Math.random() * 15 + 1) * Math.pow(-1, Math.floor(Math.random() * 15));
        expo = Math.floor(Math.random() * 10);

        op = Math.floor(Math.random() * 5);

        rep1 = Math.pow(a, expo);

        if (op == 0) {
            

            if (rep1 < 0) {
                rep = "positif";
            }
            if (rep1 > 0) {
                rep = "négatif";
            }
            if (expo == 0) {
                rep = "négatif (=-1)";
            }
            if (a < 0) {
                a = "–" + (-a);
            }
            textexo = "–(" + a + ")<sup>" + expo + "</sup> est";
            textesol = " –(" + a + ")<sup>" + expo + "</sup> est <span class=\"sol\" >" + rep + ".</span>";
        }
        if (op == 1) {

            if (rep1 < 0) {
                rep = "négatif";
            }
            if (rep1 > 0) {
                rep = "positif";
            }
            if (expo == 0) {
                rep = "positif (=1)"
            }
            if (a < 0) {
                a = "–" + (-a);
            }
            textexo = " (" + a + ")<sup>" + expo + "</sup> est";
            textesol = " (" + a + ")<sup>" + expo + "</sup> est <span class=\"sol\"> " + rep + ".</span>";
        }
        if (op == 2) {

            if(expo%2==0){
                rep="négatif";
            }
            else {
                          if (a < 0) {
                rep = "positif";
            }
            if (a > 0) {
                rep = "négatif";
            }  
            }

            if (expo == 0) {

                rep = "négatif (=–1)";
            }
            if (a < 0) {
                a = "–" + (-a);
            }
            textexo = "–(" + a + ")<sup>" + expo + "</sup> est";
            textesol = " –(" + a + ")<sup>" + expo + "</sup> est <span class=\"sol\"> " + rep + ".</span>";
        }
        if (op == 3) {

            if (a < 0) {
                rep = "négatif";
            }
            if (a > 0) {
                rep = "positif";
            }
            if (expo == 0) {
                if (a > 0) {
                    rep = "positif (=1)";
                } else {
                    rep = "négatif (=–1)";
                }
            }
            if (a < 0) {
                a = "–" + (-a);
            }
            textexo = "(" + a + "<sup>" + expo + "</sup>) est";
            textesol = " (" + a + "<sup>" + expo + "</sup>) est <span class=\"sol\"> " + rep + ".</span>";
        }

        if (op == 4) {

            if (a > 0) {
                rep = "négatif";
            }
            if (a < 0) {
                rep = "positif";
            }
            if (expo == 0) {
                if (a < 0) {
                    rep = "positif (=1)";
                } else {
                    rep = "négatif (=–1)";
                }
            }
            if (a < 0) {
                a = "–" + (-a);
            }
            textexo = "–(" + a + "<sup>" + expo + "</sup>) est";
            textesol = " –(" + a + "<sup>" + expo + "</sup>) est <span class=\"sol\"> " + rep + ".</span>";
        }


        //Consigne
        var newExo = document.createElement("li");
        document.getElementById("textexo" + col_ex).appendChild(newExo);
        newExo.setAttribute('id', "exo" + boucle1);
        document.getElementById("exo" + boucle1).innerHTML = textexo;

        //Solution
        var newSol = document.createElement("li");
        document.getElementById("listsol" + col_sol).appendChild(newSol);
        newSol.setAttribute('id', "solexo" + boucle1);
        document.getElementById("solexo" + boucle1).innerHTML = textesol;

    }
}

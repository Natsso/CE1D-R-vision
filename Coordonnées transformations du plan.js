//Variable

var nombre_colonne_ex = 1;
var nombre_colonne_sol = 1;
var nombre_exo = 4;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML = "Complète ces tableaux.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML = "Coordonnées transformations du plan - Exercices";

//Crée titre Solutions
document.getElementById("solution").innerHTML = "Coordonnées transformations du plan - Solutions";
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
    newList.setAttribute('id', "listex" + i);
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



generation_exo();

//Succession exercice
function generation_exo() {

    //Reset contenu colonners
    for (i = 1; i <= nb_col_ex; i++) {
        document.getElementById("listex" + i).innerHTML = "";
    }

    for (i = 1; i <= nb_col_sol; i++) {
        document.getElementById("listsol" + i).innerHTML = "";
    }
    var frequence_ex = [1, 1];
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
            cas2();
        }
        //Changement - par  –
        textexo = textexo.replace(/\-/gi, "–");
        textesol = textesol.replace(/\-/gi, "–");

        //Consigne
        var newExo = document.createElement("li");
        document.getElementById("listex" + col_ex).appendChild(newExo);
        newExo.setAttribute('id', "exo" + boucle1);
        document.getElementById("exo" + boucle1).innerHTML = textexo;

        //Solution
        var newSol = document.createElement("li");
        document.getElementById("listsol" + col_sol).appendChild(newSol);
        newSol.setAttribute('id', "solexo" + boucle1);
        document.getElementById("solexo" + boucle1).innerHTML = textesol;

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

    //Fonctions cas1
    function cas1() {

        xa = Math.floor(Math.random() * 15) * Math.pow(-1, Math.floor(Math.random() * 3));
        ya = Math.floor(Math.random() * 15) * Math.pow(-1, Math.floor(Math.random() * 3));


        xb = Math.floor(Math.random() * 15) * Math.pow(-1, Math.floor(Math.random() * 3));
        yb = Math.floor(Math.random() * 15) * Math.pow(-1, Math.floor(Math.random() * 3));


        xc = Math.floor(Math.random() * 15) * Math.pow(-1, Math.floor(Math.random() * 3));
        yc = Math.floor(Math.random() * 15) * Math.pow(-1, Math.floor(Math.random() * 3));

        //  valeur du vecteur
        xt = 2
        yt = 2

        //sym centrale
        l1 = "<tr style=height:30px><td class=td_principal_exo>S<sub>o</sub></td><td class=td_principal_exo><span class=sol>(" + -xa + "; " + -ya + ")</td><td class=td_principal_exo><span class=sol>(" + -xb + "; " + -yb + ")</td><td class=td_principal_exo><span class=sol>(" + -xc + "; " + -yc + ")</td></tr>";
l1e = "<tr style=height:30px><td class=td_principal_exo>S<sub>o</sub></td><td class=td_principal_exo></td><td class=td_principal_exo></td><td class=td_principal_exo></td></tr>";

        //sym ortho
        sym = Math.floor(Math.random() * 2);

        if (sym == 0) {
            l2 = "<tr style=height:30px><td class=td_principal_exo>S<sub>x</sub></td><td class=td_principal_exo><span class=sol>(" + xa + "; " + -ya + ")</td><td class=td_principal_exo><span class=sol>(" + xb + "; " + -yb + ")</td><td class=td_principal_exo><span class=sol>(" + xc + "; " + -yc + ")</td></tr>";
        l2e="<tr style=height:30px><td class=td_principal_exo>S<sub>x</sub></td><td class=td_principal_exo></td><td class=td_principal_exo></td><td class=td_principal_exo></td></tr>";
        } else {
            l2 = "<tr style=height:30px><td class=td_principal_exo>S<sub>y</sub></td><td class=td_principal_exo><span class=sol>(" + -xa + "; " + ya + ")</td><td class=td_principal_exo><span class=sol>(" + -xb + "; " + yb + ")</td><td class=td_principal_exo><span class=sol>(" + -xc + "; " + yc + ")</td></tr>";
                    l2e="<tr style=height:30px><td class=td_principal_exo>S<sub>y</sub></td><td class=td_principal_exo></td><td class=td_principal_exo></td><td class=td_principal_exo></td></tr>";
        }

        tran = Math.floor(Math.random() * 3);

        //transla

        if (tran == 0) {
            l3 = "<tr style=height:30px><td class=td_principal_exo>t<span class=\"vecteur\">OA</span></sub></td><td class=td_principal_exo><span class=sol>(" + (xa + xa) + "; " + (ya + ya) + ")</td><td class=td_principal_exo><span class=sol>(" + (xb + xa) + "; " + (yb + ya) + ")</td><td class=td_principal_exo><span class=sol>(" + (xc + xa) + "; " + (yc + ya) + ")</td></tr>";
            l3e= "<tr style=height:30px><td class=td_principal_exo>t<span class=\"vecteur\">OA</span></sub></td><td class=td_principal_exo></td><td class=td_principal_exo></td><td class=td_principal_exo></td></tr>";
        } else if (tran == 1) {
            l3 = "<tr style=height:30px><td class=td_principal_exo>t<span class=\"vecteur\">OB</span></sub></td><td class=td_principal_exo><span class=sol>(" + (xa + xb) + "; " + (ya + yb) + ")</td><td class=td_principal_exo><span class=sol>(" + (xb + xb) + "; " + (yb + yb) + ")</td><td class=td_principal_exo><span class=sol>(" + (xc + xb) + "; " + (yc + yb) + ")</td></tr>";
                        l3e= "<tr style=height:30px><td class=td_principal_exo>t<span class=\"vecteur\">OB</span></sub></td><td class=td_principal_exo></td><td class=td_principal_exo></td><td class=td_principal_exo></td></tr>";
        } else {
            l3 = "<tr style=height:30px><td class=td_principal_exo>t<span class=\"vecteur\">OC</span></sub></td><td class=td_principal_exo><span class=sol>(" + (xa + xc) + "; " + (ya + yc) + ")</td><td class=td_principal_exo><span class=sol>(" + (xb + xc) + "; " + (yb + yc) + ")</td><td class=td_principal_exo><span class=sol>(" + (xc + xc) + "; " + (yc + yc) + ")</td></tr>";
                        l3e= "<tr style=height:30px><td class=td_principal_exo>t<span class=\"vecteur\">OC</span></sub></td><td class=td_principal_exo></td><td class=td_principal_exo></td><td class=td_principal_exo></td></tr>";
        }



        textexo = "<table class=tab_diagramme ><tr style=height:30px><td class=th_principal_exo></th><th class=th_principal_exo>A (" + xa + "; " + ya + ")</th><th class=th_principal_exo>B (" + xb + "; " + yb + ")</th><th class=th_principal_exo>C (" + xc + "; " + yc + ")</th></tr>" + l1e + l2e + l3e + "</table>";
        textesol = "<table class=tab_diagramme ><tr style=height:30px><td class=th_principal_exo></th><th class=th_principal_exo>A (" + xa + "; " + ya + ")</th><th class=th_principal_exo>B (" + xb + "; " + yb + ")</th><th class=th_principal_exo>C (" + xc + "; " + yc + ")</th></tr>" + l1 + l2 + l3 + "</table>";
    }

    //Fonctions cas1
    function cas2() {

        textexo = "bbbbbbbbbbbb";
        textesol = "bbbbbbbbbbbbb";

    }
}

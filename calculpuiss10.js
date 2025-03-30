//Variable

var nombre_colonne_ex = 1;
var nombre_colonne_sol = 1;
var nombre_exo = 15;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML = "Calcul et note ta réponse sous forme de notation scientifique.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML = "Calculs de puissances de 10 - Exercices";

//Crée titre Solutions
document.getElementById("solution").innerHTML = "Calculs de puissances de 10 - Solutions";
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
            cas2();
        }

        numero_exo++;

    }


    //Fonctions exercices

    //Fonctions cas1
    function cas1() {


        a = Math.floor(Math.random() * 20 + 1);
        b = Math.floor(Math.random() * 20 + 1);
        exp1 = Math.floor(Math.random() * 6 + 1) * Math.pow(-1, Math.floor(Math.random() * 2 + 1));
        exp2 = Math.floor(Math.random() * 6 + 1) * Math.pow(-1, Math.floor(Math.random() * 2 + 1));

        nombre1 = a * Math.pow(10, exp1);
        nombre2 = b * Math.pow(10, exp2);


        //enlever les bugs d'arrongi 52,000000000005 ou 53,999999999
        if (exp1 < 0) {
            nombre1 = nombre1.toFixed(Math.abs(
                exp1));
        } else {
            nombre1 = nombre1.toFixed(0);

        }
        if (exp1 == 1) {
            expo1 = ""
        }

        //enlever les bugs d'arrongi 52,000000000005 ou 53,999999999
        if (exp2 < 0) {
            nombre2 = nombre2.toFixed(Math.abs(
                exp2));
        } else {
            nombre2 = nombre2.toFixed(0);

        }
        if (exp2 == 1) {
            expo2 = ""
        }


        nombre1 = nombre1 * 1000000;
        nombre1 = nombre1.toFixed(0);
        nombre1 = nombre1 / 1000000;
        nombre1 = (nombre1);



        nombre2 = nombre2 * 1000000;
        nombre2 = nombre2.toFixed(0);
        nombre2 = nombre2 / 1000000;
        nombre2 = nombre_lisible(nombre2);


        //notation scientifique placement de la virgule


        if (100 > a && a >= 10) {
            c1 = a / 10
            decalage1 = 1

        }
        if (10 > a && a > 0) {
            c1 = a / 1
            decalage1 = 0

        }

        expo1 = exp1 + decalage1;


        //notation scientifique placement de la virgule


        if (100 > b && b >= 10) {
            c2 = b / 10
            decalage2 = 1

        }
        if (10 > b && b > 0) {
            c2 = b / 1
            decalage2 = 0

        }

        expo2 = exp2 + decalage2;

        exprep = expo2 + expo1;


        str = "" + nombre1;
        nombre1 = str.replace(".", ",");


        str = "" + nombre2;
        nombre2 = str.replace(".", ",");


        k = c1 * c2;

        if (k > 10) {
            k = k / 10;
            exprep = exprep + 1;
        }
        if (k == 10) {
            k = 1;
            exprep = exprep + 1;
        }
        k = Math.round(k * 1000000) / 1000000;


        str = "" + c1;
        c1 = str.replace(".", ",");
        str = "" + c2;
        c2 = str.replace(".", ",");
        str = "" + k;
        k = str.replace(".", ",");


        textexo = nombre1 + " . " + nombre2 + " = .................................................................................................. ";

        textesol = nombre1 + " . " + nombre2 + " = <span class=\"sol\">" + c1 + " . 10<SUP>" + expo1 + "</SUP> . " + c2 + " . 10<SUP>" + expo2 + "</SUP> = " + k + " . 10<SUP>" + exprep + "</SUP></span>";


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
    }

    //Fonctions cas1
    function cas2() {

        a = Math.floor(Math.random() * 10 + 1);

        exp = Math.floor(Math.random() * 6 + 1) * Math.pow(-1, Math.floor(Math.random() * 2 + 1));
        exp2 = Math.floor(Math.random() * 2+2);


        nombre = a * Math.pow(10, exp)
        //enlever les bugs d'arrongi 52,000000000005 ou 53,999999999
        if (exp < 0) {
            nombre = nombre.toFixed(Math.abs(exp));
        } else {
            nombre = nombre.toFixed(0);

        }
        if (exp == 1) {
            expo = ""
        }


        nombre = nombre * 1000000;
        nombre = nombre.toFixed(0);
        nombre = nombre / 1000000;
        nombre = nombre_lisible(nombre);



        //notation scientifique placement de la virgule


        if (100 > a && a >= 10) {
            c = a / 10
            decalage = 1

        }
        if (10 > a && a >= 0) {
            c = a / 1
            decalage = 0

        }

        expo = exp + decalage;


        str = "" + nombre;
        nombre = str.replace(".", ",");


        textexo = "(" + nombre + ")<SUP>" + exp2 + "</SUP> = .................................................................................................. ";






        rep1 = Math.pow(a, exp2);
        rep1 = Math.round(rep1 * 1000000) / 1000000
        expf = expo * exp2;

        //notation scientifique placement de la virgule

        if (rep1 > 1000) {
            c = rep1 / 1000
            decalage = 3

        }
        if (1000 > rep1 && rep1 > 100) {
            c = rep1 / 100
            decalage = 2

        }
        if (100 > rep1 && rep1 > 10) {
            c = rep1 / 10
            decalage = 1

        }
        if (10 > rep1 && rep1 > 0) {
            c = rep1 / 1
            decalage = 0

        }

        str = "" + c;
        c = str.replace(".", ",");

        expf = expf + decalage;

        textesol = "(" + nombre + ")<SUP>" + exp2 + "</SUP> = <span class=\"sol\">("+a+" . 10<SUP>" + expo + "</SUP>)<SUP>" + exp2 + "</SUP> = " + c + " . 10<SUP>" + expf + "</SUP></span>";

        if (exp2 == 0) {
            textesol = "(" + nombre + ")<SUP>" + exp2 + "</SUP> = <span class=\"sol\">1</span>";
        }

        if (expf == 0) {
            textesol = "(" + nombre + ")<SUP>" + exp2 + "</SUP> = <span class=\"sol\">" + c + "</span>";
        }

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

    }



}

//Variable

var nombre_colonne_ex = 2;
var nombre_colonne_sol = 2;
var nombre_exo = 6;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML = "Trace les constructions demandées.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML = "Transformations du plan mélangées - Exercices";

//Crée titre Solutions
document.getElementById("solution").innerHTML = "Transformations du plan mélangées - Solutions";
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

    z = 0;
    zz = 100;

    //Reset contenu colonners
    for (i = 1; i <= nb_col_ex; i++) {
        document.getElementById("listex" + i).innerHTML = "";
    }

    for (i = 1; i <= nb_col_sol; i++) {
        document.getElementById("listsol" + i).innerHTML = "";
    }
    var frequence_ex = [1,2,3,4,4];
    shuffle(frequence_ex);
    numero_exo = 0;
    num_jsx = 0;

    //Génération de chaque exo
    for (boucle1 = 0; boucle1 < nombre_exo; boucle1++) {

        var col_ex = Math.floor((boucle1) / Math.ceil(nombre_exo / nb_col_ex)) + 1;
        var col_sol = Math.floor((boucle1) / Math.ceil(nombre_exo / nb_col_sol)) + 1;



        if (numero_exo == frequence_ex.length) {
            numero_exo = 0;
            shuffle(frequence_ex);
        }

        preparation()
        var newExo = document.createElement("li");
        var newSol = document.createElement("li");


        cas_exo = frequence_ex[numero_exo];
        if (cas_exo == 1) {
            translation();
        } else if (cas_exo == 2) {
            symaxiale();
        } else if (cas_exo == 3) {
            symcentrale();
        } else if (cas_exo == 4) {
            rotation();
        }
        
        

        z = z + 1;
        zz = zz + 1;

        numero_exo++;
        num_jsx++;

    }

    //Fonctions exercices



    function rotation() {
        if (segment == "oui") {
            element2 = Math.floor(Math.random() * 50 + 5) * 5 * Math.pow(-1, Math.floor(Math.random() * 2))
            if (Math.sign(element2) == 1) {
                textexo = "r<sub>" + lettres[element1] + ", +" + element2 + "°</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

                textesol = "r<sub>" + lettres[element1] + ", +" + element2 + "°</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

            } else {

                textexo = "r<sub>" + lettres[element1] + ", " + element2 + "°</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

                textesol = "r<sub>" + lettres[element1] + ", " + element2 + "°</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

            }
        } else {
            element2 = Math.floor(Math.random() * 40 + 5) * 5 * Math.pow(-1, Math.floor(Math.random() * 2))
            if (Math.sign(element2) == 1) {

                textexo = "r<sub>" + lettres[element1] + ", +" + element2 + "°</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";


                textesol = "r<sub>" + lettres[element1] + ", +" + element2 + "°</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";


            } else {

                textexo = "r<sub>" + lettres[element1] + ", " + element2 + "°</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";


                textesol = "r<sub>" + lettres[element1] + ", " + element2 + "°</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";



            }
        }

        //Consigne
        document.getElementById("listex" + col_ex).appendChild(newExo);
        newExo.setAttribute('id', "exo" + boucle1);
        document.getElementById("exo" + boucle1).innerHTML = textexo;



        var b = JXG.JSXGraph.initBoard(z, {
            boundingbox: [0, 100, 100, 0],
            axis: false,

            showNavigation: false,
        });


        randomcoord()

        var p = []



        p[0] = b.create('point', [a1, a2], {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = b.create('point', [b1, b2], {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = b.create('point', [c1, c2], {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = b.create('point', [d1, d2], {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = b.create('point', [e1, e2], {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });

        p[5] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });
        p[6] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });



        if (JXG.toFixed(p[2].Dist(p[0]), 2) < 6) {
            rotation()
        } else if (JXG.toFixed(p[2].Dist(p[1]), 2) < 6) {
            rotation()
        } else if (JXG.toFixed(p[2].Dist(p[3]), 2) < 6) {
            rotation()
        } else if (JXG.toFixed(p[2].Dist(p[4]), 2) < 6) {
            rotation()
        } else {


            //choix du centre



            t = b.create('transform', [Math.PI * element2 / 180, p[element1]], {
                type: 'rotate'
            }); // angle, rotation center


            p[10] = b.create('point', [p[point1], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })
            p[11] = b.create('point', [p[point2], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })
            p[12] = b.create('point', [p[point3], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })

            if (p[10].coords.usrCoords[1] < 3 || p[11].coords.usrCoords[1] < 3 || p[12].coords.usrCoords[1] < 3) {
                rotation()
            } else if (p[10].coords.usrCoords[2] < 5 || p[11].coords.usrCoords[2] < 5 || p[12].coords.usrCoords[2] < 5) {

                rotation()
            } else if (p[10].coords.usrCoords[1] > 95 || p[11].coords.usrCoords[1] > 95 || p[12].coords.usrCoords[1] > 95) {
                rotation()
            } else if (p[10].coords.usrCoords[2] > 95 || p[11].coords.usrCoords[2] > 95 || p[12].coords.usrCoords[2] > 95) {
                rotation()
            } else {

                var lettresprim = ["A'", "B'", "C'", "D'", "E'", "", "", ""]
                ptrep1 = [p[10].coords.usrCoords[1], p[10].coords.usrCoords[2], lettresprim[point1]];

                ptrep2 = [p[11].coords.usrCoords[1], p[11].coords.usrCoords[2], lettresprim[point2]];

                ptrep3 = [p[12].coords.usrCoords[1], p[12].coords.usrCoords[2], lettresprim[point3]];






            }
        }





        a = [a1, a2];
        bb = [b1, b2];
        cc = [c1, c2];
        d = [d1, d2];
        ee = [e1, e2];





        bonnelettre()

        //Solution
        document.getElementById("listsol" + col_sol).appendChild(newSol);
        newSol.setAttribute('id', "solexo" + boucle1);
        document.getElementById("solexo" + boucle1).innerHTML = textesol;





        var c = JXG.JSXGraph.initBoard(zz, {
            boundingbox: [0, 100, 100, 0],
            axis: false,
            showNavigation: false,
        });


        var p = []


        p[0] = c.create('point', a, {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = c.create('point', bb, {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = c.create('point', cc, {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = c.create('point', d, {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = c.create('point', ee, {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });



        if (ptrep1[2] !== "") {
            p[5] = c.create('point', [ptrep1[0], ptrep1[1]], {
                style: 2,             size:1,
                name: ptrep1[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep2[2] !== "") {
            p[6] = c.create('point', [ptrep2[0], ptrep2[1]], {
                style: 2,             size:1,
                name: ptrep2[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep3[2] !== "") {
            p[7] = c.create('point', [ptrep3[0], ptrep3[1]], {
                style: 2,             size:1,
                name: ptrep3[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep1[2] !== "" && ptrep2[2] !== "") {
            var li1 = c.create('line', [p[5], p[6]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "" && ptrep3[2] !== "") {
            var li2 = c.create('line', [p[5], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep2[2] !== "" && ptrep3[2] !== "") {
            var li3 = c.create('line', [p[6], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }


        if (pointorigine1 !== 5 && pointorigine2 !== 5) {
            var li7 = c.create('line', [p[pointorigine1], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine1 !== 5 && pointorigine3 !== 5) {
            var li8 = c.create('line', [p[pointorigine1], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine2 !== 5 && pointorigine3 !== 5) {
            var li9 = c.create('line', [p[pointorigine2], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        centre = [p[element1].coords.usrCoords[1], p[element1].coords.usrCoords[2]]


        p[10] = c.create('point', centre, {
            style: 2,             size:1,
            name: '',
            Color: '#000000',
        });

        if (ptrep1[2] !== "") {
            if (element2 > 0) {
                var arc1 = c.create('arc', [p[10], p[pointorigine1], p[5]], {
                    dash: 2,
                    strokeColor: 'green',
                });
            } else {
                var arc1 = c.create('arc', [p[10], p[5], p[pointorigine1]], {
                    dash: 2,
                    strokeColor: 'green',
                });
            }
        }
        if (ptrep2[2] !== "") {
            if (element2 > 0) {
                var arc1 = c.create('arc', [p[10], p[pointorigine2], p[6]], {
                    dash: 2,
                    strokeColor: 'green',
                });
            } else {
                var arc2 = c.create('arc', [p[10], p[6], p[pointorigine2]], {
                    dash: 2,
                    strokeColor: 'green',
                });
            }
        }
        if (ptrep3[2] !== "") {
            if (element2 > 0) {
                var arc1 = c.create('arc', [p[10], p[pointorigine3], p[7]], {
                    dash: 2,
                    strokeColor: 'green',
                });
            } else {
                var arc3 = c.create('arc', [p[10], p[7], p[pointorigine3]], {
                    dash: 2,
                    strokeColor: 'green',
                });
            }
        }

    }


    function symcentrale() {
        

        if (segment == "oui") {
            
        
            textexo = "s<sub>" + lettres[element1] + "</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

            textesol = "s<sub>" + lettres[element1] + "</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

        } else {
            textexo = "s<sub>" + lettres[element1] + "</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";


            textesol = "s<sub>" + lettres[element1] + "</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";



        }

        //Consigne
        document.getElementById("listex" + col_ex).appendChild(newExo);
        newExo.setAttribute('id', "exo" + boucle1);
        document.getElementById("exo" + boucle1).innerHTML = textexo;

        var b = JXG.JSXGraph.initBoard(z, {
            boundingbox: [0, 100, 100, 0],
            axis: false,

            showNavigation: false,
        });


        randomcoord()


        var p = []



        p[0] = b.create('point', [a1, a2], {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = b.create('point', [b1, b2], {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = b.create('point', [c1, c2], {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = b.create('point', [d1, d2], {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = b.create('point', [e1, e2], {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });

        p[5] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });
        p[6] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });



        if (JXG.toFixed(p[2].Dist(p[0]), 2) < 6) {
            symcentrale()
        } else if (JXG.toFixed(p[2].Dist(p[1]), 2) < 6) {
            symcentrale()
        } else if (JXG.toFixed(p[2].Dist(p[3]), 2) <6) {
            symcentrale()
        } else if (JXG.toFixed(p[2].Dist(p[4]), 2) < 6) {
            symcentrale()
        } else {


            //choix du centre



            t = b.create('transform', [Math.PI, p[element1]], {
                type: 'rotate'
            }); // angle, rotation center


            p[10] = b.create('point', [p[point1], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })
            p[11] = b.create('point', [p[point2], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })
            p[12] = b.create('point', [p[point3], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })

            if (p[10].coords.usrCoords[1] < 3 || p[11].coords.usrCoords[1] < 3 || p[12].coords.usrCoords[1] < 3) {
                symcentrale()
            } else if (p[10].coords.usrCoords[2] < 5 || p[11].coords.usrCoords[2] < 5 || p[12].coords.usrCoords[2] < 5) {

                symcentrale()
            } else if (p[10].coords.usrCoords[1] > 95 || p[11].coords.usrCoords[1] > 95 || p[12].coords.usrCoords[1] > 95) {
                symcentrale()
            } else if (p[10].coords.usrCoords[2] > 95 || p[11].coords.usrCoords[2] > 95 || p[12].coords.usrCoords[2] > 95) {
                symcentrale()
            } else {

                var lettresprim = ["A'", "B'", "C'", "D'", "E'", "", "", ""]
                ptrep1 = [p[10].coords.usrCoords[1], p[10].coords.usrCoords[2], lettresprim[point1]];

                ptrep2 = [p[11].coords.usrCoords[1], p[11].coords.usrCoords[2], lettresprim[point2]];

                ptrep3 = [p[12].coords.usrCoords[1], p[12].coords.usrCoords[2], lettresprim[point3]];


            }
        }




        a = [a1, a2];
        bb = [b1, b2];
        cc = [c1, c2];
        d = [d1, d2];
        ee = [e1, e2];



        //Solution
        document.getElementById("listsol" + col_sol).appendChild(newSol);
        newSol.setAttribute('id', "solexo" + boucle1);
        document.getElementById("solexo" + boucle1).innerHTML = textesol;





        var c = JXG.JSXGraph.initBoard(zz, {
            boundingbox: [0, 100, 100, 0],
            axis: false,
            showNavigation: false,
        });


        var p = []


        p[0] = c.create('point', a, {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = c.create('point', bb, {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = c.create('point', cc, {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = c.create('point', d, {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = c.create('point', ee, {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });

        //attribue la bonne lettres aux réponses
        bonnelettre()

        var c = JXG.JSXGraph.initBoard(zz, {
            boundingbox: [0, 100, 100, 0],
            axis: false,
            showNavigation: false,
        });


        var p = []


        p[0] = c.create('point', a, {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = c.create('point', bb, {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = c.create('point', cc, {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = c.create('point', d, {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = c.create('point', ee, {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });



        if (ptrep1[2] !== "") {
            p[5] = c.create('point', [ptrep1[0], ptrep1[1]], {
                style: 2,             size:1,
                name: ptrep1[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep2[2] !== "") {
            p[6] = c.create('point', [ptrep2[0], ptrep2[1]], {
                style: 2,             size:1,
                name: ptrep2[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep3[2] !== "") {
            p[7] = c.create('point', [ptrep3[0], ptrep3[1]], {
                style: 2,             size:1,
                name: ptrep3[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep1[2] !== "" && ptrep2[2] !== "") {
            var li1 = c.create('line', [p[5], p[6]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "" && ptrep3[2] !== "") {
            var li2 = c.create('line', [p[5], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep2[2] !== "" && ptrep3[2] !== "") {
            var li3 = c.create('line', [p[6], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "") {
            var li4 = c.create('line', [p[5], p[pointorigine1]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (ptrep2[2] !== "") {
            var li5 = c.create('line', [p[6], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (ptrep3[2] !== "") {
            var li6 = c.create('line', [p[7], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (pointorigine1 !== 5 && pointorigine2 !== 5) {
            var li7 = c.create('line', [p[pointorigine1], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine1 !== 5 && pointorigine3 !== 5) {
            var li8 = c.create('line', [p[pointorigine1], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine2 !== 5 && pointorigine3 !== 5) {
            var li9 = c.create('line', [p[pointorigine2], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        element2 = [p[element1].coords.usrCoords[1], p[element1].coords.usrCoords[2]]


        p[10] = c.create('point', element2, {
            style: 2,             size:1,
            name: '',
            Color: '#000000',
        });

    }



    function translation() {

        if (segment == "oui") {
            textexo = "t<sub><span class=\"vecteur\">" + lettres[element1] + lettres[element2] + "</span></sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

            textesol = "t<sub><span class=\"vecteur\">" + lettres[element1] + lettres[element2] + "</span></sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

        } else {
            textexo = "t<sub><span class=\"vecteur\">" + lettres[element1] + lettres[element2] + "</span></sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";


            textesol = "t<sub><span class=\"vecteur\">" + lettres[element1] + lettres[element2] + "</span></sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";



        }

        //Consigne
        document.getElementById("listex" + col_ex).appendChild(newExo);
        newExo.setAttribute('id', "exo" + boucle1);
        document.getElementById("exo" + boucle1).innerHTML = textexo;

        var b = JXG.JSXGraph.initBoard(z, {
            boundingbox: [0, 100, 100, 0],
            axis: false,

            showNavigation: false,
        });


        randomcoord()


        var p = []



        p[0] = b.create('point', [a1, a2], {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = b.create('point', [b1, b2], {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = b.create('point', [c1, c2], {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = b.create('point', [d1, d2], {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = b.create('point', [e1, e2], {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });

        p[6] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });



        // évite d'avoir des points trop près, sinon restart

        if (JXG.toFixed(p[2].Dist(p[0]), 2) < 6) {
            translation()
        } else if (JXG.toFixed(p[2].Dist(p[1]), 2) < 6) {
            translation()
        } else if (JXG.toFixed(p[2].Dist(p[3]), 2) < 6) {
            translation()
        } else if (JXG.toFixed(p[2].Dist(p[4]), 2) < 6) {
            translation()
        } else {



            // détermine déjà la solution mais ne l'affiche pas


            t = b.create('transform', [function () {
                return p[element2].coords.usrCoords[1] - p[element1].coords.usrCoords[1];
	            }, p[element2].coords.usrCoords[2] - p[element1].coords.usrCoords[2]], {
                type: 'translate'
            });


            p[10] = b.create('point', [p[point1], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })
            p[11] = b.create('point', [p[point2], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })
            p[12] = b.create('point', [p[point3], t], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            })

            // évite d'avoir des points en dehors du graph sinon restart

            if (p[10].coords.usrCoords[1] < 3 || p[11].coords.usrCoords[1] < 3 || p[12].coords.usrCoords[1] < 3) {
                translation()
            } else if (p[10].coords.usrCoords[2] < 5 || p[11].coords.usrCoords[2] < 5 || p[12].coords.usrCoords[2] < 5) {

                translation()
            } else if (p[10].coords.usrCoords[1] > 95 || p[11].coords.usrCoords[1] > 95 || p[12].coords.usrCoords[1] > 95) {
                translation()
            } else if (p[10].coords.usrCoords[2] > 95 || p[11].coords.usrCoords[2] > 95 || p[12].coords.usrCoords[2] > 95) {
                translation()
            } else {
                var lettresprim = ["A'", "B'", "C'", "D'", "E'", "", "", ""]
                ptrep1 = [p[10].coords.usrCoords[1], p[10].coords.usrCoords[2], lettresprim[point1]]

                ptrep2 = [p[11].coords.usrCoords[1], p[11].coords.usrCoords[2], lettresprim[point2]]
                ptrep3 = [p[12].coords.usrCoords[1], p[12].coords.usrCoords[2], lettresprim[point3]]






            }

        }


        a = [a1, a2];
        bb = [b1, b2];
        cc = [c1, c2];
        d = [d1, d2];
        ee = [e1, e2];



        //Solution
        document.getElementById("listsol" + col_sol).appendChild(newSol);
        newSol.setAttribute('id', "solexo" + boucle1);
        document.getElementById("solexo" + boucle1).innerHTML = textesol;





        var c = JXG.JSXGraph.initBoard(zz, {
            boundingbox: [0, 100, 100, 0],
            axis: false,
            showNavigation: false,
        });


        var p = []


        p[0] = c.create('point', a, {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = c.create('point', bb, {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = c.create('point', cc, {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = c.create('point', d, {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = c.create('point', ee, {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });

        //attribue la bonne lettres aux réponses
        bonnelettre()

        c.create('arrow', [p[element1], p[element2]], {
            strokeWidth: 3,
            Color: 'red',
        });
        // trace le vecteur

        //si les points ou droites existent alors les tracer

        if (ptrep1[2] !== "") {
            p[5] = c.create('point', [ptrep1[0], ptrep1[1]], {
                style: 2,             size:1,
                name: ptrep1[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep2[2] !== "") {
            p[6] = c.create('point', [ptrep2[0], ptrep2[1]], {
                style: 2,             size:1,
                name: ptrep2[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep3[2] !== "") {
            p[7] = c.create('point', [ptrep3[0], ptrep3[1]], {
                style: 2,             size:1,
                name: ptrep3[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep1[2] !== "" && ptrep2[2] !== "") {
            var li1 = c.create('line', [p[5], p[6]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "" && ptrep3[2] !== "") {
            var li2 = c.create('line', [p[5], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep2[2] !== "" && ptrep3[2] !== "") {
            var li3 = c.create('line', [p[6], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "") {
            var li4 = c.create('line', [p[5], p[pointorigine1]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (ptrep2[2] !== "") {
            var li5 = c.create('line', [p[6], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (ptrep3[2] !== "") {
            var li6 = c.create('line', [p[7], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (pointorigine1 !== 5 && pointorigine2 !== 5) {
            var li7 = c.create('line', [p[pointorigine1], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine1 !== 5 && pointorigine3 !== 5) {
            var li8 = c.create('line', [p[pointorigine1], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine2 !== 5 && pointorigine3 !== 5) {
            var li9 = c.create('line', [p[pointorigine2], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
    }






    function symaxiale() {

        if (segment == "oui") {

            textexo = "s<sub>" + lettres[element1] + lettres[element2] + "</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

            textesol = "s<sub>" + lettres[element1] + lettres[element2] + "</sub> ([" + lettre1 + lettre2 + lettre3 + "]) = ([" + lettre1b + lettre2b + lettre3b + "])<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

        } else {
            textexo = "s<sub>" + lettres[element1] + lettres[element2] + "</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + z + " class=\"stylegraph\" style=width:250px;height:250px;></div>";

            textesol = "s<sub>" + lettres[element1] + lettres[element2] + "</sub> (" + lettre1 + lettre2 + lettre3 + ") = (" + lettre1b + lettre2b + lettre3b + ")<div id=" + zz + " class=\"stylegraph\" style=width:250px;height:250px;></div>";



        }

        //Consigne
        document.getElementById("listex" + col_ex).appendChild(newExo);
        newExo.setAttribute('id', "exo" + boucle1);
        document.getElementById("exo" + boucle1).innerHTML = textexo;

        var b = JXG.JSXGraph.initBoard(z, {
            boundingbox: [0, 100, 100, 0],
            axis: false,

            showNavigation: false,
        });


        randomcoord()

        var p = []



        p[0] = b.create('point', [a1, a2], {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = b.create('point', [b1, b2], {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = b.create('point', [c1, c2], {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = b.create('point', [d1, d2], {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = b.create('point', [e1, e2], {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });

        p[5] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });
        p[6] = b.create('point', [50, 50], {
            style: 2,             size:1,
            name: '',
            Color: 'transparent',
        });



        if (JXG.toFixed(p[2].Dist(p[0]), 2) < 5) {
            symaxiale()
        } else if (JXG.toFixed(p[2].Dist(p[1]), 2) < 5) {
            symaxiale()
        } else if (JXG.toFixed(p[2].Dist(p[3]), 2) < 5) {
            symaxiale()
        } else if (JXG.toFixed(p[2].Dist(p[4]), 2) < 5) {
            symaxiale()
        } else {


            var li4 = b.create('line', [p[element1], p[element2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                Color: 'transparent',
            });







            t = b.create('transform', [li4], {
                type: 'reflect'
            }); // angle, rotation center


            p[10] = b.create('reflection', [p[point1], li4], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            });
            p[11] = b.create('reflection', [p[point2], li4], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            });          
            p[12] = b.create('reflection', [p[point3], li4], {
                style: 2,             size:1,
                name: "",
                Color: 'transparent',
            });




            if (p[10].coords.usrCoords[1] < 3 || p[11].coords.usrCoords[1] < 3 || p[12].coords.usrCoords[1] < 3) {
                symaxiale()
            } else if (p[10].coords.usrCoords[2] < 5 || p[11].coords.usrCoords[2] < 5 || p[12].coords.usrCoords[2] < 5) {

                symaxiale()
            } else if (p[10].coords.usrCoords[1] > 95 || p[11].coords.usrCoords[1] > 95 || p[12].coords.usrCoords[1] > 95) {
                symaxiale()
            } else if (p[10].coords.usrCoords[2] > 95 || p[11].coords.usrCoords[2] > 95 || p[12].coords.usrCoords[2] > 95) {
                symaxiale()
            } else {

                var lettresprim = ["A'", "B'", "C'", "D'", "E'", "", "", ""]
                ptrep1 = [p[10].coords.usrCoords[1], p[10].coords.usrCoords[2], lettresprim[point1]]

                ptrep2 = [p[11].coords.usrCoords[1], p[11].coords.usrCoords[2], lettresprim[point2]]
                ptrep3 = [p[12].coords.usrCoords[1], p[12].coords.usrCoords[2], lettresprim[point3]]


            }
        }




        a = [a1, a2];
        bb = [b1, b2];
        cc = [c1, c2];
        d = [d1, d2];
        ee = [e1, e2];





        //Solution
        document.getElementById("listsol" + col_sol).appendChild(newSol);
        newSol.setAttribute('id', "solexo" + boucle1);
        document.getElementById("solexo" + boucle1).innerHTML = textesol;

        bonnelettre()

        var c = JXG.JSXGraph.initBoard(zz, {
            boundingbox: [0, 100, 100, 0],
            axis: false,
            showNavigation: false,
        });


        var p = []



        p[0] = c.create('point', a, {
            style: 2,             size:1,
            name: 'A',
            Color: '#000000',
        });
        p[1] = c.create('point', bb, {
            style: 2,             size:1,
            name: 'B',
            Color: '#000000',
        });
        p[2] = c.create('point', cc, {
            style: 2,             size:1,
            name: 'C',
            Color: '#000000',
        });
        p[3] = c.create('point', d, {
            style: 2,             size:1,
            name: 'D',
            Color: '#000000',
        });
        p[4] = c.create('point', ee, {
            style: 2,             size:1,
            name: 'E',
            Color: '#000000',
        });



        var li10 = c.create('line', [p[element1], p[element2]], {
            straightFirst: true,
            straightLast: true,
            strokeWidth: 2,
            Color: '#000000',
        });


        if (ptrep1[2] !== "") {
            p[5] = c.create('point', [ptrep1[0], ptrep1[1]], {
                style: 2,             size:1,
                name: ptrep1[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep2[2] !== "") {
            p[6] = c.create('point', [ptrep2[0], ptrep2[1]], {
                style: 2,             size:1,
                name: ptrep2[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep3[2] !== "") {
            p[7] = c.create('point', [ptrep3[0], ptrep3[1]], {
                style: 2,             size:1,
                name: ptrep3[2],
                Color: 'green',
                label: {
                    offset: [5, -5],
                    anchorY: 'left',
                    anchorX: 'left',
                }
            });
        }
        if (ptrep1[2] !== "" && ptrep2[2] !== "") {
            var li1 = c.create('line', [p[5], p[6]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "" && ptrep3[2] !== "") {
            var li2 = c.create('line', [p[5], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep2[2] !== "" && ptrep3[2] !== "") {
            var li3 = c.create('line', [p[6], p[7]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: 'green',
            });
        }

        if (ptrep1[2] !== "") {
            var li4 = c.create('line', [p[5], p[pointorigine1]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (ptrep2[2] !== "") {
            var li5 = c.create('line', [p[6], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (ptrep3[2] !== "") {
            var li6 = c.create('line', [p[7], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                dash: 2,
                strokeColor: 'green',
            });
        }
        if (pointorigine1 !== 5 && pointorigine2 !== 5) {
            var li7 = c.create('line', [p[pointorigine1], p[pointorigine2]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine1 !== 5 && pointorigine3 !== 5) {
            var li8 = c.create('line', [p[pointorigine1], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }
        if (pointorigine2 !== 5 && pointorigine3 !== 5) {
            var li9 = c.create('line', [p[pointorigine2], p[pointorigine3]], {
                straightFirst: false,
                straightLast: false,
                strokeWidth: 2,
                strokeColor: '#000000',
            });
        }

    }

    //prendre coordonnées des 5 points

    function randomcoord() {
        a1 = Math.floor(Math.random() * 20 + 25);
        a2 = Math.floor(Math.random() * 20 + 55);
        b1 = Math.floor(Math.random() * 20 + 25);
        b2 = Math.floor(Math.random() * 20 + 25);
        c1 = Math.floor(Math.random() * 30 + 35);
        c2 = Math.floor(Math.random() * 60 + 35);
        d1 = Math.floor(Math.random() * 20 + 55);
        d2 = Math.floor(Math.random() * 20 + 55);
        e1 = Math.floor(Math.random() * 20 + 55);
        e2 = Math.floor(Math.random() * 20 + 25);
    }

    //attribue la bonne lettre à chaque réponse 

    function bonnelettre() {
        if (ptrep1[2] == "A'") {
            pointorigine1 = 0
        };
        if (ptrep1[2] == "B'") {
            pointorigine1 = 1
        };
        if (ptrep1[2] == "C'") {
            pointorigine1 = 2
        };
        if (ptrep1[2] == "D'") {
            pointorigine1 = 3
        };
        if (ptrep1[2] == "E'") {
            pointorigine1 = 4
        };
        if (ptrep1[2] == '') {
            pointorigine1 = 5
        };
        if (ptrep2[2] == "A'") {
            pointorigine2 = 0
        };
        if (ptrep2[2] == "B'") {
            pointorigine2 = 1
        };
        if (ptrep2[2] == "C'") {
            pointorigine2 = 2
        };
        if (ptrep2[2] == "D'") {
            pointorigine2 = 3
        };
        if (ptrep2[2] == "E'") {
            pointorigine2 = 4
        };
        if (ptrep2[2] == '') {
            pointorigine2 = 5
        };

        if (ptrep3[2] == "A'") {
            pointorigine3 = 0
        };
        if (ptrep3[2] == "B'") {
            pointorigine3 = 1
        };
        if (ptrep3[2] == "C'") {
            pointorigine3 = 2
        };
        if (ptrep3[2] == "D'") {
            pointorigine3 = 3
        };
        if (ptrep3[2] == "E'") {
            pointorigine3 = 4
        };
        if (ptrep3[2] == '') {
            pointorigine3 = 5
        };
    }

    function preparation() {

        do {
            element1 = Math.floor(Math.random() * 5);
            element2 = Math.floor(Math.random() * 5);
        }
        while (element1 == element2) //prendre d'un nombre différent pour tracer axe
        //element3=Math.floor(Math.random()*180);  pour la rotation


        points = [0, 1, 2, 3, 4, 6] // de 0 à 4 lettre ABCDE 6 6 pour faire neutre
        points.splice(Math.floor(Math.random() * 7), 1);
        points.splice(Math.floor(Math.random() * 6), 1);
        points.splice(Math.floor(Math.random() * 5), 1);



        point1 = points[0]; //première lettre
        point2 = points[1];
        point3 = points[2];

        lettres = ["A", "B", "C", "D", "E", "", "", ""];

        lettre1 = lettres[point1];
        lettre2 = lettres[point2];
        lettre3 = lettres[point3];

        lettre1b = lettre1;
        lettre2b = lettre2;
        lettre3b = lettre3;
        if (lettre1b !== "") {
            lettre1b = lettre1b + "'";
        }
        if (lettre2b !== "") {
            lettre2b = lettre2b + "'";
        }
        if (lettre3b !== "") {
            lettre3b = lettre3b + "'";
        }

        segment = "non";
        //insérer crochet pour les segments

        if (lettre1 == "" && lettre2 !== "" && lettre3 !== "") {
            segment = "oui"
        }
        if (lettre1 !== "" && lettre2 == "" && lettre3 !== "") {
            segment = "oui"
        }
        if (lettre1 !== "" && lettre2 !== "" && lettre3 == "") {
            segment = "oui"
        }

    }


}

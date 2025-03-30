//Variable

var nombre_colonne_ex=2;
var nombre_colonne_sol=2;
var nombre_exo=4;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML="Trace les rotations.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML="Rotation - Exercices";
	
//Crée titre Solutions
document.getElementById("solution").innerHTML="Rotation - Solutions";
document.getElementById("solution").style.display="block";

//Constante
	
//Créer le nombre de colonne que contiendra le tableau exercice
var nb_col_ex=nombre_colonne_ex;

for(i=1;i<=nombre_colonne_ex;i++){
var newDiv = document.createElement("div");  
	document.getElementById("tableau_exo").appendChild(newDiv);
	newDiv.setAttribute('class', "colonne");
	newDiv.setAttribute('id', "colex"+i);
	
var newList = document.createElement("ol");  
	document.getElementById("colex"+i).appendChild(newList);
	newList.setAttribute('class', "numero_exo");
	newList.setAttribute('id', "listex"+i);
}

//Créer le nombre de colonne que contiendra le tableau solution
var nb_col_sol=nombre_colonne_sol;

for(i=1;i<=nombre_colonne_sol;i++){
	
var newDiv = document.createElement("div");  
	document.getElementById("tableau_solution").appendChild(newDiv);
	newDiv.setAttribute('class', "colonne");
	newDiv.setAttribute('id', "colsol"+i);
	
var newList = document.createElement("ol");  
	document.getElementById("colsol"+i).appendChild(newList);
	newList.setAttribute('class', "numero_sol");
	newList.setAttribute('id', "listsol"+i);
}



	        donnee_symcentrale_triangle = [];
	        nb_ttriangle = 0;

	        donnee_symcentrale_quadri = [];
	        nb_tquadri = 0;
	        z = 0;
            zz=100;
	        at = 0; //angle triangle
	        aq = 0; //angle quadrilatère
	        var angletri = [];
	        var anglequadri = [];


generation_exo();

//Succession exercice
function generation_exo(){
	
	//Reset contenu colonners
	for(i=1;i<=nb_col_ex;i++){
		document.getElementById("listex"+i).innerHTML="";
	}	
	
	for(i=1;i<=nb_col_sol;i++){
		document.getElementById("listsol"+i).innerHTML="";
	}
	var frequence_ex=[1,1,2,2];
	shuffle(frequence_ex);
	numero_exo = 0;

	//Génération de chaque exo
	for(boucle1=0;boucle1<nombre_exo;boucle1++){
		
		var col_ex=Math.floor((boucle1)/Math.ceil(nombre_exo/nb_col_ex))+1;
		var col_sol=Math.floor((boucle1)/Math.ceil(nombre_exo/nb_col_sol))+1;
			
		
		
		if (numero_exo == frequence_ex.length) {
			numero_exo = 0;
			shuffle(frequence_ex);
		}
		cas_exo = frequence_ex[numero_exo];
		if(cas_exo==1){
		cas1();
		}
		else if(cas_exo==2){
		cas2();
		}
		
		numero_exo++;

	}


//Fonctions exercices

	//Fonctions cas1
	function cas1(){
        

	            var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	            shuffle(alphabet);
	            rotation = Math.floor(Math.random() * 45+3) * 5 * Math.pow(-1, Math.floor(Math.random() * 2));

	            centre = alphabet[0];
	            triangle = [alphabet[2], alphabet[3], alphabet[4]];
	            triangle.sort();
	            imagetriangle = [alphabet[6], alphabet[7], alphabet[8]];

	            //Création des points de bases (ABC = triangle) et le Centre X
	            do {
	                var
	                    xa = Math.floor(Math.random() * 115 + 10);
	                ya = Math.floor(Math.random() * 125 + 125);

	                xb = Math.floor(Math.random() * 125 + 115);
	                yb = Math.floor(Math.random() * 125 + 125);

	                xc = Math.floor(Math.random() * 240);
	                yc = Math.floor(Math.random() * 125);

	                xx = 250;
	                yx = 250;

	                distAB = Math.sqrt(Math.pow((xa - xb), 2) + Math.pow((ya - yb), 2));
	                distAC = Math.sqrt(Math.pow((xa - xc), 2) + Math.pow((ya - yc), 2));
	                distBC = Math.sqrt(Math.pow((xc - xb), 2) + Math.pow((yc - yb), 2));
	                distAX = Math.sqrt(Math.pow((xa - xx), 2) + Math.pow((ya - yx), 2));
	                distBX = Math.sqrt(Math.pow((xx - xb), 2) + Math.pow((yx - yb), 2));
	                distCX = Math.sqrt(Math.pow((xc - xx), 2) + Math.pow((yc - yx), 2));

	                perimetre = distAB + distAC + distBC;
	                aire = Math.sqrt((perimetre / 2) * (perimetre / 2 - distAB) * (perimetre / 2 - distAC) * (perimetre / 2 - distBC));

	            } while (distAB < 100 || distAC < 100 || distBC < 100 || aire < 4500 || distAX > 600 || distBX > 600 || distCX > 600);

	            pile = Math.floor(Math.random() * 4); //Choix déplacement
	            alea = Math.floor(Math.random() * 3); //Choix Centre=Sommet
	            if (pile == 0) {
	                ttriangley = 0;
	                ttrianglex = 250;
	                dessine_centre = true;
	                if (alea == 0) {
	                    xx = xa + ttrianglex;
	                    yx = ya + ttriangley;
	                    centre = triangle[0];
	                    dessine_centre = false;
	                }
	            } else if (pile == 1) {
	                ttriangley = 250;
	                ttrianglex = 250;
	                dessine_centre = true;
	                if (alea == 0 && xc < 125) {
	                    xx = xc + ttrianglex;
	                    yx = yc + ttriangley;
	                    centre = triangle[2];
	                    dessine_centre = false;
	                }
	            } else if (pile == 2) {
	                ttriangley = 250;
	                ttrianglex = 0;
	                dessine_centre = true;
	                if (alea == 0 && xc > 125) {
	                    xx = xc + ttrianglex;
	                    yx = yc + ttriangley;
	                    centre = triangle[2];
	                    dessine_centre = false;
	                }
	            } else {
	                ttriangley = 0;
	                ttrianglex = 0;
	                dessine_centre = true;
	                if (alea == 0) {
	                    xx = xb + ttrianglex;
	                    yx = yb + ttriangley;
	                    centre = triangle[1];
	                    dessine_centre = false;
	                }
	            }

	            xa += ttrianglex;
	            ya += ttriangley;

	            xb += ttrianglex;
	            yb += ttriangley;

	            xc += ttrianglex;
	            yc += ttriangley;

	            //consigne//ajoute le + si l'angle est positif
	            if (rotation > 0) {
	                textexo="r <sub>" + centre + ", +" + rotation + "°</sub> (" + triangle[0] + triangle[1] + triangle[2] + ") = " + imagetriangle[0] + imagetriangle[1] + imagetriangle[2] + "<div id=" + z + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            } else {
	                textexo="r <sub>" + centre + " , " + rotation + "°</sub> (" + triangle[0] + triangle[1] + triangle[2] + ") = " + imagetriangle[0] + imagetriangle[1] + imagetriangle[2] + "<div id=" + z + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            }

        
        		//Consigne
		var newExo = document.createElement("li");  
		document.getElementById("listex"+col_ex).appendChild(newExo);
		newExo.setAttribute('id', "exo"+boucle1);
		document.getElementById("exo"+boucle1).innerHTML=textexo;		
        
        

	            var b = JXG.JSXGraph.initBoard(z, {
	                boundingbox: [-60, 560, 560, -60],
	                axis: false,
	                showNavigation: false,
	            });

	            //Dessin Triangle	
	            var
	                A = b.create('point', [xa, ya], {
	                    name: triangle[0],
	                    size: 1,
	                    fillColor: 'black',
	                    strokeColor: 'black',
	                    label: {
	                        offset: [-15, 0]
	                    }
	                });
	            B = b.create('point', [xb, yb], {
	                name: triangle[1],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });
	            C = b.create('point', [xc, yc], {
	                name: triangle[2],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [0, -10]
	                }
	            });
	            triangleabc = b.createElement('polygon', [A, B, C], {
	                fillColor: 'white',
	                borders: {
	                    strokeWidth: 2,
	                    strokeColor: 'black'
	                }
	            });

	            //Dessin centre
	            if (dessine_centre) {
	                visiblex = true;
	                namex = centre;
	            } else {
	                visiblex = false;
	                namex = "";
	            }
	            X = b.create('point', [xx, yx], {
	                name: namex,
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                visible: visiblex,
	                label: {
	                    offset: [10, 0]
	                }
	            });


	            z = z + 1;

	            donnee_symcentrale_triangle.push([[xa, ya], [xb, yb], [xc, yc], [xx, yx], triangle[0], triangle[1], triangle[2], centre, imagetriangle[0], imagetriangle[1], imagetriangle[2], namex, visiblex]);

	            if (angletri[at] > 0) {
	                textesol="r <sub>" + donnee_symcentrale_triangle[nb_ttriangle][7] + ", +" + rotation + "°</sub> (" + donnee_symcentrale_triangle[nb_ttriangle][4] + donnee_symcentrale_triangle[nb_ttriangle][5] + donnee_symcentrale_triangle[nb_ttriangle][6] + ") = " + donnee_symcentrale_triangle[nb_ttriangle][8] + donnee_symcentrale_triangle[nb_ttriangle][9] + donnee_symcentrale_triangle[nb_ttriangle][10] + "<div id=" + zz + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            } else {
	                textesol="r <sub>" + donnee_symcentrale_triangle[nb_ttriangle][7] + ", " + rotation + "°</sub> (" + donnee_symcentrale_triangle[nb_ttriangle][4] + donnee_symcentrale_triangle[nb_ttriangle][5] + donnee_symcentrale_triangle[nb_ttriangle][6] + ") = " + donnee_symcentrale_triangle[nb_ttriangle][8] + donnee_symcentrale_triangle[nb_ttriangle][9] + donnee_symcentrale_triangle[nb_ttriangle][10] + "<div id=" + zz + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            }

        
        	            xa = donnee_symcentrale_triangle[nb_ttriangle][0][0];
	            ya = donnee_symcentrale_triangle[nb_ttriangle][0][1];

	            xb = donnee_symcentrale_triangle[nb_ttriangle][1][0];
	            yb = donnee_symcentrale_triangle[nb_ttriangle][1][1];

	            xc = donnee_symcentrale_triangle[nb_ttriangle][2][0];
	            yc = donnee_symcentrale_triangle[nb_ttriangle][2][1];

	            xx = donnee_symcentrale_triangle[nb_ttriangle][3][0];
	            yx = donnee_symcentrale_triangle[nb_ttriangle][3][1];
        
        		//Solution
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;

	            var b = JXG.JSXGraph.initBoard(zz, {
	                boundingbox: [-60, 560, 560, -60],
	                axis: false,
	                showNavigation: false,
	            });

	            //Dessin Triangle	
	            var
	                A = b.create('point', [xa, ya], {
	                    name: donnee_symcentrale_triangle[nb_ttriangle][4],
	                    size: 1,
	                    fillColor: 'black',
	                    strokeColor: 'black',
	                    label: {
	                        offset: [-15, 0]
	                    }
	                });
	            B = b.create('point', [xb, yb], {
	                name: donnee_symcentrale_triangle[nb_ttriangle][5],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });
	            C = b.create('point', [xc, yc], {
	                name: donnee_symcentrale_triangle[nb_ttriangle][6],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [0, -10]
	                }
	            });
	            triangleabc = b.createElement('polygon', [A, B, C], {
	                fillColor: 'white',
	                borders: {
	                    strokeWidth: 2,
	                    strokeColor: 'black'
	                }
	            });

	            //Dessin centre
	            X = b.create('point', [xx, yx], {
	                name: donnee_symcentrale_triangle[nb_ttriangle][11],
	                size: 1,
	                visible: donnee_symcentrale_triangle[nb_ttriangle][12],
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });


	            //Symetrie Centrale
	            t = b.create('transform', [rotation * Math.PI / 180, X], {
	                type: 'rotate'
	            });
        
	            Ap = b.create('point', [A, t], {
	                name: donnee_symcentrale_triangle[nb_ttriangle][8],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [10, 0]
	                }
	            });
	            Bp = b.create('point', [B, t], {
	                name: donnee_symcentrale_triangle[nb_ttriangle][9],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [-15, 0]
	                }
	            });
	            Cp = b.create('point', [C, t], {
	                name: donnee_symcentrale_triangle[nb_ttriangle][10],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [0, 10]
	                }
	            });
	            imagetriangle = b.createElement('polygon', [Ap, Bp, Cp], {
	                fillColor: 'white',
	                borders: {
	                    strokeWidth: 2,
	                    strokeColor: 'green'
	                }
	            });


           
	            AAp = b.create('line', [A, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            BBp = b.create('line', [B, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            CCp = b.create('line', [C, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            AAp = b.create('line', [Ap, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            BBp = b.create('line', [Bp, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            CCp = b.create('line', [Cp, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
                             
            

	            if (angletri[at] > 0) {
	                var arc1 = b.create('arc', [X, A, Ap], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc1 = b.create('arc', [X, Ap, A], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }
	            if (angletri[at] > 0) {
	                var arc2 = b.create('arc', [X, B, Bp], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc2 = b.create('arc', [X, Bp, B], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }
	            if (angletri[at] > 0) {
	                var arc3 = b.create('arc', [X, C, Cp], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc3 = b.create('arc', [X, Cp, C], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }

	            nb_ttriangle += 1;
	            zz = zz + 1;
	            at = at + 1;

	        
		

		

	}	
	
	//Fonctions cas1
	function cas2(){
		
	
		





	            var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	            shuffle(alphabet);

	            centre = alphabet[0];
	            quadri = [alphabet[2], alphabet[3], alphabet[4], alphabet[5]];
	            quadri.sort();
	            imagequadri = [alphabet[6], alphabet[7], alphabet[8], alphabet[9]];

rotation = Math.floor(Math.random() * 45+3) * 5 * Math.pow(-1, Math.floor(Math.random() * 2))


	            //Création des points de bases (ABC = quadri)
	            do {
	                var
	                    xa = Math.floor(Math.random() * 115);
	                ya = Math.floor(Math.random() * 120 + 120);

	                xb = Math.floor(Math.random() * 120 + 120);
	                yb = Math.floor(Math.random() * 120 + 120);

	                xc = Math.floor(Math.random() * 120 + 120);
	                yc = Math.floor(Math.random() * 115);

	                xd = Math.floor(Math.random() * 115);
	                yd = Math.floor(Math.random() * 115);

	                //Centre
	                xx = 250;
	                yx = 250;

	                distAB = Math.sqrt(Math.pow((xa - xb), 2) + Math.pow((ya - yb), 2));
	                distCD = Math.sqrt(Math.pow((xd - xc), 2) + Math.pow((yd - yc), 2));
	                distBC = Math.sqrt(Math.pow((xc - xb), 2) + Math.pow((yc - yb), 2));
	                distDA = Math.sqrt(Math.pow((xd - xa), 2) + Math.pow((yd - ya), 2));
	                distAC = Math.sqrt(Math.pow((xc - xa), 2) + Math.pow((yc - ya), 2));
	                distAX = Math.sqrt(Math.pow((xa - xx), 2) + Math.pow((ya - yx), 2));
	                distBX = Math.sqrt(Math.pow((xx - xb), 2) + Math.pow((yx - yb), 2));
	                distCX = Math.sqrt(Math.pow((xc - xx), 2) + Math.pow((yc - yx), 2));
	                distDX = Math.sqrt(Math.pow((xd - xx), 2) + Math.pow((yd - yx), 2));

	                perimetre = distAB + distCD + distBC + distDA;
	                aire = 2 * Math.sqrt((perimetre / 2) * (perimetre / 2 - distAB) * (perimetre / 2 - distAC) * (perimetre / 2 - distBC));

	                //Angle

	                vxAB = (xa - xb);
	                vyAB = (ya - yb);

	                vxBC = (xc - xb);
	                vyBC = (yc - yb);

	                vxCD = (xc - xd);
	                vyCD = (yc - yd);

	                vxDA = (xa - xd);
	                vyDA = (ya - yd);

	                AngleDAB = 180 * Math.acos((vxAB * vxDA + vyAB * vyDA) / (Math.sqrt(vxAB * vxAB + vyAB * vyAB) * Math.sqrt(vxDA * vxDA + vyDA * vyDA))) / Math.PI;
	                AngleABC = 180 * Math.acos((vxAB * vxBC + vyAB * vyBC) / (Math.sqrt(vxAB * vxAB + vyAB * vyAB) * Math.sqrt(vxBC * vxBC + vyBC * vyBC))) / Math.PI;
	                AngleBCD = 180 * Math.acos((vxBC * vxCD + vyBC * vyCD) / (Math.sqrt(vxBC * vxBC + vyBC * vyBC) * Math.sqrt(vxCD * vxCD + vyCD * vyCD))) / Math.PI;
	                AngleCDA = 180 * Math.acos((vxCD * vxDA + vyCD * vyDA) / (Math.sqrt(vxCD * vxCD + vyCD * vyCD) * Math.sqrt(vxDA * vxDA + vyDA * vyDA))) / Math.PI;

	            } while (distAB < 100 || distAC < 100 || distBC < 100 || aire < 10000 || AngleDAB > 125 || AngleABC > 125 || AngleBCD > 125 || AngleCDA > 125 || distAX > 600 || distBX > 600 || distCX > 600 || distDX > 600);


	            //Glissement si translation emmene hors du cadre
	            pile = Math.floor(Math.random() * 4); //Choix placement quadri
	            alea = Math.floor(Math.random() * 3); //Choix Centre=Sommet
	            if (pile == 0) {
	                tquadriy = 0;
	                tquadrix = 250;
	                dessine_centre = true;
	                if (alea == 0) {
	                    xx = xa + tquadrix;
	                    yx = ya + tquadriy;
	                    centre = quadri[0];
	                    dessine_centre = false;
	                }
	            } else if (pile == 1) {
	                tquadriy = 250;
	                tquadrix = 250;
	                dessine_centre = true;
	                if (alea == 0) {
	                    xx = xd + tquadrix;
	                    yx = yd + tquadriy;
	                    centre = quadri[3];
	                    dessine_centre = false;
	                }
	            } else if (pile == 2) {
	                tquadriy = 250;
	                tquadrix = 0;
	                dessine_centre = true;
	                if (alea == 0) {
	                    xx = xc + tquadrix;
	                    yx = yc + tquadriy;
	                    centre = quadri[2];
	                    dessine_centre = false;
	                }
	            } else {
	                tquadriy = 0;
	                tquadrix = 0;
	                dessine_centre = true;
	                if (alea == 0) {
	                    xx = xb + tquadrix;
	                    yx = yb + tquadriy;
	                    centre = quadri[1];
	                    dessine_centre = false;
	                }
	            }

	            xa += tquadrix;
	            ya += tquadriy;

	            xb += tquadrix;
	            yb += tquadriy;

	            xc += tquadrix;
	            yc += tquadriy;

	            xd += tquadrix;
	            yd += tquadriy;

	            if (rotation > 0) {
	                textexo="r <sub>" + centre + ", +" + rotation + "°</sub> (" + quadri[0] + quadri[1] + quadri[2] + quadri[3] + ") = " + imagequadri[0] + imagequadri[1] + imagequadri[2] + imagequadri[3] + "<div id=" + z + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            } else {
	                textexo="r <sub>" + centre + ", " + rotation + "°</sub> (" + quadri[0] + quadri[1] + quadri[2] + quadri[3] + ") = " + imagequadri[0] + imagequadri[1] + imagequadri[2] + imagequadri[3] + "<div id=" + z + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            }

        		//Consigne
		var newExo = document.createElement("li");  
		document.getElementById("listex"+col_ex).appendChild(newExo);
		newExo.setAttribute('id', "exo"+boucle1);
		document.getElementById("exo"+boucle1).innerHTML=textexo;	

	            var b = JXG.JSXGraph.initBoard(z, {
	                boundingbox: [-60, 560, 560, -60],
	                axis: false,
	                showNavigation: false,
	            });

	            //Dessin quadri	
	            var
	                A = b.create('point', [xa, ya], {
	                    name: quadri[0],
	                    size: 1,
	                    fillColor: 'black',
	                    strokeColor: 'black',
	                    label: {
	                        offset: [-15, 0]
	                    }
	                });
	            B = b.create('point', [xb, yb], {
	                name: quadri[1],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });
	            C = b.create('point', [xc, yc], {
	                name: quadri[2],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });
	            D = b.create('point', [xd, yd], {
	                name: quadri[3],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [-15, 0]
	                }
	            });
	            quadriabc = b.createElement('polygon', [A, B, C, D], {
	                fillColor: 'white',
	                borders: {
	                    strokeWidth: 2,
	                    strokeColor: 'black'
	                }
	            });

	            //Dessin centre
	            if (dessine_centre) {
	                visiblex = true;
	                namex = centre;
	            } else {
	                visiblex = false;
	                namex = "";
	            }
	            X = b.create('point', [xx, yx], {
	                name: namex,
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                visible: visiblex,
	                label: {
	                    offset: [10, 0]
	                }
	            });

	   
	            z = z + 1;


	            donnee_symcentrale_quadri.push([[xa, ya], [xb, yb], [xc, yc], [xd, yd], [xx, yx], quadri[0], quadri[1], quadri[2], quadri[3], centre, imagequadri[0], imagequadri[1], imagequadri[2], imagequadri[3], namex, visiblex]);


	            if (anglequadri[aq] > 0) {
	                textesol="r <sub>" + donnee_symcentrale_quadri[nb_tquadri][9] + ", +" + rotation+ "°</sub> (" + donnee_symcentrale_quadri[nb_tquadri][5] + donnee_symcentrale_quadri[nb_tquadri][6] + donnee_symcentrale_quadri[nb_tquadri][7] + donnee_symcentrale_quadri[nb_tquadri][8] + ") = " + donnee_symcentrale_quadri[nb_tquadri][10] + donnee_symcentrale_quadri[nb_tquadri][11] + donnee_symcentrale_quadri[nb_tquadri][12] + donnee_symcentrale_quadri[nb_tquadri][13] + "<div id=" + zz + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            } else {
	                textesol="r <sub>" + donnee_symcentrale_quadri[nb_tquadri][9] + ", " + rotation + "°</sub> (" + donnee_symcentrale_quadri[nb_tquadri][5] + donnee_symcentrale_quadri[nb_tquadri][6] + donnee_symcentrale_quadri[nb_tquadri][7] + donnee_symcentrale_quadri[nb_tquadri][8] + ") = " + donnee_symcentrale_quadri[nb_tquadri][10] + donnee_symcentrale_quadri[nb_tquadri][11] + donnee_symcentrale_quadri[nb_tquadri][12] + donnee_symcentrale_quadri[nb_tquadri][13] + "<div id=" + zz + " class=\"stylegraph\" style=width:400px;height:370px;></div>";
	            }

		//Solution
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;

	            xa = donnee_symcentrale_quadri[nb_tquadri][0][0];
	            ya = donnee_symcentrale_quadri[nb_tquadri][0][1];

	            xb = donnee_symcentrale_quadri[nb_tquadri][1][0];
	            yb = donnee_symcentrale_quadri[nb_tquadri][1][1];

	            xc = donnee_symcentrale_quadri[nb_tquadri][2][0];
	            yc = donnee_symcentrale_quadri[nb_tquadri][2][1];

	            xd = donnee_symcentrale_quadri[nb_tquadri][3][0];
	            yd = donnee_symcentrale_quadri[nb_tquadri][3][1];

	            xx = donnee_symcentrale_quadri[nb_tquadri][4][0];
	            yx = donnee_symcentrale_quadri[nb_tquadri][4][1];

	            var b = JXG.JSXGraph.initBoard(zz, {
	                boundingbox: [-60, 560, 560, -60],
	                axis: false,
	                showNavigation: false,
	            });

	            //Dessin quadri	
	            var
	                A = b.create('point', [xa, ya], {
	                    name: donnee_symcentrale_quadri[nb_tquadri][5],
	                    size: 1,
	                    fillColor: 'black',
	                    strokeColor: 'black',
	                    label: {
	                        offset: [-15, 0]
	                    }
	                });
	            B = b.create('point', [xb, yb], {
	                name: donnee_symcentrale_quadri[nb_tquadri][6],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });
	            C = b.create('point', [xc, yc], {
	                name: donnee_symcentrale_quadri[nb_tquadri][7],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });
	            D = b.create('point', [xd, yd], {
	                name: donnee_symcentrale_quadri[nb_tquadri][8],
	                size: 1,
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [-15, 0]
	                }
	            });
	            quadriabc = b.createElement('polygon', [A, B, C, D], {
	                fillColor: 'white',
	                borders: {
	                    strokeWidth: 2,
	                    strokeColor: 'black'
	                }
	            });

	            //Dessin centre
	            X = b.create('point', [xx, yx], {
	                name: donnee_symcentrale_quadri[nb_tquadri][14],
	                size: 1,
	                visible: donnee_symcentrale_quadri[nb_tquadri][14],
	                fillColor: 'black',
	                strokeColor: 'black',
	                label: {
	                    offset: [10, 0]
	                }
	            });

	            //Symetrie Centrale
	            t = b.create('transform', [rotation * Math.PI / 180, X], {
	                type: 'rotate'
	            });
	            Ap = b.create('point', [A, t], {
	                name: donnee_symcentrale_quadri[nb_tquadri][10],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [10, 0]
	                }
	            });
	            Bp = b.create('point', [B, t], {
	                name: donnee_symcentrale_quadri[nb_tquadri][11],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [-15, 0]
	                }
	            });
	            Cp = b.create('point', [C, t], {
	                name: donnee_symcentrale_quadri[nb_tquadri][12],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [0, 10]
	                }
	            });
	            Dp = b.create('point', [D, t], {
	                name: donnee_symcentrale_quadri[nb_tquadri][13],
	                size: 1,
	                Color: 'green',
	                label: {
	                    Color: 'green',
	                    offset: [0, 10]
	                }
	            });
	            imagequadri = b.createElement('polygon', [Ap, Bp, Cp, Dp], {
	                fillColor: 'white',
	                borders: {
	                    strokeWidth: 2,
	                    strokeColor: 'green'
	                }
	            });


              
	            AAp = b.create('line', [A, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            BBp = b.create('line', [B, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            CCp = b.create('line', [C, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            DDp = b.create('line', [D, X], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            AAp = b.create('line', [X, Ap], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            BBp = b.create('line', [X, Bp], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            CCp = b.create('line', [X, Cp], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
	            DDp = b.create('line', [X, Dp], {
	                straightFirst: false,
	                straightLast: false,
	                strokeWidth: 1,
	                dash: 3,
	                Color: 'green',
	            });
                    

	            if (anglequadri[aq] > 0) {
	                var arc1 = b.create('arc', [X, A, Ap], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc1 = b.create('arc', [X, Ap, A], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }
	            if (anglequadri[aq] > 0) {
	                var arc2 = b.create('arc', [X, B, Bp], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc2 = b.create('arc', [X, Bp, B], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }
	            if (anglequadri[aq] > 0) {
	                var arc3 = b.create('arc', [X, C, Cp], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc3 = b.create('arc', [X, Cp, C], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }
                	            if (anglequadri[aq] > 0) {
	                var arc4 = b.create('arc', [X, D, Dp], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            } else {
	                var arc4 = b.create('arc', [X, Dp, D], {
	                    dash: 2,
	                    strokeColor: 'green',
	                });
	            }
	            nb_tquadri += 1;
	            zz = zz + 1;
	            aq = aq + 1;
	        }
           }
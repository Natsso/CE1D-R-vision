//Variable

var nombre_colonne_ex=1;
var nombre_colonne_sol=1;
var nombre_exo=12;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML="Décode les expressions suivantes.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML="Décodage - Exercices";
	
//Crée titre Solutions
document.getElementById("solution").innerHTML="Décodage - Solutions";
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

    		
		textexo="";
        sol=[];
	//Génération de chaque exo
	for(boucle1=0;boucle1<nombre_exo;boucle1++){
		
		var col_ex=Math.floor((boucle1)/Math.ceil(nombre_exo/nb_col_ex))+1;
		var col_sol=Math.floor((boucle1)/Math.ceil(nombre_exo/nb_col_sol))+1;
			

        
cas1();

        		//Changement - par  –
		textexo=textexo.replace(/\-/gi,"–");
		textesol=textesol.replace(/\-/gi,"–");
        
        		//Consigne
		var newExo = document.createElement("li");  
		document.getElementById("listex"+col_ex).appendChild(newExo);
		newExo.setAttribute('id', "exo"+boucle1);
		document.getElementById("exo"+boucle1).innerHTML=textexo+" = ............. =  .................................................................................";		
		
		//Solution
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;
	}


//Fonctions exercices


        	function cas1(){
	            // a,b valeur de départ
	            //a1 pour écrire l'opposé de a
	            //b1 pour écrire l'opposé de b
	            //b2 pour ajouter la parenthèse si négatif

	            op = Math.floor(Math.random() * 13);
	            expo = Math.floor(Math.random() * 5); // définir si a est négatif ou positif
	            a = Math.floor(Math.random() * 15 + 1) ;
	            b = Math.floor(Math.random() * 15 + 1);
	            c = Math.floor(Math.random() * 15 + 1) ;


	            if (a < 0) {
	                a1 = "l'opposé de " + -a;
	                a2 = "(-" + -a + ")";
	            } else {
	                a1 = a;
	                a2 = a;
	            }
	            if (b < 0) {
	                b1 = "l'opposé de " + -b;
	                b2 = "(-" + -b + ")";
	            } else {
	                b1 = b;
	                b2 = b;
	            }
	            if (c < 0) {
	                c1 = "l'opposé de " + -c;
	                c2 = "(-" + -c + ")";
	            } else {
	                c1 = c;
	                c2 = c;
	            }
	            //a+b
	            if (op == 0) {
	                textexo=a + " + " + b2 + " ";
	                rep = a + b
	                textesol=a + " + " + b2 + " = <span class=\"sol\"> " + rep + " =  la somme de " + a1 + " et de " + b1 + "<\span>";
	            }
	            //a-b
	            if (op == 1) {
	                textexo=a + " - " + b2 + " ";
	                rep = a - b
	                textesol=a + " - " + b2 + " = <span class=\"sol\"> " + rep + " = la différence entre " + a1 + " et " + b1+ "<\span>";
	            }
	            //a.b
	            if (op == 2) {
	                textexo=a + " . " + b2 + " ";
	                rep = a * b
	                textesol=a + " . " + b2 + " = <span class=\"sol\"> " + rep + " = le produit de " + a1 + " par " + b1+ "<\span>";
	            }

	            //a+b.c
	            if (op == 3) {
	                textexo=a + " + " + b2 + " . " + c2 + " ";
	                rep = a + (b * c)
	                textesol=a + " + " + b2 + " . " + c2 + " = <span class=\"sol\"> " + rep + " = la somme de " + a1 + " et du produit de " + b1 + " par " + c1+ "<\span>";
	            }
	            //a-b.c
	            if (op == 4) {
	                textexo=a + " - " + b2 + " . " + c2 + " ";
	                rep = a - (b * c)
	                textesol=a + " - " + b2 + " . " + c2 + " = <span class=\"sol\"> " + rep + " = la différence entre " + a1 + " et du produit de " + b1 + " par " + c1+ "<\span>";
	            }
	            //a.b+c
	            if (op == 5) {
	                textexo=a + " . " + b2 + " + " + c2 + " ";
	                rep = a * b + c
	                textesol=a + ". " + b2 + " + " + c2 + " = <span class=\"sol\"> " + rep + " = la somme du produit de " + a1 + " par " + b1 + " et de " + c1+ "<\span>";
	            }
	            //a.b-c
	            if (op == 6) {
	                textexo=a + " . " + b2 + " - " + c2 + " ";
	                rep = a * b - c
	                textesol=a + " . " + b2 + " - " + c2 + " = <span class=\"sol\"> " + rep + " = la différence entre le produit de " + a1 + " par " + b1 + " et " + c1+ "<\span>";
 }
	            // a+b^2
	            if (op == 7) {
	                textexo=a2 + " + " + b2 + "<SUP>2</SUP>";
rep=a+b*b
	                textesol=a2 + " + " + b2 + "<SUP>2</SUP> = <span class=\"sol\"> " + rep + " = la somme de " + a1 + " et du carré de " + b1+ "<\span>";
	            }
	            // a^2+b
	            if (op == 8) {
	                textexo=a2 + "<SUP>2</SUP> + " + b2;
rep=a*a+b
	                textesol=a2 + "<SUP>2</SUP> + " + b2 + " = <span class=\"sol\"> " + rep + " = la somme du carré de " + a1 + " et de " + b1+ "<\span>";
	            }
	            // a^2-b
	            if (op == 9) {
	                textexo=a2 + "<SUP>2</SUP> - " + b2;
rep=a*a-b
	                textesol=a2 + "<SUP>2</SUP> - " + b2 + " = <span class=\"sol\"> " + rep + " = la différence entre le carré de " + a1 + " et de " + b1+ "<\span>";
	            }
	            // a-b^2
	            if (op == 10) {
	                textexo=a2 + " - " + b2 + "<SUP>2</SUP>";
rep=a-b*b
	                textesol=a2 + " - " + b2 + "<SUP>2</SUP> = <span class=\"sol\"> " + rep + " = la différence entre " + a1 + " et le carré de " + b1+ "<\span>";
	            }
                	            // a^3
	            if (op == 11) {
	                textexo=a2 + "<SUP>3</SUP>";
rep=a*a*a
	                textesol=a2 + "<SUP>3</SUP> = <span class=\"sol\"> " + rep + " = le cube de " + a1 + "<\span>";
	            }
                	            // -(a+b)
	            if (op == 12) {
	                textexo="-( " + a2 + " + " + b2 + ") = ";
	                rep = -(a + b)
	                textesol="-( " + a2 + " + " + b2 + ") = <span class=\"sol\">L'opposé de la somme de " + a1 + " et de " + b1+ " = " + rep + "<\span>";
	            }


		

	}	
	

}
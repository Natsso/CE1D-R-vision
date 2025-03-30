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
document.getElementById("consigne").innerHTML="Code les exercices suivants.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML="Codage - Exercices";
	
//Crée titre Solutions
document.getElementById("solution").innerHTML="Codage - Solutions";
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
		document.getElementById("exo"+boucle1).innerHTML=textexo+" =....................................................= ............. "		
		
		//Solution
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;
    }


//Fonctions exercices

	//Fonctions cas1
	function cas1(){
        
        	        var sol = [];



	            // a,b valeur de départ
	            //a1 pour écrire l'opposé de a
	            //b1 pour écrire l'opposé de b
	            //b2 pour ajouter la parenthèse si négatif
                textexo="";
	            op = Math.floor(Math.random() * 19);
	            expo = Math.floor(Math.random() * 5); // définir si a est négatif ou positif
	            a = Math.floor(Math.random() * 15 + 1) * Math.pow(-1, expo);
	            b = Math.floor(Math.random() * 15 + 1) * Math.pow(-1, a);
	            c = Math.floor(Math.random() * 15 + 1) * Math.pow(-1, b);


	            if (a < 0) {
	                a1 = "l'opposé de " + -a
	                a2 = "(-" + -a + ")"
	            } else {
	                a1 = a
	                a2 = a
	            }
	            if (b < 0) {
	                b1 = "l'opposé de " + -b
	                b2 = "(-" + -b + ")"
	            } else {
	                b1 = b
	                b2 = b
	            }
	            if (c < 0) {
	                c1 = "l'opposé de " + -c
	                c2 = "(-" + -c + ")"
	            } else {
	                c1 = c
	                c2 = c
	            }
	            //a+b
	            if (op == 0) {
	                textexo="La somme de " + a1 + " et de " + b1;
	                rep = a + b
	                textesol="La somme de " + a1 + " et de " + b1 + " = <span class=\"sol\">" +a + " + " + b2 + " = " + rep + "<\span>";
	            }
	            //a-b
	            if (op == 1) {
	                textexo="La différence entre " + a1 + " et " + b1;
	                rep = a - b
	                textesol="La différence entre " + a1 + " et " + b1+" = <span class=\"sol\">" +a + " - " + b2 + " =  " + rep + " = <\span>";
	            }
	            //a.b
	            if (op == 2) {
	                textexo="Le produit de " + a1 + " par " + b1;
	                rep = a * b
	                textesol="Le produit de " + a1 + " par " + b1+" = <span class=\"sol\">"+a + " . " + b2 + " =  " + rep + "<\span>";
	            }
	            //(a+b)^2
	            if (op == 3) {
	                textexo="Le carré de la somme de " + a1 + " et de " + b1;
	                rep = Math.pow(a + b, 2)
	                textesol="Le carré de la somme de " + a1 + " et de " + b1+" =<span class=\"sol\"> (" + a + " + " + b2 + ")<SUP>2</SUP> =  " + rep + "<\span>";
	            }
	            //(a-b)^2
	            if (op == 4) {
	                textexo="Le carré de la différence entre " + a1 + " et de " + b1;
	                rep = Math.pow(a - b, 2)
	                textesol="Le carré de la différence entre " + a1 + " et de " + b1+ " = <span class=\"sol\"> (" + a + " - " + b2 + ")<SUP>2</SUP> =  " + rep  + "<\span>";
	            }
	            //(a+b).c
	            if (op == 5) {
	                textexo="Le produit de la somme de " + a1 + " et de " + b1 + " par " + c1;
	                rep = (a + b) * c
	                textesol="Le produit de la somme de " + a1 + " et de " + b1 + " par " + c1+" = <span class=\"sol\"> (" + a + " + " + b2 + ") . " + c2 + " =  " + rep + "<\span>";
	            }
	            //(a-b).c
	            if (op == 6) {
	                textexo="Le produit de la différence entre " + a1 + " et " + b1 + " par " + c1;
	                rep = (a - b) * c
	                textesol="Le produit de la différence entre " + a1 + " et " + b1 + " par " + c1+" = <span class=\"sol\"> (" + a + " - " + b2 + ") . " + c2 + " =  " + rep +"<\span>";
	            }
	            //(a-b)^2+c
	            if (op == 7) {
	                textexo="La somme du carré de la différence entre " + a1 + " et " + b1 + ", et de " + c1;
	                rep = Math.pow(a - b, 2) + c
	                textesol="La somme du carré de la différence entre " + a1 + " et " + b1 + ", et de " + c1+" =<span class=\"sol\"> (" + a + " - " + b2 + ")<SUP>2</SUP> + " + c2 + " =  " + rep +" <\span>";
	            }
	            //a+b.c
	            if (op == 8) {
	                textexo="La somme de " + a1 + " et du produit de " + b1 + " par " + c1;
	                rep = a + (b * c)
	                textesol="La somme de " + a1 + " et du produit de " + b1 + " par " + c1+ " =<span class=\"sol\"> "+a + " + " + b2 + " . " + c2 + " =  " + rep + "<\span>";
	            }
	            //a-b.c
	            if (op == 9) {
	                textexo="La différence entre " + a1 + " et du produit de " + b1 + " par " + c1;
	                rep = a - (b * c)
	                textesol="La différence entre " + a1 + " et du produit de " + b1 + " par " + c1+" = <span class=\"sol\">" +a + " - " + b2 + " . " + c2 + " =  " + rep + "<\span>";
	            }
	            //a.b+c
	            if (op == 10) {
	                textexo="La somme du produit de " + a1 + " par " + b1 + " et de " + c1;
	                rep = a * b + c
	                textesol="La somme du produit de " + a1 + " par " + b1 + " et de " + c1+" =<span class=\"sol\"> "+a + ". " + b2 + " + " + c2 + " = " + rep +  "<\span>";
	            }
	            //a.b-c
	            if (op == 11) {
	                textexo="La différence entre le produit de " + a1 + " par " + b1 + " et " + c1;
	                rep = a * b - c
	                textesol="La différence entre le produit de " + a1 + " par " + b1 + " et " + c1+" = <span class=\"sol\">"+a + " . " + b2 + " - " + c2 + " =  " + rep +  "<\span>";
	            }
	            // -(a+b)
	            if (op == 12) {
	                textexo="L'opposé de la somme de " + a1 + " et de " + b1;
	                rep = -(a + b)
	                textesol="L'opposé de la somme de " + a1 + " et de " + b1+ " =  <span class=\"sol\">-( " + a2 + " + " + b2 + ") = " + rep + "<\span>";
	            }
	            // a+b^2
	            if (op == 13) {
	                textexo="La somme de " + a1 + " et du carré de " + b1;
rep=a+b*b
	                textesol="La somme de " + a1 + " et du carré de " + b1+" =<span class=\"sol\"> "+a2 + " + " + b2 + "<SUP>2</SUP> =  " + rep +  "<\span>";
	            }
	            // a^2+b
	            if (op == 14) {
	                textexo="La somme du carré de " + a1 + " et de " + b1;
rep=a*a+b
	                textesol="La somme du carré de " + a1 + " et de " + b1+" =<span class=\"sol\"> "+a2 + "<SUP>2</SUP> + " + b2 + " = " + rep +  "<\span>";
	            }
	            // a^2-b
	            if (op == 15) {
	               textexo="La différence entre le carré de " + a1 + " et de " + b1;
rep=a*a-b
	                textesol="La différence entre le carré de " + a1 + " et de " + b1+ " = <span class=\"sol\">"+a2 + "<SUP>2</SUP> - " + b2 + " =  " + rep + "<\span>";
	            }
	            // a-b^2
	            if (op == 16) {
	                textexo="La différence entre " + a1 + " et le carré de " + b1;
rep=a-b*b;
	                textesol="La différence entre " + a1 + " et le carré de " + b1+ " =<span class=\"sol\"> "+a2 + " - " + b2 + "<SUP>2</SUP> =  " + rep + "<\span>";
	            }
                	            // a^3
	            if (op == 17) {
	                textexo="Le cube de " + a1 ;
rep=a*a*a;
	                textesol="Le cube de " + a1+" =<span class=\"sol\"> "+a2 + "<SUP>3</SUP> =  " + rep + "<\span>";
	            }
                // - a^3
                	            if (op == 18) {
	                textexo="L'opposé du cube de " + a1;
rep=-a*a*a;
	                textesol="L'opposé du cube de " + a1 +" = <span class=\"sol\">-"+a2 + "<SUP>3</SUP> = " + rep +  "<\span>";
	            }
	        
		

	}	
	

}
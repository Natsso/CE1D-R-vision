//Variable

var nombre_colonne_tab=3;
var nombre_exo=15;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML="Complète le tableau suivant.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML="Puissances de 10 et notation scientifique - Exercices";
	
//Crée titre Solutions
document.getElementById("solution").innerHTML="Puissances de 10 et notation scientifique - Solutions";
document.getElementById("solution").style.display="block";

//Constante
	type =0;
//Créer le nombre de colonne que contiendra le tableau exercice

var newDiv = document.createElement("table");  
	document.getElementById("tableau_exo").appendChild(newDiv);
	newDiv.setAttribute('id', "tableau_principal_exo");
	
var newDiv = document.createElement("table");  
	document.getElementById("tableau_solution").appendChild(newDiv);
	newDiv.setAttribute('id', "tableau_principal_sol");



generation_exo();

//Succession exercice
function generation_exo(){

	var frequence_ex=[1,1,2];
	shuffle(frequence_ex);
	numero_exo = 0;

	//Reset contenu
		document.getElementById("tableau_principal_exo").innerHTML="";
	
		document.getElementById("tableau_principal_sol").innerHTML="";

	//Nom Colonne
	item=["Nombre","Notation puissance de 10","Notation scientifique"];
	
	//1ère ligne tableau vide
	var newDiv = document.createElement("tr");  
	document.getElementById("tableau_principal_exo").appendChild(newDiv);
	newDiv.setAttribute('class', "tr_principal");
	newDiv.setAttribute('id', "ligne_entete_exo");
	
	//1er th vide (pour  numéro)
	var newDiv = document.createElement("th");  
	document.getElementById("ligne_entete_exo").appendChild(newDiv);
	newDiv.setAttribute('class', "1er_th");
	
	//Autre th
	for(boucle1=0;boucle1<item.length;boucle1++){
		var newDiv = document.createElement("th");  
		document.getElementById("ligne_entete_exo").appendChild(newDiv);
		newDiv.setAttribute('id', "entete_exo_"+boucle1);
		newDiv.setAttribute('class', "th_principal_exo");

		document.getElementById("entete_exo_"+boucle1).innerHTML=item[boucle1];	
	}
	
	//1ère ligne tableau Solution
	var newDiv = document.createElement("tr");  
		document.getElementById("tableau_principal_sol").appendChild(newDiv);
		newDiv.setAttribute('class', "tr_principal");
		newDiv.setAttribute('id', "ligne_entete_sol");
	
	//1er th vide (pour  numéro)
	var newDiv = document.createElement("th");  
	document.getElementById("ligne_entete_sol").appendChild(newDiv);
	newDiv.setAttribute('class', "1er_th");
	
	for(boucle2=0;boucle2<item.length;boucle2++){
		var newDiv = document.createElement("th");  
		document.getElementById("ligne_entete_sol").appendChild(newDiv);
		newDiv.setAttribute('id', "entete_sol_"+boucle2);
		newDiv.setAttribute('class', "th_principal_sol");

		document.getElementById("entete_sol_"+boucle2).innerHTML=item[boucle2];	
	}
	
	//Génération de chaque ligne d'exos
	for(boucle3=0;boucle3<nombre_exo;boucle3++){
		//Création ligne Exo
		var newDiv = document.createElement("tr");  
		document.getElementById("tableau_principal_exo").appendChild(newDiv);
		newDiv.setAttribute('id', "ligne_exo_"+boucle3);		
		newDiv.setAttribute('class', "tr_principal");
		
		//1er td vide (pour  numéro) de la ligne
		var newDiv = document.createElement("td");  
		document.getElementById("ligne_exo_"+boucle3).appendChild(newDiv);
		newDiv.setAttribute('class', "1er_td");
		newDiv.innerHTML="<span class=\"numero\">"+(boucle3+1)+")</span>";
		
		//Création ligne Sol
		var newDiv = document.createElement("tr");  
		document.getElementById("tableau_principal_sol").appendChild(newDiv);
		newDiv.setAttribute('id', "ligne_sol_"+boucle3);
		newDiv.setAttribute('class', "tr_principal");
		
		//1er td vide (pour  numéro) de la ligne
		var newDiv = document.createElement("td");  
		document.getElementById("ligne_sol_"+boucle3).appendChild(newDiv);
		newDiv.setAttribute('class', "1er_td");
		newDiv.innerHTML="<span class=\"numero\">"+(boucle3+1)+")</span>";
	
		//Génération de chaque exo
		for(boucle4=0;boucle4<item.length;boucle4++){
			var newDiv = document.createElement("td");  
			document.getElementById("ligne_exo_"+boucle3).appendChild(newDiv);
			newDiv.setAttribute('id', "celulle_exo"+boucle3+"-"+boucle4);
			newDiv.setAttribute('class', "td_principal_exo");

			var newDiv = document.createElement("td");  
			document.getElementById("ligne_sol_"+boucle3).appendChild(newDiv);
			newDiv.setAttribute('id', "celulle_sol"+boucle3+"-"+boucle4);
			newDiv.setAttribute('class', "td_principal_sol");

		}

			cas1();
	}	



//Fonctions exercices

	//Fonctions cas1
	function cas1(){
        
        
        
	            x = Math.floor(Math.random() * 10);
	            y = Math.floor(Math.random() * 100);
	            z = Math.floor(Math.random() * 4);
	            a = x * y * z
	            b = Math.floor(Math.random() * 2 + 1);
	            exp = Math.floor(Math.random() * 8) * Math.pow(-1, b);
	            if (a % 2 == 0) {
	                cas1()

	            } else {
                    
                    	            if(type==3){type=0;}

	                nombre = a * Math.pow(10, exp)
	                //enlever les bugs d'arrongi 52,000000000005 ou 53,999999999
	                if (exp < 0) {
	                    nombre = nombre.toFixed(Math.abs(exp));
	                } else {
	                    nombre = nombre.toFixed(0);

	                }

	                //notation scientifique placement de la virgule

	                if (a > 1000) {
	                    c = a / 1000
	                    decalage = 3

	                }
	                if (1000 > a && a > 100) {
	                    c = a / 100
	                    decalage = 2

	                }
	                if (100 > a && a > 10) {
	                    c = a / 10
	                    decalage = 1

	                }
	                if (10 > a && a > 0) {
	                    c = a / 1
	                    decalage = 0

	                }

	                expo = exp + decalage;
	                str = "" + c;
	                c = str.replace(".", ",");



					// enlève les exposants 0 et 1
	                if (exp == 0) {
	                    a = a
	                } else {
	                    if (exp == 1) {
	                        exp = ""
	                    };
	                    a = a + " . 10<SUP>" + exp + "</SUP>"
	                }
	                if (expo == 0) {
	                    c = c
	                } else {
	                    if (expo == 1) {
	                        expo = ""
	                    };
	                    c = c + " . 10<SUP>" + expo + "</SUP>"
	                };

					nombre=nombre_lisible(nombre);
					
	                if (type == 0) { //on connait le nombre
                        
                        		//Consigne
		document.getElementById("celulle_exo"+boucle3+"-0").innerHTML=nombre;		
		document.getElementById("celulle_exo"+boucle3+"-1").innerHTML="";		
		document.getElementById("celulle_exo"+boucle3+"-2").innerHTML="";		
		
		//Solution
		document.getElementById("celulle_sol"+boucle3+"-0").innerHTML=nombre;		
		document.getElementById("celulle_sol"+boucle3+"-1").innerHTML="<span class=\"sol\">" + a + "</span>";		
		document.getElementById("celulle_sol"+boucle3+"-2").innerHTML="<span class=\"sol\">" + c + "</span>";		

	                }
	                if (type == 1) { //on connait notation puiss 10

                        
                        		//Consigne
		document.getElementById("celulle_exo"+boucle3+"-0").innerHTML="";		
		document.getElementById("celulle_exo"+boucle3+"-1").innerHTML=a;		
		document.getElementById("celulle_exo"+boucle3+"-2").innerHTML="";	

		//Solution
		document.getElementById("celulle_sol"+boucle3+"-0").innerHTML="<span class=\"sol\">" + nombre + "</span>";	
		document.getElementById("celulle_sol"+boucle3+"-1").innerHTML=a;		
		document.getElementById("celulle_sol"+boucle3+"-2").innerHTML="<span class=\"sol\">" + c + "</span>";	

	                }
	                if (type == 2) { //on connait not scientifique

                        
                        		//Consigne
		document.getElementById("celulle_exo"+boucle3+"-0").innerHTML="";		
		document.getElementById("celulle_exo"+boucle3+"-1").innerHTML="";		
		document.getElementById("celulle_exo"+boucle3+"-2").innerHTML=c;		
		
		
		//Solution
		document.getElementById("celulle_sol"+boucle3+"-0").innerHTML="<span class=\"sol\">" + nombre + "</span>";	
		document.getElementById("celulle_sol"+boucle3+"-1").innerHTML="<span class=\"sol\">" + a + "</span>";		
		document.getElementById("celulle_sol"+boucle3+"-2").innerHTML=c;
	                }


        type=type+1;


	            }
	        }
		
		
	

}
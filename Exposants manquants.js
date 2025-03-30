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
document.getElementById("consigne").innerHTML = "Retrouve l'exposant manquant";

//Crée titre Feuille
document.getElementById("exercice").innerHTML = "Exposants manquants - Exercices";

//Crée titre Solutions
document.getElementById("solution").innerHTML = "Exposants manquants - Solutions";
document.getElementById("solution").style.display = "block";

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
	var frequence_ex=[1,2,3];
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
		}		else if(cas_exo==3){
		cas3();
		}
		//Changement - par  –
		textexo=textexo.replace(/\-/gi,"–");
		textesol=textesol.replace(/\-/gi,"–");	
		
		//Consigne
		var newExo = document.createElement("li");  
		document.getElementById("listex"+col_ex).appendChild(newExo);
		newExo.setAttribute('id', "exo"+boucle1);
		document.getElementById("exo"+boucle1).innerHTML=textexo;		
		
		//Solution
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;
		
		numero_exo++;

	}

//Ajustement hauteur des exos

for(boucle10=0;boucle10<nombre_exo;boucle10++){
	
		var newSol = document.getElementById("solexo"+boucle10);
		newSol.style.height="auto";		
		
		var newExo = document.getElementById("exo"+boucle10);
		newExo.style.height="auto";
}

//Fonctions exercices

    //Fonctions exercices
// a^b=c^d
    function cas1() {

        type=Math.floor(Math.random() * 2) ;
    
        if(type==0){
      var base1 = Math.floor(Math.random() * 5 + 2) ;
        vara = Math.floor(Math.random() * 2+2);
expo2=Math.floor(Math.random() * 6+1);
        expo = vara*expo2;
        base2 = Math.pow(base1,vara);
            
            
        
            textexo = base1 + "<sup>" + expo + "</sup> = "+base2+ "<sup> ... </sup>";
            textesol = base1 + "<sup>" + expo + "</sup> = "+base2+ "<sup><span class=sol>"+expo2+"</span> </sup> ⇔ "+ base1 + "<sup>" + expo + "</sup> = ("+base1+ "<sup>"+vara+"</sup>)<sup><span class=sol>"+expo2+"</span> </sup>";
            
        } else{
      var base1a = Math.floor(Math.random() * 5 + 2) ;
        vara = Math.floor(Math.random() * 2+2);
expo2a=Math.floor(Math.random() * 6+1);
        expo1a = vara*expo2a;
        base2a = Math.pow(base1a,vara)
            
     base1=base2a;
            base2=base1a;
            expo=expo2a;
            expo2=expo1a;
            
        
            textexo = base1 + "<sup>" + expo + "</sup> = "+base2+ "<sup> ... </sup>";
            textesol =base1 + "<sup>" + expo + "</sup> = "+base2+ "<sup><span class=sol>"+expo2+"</span> </sup> ⇔ ("+base2+ "<sup>"+vara+"</sup>)<sup>"+expo+" </sup> = "+ base2 + "<sup><span class=sol>"+expo2+"</span></sup>";
        }


        }

// a^b*a^d=a^e
    function cas2() {

        type=Math.floor(Math.random() * 3) ;
    
              var base1 = Math.floor(Math.random() * 5 + 2) ;
expo1=Math.floor(Math.random() * 7 ) ;
    expo2=Math.floor(Math.random() * 7 ) ;
    expo3=expo1+expo2;
        exporep=[expo1,expo2,expo3]
        if(type==0){
            exporep.splice(0, 1, "<span class=sol>"+expo1+"</span>");

            expo1="...";
        } else if (type==1){            exporep.splice(1, 1, "<span class=sol>"+expo2+"</span>");

            expo2="...";
        }else if (type==2){            exporep.splice(2, 1, "<span class=sol>"+expo3+"</span>");

            expo3="...";
        }


        
            textexo = base1 + "<sup>" + expo1 + "</sup> . "+ base1 + "<sup>" + expo2 + "</sup> = "+base1+ "<sup> "+expo3+" </sup>";
            textesol =base1 + "<sup>" + exporep[0]  + "</sup> . "+ base1 + "<sup>" + exporep[1] + "</sup> = "+base1+ "<sup> "+exporep[2]+" </sup>";
        }
// a^b*a^d=a^e
    function cas3() {

        type=Math.floor(Math.random() * 3) ;
    
              var base1 = Math.floor(Math.random() * 5 + 2) ;
        vara=Math.floor(Math.random() * 2 + 2) ;
                var base2 = Math.pow(base1,vara );

expo1=Math.floor(Math.random() * 7 ) ;
    expo2=Math.floor(Math.random() * 3 ) ;
    expo3=expo1+expo2*vara;
        exporep=[expo1,expo2,expo3]
        if(type==0){
            exporep.splice(0, 1, "<span class=sol>"+expo1+"</span>");

            expo1="...";
        } else if (type==1){            exporep.splice(1, 1, "<span class=sol>"+expo2+"</span>");

            expo2="...";
        }else if (type==2){            exporep.splice(2, 1, "<span class=sol>"+expo3+"</span>");

            expo3="...";
        }


        
            textexo = base1 + "<sup>" + expo1 + "</sup> . "+ base2 + "<sup>" + expo2 + "</sup> = "+base1+ "<sup> "+expo3+" </sup>";
            textesol =base1 + "<sup>" + exporep[0]  + "</sup> . "+ base2 + "<sup>" + exporep[1] + "</sup> = "+base1+ "<sup> "+exporep[2]+" </sup>  ⇔ "+base1 + "<sup>" + exporep[0]  + "</sup> . ("+ base1 + "<sup>" + vara + "</sup>)<sup>" + exporep[1] + "</sup> = "+base1+ "<sup> "+exporep[2]+" </sup> ";
        }
    }


//Renvoie le pgcd de a et b (toujours positif)	
function pgcd(a,b) { // a>0, b>0  
  a=Math.abs(a);
  b=Math.abs(b)
  do {  
	var r=a;  
	a=b;  
	b=r%a;  
  } while (b>0);  
  return a;  
}

//............................................................................................................

//Renvoie le ppcm de a et b (attention la fonction pgcd est utilisée)
function ppcm(a,b){
	return a*b/pgcd(a,b);
}

//............................................................................................................

//Ecrit une fraction sans la simplifier
function ecrit_fraction(num, den) {
	
	signe=(num*den)/(Math.abs(num*den));

	if (den == 1) {
		return num

	}
	
	else if (den == -1) {
		return num*-1;
	} 
	
	else {

		return "<span class=\"frac\"><sup>" + (signe*Math.abs(num)) + "</sup><sub>" + Math.abs(den) + "</sub></span>";
		
	}
}
//Ecrit une fraction sans la simplifier
function ecrit_fractionbrut(num, den) {
	

	if (den == 1) {
		return num

	}
	
	else if (den == -1) {
		return num*-1;
	} 
	
	else {

		return "<span class=\"frac\"><sup>" + num + "</sup><sub>" + den+ "</sub></span>";
		
	}
}

//............................................................................................................

//Ecrit une fraction litterale sans la simplifier
function ecrit_fraction_litterale(num,variable_num,degre_num,den,variable_den,degre_den) {
	
	signe=(num*den)/(Math.abs(num*den));
	if(signe<0){
		symb=" - ";
	}
	else{
		symb="";
	}

	if (den == 1&&degre_den==0) {
		return litteral_sans_plus(num,variable_num,degre_num);
	}
	else if (den == -1&&degre_den==0) {
		return litteral_sans_plus(num*-1,variable_num,degre_num);
	} 
	else {
		numfinal=litteral_sans_plus((Math.abs(num)),variable_num,degre_num);
		denfinal=litteral_sans_plus(Math.abs(den),variable_den,degre_den);
		return symb+"<span class=\"frac\"><sup>" + numfinal + "</sup><sub>" + denfinal + "</sub></span>";	
	}
}

//............................................................................................................

//Simplifie une fraction
function simplification_fraction(num,den){
	simp_num=num/pgcd(num,den);
	simp_den=den/pgcd(num,den);
	simp_num=simp_num*(simp_den/Math.abs(simp_den));
	simp_den=Math.abs(simp_den);
	
	if(simp_den==1){
		return simp_num;
	}
	else{
		return "<span class=\"frac\"><sup>"+simp_num+"</sup><sub>"+simp_den+"</sub></span>"
	}
	
}

//............................................................................................................

//Additionne deux fractions
function somme_fraction(num1,den1,num2,den2){
	
	nouvelle_frac=simplification_fraction(num1*den2+num2*den1,den1*den2);
	
	return nouvelle_frac;
	
}

//............................................................................................................

//Place tous les diviseurs d'un nombre dans un tableau
function diviseur(n){
	var div=[];
	n=Math.abs(n);
	for (var t = 1; t <= n ; t++) {
		if(n%t==0){
	  div.push(t);
	  }
	  else{}
	}
	return div;
}

//............................................................................................................

//Place tous les diviseurs entiers d'un nombre dans un tableau
function diviseur_entier(n){
	var div=[];
	n=Math.abs(n);
	for (var t = 1; t <= n ; t++) {
		if(n%t==0){
	  div.push(t);
	  div.push(-t);
	  }
	  else{}
	}
	return div;
}

//............................................................................................................

//Compte le nombre de caractere d'une chaine texte
 function nbre_caracteres(lettre,mot)
    {
        mot2 = mot.split(lettre);
        nbre_de_fois_trouve = mot2.length-1;
        return nbre_de_fois_trouve;
    }
//............................................................................................................
		
//Ecrit dans un tableau la décomposition en facteurs premiers
function decomposition(n){
	var dec=[];
	n=Math.abs(n);
	for (var t = 2; n!=1 ; t++) {
		var i=0;
		if(n%t==0){
			while(n%t==0){
			i++;
			n=n/t;
			}
  if(i==1){
  dec.push(t);
  }
  else{
  dec.push(t+"<sup>"+i+"</sup>");
  }
		}
	  else{}
	}
    if(dec.length==0){
          dec.push(1);

    }
	return dec;
}

//............................................................................................................


/*Réécrit correctement les exprressions littérales
Si a=-4 alors litteral(a,"x",2) écrit -4x²
Si a=+4 alors litteral(a,"y",4) écrit +4y
Si a=-1 alors litteral(a,"x",2) écrit -x²
Si a=2 alors litteral(a,"x",0) écrit +2
*/

function litteral(coefficient,variable,degre){
var
ecriture="";
if(coefficient==0){
	ecriture="0";
}
				
else if(degre==0||variable==""){
    if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient);
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient);
    }
    else{
		ecriture="";
    }
  }
else if(degre==1){
    if(coefficient==1){
		ecriture=" + "+variable;
    }
    else if(coefficient==-1){
		ecriture=" – "+variable;
    }
    else if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient)+variable;
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable;
    }
    else{
		ecriture="";
    }
  }  
else{
    if(coefficient==1){
		ecriture=" + "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient==-1){
		ecriture=" – "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else{
		ecriture="";
    }
  }
return ecriture;
}

//............................................................................................................

/*Réécrit correctement les exprressions littérales
Si a=-4 alors litteral(a,"x",2) écrit -4x²
Si a=+4 alors litteral(a,"y",4) écrit +4y
Si a=-1 alors litteral(a,"x",2) écrit -x²
Si a=2 alors litteral(a,"x",0) écrit +2
*/

function litteral_sans_0(coefficient,variable,degre){
var
ecriture="";
if(coefficient==0){
	ecriture="";
}
				
else if(degre==0||variable==""){
    if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient);
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient);
    }
    else{
		ecriture="";
    }
  }
else if(degre==1){
    if(coefficient==1){
		ecriture=" + "+variable;
    }
    else if(coefficient==-1){
		ecriture=" – "+variable;
    }
    else if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient)+variable;
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable;
    }
    else{
		ecriture="";
    }
  }  
else{
    if(coefficient==1){
		ecriture=" + "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient==-1){
		ecriture=" – "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else{
		ecriture="";
    }
  }
return ecriture;
}

function litteral_avec_0(coefficient,variable,degre){
var
ecriture="";
if(coefficient==0){
	ecriture=" + 0";
}
				
else if(degre==0||variable==""){
    if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient);
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient);
    }
    else{
		ecriture=" + 0";
    }
  }
else if(degre==1){
    if(coefficient==1){
		ecriture=" + "+variable;
    }
    else if(coefficient==-1){
		ecriture=" – "+variable;
    }
    else if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient)+variable;
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable;
    }
    else{
		ecriture=" + 0";
    }
  }  
else{
    if(coefficient==1){
		ecriture=" + "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient==-1){
		ecriture=" – "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient>0){
		ecriture=" + "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else{
		ecriture=" + 0";
    }
  }
return ecriture;
}

//............................................................................................................

/*Réécrit correctement les exprressions littérales
Si a=-4 alors litteral(a,"x",2) écrit -4x²
Si a=+4 alors litteral(a,"y",4) écrit 4y
Si a=-1 alors litteral(a,"x",2) écrit -x²
Si a=2 alors litteral(a,"x",0) écrit 2
*/

function litteral_sans_plus(coefficient,variable,degre){
var
ecriture="";
if(coefficient==0){
	ecriture="0";
}
				
else if(degre==0||variable==""){
    if(coefficient>0){
		ecriture=Math.abs(coefficient);
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient);
    }
    else{
		ecriture="";
    }
  }
else if(degre==1){
    if(coefficient==1){
		ecriture=variable;
    }
    else if(coefficient==-1){
		ecriture=" – "+variable;
    }
    else if(coefficient>0){
		ecriture=Math.abs(coefficient)+variable;
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable;
    }
    else{
		ecriture="";
    }
  }  
else{
    if(coefficient==1){
		ecriture=variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient==-1){
		ecriture=" – "+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient>0){
		ecriture=Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else if(coefficient<0){
		ecriture=" – "+Math.abs(coefficient)+variable+"<sup>"+degre+"</sup>";
    }
    else{
		ecriture="";
    }
  }
return ecriture;
}

//............................................................................................................

//Additionne les termes semblables.
// 3a²+2cd-4 sera écrit "3*a^2+2*cd+-4"
function somme_litterale(addlit){
	
	var ens_partie_lit=[];
	ens_reduit=[];
	
	separation=addlit.split(/[+]/gi);
	
	//Séparation des coefficients
	for(tour=0;tour<separation.length;tour++){
		separation[tour]=(separation[tour]).split(/[*]/gi);
		
		if((separation[tour]).length==1){(separation[tour]).push("");}
		
		separation[tour][0]=Number(separation[tour][0]);
	}
	
	//changement des ^ en <sup>
	for(tour=0;tour<separation.length;tour++){
		if(separation[tour][1].indexOf("^")>=0){
			
			de = separation[tour][1].replace(/\^/gi,"");
			
			de = de.split(/([^0-9])/gi);
			
			de = de.filter(function(el) {return el.length != 0});
			
			fg="";
			
			for(tour2=0;tour2<de.length;tour2++){
							
				if(isNaN(de[tour2])===false){
					de.splice((tour2),0,"<sup>");
					de.splice((tour2+2),0,"</sup>");
					
					tour2++;
					tour2++;
				}
								
			}			
			
			for(tour3=0;tour3<de.length;tour3++){
							
				fg+=de[tour3];
				
			}
		
		separation[tour][1]=fg;
			
		}
	}
	
	//Rangement des parties littérales
	addlit=separation;
	
	for(tour=0;tour<addlit.length;tour++){
				
		var rang1=ens_partie_lit.indexOf(addlit[tour][1]);
		
		if(rang1<0){
			ens_partie_lit.push(addlit[tour][1]);
			ens_reduit.push([0,addlit[tour][1]]);
		}
		else{}
		
		rang2=ens_partie_lit.indexOf(addlit[tour][1]);
		
		ens_reduit[rang2][0]+=addlit[tour][0];
		
	}
	
	var rep_final="";
	
	for(tour=0;tour<ens_reduit.length;tour++){
		
		var nouveau_terme=litteral(ens_reduit[tour][0],ens_reduit[tour][1],1);
		if(nouveau_terme==0){nouveau_terme="";}
		rep_final+=nouveau_terme;
		
	}
	
	if(rep_final.substr(0,3)==' + '){rep_final=rep_final.substr(3);}else{}

	rep_final=rep_final.replace(/\<sup\>1\<\/sup\>/,"");

	return rep_final;
}

//............................................................................................................

//Multiplie les termes litteraux.
// 3a².2cd^2.4 sera écrit "3*a^2*2*c*d^2*4"
function produit_litteral(prodlit,mult=""){
	
	var coeff_final=1;
	partlit_temp="";
	
	separation=prodlit.split(/[*]/gi);

	tab_coeff= separation.filter(function(el) {return isNaN(el)===false});	
	tab_parlit= separation.filter(function(el) {return isNaN(el)===true});	
	
	for(tour=0;tour<tab_parlit.length;tour++){
		if(tour==tab_parlit.length-1){partlit_temp+=tab_parlit[tour];}
		else{partlit_temp+=tab_parlit[tour]+"^";}
	}	
	
	for(tour=0;tour<tab_coeff.length;tour++){
		coeff_final*=Number(tab_coeff[tour]);
	}
	
	calcul_parlit = partlit_temp.split(/\^/gi); //Attention le premier élément du tableau est vide
	
	for(tour=0;tour<calcul_parlit.length;tour++){
		
		if(isNaN(calcul_parlit[tour])){
			cmb_lettre=calcul_parlit[tour].split("");
		}
		
		if(cmb_lettre.length>1){
				
				calcul_parlit.splice(tour,1);
				
				for(ttour=0;ttour<cmb_lettre.length;ttour++){
		
					calcul_parlit.splice((tour+ttour),0,cmb_lettre[ttour]);

				}	
		}
		
	}	

	
	for(tour=0;tour<calcul_parlit.length;tour++){
		if(isNaN(calcul_parlit[tour+1])){calcul_parlit.splice((tour+1),0,"1");}
		tour++;
	}
	
	tab_parlit=[];
	
	for(tour=0;tour<calcul_parlit.length;tour++){
				
		var rang1=tab_parlit.indexOf(calcul_parlit[tour]);
		
		if(rang1<0){
			tab_parlit.push(calcul_parlit[tour]);
			tab_parlit.push(calcul_parlit[(tour+1)]);
		}
		else{
		
			tab_parlit[(rang1+1)]=Number(tab_parlit[(rang1+1)])+Number(calcul_parlit[(tour+1)]);
		
		}
		
		tour++
		
	}
	
	//Classement ordre alphabétique
	var lettres=[];
	
	for(tour=0;tour<tab_parlit.length;tour++){
		lettres.push(tab_parlit[tour]);
		tour++;
	}
	
	lettres.sort();

	
	var parlit_final="";
	
	for(tour=0;tour<lettres.length;tour++){
		
		position_a_retrouver=tab_parlit.indexOf(lettres[tour]);
		
		var exposant=tab_parlit[position_a_retrouver+1];
		
		if(exposant==1){		
			parlit_final+=tab_parlit[position_a_retrouver];
		}		
		else if(exposant==0){}		
		else{		
			parlit_final+=tab_parlit[position_a_retrouver]+"<sup>"+exposant+"</sup>";
		}
	
		
	}
	
	if(coeff_final==0){reponse_finale=0+"";}
	else if(parlit_final==""){reponse_finale=coeff_final+"";}
	else if(coeff_final==1){reponse_finale=parlit_final;}
	else if(coeff_final==-1){reponse_finale="-"+parlit_final;}
	else{
			
		reponse_finale=coeff_final+mult+parlit_final;
	
	}
		
	reponse_finale=reponse_finale.replace(/\-/gi,"–");
		
	return reponse_finale;

}


//............................................................................................................

//Effectue une suppression de parenthèses :
//-(3a+5)-(5b²-3) sera écrite -(3*a+5)-(5*b^2+-3) ==> Attention si un seul terme, les parenthèses sont quand même requises
function suppresion_parenthese(calcul){
	
	var 
	calcul=calcul.replace(/\+-/gi,"-");
	elements=calcul.split(/[\(\)]/gi);
	binomes=[];
	
	if(elements[0]=="-"||elements[0]==" - "||elements[0]==" – "||elements[0]=="–"){
		
		calcul1=elements[1];
		calcul1=calcul1.replace(/\-/gi,"item");
		calcul1="-"+calcul1;
		calcul1=calcul1.replace(/\+/gi,"+-");
		calcul1=calcul1.replace(/\-item/gi,"");
		calcul1=calcul1.replace(/\item/gi,"+");

		if(calcul1.substr(0,3)==' + '){calcul1=calcul1.substr(3);}
		else if(calcul1.substr(0,1)=='+'){calcul1=calcul1.substr(1);}
		else if(calcul1.substr(0,2)==' +'){calcul1=calcul1.substr(2);}
		else if(calcul1.substr(0,2)=='+ '){calcul1=calcul1.substr(2);}
		else{}
		
		elements[1]=calcul1;
	}
	else{
		elements[1]=elements[1].replace(/\-/gi,"+-");
		if(elements[1].substr(0,3)==' + '){elements[1]=elements[1].substr(3);}
		else if(elements[1].substr(0,1)=='+'){elements[1]=elements[1].substr(1);}
		else if(elements[1].substr(0,2)==' +'){elements[1]=elements[1].substr(2);}
		else if(elements[1].substr(0,2)=='+ '){elements[1]=elements[1].substr(2);}
		else{}
	}
	if(elements[2]=="-"||elements[2]==" - "||elements[2]==" – "||elements[2]=="–"){
		
		calcul2=elements[3];
		calcul2=calcul2.replace(/\-/gi,"item");
		calcul2="-"+calcul2;
		calcul2=calcul2.replace(/\+/gi,"+-");
		calcul2=calcul2.replace(/\-item/gi,"");
		calcul2=calcul2.replace(/\item/gi,"+");

		if(calcul2.substr(0,3)==' + '){calcul2=calcul2.substr(3);}
		else if(calcul2.substr(0,1)=='+'){calcul2=calcul2.substr(1);}
		else if(calcul2.substr(0,2)==' +'){calcul2=calcul2.substr(2);}
		else if(calcul2.substr(0,2)=='+ '){calcul2=calcul2.substr(2);}
		else{}
		
		elements[3]=calcul2;
	}
	else{
		elements[3]=elements[3].replace(/\-/gi,"+-");
		if(elements[3].substr(0,3)==' + '){elements[3]=elements[3].substr(3);}
		else if(elements[3].substr(0,1)=='+'){elements[3]=elements[3].substr(1);}
		else if(elements[3].substr(0,2)==' +'){elements[3]=elements[3].substr(2);}
		else if(elements[3].substr(0,2)=='+ '){elements[3]=elements[3].substr(2);}
		else{}
	}

	
	pas_reduit=elements[1]+"+"+elements[3];

	if(pas_reduit.substr(0,1)=='+'){pas_reduit=pas_reduit.substr(1);}
	
	reponse_finale=somme_litterale(pas_reduit);
	
	return reponse_finale;
	
}

//............................................................................................................

//Effectue la distributivité simple écrite comme suit :
//3a²(5b+3) sera écrite 3*a^2(5*b+3)
function distributivite_simple(distri){
	
	var elements=distri.split(/[\(|+|\)]/gi);
	
	multiplication1=produit_litteral((elements[0]+"*"+elements[1]),"*");
	multiplication1=multiplication1.replace(/\–/gi,"-");

	multiplication2=produit_litteral((elements[0]+"*"+elements[2]),"*");
	multiplication2=multiplication2.replace(/\–/gi,"-");

	pas_reduit=multiplication1+"+"+multiplication2;
	
	reponse_finale=somme_litterale(pas_reduit);
	
	return reponse_finale;
	
}

//............................................................................................................

//Effectue la distributivité double écrite comme suit :
//(3a²-4c^3d)(5b+3) sera écrite (3*a^2+-4*c^3*d)(5*b+3)
function distributivite_double(distri){
	
	var elements=distri.split(/[\(|+|\)]/gi);
	
	multiplication1=produit_litteral((elements[1]+"*"+elements[4]),"*");
	multiplication1=multiplication1.replace(/\–/gi,"-");

	multiplication2=produit_litteral((elements[1]+"*"+elements[5]),"*");
	multiplication2=multiplication2.replace(/\–/gi,"-");	
	
	multiplication3=produit_litteral((elements[2]+"*"+elements[4]),"*");
	multiplication3=multiplication3.replace(/\–/gi,"-");	
	
	multiplication4=produit_litteral((elements[2]+"*"+elements[5]),"*");
	multiplication4=multiplication4.replace(/\–/gi,"-");

	pas_reduit=multiplication1+"+"+multiplication2+"+"+multiplication3+"+"+multiplication4;
	
	reponse_finale=somme_litterale(pas_reduit);
	
	return reponse_finale;
	
}

//............................................................................................................

//Ecrit un polynome avec ses variables. Polytab est un tableau avec les coefficients du polynome ordonné et complet
//3x^2+5x-7 ==> [3,5,-7]
function ecriture_polynome(polytab,variable){
	var poly_final="";
	degre_poly=polytab.length-1;
	
	for(tour=0;tour<=degre_poly;tour++){
		
		if(polytab[tour]==0){
			var nouveau_terme="";
		}
		else{
			var nouveau_terme=litteral(polytab[tour],variable,(degre_poly-tour));
		}
		
		poly_final+=nouveau_terme;

	}
	
	if(poly_final.substr(0,3)==' + '){poly_final=poly_final.substr(3);}else{}

	return poly_final;
}

//............................................................................................................

//Ecrit un polynome avec ses variables avec d'éventuelle fraction. Polytab est un tableau avec les coefficients du polynome ordonné et complet
//3x^2+5x/4-7 ==> [3,"5/4",-7]
function ecriture_polynome_fraction(polytab,variable){
	var poly_final="";
	degre_poly=polytab.length-1;
	
	for(tour=0;tour<=degre_poly;tour++){
		if(isNaN(polytab[tour])){
			polytab[tour]+="";
			frac=polytab[tour].split("/");
			numf=Number(frac[0]);
			denf=Number(frac[1]);
			if(numf/denf<0){
				signef=" - "
			}	
			else{
				signef=" + "
			}
			if(numf==0){
				var nouveau_terme="";
			}
			else{
				var nouveau_terme=signef+ecrit_fraction_litterale(Math.abs(numf),variable,(degre_poly-tour),Math.abs(denf),variable,0);
			}
		}
		else{
			if(polytab[tour]==0){
				var nouveau_terme="";
			}
			else{
				var nouveau_terme=litteral(polytab[tour],variable,(degre_poly-tour));
			}
		}
		
		poly_final+=nouveau_terme;

	}
	
	if(poly_final.substr(0,3)==' + '){poly_final=poly_final.substr(3);}else{}

	return poly_final;
}

//............................................................................................................

//Simplifie une fraction littérale avec variable différente
		
function simplification_fraction_litterale(num,variablenum,degrenum,den,variableden,degreden){
	simp_num=num/pgcd(num,den);
	simp_den=den/pgcd(num,den);
	simp_num=simp_num*(simp_den/Math.abs(simp_den));
	simp_den=Math.abs(simp_den);
	simp_num=litteral(simp_num,variablenum,degrenum);
	if(simp_num.substr(0,3)==' + '){simp_num=simp_num.substr(3);}else{}
	tsimp_den=litteral(simp_den,variableden,degreden);
	if(tsimp_den.substr(0,3)==' + '){tsimp_den=tsimp_den.substr(3);}else{}			
	
	if(simp_den==1&&variableden==""){
		return simp_num;
	}
	else if(simp_den==1&&variableden!=""){
		return "<span class=\"frac\"><sup>"+simp_num+"</sup><sub>"+tsimp_den+"</sub></span>"
	}
	else{
		return "<span class=\"frac\"><sup>"+simp_num+"</sup><sub>"+tsimp_den+"</sub></span>"
	}
	
}
	
//............................................................................................................

//Ecrit un polynome avec ses variables de manière désordonéé. Polytab est un tableau avec les coefficients du polynome ordonné et complet
function ecriture_polynome_desordonne(polytab,variable){
	var poly_ordonne=[];
	poly_final="";
	degre_poly=polytab.length-1;
	
	for(tour=0;tour<=degre_poly;tour++){
		
		if(polytab[tour]==0){
			var nouveau_terme="";
		}
		else{
			var nouveau_terme=litteral(polytab[tour],variable,(degre_poly-tour));
		}
		
		poly_ordonne.push(nouveau_terme);

	}
	
	shuffle(poly_ordonne);
	
	for(tour=0;tour<=degre_poly;tour++){
		
	poly_final+=poly_ordonne[tour];

	}
	
	if(poly_final.substr(0,3)==' + '){poly_final=poly_final.substr(3);}else{}

	return poly_final;
}

//............................................................................................................


//fonction recherche du plus grand carré diviseur
function div_carre_max(rad){
	var   max=Math.ceil(Math.sqrt(rad));
	tour=max;
	while(tour!=0){
		if((rad%(max*max))==0){
			tour=0;
		}
		else{
			max=max-1;
			tour=tour-1;
		}
	}
	return (max*max);
}

//............................................................................................................
//Fonction écriture sous radical
function rad(rad){
		rep="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+rad+"</span>";

	return rep;
}

//............................................................................................................

//Fonction écriture sous radical avec coefficient
function rad2(a, b) {
	if (a == 0) {
		return 0
	}
	if (a == 1) {
		a = ""
	}
	if (a == -1) {
		a = "-"
	}
	if (b == 1) {
		return a
	} else {
		return a + "<span class=\"radicalsymb\">√</span><span class=\"radical\">" + b + "</span>"
	}

}
//............................................................................................................

//Fonction met en parenthèses si nombre négatif
function parenthese_negatif(a) {

	if(a<0){
		return "("+a+")";
	}
	else{
		return a;
	}

}
//............................................................................................................


//Fonction écriture formelle de radical
function simp_rad(rad){
	var	divm=div_carre_max(rad);
	radfi=rad/divm;
	if(radfi==1){
		rep=Math.sqrt(divm);
	}
	else if(divm==1){
		rep="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radfi+"</span>";
	}
	else{
		rep=Math.sqrt(divm)+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radfi+"</span>";
	}
	return rep;
}

//............................................................................................................

//Fonction équi recherche le diviseur cubique le plus grand
function div_cubique_max(a){
	var   
	aa=Math.abs(a);
	max=Math.ceil(Math.cbrt(aa));
	tour=max;
	while(tour!=0){
		if((aa%(max*max*max))==0){
			tour=0;
		}
		else{
			max=max-1;
			tour=tour-1;
		}
	}
	return (max*max*max);
}

//............................................................................................................

//Fonction écriture formelle de racine cubique
function simp_racine_cubique(a){
	
	if(a<0){var signes="-";}else{var signes="";}
	var
	aa=Math.abs(a);
	divm=div_cubique_max(aa);
	b=aa/divm;
	if(b==1){
	c=signes+Math.cbrt(divm);
	}
	else if(divm==1){
	c=signes+"∛<span class=\"radical\">"+b+"</span>";
	}
	else{
	c=signes+Math.cbrt(divm)+"∛<span class=\"radical\">"+b+"</span>";
	}
	return c;
}

//............................................................................................................

//Mélange de tableau
function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

//............................................................................................................

/*
simp_frac_rad(12,18) renvoie √6 / 3 
*/

function simp_frac_rad(numr,denr){
		
		var
		pgcd_nd=pgcd(numr,denr);
		numr=numr/pgcd_nd;
		denr=denr/pgcd_nd;
		
		//Facteur sortable
		divnum=div_carre_max(numr*denr);
		
		//Calcul Radicand restant
		radnum=(numr*denr)/divnum;
		
		//Coefficient radical + simplification
		knum=Math.sqrt(divnum);
		pgcd_f=pgcd(knum,denr);
		knum=knum/pgcd_f;
		denr=denr/pgcd_f;
		
		//Ecriture radical num
		if(radnum==1){
                tnum=knum;
            }
            else if(knum==1){
                tnum="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum+"</span>";
            }
            else{
                tnum=knum+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum+"</span>";
            }
			
		//Ecriture fraction
		if(denr==1){
			frac_finale=tnum;
		}
		else{
			frac_finale="<span class=\"frac\"><sup>"+tnum+"</sup><sub>"+denr+"</sub></span>";
		}
		
		return frac_finale;
}

//............................................................................................................

//Additionne deux fractions dont les numerateurs et dénominateurs sont des radicaux (les nombres à entrer sont les radicants)
function sommefracrad(numr1,denr1,numr2,denr2){
	
	var
	pgcd_nd=pgcd(numr1,denr1);
	numr1=numr1/pgcd_nd;
	denr1=denr1/pgcd_nd;
	
	//Facteur sortable
	divnum1=div_carre_max(numr1*denr1);
	
	//Calcul Radicand restant
	radnum1=(numr1*denr1)/divnum1;
	
	//Coefficient radical + simplification
	knum1=Math.sqrt(divnum1);
	pgcd_f=pgcd(knum1,denr1);
	knum1=knum1/pgcd_f;
	denr1=denr1/pgcd_f;
	
	var
	pgcd_nd=pgcd(numr2,denr2);
	numr2=numr2/pgcd_nd;
	denr2=denr2/pgcd_nd;
	
	//Facteur sortable
	divnum2=div_carre_max(numr2*denr2);
	
	//Calcul Radicand restant
	radnum2=(numr2*denr2)/divnum2;
	
	//Coefficient radical + simplification
	knum2=Math.sqrt(divnum2);
	pgcd_f=pgcd(knum2,denr2);
	knum2=knum2/pgcd_f;
	denr2=denr2/pgcd_f;
	
	//Ecriture radical num
	if(radnum1==1){
			tnum1=Math.sqrt(divnum1);
		}
		else if(knum1==1){
			tnum1="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum1+"</span>";
		}
		else{
			tnum1=knum1+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum1+"</span>";
		}
		
	//Ecriture fraction
	if(denr1==1){
		frac_finale1=tnum1;
	}
	else{
		frac_finale1="<span class=\"frac\"><sup>"+tnum1+"</sup><sub>"+denr1+"</sub></span>";
	}

		//Ecriture radical num
	if(radnum2==1){
			tnum2=Math.sqrt(divnum2);
		}
		else if(knum2==1){
			tnum2="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
		}
		else{
			tnum2=knum2+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
		}
		
	//Ecriture fraction
	if(denr2==1){
		frac_finale2=tnum2;
	}
	else{
		frac_finale2="<span class=\"frac\"><sup>"+tnum2+"</sup><sub>"+denr2+"</sub></span>";
	}

frac_finale3=frac_finale1+" + "+frac_finale2;

if(radnum1==radnum2){
	
	denr3=denr1*denr2/pgcd(denr1,denr2);
	knum1=knum1*denr3/denr1;
	knum2=knum2*denr3/denr2;
	knum3=knum1+knum2;

		//Ecriture radical num
	if(radnum2==1 && radnum1==1){
			tnum3=knum3;
		}
		else if(knum3==1){
			tnum3="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
		}
		else{
			tnum3=knum3+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
		}
		
	//Ecriture fraction
	if(denr3==1){
		frac_finale3=tnum3;
	}
	else{
		frac_finale3="<span class=\"frac\"><sup>"+tnum3+"</sup><sub>"+denr3+"</sub></span>";
	}
}

	
	return frac_finale3;
}

//............................................................................................................


/*
simp_frac_rad_litt(12,18,x,3) renvoie √6 . x^3 / 3
*/

function simp_frac_rad_litt(numr,denr,variable,degre){
						
		var
		signe_numr=Math.abs(numr)/numr;
		if(signe_numr==1){signe_numr_ecrit="";}else{signe_numr_ecrit=" - ";}
		numr=Math.abs(numr);
		pgcd_nd=pgcd(numr,denr);
		numr=numr/pgcd_nd;
		denr=denr/pgcd_nd;
		
		//Facteur sortable
		divnum=div_carre_max(numr*denr);
		
		//Calcul Radicand restant
		radnum=(numr*denr)/divnum;
		
		//Coefficient radical + simplification
		knum=Math.sqrt(divnum);
		pgcd_f=pgcd(knum,denr);
		knum=knum/pgcd_f;
		denr=denr/pgcd_f;
		
		//Ecriture radical num
		if(radnum==1){
			tnum=knum;
		}
		else if(knum==1){
			tnum="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum+"</span>";
		}
		else{
			tnum=knum+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum+"</span>";
		}
		
		//Ecriture partie littérale
		
		if(degre==0){
			part_litt="";
		}
		else if(degre==1){
			part_litt=variable;
		}
		else{
			part_litt=variable+"<sup>"+degre+"</sup>";
		}
		//Ecriture fraction
		
		if(tnum==1&&degre>0){
			if(denr==1){
				frac_finale=part_litt;
			}
			else{
				frac_finale="<span class=\"frac\"><sup>"+part_litt+"</sup><sub>"+denr+"</sub></span>";
			}
		}		
		else{
			if(denr==1){
				frac_finale=tnum+" "+part_litt;
			}
			else{
				frac_finale="<span class=\"frac\"><sup>"+tnum+" "+part_litt+"</sup><sub>"+denr+"</sub></span>";
			}
		}
		return signe_numr_ecrit+frac_finale;
}

//............................................................................................................

/*Additionne deux fractions littérales semblables dont les numerateurs et dénominateurs 
sont des radicaux (numr et denr sont ce qu'il y a sous radical et knumer et kdenr sont les coefficient)*/

function sommefracrad_litt(knumr1,numr1,kdenr1,denr1,knumr2,numr2,kdenr2,denr2,variable,degre){
	
	var
	signe_r1=(Math.abs(knumr1)/knumr1)*(Math.abs(kdenr1)/kdenr1); 
	signe_r2=(Math.abs(knumr2)/knumr2)*(Math.abs(kdenr2)/kdenr2); //Renvoie 1 ou -1 pour le signe de chaque terme.
	
	var
	numr1=numr1*knumr1*knumr1;
	numr2=numr2*knumr2*knumr2; //Tout est remis sous radical sans signe.
	denr1=denr1*kdenr1*kdenr1;
	denr2=denr2*kdenr2*kdenr2; //Tout est remis sous radical sans signe.
	
	if(numr1==0){
		frac_finale3=simp_frac_rad_litt(signe_r2*numr2,denr2,variable,degre);
	}
	else if(numr2==0){
		frac_finale3=simp_frac_rad_litt(signe_r1*numr1,denr1,variable,degre);
	}
	else if(numr1&&numr2==0){
		frac_finale3="0";
	}
	else{

		var
		pgcd_nd=pgcd(numr1,denr1);
		numr1=numr1/pgcd_nd;
		denr1=denr1/pgcd_nd; //Simplification du terme 1.
		
		//Facteur sortable
		divnum1=div_carre_max(numr1*denr1);
		
		//Calcul Radicand restant
		radnum1=(numr1*denr1)/divnum1;
		
		//Coefficient radical + simplification
		knum1=Math.sqrt(divnum1);
		pgcd_f=pgcd(knum1,denr1);
		knum1=knum1/pgcd_f;
		denr1=denr1/pgcd_f;
		
		var
		pgcd_nd=pgcd(numr2,denr2);
		numr2=numr2/pgcd_nd;
		denr2=denr2/pgcd_nd; //Simplification du terme 2.
		
		//Facteur sortable
		divnum2=div_carre_max(numr2*denr2);
		
		//Calcul Radicand restant
		radnum2=(numr2*denr2)/divnum2;
		
		//Coefficient radical + simplification
		knum2=Math.sqrt(divnum2);
		pgcd_f=pgcd(knum2,denr2);
		knum2=knum2/pgcd_f;
		denr2=denr2/pgcd_f;
		
		//Calcul nouveau dénominateur
		denr3=denr1*denr2/pgcd(denr1,denr2);
			
		//Ecriture partie littérale
		if(degre==0){
			part_litt="";
		}
		else if(degre==1){
			part_litt=variable;
		}
		else{
			part_litt=variable+"<sup>"+degre+"</sup>";
		}
			
		//Ecriture radical num1
		if(radnum1==1){
			tnum1_nonsembl=knum1*denr3/denr1;
		}
		else if(knum1==1){
			if((denr3/denr1)==1){
				tnum1_nonsembl="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum1+"</span>";
			}	
			else{
				tnum1_nonsembl=(denr3/denr1)+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum1+"</span>";
			}
		}
		else{
			if((denr3/denr1)*knum1==1){
				tnum1_nonsembl="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum1+"</span>";
			}
			else{
				tnum1_nonsembl=(denr3/denr1)*knum1+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum1+"</span>";
			}
		}

		//Ecriture radical num2
		if(radnum2==1){
			tnum2_nonsembl=knum2*denr3/denr2;
		}
		else if(knum2==1){
			if((denr3/denr2)==1){
				tnum2_nonsembl="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
			}
			else{
				tnum2_nonsembl=(denr3/denr2)+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
			}
		}
		else{
			if((denr3/denr2)*knum2==1){
				tnum2_nonsembl="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
			}
			else{
				tnum2_nonsembl=(denr3/denr2)*knum2+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
			}
		}
		
		
		//Si radicaux semblables
		if(radnum1==radnum2){
			
		knum3=signe_r1*(knum1*denr3/denr1)+signe_r2*(knum2*denr3/denr2);
		if(knum3>0){signe_rep="";}else{signe_rep=" - ";}
		knum3=Math.abs(knum3);
		
		pgcd3=pgcd(knum3,denr3);
		knum3=knum3/pgcd3;
		denr3=denr3/pgcd3;
		
			//Ecriture radical num
			if(radnum2==1 && radnum1==1){
				tnum3=knum3;
			}
			else if(knum3==1){
				tnum3="<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
			}
			else{
				tnum3=knum3+"<span class=\"radicalsymb\">√</span><span class=\"radical\">"+radnum2+"</span>";
			}
				
			//Ecriture fraction
			if(tnum3==1&&degre>0){
				if(denr3==1){
					frac_finale3=signe_rep+part_litt;
				}
				else{
					frac_finale3=signe_rep+"<span class=\"frac\"><sup>"+part_litt+"</sup><sub>"+denr3+"</sub></span>";
				}
			}
			else{
				if(denr3==1){
					frac_finale3=signe_rep+tnum3+" "+part_litt;
				}
				else{
					frac_finale3=signe_rep+"<span class=\"frac\"><sup>"+tnum3+" "+part_litt+"</sup><sub>"+denr3+"</sub></span>";
				}
			}
		}
		//Si radicaux non semblables
		else{
			if(signe_r1==1&&signe_r2==1){
				frac_finale3="<span class=\"frac\"><sup>("+tnum1_nonsembl+" + "+tnum2_nonsembl+") "+part_litt+"</sup><sub>"+denr3+"</sub></span>";
			}		
			else if(signe_r1==-1&&signe_r2==1){
				frac_finale3=" - <span class=\"frac\"><sup>("+tnum1_nonsembl+" - "+tnum2_nonsembl+") "+part_litt+"</sup><sub>"+denr3+"</sub></span>";
			}		
			else if(signe_r1==-1&&signe_r2==-1){
				frac_finale3=" - <span class=\"frac\"><sup>("+tnum1_nonsembl+" + "+tnum2_nonsembl+") "+part_litt+"</sup><sub>"+denr3+"</sub></span>";
			}
			else{
				frac_finale3="<span class=\"frac\"><sup>("+tnum1_nonsembl+" – "+tnum2_nonsembl+") "+part_litt+"</sup><sub>"+denr3+"</sub></span>";
			}
		}
	}

	return frac_finale3;
}

//............................................................................................................

//Réécris correctement le signe devant un coefficient
function nombresigne(coefficient){
	var
	ecriture="";
	if(coefficient==0){
		ecriture="+ 0";
	}
					
	else if(coefficient>0){
			ecriture=" + "+Math.abs(coefficient);
		  }
	else if(coefficient<0){
			ecriture=" – "+Math.abs(coefficient);
		}

	return ecriture;
}

//............................................................................................................

//Renvoie 1000000 en 1 000 000
function nombre_lisible(nombre){
	
	function separer_millier(nombre) {
	return new Intl.NumberFormat().format( nombre ); 
	}
	
	nombre=Number(nombre);
	
	if(Number.isInteger(nombre)==true){
		nombre=separer_millier(nombre);
	}
	
	else{
  	nombre+="";
  	separation=nombre.split(".");
		partie_entiere=separation[0];
    partie_decimale=separation[1];
    
    partie_entiere=separer_millier(partie_entiere);
    
    sep=partie_decimale.split("");
    partie_decimale="";

    for(var i=sep.length-1;i>=0;i--){
    partie_decimale+=sep[i];
    }
    
    partie_decimale=separer_millier(partie_decimale);

		sep=partie_decimale.split("");
    partie_decimale="";

    for(var i=sep.length-1;i>=0;i--){
    partie_decimale+=sep[i];
    }
    
    
    nombre=partie_entiere+","+partie_decimale;
	}
	
	return nombre;
}

//............................................................................................................

//Renvoie un tableau d'Horner complété. bindiv="a" du diviseur x-a et polydivid= tableau avec les coefficient du polynome ordonné et complétés.
function tableau_horner(bindiv,polydivid){
	//Calculs
	var poly_quotient=[];
	intermediaire=[""];
	
	poly_quotient.push(polydivid[0]);
	intermediaire.push(poly_quotient[0]*bindiv);
	
	for(tour=1;tour<polydivid.length;tour++){
		poly_quotient.push(intermediaire[tour]+polydivid[tour]);
		intermediaire.push(poly_quotient[tour]*bindiv);
	}
	
	//Construction tableau
	var tableau_horner="<table class=\"horner\"><caption>Méthode d'Horner</caption>";
		
		//1ère ligne
		tableau_horner+="<tr><td class=\"horner\"></td>";

		for(tour=0;tour<polydivid.length;tour++){
			tableau_horner+="<td class=\"horner\">"+polydivid[tour]+"</td>";
		}
			
		tableau_horner+="</tr>";		
		
		//2ème ligne
		tableau_horner+="<tr><td class=\"horner\">"+bindiv+"</td>";

		for(tour=0;tour<polydivid.length;tour++){
			tableau_horner+="<td class=\"horner\">"+intermediaire[tour]+"</td>";
		}
			
		tableau_horner+="</tr>";		
		
		//3ème ligne
		tableau_horner+="<tr><td class=\"horner\"></td>";

		for(tour=0;tour<polydivid.length;tour++){
			tableau_horner+="<td class=\"horner\">"+poly_quotient[tour]+"</td>";
		}
			
		tableau_horner+="</tr>";

	
	tableau_horner+="</table>";
	
	return tableau_horner;
}

//............................................................................................................

/*renvoie le polyôme quotient en texte (sans le reste) lors de la division de 
polydivid (tableau avec coefficient ordonné complété) par bindiv (le "a" de x-a). 
Il faut aussi définir la variable.*/

function quotient_horner(bindiv,polydivid,variable){
	var poly_quotient=[];
	intermediaire=[];
	
	poly_quotient.push(polydivid[0]);
	intermediaire.push(poly_quotient[0]*bindiv);
	
	for(tour=1;tour<polydivid.length-1;tour++){
		poly_quotient.push(intermediaire[tour-1]+polydivid[tour]);
		intermediaire.push(poly_quotient[tour]*bindiv);
	}
	
	poly_quotient=ecriture_polynome(poly_quotient,variable);
	
	return poly_quotient;
}

//............................................................................................................

/*renvoie le reste de la division de 
polydivid (tableau avec coefficient ordonné complété) par bindiv (le "a" de x-a). */
function reste_horner(bindiv,polydivid){
	var reste=0;
	degre_poly=polydivid.length-1;

	for(tour=0;tour<=degre_poly;tour++){
		reste+=polydivid[tour]*Math.pow(bindiv,degre_poly-tour);
	}	
	
	return reste;
}
//............................................................................................................

//cleanArray enlèves tous les doublons d'un tableau
function cleanArray(array) {
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}
//............................................................................................................

//Ordonne et réduit un polynome écrit comme ici :
//-10x<sup>2</sup>-20x<sup>6</sup>+48x<sup>6</sup>-10x<sup>2</sup>+4 deviendra 14x<sup>6</sup>-5x<sup>2</sup>+2]
function ordonne_polynome(polysub) {
		
	var 
	sauvegarde_polysub=polysub;
	
	//On ajoute les exposant 1 et 0
	polysub = polysub.replace(/\–/gi, "-");
	polysub=polysub.replace(/ /g,"");
	polysub = polysub.replace(/x\+/gi, "x<sup>1</sup>+");
	polysub = polysub.replace(/x-/gi, "x<sup>1</sup>-");

	if(polysub.charAt(polysub.length-1)=="x"){
		polysub+="<sup>1</sup>";
	}
	else if(polysub.charAt(polysub.length-1)!=">"){
		polysub+="x<sup>0</sup>";
	}
	
	ta1=polysub.split(/(x?<sup>[0-9]{0,}<\/sup>)/);
	
	for(t=0;t<ta1.length;t++){

		ress=/[-|\+]{0,}[0-9]{1,}[-|\+][0-9]{0,}/.test(ta1[t]);
		
		nvt=ta1[t].split(/([-\+])/);

		if(ress&&t==0){

			if(nvt[0]==""){

				  ta1[t]=nvt[1]+nvt[2];

				  ta1.splice((t+1),0,"x<sup>0</sup>")

				  ta1.splice((t+2),0,(nvt[3]+nvt[4]))
				  
			}
			else{

			  ta1[t]=nvt[0];

			  ta1.splice((t+1),0,"x<sup>0</sup>")

			  ta1.splice((t+2),0,(nvt[1]+nvt[2]))
			  
			}

		}    
		else if(ress&&t!=0){
	  
		  ta1[t]=nvt[1]+nvt[2];
		  
		  ta1.splice((t+1),0,"x<sup>0</sup>")
		  
		  ta1.splice((t+2),0,(nvt[3]+nvt[4]))

		}

		else{}

	}	
			
	//On écrit les coefficients 1
	for(to=0;to<ta1.length;to++){	

		if(ta1[to]=="+"||ta1[to]==" + "||ta1[to]==" +"||ta1[to]=="+ "){
			ta1[to]="1";
		}		
		else if(ta1[to]=="-"||ta1[to]==" - "||ta1[to]==" -"||ta1[to]=="- "){
			ta1[to]="-1";
		}
		
	}

	if(ta1[0]==""){
		
		ta1[0]="1";
		
	}	
	else if(ta1[0]=="-"||ta1[0]==" -"||ta1[0]=="- "||ta1[0]==" - "){
		
		ta1[0]="-1";
		
	}
	if(ta1[(ta1.length-1)]==""){
		ta1.splice((ta1.length-1),1);
	}
	
	//Suppresion des termes de coefficient 0
	for(to=0;to<(ta1.length);to++){	
			
		if(ta1[to]==0){
					
			ta1.splice(to,1);
			ta1.splice(to,1);
			
			to=to-2;
			
		}
	
		to++
	
	}	
	//Addition des termes semblables
	for(to=1;to<(ta1.length);to++){	
		
		terme_recherche=ta1[to];
		
		rang=ta1.indexOf(terme_recherche,to+1);
		
		if(rang>-1){
			
			ta1[to-1]=Number(ta1[to-1])+Number(ta1[rang-1]);
			
			ta1.splice(rang-1,1);
			ta1.splice(rang-1,1);
			
			to=to-2;
			
		}
	
		to++
	
	}
	
	
	
	//Rajoute un + aux éléments positifs
	for(to=0;to<(ta1.length);to++){	

		if(Number(ta1[to])>=0){
			ta1[to]="+"+Number(ta1[to]);
		}
		
		to++
		
	}
	//On classe les degrés
		
	ta2=[]; //Tableau fusion partie littérales et coeff
	
	for(to=0;to<(ta1.length);to++){	
	
		ta2.push(ta1[to]+ta1[to+1]);
		
		to++
		
	}	
	
	//Trie les degrés
	ta2.sort(function(a, b) {
		
		taba=a.split(/(>[0-9]{0,}<)/);
		na=taba[1];
		na=na.replace("<","");
		na=na.replace(">","");			
		
		tabb=b.split(/(>[0-9]{0,}<)/);
		nb=tabb[1];
		nb=nb.replace("<","");
		nb=nb.replace(">","");
		
		a=Number(na);
		b=Number(nb);
		
	  return b - a;
	});
		
	//Fin calcul mise en évidence partie littérale

	nouveau_polynome="";

	for(to=0;to<ta2.length;to++){	

		nouveau_polynome+=ta2[to];
		
	}
	
	nouveau_polynome=nouveau_polynome.replace(/<sup>1<\/sup>/gi,"");
	nouveau_polynome=nouveau_polynome.replace(/x<sup>0<\/sup>/gi,"");
	nouveau_polynome=nouveau_polynome.replace(/\+/gi," + ");
	nouveau_polynome=nouveau_polynome.replace(/-/gi," - ");
	nouveau_polynome=nouveau_polynome.replace(/\+ 1x/gi,"+ x");
	nouveau_polynome=nouveau_polynome.replace(/- 1x/gi,"- x");


	if(nouveau_polynome.substr(0,3)==' + '){nouveau_polynome=nouveau_polynome.substr(3);}else{}

	if(nouveau_polynome==""||nouveau_polynome.substr(0,3)==' 0 '||nouveau_polynome.substr(0,1)=='0'||nouveau_polynome.substr(0,2)=='0 '||nouveau_polynome.substr(0,2)==' 0'){
		nouveau_polynome="0";
	}

	return nouveau_polynome;

}
//............................................................................................................

//Mets en evidence les coefficients d'un polynome écrit avec des <sub>(pas les parties litterales)
//28x<sup>6</sup>-10x<sup>2</sup>+4 deviendra un tableau [2 , 14x<sup>6</sup>-5x<sup>2</sup>+2]
function evidence_sup(polysub) {
		
	var 
	sauvegarde_polysub=polysub;
	polysub = polysub.replace(/\–/gi, "-");
	polysub=polysub.replace(/ /g,"");
	polysub = polysub.replace(/x\+/gi, "x<sup>1</sup>+");
	polysub = polysub.replace(/x-/gi, "x<sup>1</sup>-");

	if(polysub.charAt(polysub.length-1)=="x"){
		polysub+="<sup>1</sup>";
	}
	else if(polysub.charAt(polysub.length-1)!=">"){
		polysub+="x<sup>0</sup>";
	}
	
	ta1=polysub.split(/(x?<sup>[0-9]{0,}<\/sup>)/);
	
	for(t=0;t<ta1.length;t++){

		ress=/[-|\+]{0,}[0-9]{1,}[-|\+][0-9]{0,}/.test(ta1[t]);
		
		nvt=ta1[t].split(/([-\+])/);

		if(ress&&t==0){

			if(nvt[0]==""){

				  ta1[t]=nvt[1]+nvt[2];

				  ta1.splice((t+1),0,"x<sup>0</sup>")

				  ta1.splice((t+2),0,(nvt[3]+nvt[4]))
				  
			}
			else{

			  ta1[t]=nvt[0];

			  ta1.splice((t+1),0,"x<sup>0</sup>")

			  ta1.splice((t+2),0,(nvt[1]+nvt[2]))
			  
			}

		}    
		else if(ress&&t!=0){
	  
		  ta1[t]=nvt[1]+nvt[2];
		  
		  ta1.splice((t+1),0,"x<sup>0</sup>")
		  
		  ta1.splice((t+2),0,(nvt[3]+nvt[4]))

		}

		else{}

	}	
	
	if(ta1.length>3){
			
		//Début calcul pgcd coefficient
		for(to=0;to<ta1.length;to++){	

			if(ta1[to]=="+"||ta1[to]==" + "||ta1[to]==" +"||ta1[to]=="+ "){
				ta1[to]="1";
			}		
			else if(ta1[to]=="-"||ta1[to]==" - "||ta1[to]==" -"||ta1[to]=="- "){
				ta1[to]="-1";
			}
			
		}

		if(ta1[0]==""){
			
			ta1[0]="1";
			
		}	
		else if(ta1[0]=="-"||ta1[0]==" -"||ta1[0]=="- "||ta1[0]==" - "){
			
			ta1[0]="-1";
			
		}
		if(ta1[(ta1.length-1)]==""){
		ta1.splice((ta1.length-1),1);
		}

		var pgcd_coeff=pgcd(Number(ta1[0]),Number(ta1[2]));

		for(to=0;to<ta1.length;to++){	

			pgcd1=pgcd(pgcd_coeff,Number(ta1[to]));
			
			if(pgcd1<pgcd_coeff){
				pgcd_coeff=pgcd1;
			}
			
			to++
			
		}	

		for(to=0;to<ta1.length;to++){	

			nouv=Number(ta1[to])/pgcd_coeff;


		if(nouv>=0){
			ta1[to]=" + "+nouv;
		}
		else{
			ta1[to]=" - "+Math.abs(nouv);
		}

			to++
			
		}

		//Fin Calcul pgcd coefficient
		
		//Début calcul mise en évidence partie littérale
		
		tab_degre=[];
		
		for(to=0;to<ta1.length;to++){	
		
			if(to%2!=0){
				nv_deg=ta1[to].replace("x<sup>","");
				nv_deg=nv_deg.replace("</sup>","");
				
				tab_degre.push(Number(nv_deg));
			}
			
		}
		
		deg_evi=Math.min(...tab_degre);
		
		if(deg_evi!=0){
			
			if(deg_evi==1){
				pgcd_litt="x";
			}
			else{
				pgcd_litt="x<sup>"+deg_evi+"</sup>";
			}
			
			tour_deg=0;
			
			for(to=0;to<ta1.length;to++){	
			
				if(to%2!=0){
					
					ta1[to]="x<sup>"+(tab_degre[tour_deg]-deg_evi)+"</sup>";
					
					tour_deg++;
					
				}
				
			}
			
		}
		else{
			pgcd_litt="";
		}
		
		//Fin calcul mise en évidence partie littérale

		nouveau_polynome="";

		for(to=0;to<ta1.length;to++){	

			nouveau_polynome+=ta1[to];
			
		}
		
		nouveau_polynome=nouveau_polynome.replace(/<sup>1<\/sup>/gi,"");
		nouveau_polynome=nouveau_polynome.replace(/x<sup>0<\/sup>/gi,"");
		nouveau_polynome=nouveau_polynome.replace(/\+ 1x/gi,"+ x");
		nouveau_polynome=nouveau_polynome.replace(/- 1x/gi,"- x");

		if(nouveau_polynome.substr(0,3)==' + '){nouveau_polynome=nouveau_polynome.substr(3);}else{}

		
		if(pgcd_coeff==1&&pgcd_litt==""){
			pgcd_final=1;
		}
		else if(pgcd_coeff==1&&pgcd_litt!=""){
			pgcd_final=pgcd_litt;
		}
		else{
			pgcd_final=pgcd_coeff+pgcd_litt;
		}



		polysubtab=[pgcd_final,nouveau_polynome];
		
	}
	
    else{
    	polysubtab=[1,sauvegarde_polysub];
    }
	
	return polysubtab;

}
//............................................................................................................


//Factorise une dfférence de 2 carrés (avec mise en évidence):
//"12x<sup>24</sup>-100x<sup>10</sup>" deviendra "4x<sup>10</sup> . (2x<sup>7</sup>-5)(2x<sup>7</sup>+5)"
function difference_carre(polysub,interm="") {
		
	var	
	polysub=ordonne_polynome(polysub);
	
	polysub=evidence_sup(polysub);
	
	if(polysub[0]=="1"){
		sauvegarde_polysub=polysub[1];
	}	
	else{
		sauvegarde_polysub=polysub[0]+" . ("+polysub[1]+")";
	}
	
	coeff_evid=polysub[0];
	polysub=polysub[1];
	
	//On ajoute les exposant 1 et 0
	polysub = polysub.replace(/\–/gi, "-");
	polysub=polysub.replace(/ /g,"");
	polysub = polysub.replace(/x\+/gi, "x<sup>1</sup>+");
	polysub = polysub.replace(/x-/gi, "x<sup>1</sup>-");

	if(polysub.charAt(polysub.length-1)=="x"){
		polysub+="<sup>1</sup>";
	}
	else if(polysub.charAt(polysub.length-1)!=">"){
		polysub+="x<sup>0</sup>";
	}
	
	ta1=polysub.split(/(x?<sup>[0-9]{0,}<\/sup>)/);
	
	for(t=0;t<ta1.length;t++){

		ress=/[-|\+]{0,}[0-9]{1,}[-|\+][0-9]{0,}/.test(ta1[t]);
		
		nvt=ta1[t].split(/([-\+])/);

		if(ress&&t==0){

			if(nvt[0]==""){

				  ta1[t]=nvt[1]+nvt[2];

				  ta1.splice((t+1),0,"x<sup>0</sup>")

				  ta1.splice((t+2),0,(nvt[3]+nvt[4]))
				  
			}
			else{

			  ta1[t]=nvt[0];

			  ta1.splice((t+1),0,"x<sup>0</sup>")

			  ta1.splice((t+2),0,(nvt[1]+nvt[2]))
			  
			}

		}    
		else if(ress&&t!=0){
	  
		  ta1[t]=nvt[1]+nvt[2];
		  
		  ta1.splice((t+1),0,"x<sup>0</sup>")
		  
		  ta1.splice((t+2),0,(nvt[3]+nvt[4]))

		}

		else{}

	}	
			
	//On écrit les coefficients 1
	for(to=0;to<ta1.length;to++){	

		if(ta1[to]=="+"||ta1[to]==" + "||ta1[to]==" +"||ta1[to]=="+ "){
			ta1[to]="1";
		}		
		else if(ta1[to]=="-"||ta1[to]==" - "||ta1[to]==" -"||ta1[to]=="- "){
			ta1[to]="-1";
		}
		
	}

	if(ta1[0]==""){
		
		ta1[0]="1";
		
	}	
	else if(ta1[0]=="-"||ta1[0]==" -"||ta1[0]=="- "||ta1[0]==" - "){
		
		ta1[0]="-1";
		
	}
	if(ta1[(ta1.length-1)]==""){
		ta1.splice((ta1.length-1),1);
	}
	
	var nouveau_polynome="";
		
		tab_degre=[];
		somme_degre=0;
		
		for(to=0;to<ta1.length;to++){	
		
			if(to%2!=0){
				nv_deg=ta1[to].replace("x<sup>","");
				nv_deg=nv_deg.replace("</sup>","");
				
				tab_degre.push(Number(nv_deg));
				
				somme_degre+=Number(nv_deg);
			}
			
		}
		
	if(ta1.length==4&&somme_degre%2==0&&(!((Number(ta1[0]>=0))&&(Number(ta1[2]>=0)))&&!((Number(ta1[0]<0))&&(Number(ta1[2]<0))))){
				
		if((Number(ta1[0]>=0))&&(Number(ta1[2]<=0))){
			
			tterme1=simp_rad(Math.abs(Number(ta1[0])))+"x<sup>"+(tab_degre[0]/2)+"</sup>";
			tterme2=simp_rad(Math.abs(Number(ta1[2])))+"x<sup>"+(tab_degre[1]/2)+"</sup>";
			
		}
		else if((Number(ta1[0]<0))&&(Number(ta1[2]>=0))){

			tterme2=simp_rad(Math.abs(Number(ta1[0])))+"x<sup>"+(tab_degre[0]/2)+"</sup>";
			tterme1=simp_rad(Math.abs(Number(ta1[2])))+"x<sup>"+(tab_degre[1]/2)+"</sup>";			
			
		}
		
		if(coeff_evid!="1"){
			interm=coeff_evid+" . ("+tterme1+"+"+tterme2+") . ";
		}
		else{
			interm="("+tterme1+"+"+tterme2+") . ";
		}
		
		if((tterme1.indexOf("radical")!=-1)||(tterme2.indexOf("radical")!=-1)){
			facteur_supp=" ("+tterme1+"-"+tterme2+")";
		}		
		else{
			facteur_supp=difference_carre(tterme1+"-"+tterme2);
		}

		nouveau_polynome=interm+facteur_supp;
			
	}
	
	else{

			nouveau_polynome="("+sauvegarde_polysub+")";

	}
	
	nouveau_polynome=nouveau_polynome.replace(/<sup>1<\/sup>/gi,"");
	nouveau_polynome=nouveau_polynome.replace(/x<sup>0<\/sup>/gi,"");
	nouveau_polynome=nouveau_polynome.replace(/\+/gi," + ");
	nouveau_polynome=nouveau_polynome.replace(/-/gi," - ");
	nouveau_polynome=nouveau_polynome.replace(/\+ 1x/gi,"+ x");
	nouveau_polynome=nouveau_polynome.replace(/- 1x/gi,"- x");
	nouveau_polynome=nouveau_polynome.replace(/1x/gi,"x");


	if(nouveau_polynome.substr(0,3)==' + '){nouveau_polynome=nouveau_polynome.substr(3);}else{}

	return nouveau_polynome;

}
//............................................................................................................


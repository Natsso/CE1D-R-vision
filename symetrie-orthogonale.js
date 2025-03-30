//Variable

var nombre_colonne_ex=2;
var nombre_colonne_sol=2;
var nombre_exo=6;
//Création consigne
var newConsigne = document.createElement("p");
newConsigne.setAttribute('class', "consigne");
newConsigne.setAttribute('id', "consigne");
sp2 = document.getElementById("tableau_exo");
parentDiv = sp2.parentNode;
parentDiv.insertBefore(newConsigne, sp2);
document.getElementById("consigne").innerHTML="Construis les symétries demandées.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML="Symétrie Orthogonale - Exercices";
	
//Crée titre Solutions
document.getElementById("solution").innerHTML="Symétrie Orthogonale - Solutions";
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
	var frequence_ex=[1,2];
	shuffle(frequence_ex);
	numero_exo = 0;
	num_jsx=0;

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
		triangles();
		}
		else if(cas_exo==2){
		quadrilateres();
		}
		
		numero_exo++;
		num_jsx++;

	}


//Fonctions exercices

	//Fonctions triangle
	function triangles(){
		
		var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
		shuffle(alphabet);
				
		axe=alphabet[0].toLowerCase();
		triangle=[alphabet[2],alphabet[3],alphabet[4]];
		triangle.sort();
		imagetriangle=[alphabet[6],alphabet[7],alphabet[8]];
			
		face=Math.floor(Math.random() * 4); //Position axe
		alea = Math.floor(Math.random() * 3);//Croisement ou pas
		lance_de=Math.floor(Math.random() * 4);//Axe = Côté
		
		do{
		
			if(face==0){
				//Création des points de bases (ABC = triangle) et le Centre X
				if(alea==0){multa=0;multb=0;multc=0;}
				else if(alea==1){multa=2;multb=2;multc=2;}
				else{multa=2*Math.floor(Math.random() * 2);multb=2*Math.floor(Math.random() * 2);multc=2*Math.floor(Math.random() * 2);}
				
				xa = Math.floor(Math.random() * 190+10);
				xa += multa*(250-xa);
				ya = Math.floor(Math.random() * 480+10);
				
				xb = Math.floor(Math.random() * 190+10);
				xb += multb*(250-xb);
				yb = Math.floor(Math.random() * 480+10);
				
				xc = Math.floor(Math.random() * 190+10);
				xc += multc*(250-xc);
				yc = Math.floor(Math.random() * 480+10);
				
				//axe XY
				var
				xx=250;
				yx=250;
				xy=250;
				yy=251;
				
				xnom=250;
				ynom=500;
			}		
			else if(face==1){
				//Création des points de bases (ABC = triangle) et le Centre X
				if(alea==0){multa=0;multb=0;multc=0;}
				else if(alea==1){multa=2;multb=2;multc=2;}
				else{multa=2*Math.floor(Math.random() * 2);multb=2*Math.floor(Math.random() * 2);multc=2*Math.floor(Math.random() * 2);}
				
				xa = Math.floor(Math.random() * 480+10);
				ya = Math.floor(Math.random() * 190+10);
				ya += multa*(250-ya);

				xb = Math.floor(Math.random() * 480+10);
				yb = Math.floor(Math.random() * 190+10);
				yb += multb*(250-yb);

				xc = Math.floor(Math.random() * 480+10);
				yc = Math.floor(Math.random() * 190+10);
				yc += multc*(250-yc);

				//axe XY
				var
				xx=250;
				yx=250;
				xy=251;
				yy=250;	
				
				xnom=500;
				ynom=255;
			}		
			else if(face==2){
				//Création des points de bases (ABC = triangle) et le Centre X
				do{
					var		
					xa = Math.floor(Math.random() * 490+10);
					ya = Math.floor(Math.random() * 490+10);
					
					xb = Math.floor(Math.random() * 490+10);
					yb = Math.floor(Math.random() * 490+10);
					
					xc = Math.floor(Math.random() * 490+10);
					yc = Math.floor(Math.random() * 490+10);
				}while((xa+ya)>450||(xb+yb)>450||(xc+yc)>450);

				if(alea==0){}
				else if(alea==1){
					cha=xa;
					xa=500-ya;
					ya=500-cha;
					
					chb=xb;
					xb=500-yb;
					yb=500-chb;
					
					chc=xc;
					xc=500-yc;
					yc=500-chc;
				}
				else{
					multa=Math.floor(Math.random() * 2);
					cha=xa;
					xa=((500-ya)*multa)+(xa*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					ya=((500-cha)*multa)+(ya*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					
					multb=Math.floor(Math.random() * 2);
					chb=xb;
					xb=((500-yb)*multb)+(xb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					yb=((500-chb)*multb)+(yb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					
					multc=Math.floor(Math.random() * 2);
					chc=xc;
					xc=((500-yc)*multc)+(xc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
					yc=((500-chc)*multc)+(yc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
				}
				
				//axe XY
				var
				xx=250;
				yx=250;
				xy=249;
				yy=251;
				
				xnom=0;
				ynom=495;	
			}		
			else if (face==3){
				//Création des points de bases (ABC = triangle) et le Centre X
				do{
					var		
					xa = Math.floor(Math.random() * 490+10);
					ya = Math.floor(Math.random() * 490+10);
					
					xb = Math.floor(Math.random() * 490+10);
					yb = Math.floor(Math.random() * 490+10);
					
					xc = Math.floor(Math.random() * 490+10);
					yc = Math.floor(Math.random() * 490+10);
				}while((-xa+ya)>-50||(-xb+yb)>-50||(-xc+yc)>-50);
				
				if(alea==0){}
				else if(alea==1){
					cha=xa;
					xa=ya;
					ya=cha;
					
					chb=xb;
					xb=yb;
					yb=chb;
					
					chc=xc;
					xc=yc;
					yc=chc;
				}
				else{
					multa=Math.floor(Math.random() * 2);
					cha=xa;
					xa=(ya*multa)+(xa*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					ya=(cha*multa)+(ya*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					
					multb=Math.floor(Math.random() * 2);
					chb=xb;
					xb=(yb*multb)+(xb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					yb=(chb*multb)+(yb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					
					multc=Math.floor(Math.random() * 2);
					chc=xc;
					xc=(yc*multc)+(xc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
					yc=(chc*multc)+(yc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
				}
				
				//axe XY
				var
				xx=250;
				yx=250;
				xy=251;
				yy=251;
				
				xnom=500;
				ynom=480;	

			}
			
			nomaxe=axe;
			axe_visible=true;	
			
			if(lance_de==0){
				
				if(face==0){
				xa=xx;
				xb=xx;
				}
				else if(face==1){
				ya=yx;
				yb=yx;
				}
				else if(face==2){
				ya=500-xa;
				yb=500-xb;
				}
				else if(face==3){
				ya=xa;
				yb=xb;
				}

			axe=triangle[0]+triangle[1];
			nomaxe="";
			axe_visible=false;	
			}
			
			distAB=Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2));
			distAC=Math.sqrt(Math.pow((xa-xc),2)+Math.pow((ya-yc),2));
			distBC=Math.sqrt(Math.pow((xc-xb),2)+Math.pow((yc-yb),2));
					
			perimetre=distAB+distAC+distBC;
			aire=Math.sqrt((perimetre/2)*(perimetre/2 - distAB)*(perimetre/2 - distAC)*(perimetre/2 - distBC));
		
		}while(distAB<100||distAC<100||distBC<100||aire<9000);

		//consigne
		textexo="s<sub>"+axe+"</sub> ("+triangle[0]+triangle[1]+triangle[2]+") = "+imagetriangle[0]+imagetriangle[1]+imagetriangle[2];
		textexo+="</br><div id=" + num_jsx + " class=\"stylegraph\" style=width:250px;height:250px;></div>";			
					
		//Consigne
		var newExo = document.createElement("li");  
		document.getElementById("listex"+col_ex).appendChild(newExo);
		newExo.setAttribute('id', "exo"+boucle1);
		document.getElementById("exo"+boucle1).innerHTML=textexo;
		
		//Dessin jsx
		var board = JXG.JSXGraph.initBoard(num_jsx, {boundingbox: [-40, 540, 540, -40],axis: false,showNavigation: false,});

		//Dessin Triangle	
		var 
		A = board.create('point',[xa,ya], {name:triangle[0],size:1,fillColor:'black',strokeColor:'black',label: {offset: [-15, 0]}});
		B = board.create('point',[xb,yb], {name:triangle[1],size:1,fillColor:'black',strokeColor:'black',label: {offset: [10, 0]}});
		C = board.create('point',[xc,yc], {name:triangle[2],size:1,fillColor:'black',strokeColor:'black',label: {offset: [0, -10]}});
		triangleabc = board.create('polygon',[A,B,C], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'black'}});
		
		//Dessin Axe
		X = board.create('point',[xx,yx], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		Y = board.create('point',[xy,yy], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		NOM = board.create('point',[xnom,ynom], {name:nomaxe,size:0,fillColor:'black',strokeColor:'black'});
		XY = board.create('line', [X,Y], {strokeWidth: 2,Color: 'black',visible:axe_visible});
		
		//Solution
		
		num_jsx++;
		textesol="s<sub>"+axe+"</sub> ("+triangle[0]+triangle[1]+triangle[2]+") = "+imagetriangle[0]+imagetriangle[1]+imagetriangle[2];
		textesol+="</br><div id=" + num_jsx + " class=\"stylegraph\" style=width:250px;height:250px;></div>";	
		
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;
		
		//Jsx solution
		var board = JXG.JSXGraph.initBoard(num_jsx, {boundingbox: [-40, 540, 540, -40],axis: false,showNavigation: false,});

		//Dessin Triangle	
		var 
		A = board.create('point',[xa,ya], {name:triangle[0],size:1,fillColor:'black',strokeColor:'black',label: {offset: [-15, 0]}});
		B = board.create('point',[xb,yb], {name:triangle[1],size:1,fillColor:'black',strokeColor:'black',label: {offset: [10, 0]}});
		C = board.create('point',[xc,yc], {name:triangle[2],size:1,fillColor:'black',strokeColor:'black',label: {offset: [0, -10]}});
		triangleabc = board.create('polygon',[A,B,C], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'black'}});
		
		
		//Dessin Axe
		X = board.create('point',[xx,yx], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		Y = board.create('point',[xy,yy], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		NOM = board.create('point',[xnom,ynom], {name:nomaxe,size:0,fillColor:'black',strokeColor:'black'});
		XY = board.create('line', [X,Y], {strokeWidth: 2,Color: 'black',visible:axe_visible});
		
		//Symetrie Orthogonale
		t = board.create('transform', [XY], {type:'reflect'});
		Ap =board.create('point', [A, t], {name: imagetriangle[0],size:1,Color: 'green',label:{Color:'green',offset: [10, 0]}});
		Bp =board.create('point', [B, t], {name: imagetriangle[1],size:1,Color: 'green',label:{Color:'green',offset: [-15, 0]}});
		Cp =board.create('point', [C, t], {name: imagetriangle[2],size:1,Color: 'green',label:{Color:'green',offset: [0,10]}});
		imagetriangle = board.create('polygon',[Ap,Bp,Cp], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'green'}});
		
		//Construction
		AAp = board.create('line', [A,Ap], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		BBp = board.create('line', [B,Bp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		CCp = board.create('line', [C,Cp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
				
	}	
	
	
	//Fonctions quadri
	function quadrilateres(){
		
var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
		shuffle(alphabet);
				
		axe=alphabet[0].toLowerCase();
		quadri=[alphabet[2],alphabet[3],alphabet[4],alphabet[5]];
		quadri.sort();
		imagequadri=[alphabet[6],alphabet[7],alphabet[8],alphabet[9]];
			
		face=Math.floor(Math.random() * 4); //Position axe
		alea = Math.floor(Math.random() * 3); //Aleatoire croisement axe ou non
		
		do{
		
			if(face==0){
				//Création des points de bases (ABC = triangle) et le Centre X
				if(alea==0){multa=0;multb=0;multc=0;multd=0;}
				else if(alea==1){multa=2;multb=2;multc=2;multd=2;}
				else{multa=2*Math.floor(Math.random() * 2);multb=2*Math.floor(Math.random() * 2);multc=2*Math.floor(Math.random() * 2);multd=2*Math.floor(Math.random() * 2);}
				
				xa = Math.floor(Math.random() * 190+10);
				xa += multa*(250-xa);
				ya = Math.floor(Math.random() * 480+10);
				
				xb = Math.floor(Math.random() * 190+10);
				xb += multb*(250-xb);
				yb = Math.floor(Math.random() * 480+10);
				
				xc = Math.floor(Math.random() * 190+10);
				xc += multc*(250-xc);
				yc = Math.floor(Math.random() * 480+10);

				xd = Math.floor(Math.random() * 190+10);
				xd += multd*(250-xd);
				yd = Math.floor(Math.random() * 480+10);
				
				//axe XY
				var
				xx=250;
				yx=250;
				xy=250;
				yy=251;
				
				xnom=250;
				ynom=500;
			}		
			else if(face==1){
				//Création des points de bases (ABC = triangle) et le Centre X
				if(alea==0){multa=0;multb=0;multc=0;multd=0;}
				else if(alea==1){multa=2;multb=2;multc=2;multd=2;}
				else{multa=2*Math.floor(Math.random() * 2);multb=2*Math.floor(Math.random() * 2);multc=2*Math.floor(Math.random() * 2);multd=2*Math.floor(Math.random() * 2);}
				
				xa = Math.floor(Math.random() * 480+10);
				ya = Math.floor(Math.random() * 190+10);
				ya += multa*(250-ya);

				xb = Math.floor(Math.random() * 480+10);
				yb = Math.floor(Math.random() * 190+10);
				yb += multb*(250-yb);

				xc = Math.floor(Math.random() * 480+10);
				yc = Math.floor(Math.random() * 190+10);
				yc += multc*(250-yc);

				xd = Math.floor(Math.random() * 480+10);
				yd = Math.floor(Math.random() * 190+10);
				yd += multd*(250-yd);

				//axe XY
				var
				xx=250;
				yx=250;
				xy=251;
				yy=250;	
				
				xnom=500;
				ynom=255;
			}		
			else if(face==2){
				//Création des points de bases (ABC = triangle) et le Centre X
				do{
					var		
					xa = Math.floor(Math.random() * 490+10);
					ya = Math.floor(Math.random() * 490+10);
					
					xb = Math.floor(Math.random() * 490+10);
					yb = Math.floor(Math.random() * 490+10);
					
					xc = Math.floor(Math.random() * 490+10);
					yc = Math.floor(Math.random() * 490+10);
					
					xd = Math.floor(Math.random() * 490+10);
					yd = Math.floor(Math.random() * 490+10);
				}while((xa+ya)>450||(xb+yb)>450||(xc+yc)>450||(xd+yd)>450);
				
				if(alea==0){}
				else if(alea==1){
					cha=xa;
					xa=500-ya;
					ya=500-cha;
					
					chb=xb;
					xb=500-yb;
					yb=500-chb;
					
					chc=xc;
					xc=500-yc;
					yc=500-chc;
					
					chd=xd;
					xd=500-yd;
					yd=500-chd;
				}
				else{
					multa=Math.floor(Math.random() * 2);
					cha=xa;
					xa=((500-ya)*multa)+(xa*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					ya=((500-cha)*multa)+(ya*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					
					multb=Math.floor(Math.random() * 2);
					chb=xb;
					xb=((500-yb)*multb)+(xb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					yb=((500-chb)*multb)+(yb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					
					multc=Math.floor(Math.random() * 2);
					chc=xc;
					xc=((500-yc)*multc)+(xc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
					yc=((500-chc)*multc)+(yc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
					
					multd=Math.floor(Math.random() * 2);
					chd=xd;
					xd=((500-yd)*multd)+(xd*(Math.pow(-1,multd)+Math.pow(1,multd))/2);
					yd=((500-chd)*multd)+(yd*(Math.pow(-1,multd)+Math.pow(1,multd))/2);
				}
				
				//axe XY
				var
				xx=250;
				yx=250;
				xy=249;
				yy=251;
				
				xnom=0;
				ynom=495;	
			}		
			else{
				//Création des points de bases (ABC = triangle) et le Centre X
				do{
					var		
					xa = Math.floor(Math.random() * 490+10);
					ya = Math.floor(Math.random() * 490+10);
					
					xb = Math.floor(Math.random() * 490+10);
					yb = Math.floor(Math.random() * 490+10);
					
					xc = Math.floor(Math.random() * 490+10);
					yc = Math.floor(Math.random() * 490+10);
					
					xd = Math.floor(Math.random() * 490+10);
					yd = Math.floor(Math.random() * 490+10);
				}while((-xa+ya)>-50||(-xb+yb)>-50||(-xc+yc)>-50||(-xd+yd)>-50);
				
				if(alea==0){}
				else if(alea==1){
					cha=xa;
					xa=ya;
					ya=cha;
					
					chb=xb;
					xb=yb;
					yb=chb;
					
					chc=xc;
					xc=yc;
					yc=chc;
					
					chd=xd;
					xd=yd;
					yd=chd;
				}
				else{
					multa=Math.floor(Math.random() * 2);
					cha=xa;
					xa=(ya*multa)+(xa*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					ya=(cha*multa)+(ya*(Math.pow(-1,multa)+Math.pow(1,multa))/2);
					
					multb=Math.floor(Math.random() * 2);
					chb=xb;
					xb=(yb*multb)+(xb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					yb=(chb*multb)+(yb*(Math.pow(-1,multb)+Math.pow(1,multb))/2);
					
					multc=Math.floor(Math.random() * 2);
					chc=xc;
					xc=(yc*multc)+(xc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
					yc=(chc*multc)+(yc*(Math.pow(-1,multc)+Math.pow(1,multc))/2);
					
					multd=Math.floor(Math.random() * 2);
					chd=xd;
					xd=(yd*multd)+(xd*(Math.pow(-1,multd)+Math.pow(1,multd))/2);
					yd=(chd*multd)+(yd*(Math.pow(-1,multd)+Math.pow(1,multd))/2);
				}
				
				//axe XY
				var
				xx=250;
				yx=250;
				xy=251;
				yy=251;
				
				xnom=500;
				ynom=480;	

			}
		
		distAB=Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2));
		distCD=Math.sqrt(Math.pow((xd-xc),2)+Math.pow((yd-yc),2));
		distBC=Math.sqrt(Math.pow((xc-xb),2)+Math.pow((yc-yb),2));
		distDA=Math.sqrt(Math.pow((xd-xa),2)+Math.pow((yd-ya),2));
		distAC=Math.sqrt(Math.pow((xc-xa),2)+Math.pow((yc-ya),2));
		
		perimetre=distAB+distCD+distBC+distDA;
		aire=2*Math.sqrt((perimetre/2)*(perimetre/2 - distAB)*(perimetre/2 - distAC)*(perimetre/2 - distBC));
		
		//Angle
	
		vxAB=(xa-xb);
		vyAB=(ya-yb);		
		
		vxBC=(xc-xb);
		vyBC=(yc-yb);		
		
		vxCD=(xc-xd);
		vyCD=(yc-yd);
		
		vxDA=(xa-xd);
		vyDA=(ya-yd);
		
		AngleDAB=180*Math.acos((vxAB*vxDA+vyAB*vyDA)/(Math.sqrt(vxAB*vxAB+vyAB*vyAB)*Math.sqrt(vxDA*vxDA+vyDA*vyDA)))/Math.PI;
		AngleABC=180*Math.acos((vxAB*vxBC+vyAB*vyBC)/(Math.sqrt(vxAB*vxAB+vyAB*vyAB)*Math.sqrt(vxBC*vxBC+vyBC*vyBC)))/Math.PI;
		AngleBCD=180*Math.acos((vxBC*vxCD+vyBC*vyCD)/(Math.sqrt(vxBC*vxBC+vyBC*vyBC)*Math.sqrt(vxCD*vxCD+vyCD*vyCD)))/Math.PI;
		AngleCDA=180*Math.acos((vxCD*vxDA+vyCD*vyDA)/(Math.sqrt(vxCD*vxCD+vyCD*vyCD)*Math.sqrt(vxDA*vxDA+vyDA*vyDA)))/Math.PI;

		}while(distAB<100||distBC<100||distCD<100||distDA<100||aire<10000||AngleDAB>125||AngleABC>125||AngleBCD>125||AngleCDA>125||(AngleABC+AngleBCD+AngleCDA+AngleDAB)!=360);
	
		//consigne
		textexo="s<sub>"+axe+"</sub> ("+quadri[0]+quadri[1]+quadri[2]+quadri[3]+") = "+imagequadri[0]+imagequadri[1]+imagequadri[2]+imagequadri[3];
		textexo+="</br><div id=" + num_jsx + " class=\"stylegraph\" style=width:250px;height:250px;></div>";			
					
		//Consigne
		var newExo = document.createElement("li");  
		document.getElementById("listex"+col_ex).appendChild(newExo);
		newExo.setAttribute('id', "exo"+boucle1);
		document.getElementById("exo"+boucle1).innerHTML=textexo;
		
		//Dessin jsx
		var board = JXG.JSXGraph.initBoard(num_jsx, {boundingbox: [-40, 540, 540, -40],axis: false,showNavigation: false,});

		//Dessin quadri	
		var 
		A = board.create('point',[xa,ya], {name:quadri[0],size:1,fillColor:'black',strokeColor:'black',label: {offset: [-15, 0]}});
		B = board.create('point',[xb,yb], {name:quadri[1],size:1,fillColor:'black',strokeColor:'black',label: {offset: [10, 0]}});
		C = board.create('point',[xc,yc], {name:quadri[2],size:1,fillColor:'black',strokeColor:'black',label: {offset: [10, 0]}});
		D = board.create('point',[xd,yd], {name:quadri[3],size:1,fillColor:'black',strokeColor:'black',label: {offset: [-15, 0]}});
		quadriabc = board.create('polygon',[A,B,C,D], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'black'}});
		
		//Dessin Axe
		X = board.create('point',[xx,yx], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		Y = board.create('point',[xy,yy], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		NOM = board.create('point',[xnom,ynom], {name:axe,size:0,fillColor:'black',strokeColor:'black'});
		XY = board.create('line', [X,Y], {strokeWidth: 2,Color: 'black',});
	
		//Solution
		num_jsx++;
		textesol="s<sub>"+axe+"</sub> ("+quadri[0]+quadri[1]+quadri[2]+quadri[3]+") = "+imagequadri[0]+imagequadri[1]+imagequadri[2]+imagequadri[3];
		textesol+="</br><div id=" + num_jsx + " class=\"stylegraph\" style=width:250px;height:250px;></div>";	
		
		var newSol = document.createElement("li");  
		document.getElementById("listsol"+col_sol).appendChild(newSol);
		newSol.setAttribute('id', "solexo"+boucle1);
		document.getElementById("solexo"+boucle1).innerHTML=textesol;
		
		//Jsx solution
		var board = JXG.JSXGraph.initBoard(num_jsx, {boundingbox: [-40, 540, 540, -40],axis: false,showNavigation: false,});
		
		//Dessin quadri	
		var 
		A = board.create('point',[xa,ya], {name:quadri[0],size:1,fillColor:'black',strokeColor:'black',label: {offset: [-15, 0]}});
		B = board.create('point',[xb,yb], {name:quadri[1],size:1,fillColor:'black',strokeColor:'black',label: {offset: [10, 0]}});
		C = board.create('point',[xc,yc], {name:quadri[2],size:1,fillColor:'black',strokeColor:'black',label: {offset: [10, 0]}});
		D = board.create('point',[xd,yd], {name:quadri[3],size:1,fillColor:'black',strokeColor:'black',label: {offset: [-15, 0]}});
		quadriabc = board.create('polygon',[A,B,C,D], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'black'}});
		
		//Dessin Axe
		X = board.create('point',[xx,yx], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		Y = board.create('point',[xy,yy], {name:"",size:0,fillColor:'white',strokeColor:'white'});
		NOM = board.create('point',[xnom,ynom], {name:axe,size:0,fillColor:'black',strokeColor:'black'});
		XY = board.create('line', [X,Y], {strokeWidth: 2,Color: 'black',});
	
		//Symetrie orthogonale
		t = board.create('transform', [XY], {type:'reflect'});
		Ap =board.create('point', [A, t], {name: imagequadri[0],size:1,Color: 'green',label:{Color:'green',offset: [10, 0]}});
		Bp =board.create('point', [B, t], {name: imagequadri[1],size:1,Color: 'green',label:{Color:'green',offset: [-15, 0]}});
		Cp =board.create('point', [C, t], {name: imagequadri[2],size:1,Color: 'green',label:{Color:'green',offset: [0,10]}});
		Dp =board.create('point', [D, t], {name: imagequadri[3],size:1,Color: 'green',label:{Color:'green',offset: [0,10]}});
		imagequadri = board.create('polygon',[Ap,Bp,Cp,Dp], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'green'}});
		
		//Construction
		AAp = board.create('line', [A,Ap], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		BBp = board.create('line', [B,Bp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		CCp = board.create('line', [C,Cp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		DDp = board.create('line', [D,Dp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		
	}	
	

}
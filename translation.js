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
document.getElementById("consigne").innerHTML="Construis les translations demandées.";

//Crée titre Feuille
document.getElementById("exercice").innerHTML="Translation - Exercices";
	
//Crée titre Solutions
document.getElementById("solution").innerHTML="Translation - Solutions";
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
	var frequence_ex=[1,2,1];
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
		
		vecteur=[alphabet[0],alphabet[1]];
		triangle=[alphabet[2],alphabet[3],alphabet[4]];
		triangle.sort();
		imagetriangle=[alphabet[6],alphabet[7],alphabet[8]];
					
		//Création des points de bases (ABC = triangle)
		do{
		var
		xa = Math.floor(Math.random() * 150);
		ya = Math.floor(Math.random() * 150+100);
		
		xb = Math.floor(Math.random() * 150+100);
		yb = Math.floor(Math.random() * 150+100);
		
		xc = Math.floor(Math.random() * 250);
		yc = Math.floor(Math.random() * 100);
		
		distAB=Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2));
		distAC=Math.sqrt(Math.pow((xa-xc),2)+Math.pow((ya-yc),2));
		distBC=Math.sqrt(Math.pow((xc-xb),2)+Math.pow((yc-yb),2));
		
		perimetre=distAB+distAC+distBC;
		aire=Math.sqrt((perimetre/2)*(perimetre/2 - distAB)*(perimetre/2 - distAC)*(perimetre/2 - distBC));
		}while(distAB<100||distAC<100||distBC<100||aire<4500);
		
		//Vecteur
		do{
		var
		xx = Math.floor(Math.random() * 200+300);
		yx = Math.floor(Math.random() * 200);		
		
		xy = Math.floor(Math.random() * 200+300);
		yy = Math.floor(Math.random() * 200);
		
		distXY=Math.sqrt(Math.pow((xx-xy),2)+Math.pow((yx-yy),2));
		}while(distXY<140);
		
		//Glissement si translation emmene hors du cadre
		if(xy<xx&&yy>yx){
			tvecteury=0;
			tvecteurx=-250;
			
			ttriangley=0;
			ttrianglex=250;
			
			offsetx1=10;
			offsetx2=0;
			offsety1=-15;
			offsety2=0;
		}
		else if(xy<xx&&yy<yx){
			tvecteury=250;
			tvecteurx=-250;
			
			ttriangley=250;
			ttrianglex=250;
			
			offsetx1=10;
			offsetx2=0;
			offsety1=-15;
			offsety2=0;
		}
		else if(xy>xx&&yy<yx){
			tvecteury=250;
			tvecteurx=0;
			
			ttriangley=250;
			ttrianglex=0;
			
			offsetx1=-15;
			offsetx2=0;
			offsety1=10;
			offsety2=0;
		}
		else{
			tvecteury=0;
			tvecteurx=0;
			
			ttriangley=0;
			ttrianglex=0;
			
			offsetx1=-15;
			offsetx2=0;
			offsety1=10;
			offsety2=0;
		}
		
		xa+=ttrianglex;
		ya+=ttriangley;		
		
		xb+=ttrianglex;
		yb+=ttriangley;		
		
		xc+=ttrianglex;
		yc+=ttriangley;		
		
		xx+=tvecteurx;
		yx+=tvecteury;		
		
		xy+=tvecteurx;
		yy+=tvecteury;
	
		//consigne
		textexo="t<sub><span class=\"vecteur\">"+vecteur[0]+vecteur[1]+"</span></sub> ("+triangle[0]+triangle[1]+triangle[2]+") = "+imagetriangle[0]+imagetriangle[1]+imagetriangle[2];
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
		
		//Dessin Vecteur
		X = board.create('point',[xx,yx], {name:vecteur[0],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsetx1, offsetx2]}});
		Y = board.create('point',[xy,yy], {name:vecteur[1],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsety1, offsety2]}});
		vecteurxy = board.create('arrow', [X,Y], {strokeWidth:2.5,strokeColor: '#000000',});
		
		//Solution
		
		num_jsx++;
		textesol="t<sub><span class=\"vecteur\">"+vecteur[0]+vecteur[1]+"</span></sub> ("+triangle[0]+triangle[1]+triangle[2]+") = "+imagetriangle[0]+imagetriangle[1]+imagetriangle[2];
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
		
		//Dessin Vecteur
		X = board.create('point',[xx,yx], {name:vecteur[0],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsetx1, offsetx2]}});
		Y = board.create('point',[xy,yy], {name:vecteur[1],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsety1, offsety2]}});
		vecteurxy = board.create('arrow', [X,Y], {strokeWidth:2.5,strokeColor: '#000000',});
		
		//Translation
		t = board.create('transform', [(xy-xx),(yy-yx)], {type: 'translate'});
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
		
		vecteur=[alphabet[0],alphabet[1]];
		quadri=[alphabet[2],alphabet[3],alphabet[4],alphabet[5]];
		quadri.sort();
		imagequadri=[alphabet[6],alphabet[7],alphabet[8],alphabet[9]];
					
		//Création des points de bases (ABC = quadri)
		do{
		var
		xa = Math.floor(Math.random() * 125);
		ya = Math.floor(Math.random() * 125+125);
		
		xb = Math.floor(Math.random() * 125+125);
		yb = Math.floor(Math.random() * 125+125);
		
		xc = Math.floor(Math.random() * 125+125);
		yc = Math.floor(Math.random() * 125);		
		
		xd = Math.floor(Math.random() * 125);
		yd = Math.floor(Math.random() * 125);
		
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
		
		}while(distAB<100||distAC<100||distBC<100||aire<10000||AngleDAB>125||AngleABC>125||AngleBCD>125||AngleCDA>125);
		
		//Vecteur
		do{
		var
		xx = Math.floor(Math.random() * 200+300);
		yx = Math.floor(Math.random() * 200);		
		
		xy = Math.floor(Math.random() * 200+300);
		yy = Math.floor(Math.random() * 200);
		
		distXY=Math.sqrt(Math.pow((xx-xy),2)+Math.pow((yx-yy),2));
		}while(distXY<140);
		
		//Glissement si translation emmene hors du cadre
		if(xy<xx&&yy>yx){
			tvecteury=0;
			tvecteurx=-250;
			
			tquadriy=0;
			tquadrix=250;
			
			offsetx1=10;
			offsetx2=0;
			offsety1=-15;
			offsety2=0;
		}
		else if(xy<xx&&yy<yx){
			tvecteury=250;
			tvecteurx=-250;
			
			tquadriy=250;
			tquadrix=250;
			
			offsetx1=10;
			offsetx2=0;
			offsety1=-15;
			offsety2=0;
		}
		else if(xy>xx&&yy<yx){
			tvecteury=250;
			tvecteurx=0;
			
			tquadriy=250;
			tquadrix=0;
			
			offsetx1=-15;
			offsetx2=0;
			offsety1=10;
			offsety2=0;
		}
		else{
			tvecteury=0;
			tvecteurx=0;
			
			tquadriy=0;
			tquadrix=0;
			
			offsetx1=-15;
			offsetx2=0;
			offsety1=10;
			offsety2=0;
		}
		
		xa+=tquadrix;
		ya+=tquadriy;		
		
		xb+=tquadrix;
		yb+=tquadriy;		
		
		xc+=tquadrix;
		yc+=tquadriy;	

		xd+=tquadrix;
		yd+=tquadriy;		
		
		xx+=tvecteurx;
		yx+=tvecteury;		
		
		xy+=tvecteurx;
		yy+=tvecteury;
		
		//consigne
		textexo="t<sub><span class=\"vecteur\">"+vecteur[0]+vecteur[1]+"</span></sub> ("+quadri[0]+quadri[1]+quadri[2]+quadri[3]+") = "+imagequadri[0]+imagequadri[1]+imagequadri[2]+imagequadri[3];
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
		
		//Dessin Vecteur
		X = board.create('point',[xx,yx], {name:vecteur[0],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsetx1, offsetx2]}});
		Y = board.create('point',[xy,yy], {name:vecteur[1],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsety1, offsety2]}});
		vecteurxy = board.create('arrow', [X,Y], {strokeWidth:2.5,strokeColor: '#000000',});
		
		//Solution
		num_jsx++;
		textesol="t<sub><span class=\"vecteur\">"+vecteur[0]+vecteur[1]+"</span></sub> ("+quadri[0]+quadri[1]+quadri[2]+quadri[3]+") = "+imagequadri[0]+imagequadri[1]+imagequadri[2]+imagequadri[3];
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
		
		//Dessin Vecteur
		X = board.create('point',[xx,yx], {name:vecteur[0],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsetx1, offsetx2]}});
		Y = board.create('point',[xy,yy], {name:vecteur[1],size:0.1,fillColor:'black',strokeColor:'black',label: {offset: [offsety1, offsety2]}});
		vecteurxy = board.create('arrow', [X,Y], {strokeWidth:2.5,strokeColor: '#000000',});
			
		//Translation
		t = board.create('transform', [(xy-xx),(yy-yx)], {type: 'translate'});
		Ap =board.create('point', [A, t], {name: imagequadri[0],size:1,Color: 'green',label:{Color:'green',offset: [10, 0]}});
		Bp =board.create('point', [B, t], {name: imagequadri[0],size:1,Color: 'green',label:{Color:'green',offset: [-15, 0]}});
		Cp =board.create('point', [C, t], {name: imagequadri[0],size:1,Color: 'green',label:{Color:'green',offset: [0,10]}});
		Dp =board.create('point', [D, t], {name: imagequadri[0],size:1,Color: 'green',label:{Color:'green',offset: [0,10]}});
		imagequadri = board.create('polygon',[Ap,Bp,Cp,Dp], {fillColor:'white',borders : {strokeWidth:2, strokeColor:'green'}});
		
		//Construction
		AAp = board.create('line', [A,Ap], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		BBp = board.create('line', [B,Bp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		CCp = board.create('line', [C,Cp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		DDp = board.create('line', [D,Dp], {straightFirst: false,straightLast: false,strokeWidth: 1,dash: 3,Color: 'DarkGrey',});
		
	}	
	

}
//let div = document.getElementById("divData");
//let mainProds = document.getElementById("mainProductos");
let check1 = document.getElementById("customCheck1");
let check2 = document.getElementById("customCheck2");
let check3 = document.getElementById("customCheck3");
let check4 = document.getElementById("customCheck4");
let check5 = document.getElementById("customCheck5");
let check6 = document.getElementById("customCheck6");
let check7 = document.getElementById("customCheck7");
let check8 = document.getElementById("customCheck8");
let check9 = document.getElementById("customCheck9");
let check10 = document.getElementById("customCheck10");
let check11 = document.getElementById("customCheck11");
let check12 = document.getElementById("customCheck12");
let check13 = document.getElementById("customCheck13");
let check14 = document.getElementById("customCheck14");



check1.addEventListener("click", filtrar);
check2.addEventListener("click", filtrar);
check3.addEventListener("click", filtrar);
check4.addEventListener("click", filtrar);
check5.addEventListener("click", filtrar);
check6.addEventListener("click", filtrar);
check7.addEventListener("click", filtrar);
check8.addEventListener("click", filtrar);
check9.addEventListener("click", filtrar);
check10.addEventListener("click", filtrar);
check11.addEventListener("click", filtrar);
check12.addEventListener("click", filtrar);
check13.addEventListener("click", filtrar);
check14.addEventListener("click", filtrar);

function filtrar (event){
    console.log(event.target.value);
    let elementos = Array.from(document.getElementsByClassName(event.target.value)); //Array.from convierte algo en un arreglo.
    elementos.forEach((e)=>{
        if (event.target.checked){
            e.style.display="block";
        } else {
            e.style.display="none";
        }// if
    });
};//filtrar
	

	
	const temsContainier = document.getElementById("mediaQ3");
	
	
	



            function addItem(item){
    				const itemHTML = `<div class="${getClassCategory(item.categoria)} all col-md-3 col-lg-3 col-xl-3 col-sm-6">
				    <div class="rd" style="width:auto;">
				    <a href="#"><img src="${item.img}" class="card-img-top" data-toggle="modal" data-target="#modal_${item.id}" alt="..." /></a>
				    </div>
				    <br>
				    <div class="card-body fondocard carta">
				      <p class="fontbold cardRe">${item.nombre}</p>
				      <p class="card-text">$ ${item.precio}</p>
				      <p class="card-text">${item.descripcion.slice(0,25)}...<i class="bi bi-caret-right-fill" data-toggle="modal" data-target="#modal1_${item.id}" ></i></p>
				      <br>
				      <div class="container btnAnadir">

				        <a href="https://wa.me/3322540774" class="bi bi-bag-heart iconoCatalogo"></a>
                
				      </div>
				    </div>
				  </div>
				
				  <!-- Modal -->
				  <div class="modal fade" id="modal_${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				    <div class="modal-dialog">
				      <div class="modal-content">
				        <div class="modal-header">
				          <h5 class="modal-title" id="exampleModalLabel">${item.nombre}</h5>
				          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				            <span aria-hidden="true">&times;</span>
				          </button>
				        </div>
				        <div class="modal-body">
				        <img src="${item.img}" class="card-img-top" alt="..." />
				        </div>
				        <div class="modal-footer">
				          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          
				        </div>
				      </div>
				    </div>
				  </div>
				
				
					  <!-- Modal -->
					<div class="modal fade" id="modal1_${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					  <div class="modal-dialog modal-md modal-dialog-centered">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h5 class="modal-title" id="exampleModalLabel">${item.nombre}</h5>
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
					      <div class="modal-body">
					        ${item.descripcion}
					      </div>
					      <div class="modal-footer">
					        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
					      </div>
					    </div>
					  </div>
					</div>`;

          const itemsContainer = document.getElementsByClassName("list-items")[0];
          itemsContainer.innerHTML += itemHTML;
               
	};
                    

  function getClassCategory(cat){
    let c = "";
    switch (cat) {
        case "Aceites para masaje":
            c = "aceite";
            break;
        case "Básicos":
            c = "basicos"
            break;
        case "Bio Jelly Spa":
            c = "jelly"
            break;
        case "Bombas Efervescentes":
            c = "bombas"
            break;
        case "Complementos":
            c="comple"
            break;
        case "Hidratación":
            c="hidra"
            break;
        case "Exfoliantes":
            c="exfo";
            break;
        case "Lociones":
            c="loci";
            break;
        case "Kit":
            c="kit";
            break;
        case "Mascarillas":
            c="masc";
            break;
        case "Sales Efervescentes":
            c="sales";
            break;
        case "Sales Minerales":
            c="salmin";
            break;
        case "Sanitizantes y Limpiadores":
            c="san";
            break;
        case "Herramientas":
            c="herra";
            break;
        default:
            c="all";
            break;
    }//switch
    return c;
}//getClassCategory

//----------------------------PRODUCTOS------------------------------------------------------------------
//---------------------------KITS DE SPA-----------------------------------------------------------------
addItem({'nombre':'Kit para pedicure (10 pz + bolsa)',
    'img':'/img/Productos/kitsSpa/KIT_PEDICURE(10Pz_Bolsa).png',
    'descripcion':'Este set cuenta con todo lo necesario para que puedas dar un masaje de pies y prepararlos para la pedicura. El kit incluye: 1 sal mineral de 350g, 1 sal efervescente 300g, 1 exfoliante 300 g, 1 mascarilla aclaradora o refrescante, 1 lijapie, 1 bomba efervescente, 1 bio jelly spa de 90g (incluye diluyente), 1 crema hidratante, 1 ablandador de callos 60ml, 1 removedor de cuticulas 60ml, ademas de la bolsa cute.',
    'precio':'830.00', 
    'categoria':'Kit',
    'id':'1'});
//---------------------------HIDRATACIÓN-----------------------------------------------------------------
addItem({'nombre':'Crema hidratante 250ml aroma coco',
'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_COCO.png',
'descripcion':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
'precio':'97.00', 
'categoria':'Hidratación',
'id':'2'});

addItem({'nombre':'Crema hidratante 250ml aroma cherry',
'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_CHERRY.png',
'descripcion':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
'precio':'97.00', 
'categoria':'Hidratación',
'id':'3'});

addItem({'nombre':'Crema hidratante 250ml aroma pera',
'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_PERA.png',
'descripcion':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
'precio':'97.00', 
'categoria':'Hidratación',
'id':'4'});

addItem({'nombre':'Crema hidratante 250ml aroma mango',
'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_MANGO.png',
'descripcion':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
'precio':'97.00', 
'categoria':'Hidratación',
'id':'5'});

addItem({'nombre':'Crema hidratante 250ml aroma freesia',
'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_FREESIA.png',
'descripcion':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
'precio':'97.00', 
'categoria':'Hidratación',
'id':'6'});

addItem({'nombre':'Spray Hidratante Bifasico aroma Cherry 250 ml',
'img':'/img/Productos/hidratacion/Spray_Hidratante_BifasicoCHERRY250ml.png',
'descripcion':'Hidrata y brinda suavidad a la piel. Humecta y es de rápida absorción. Sensación ligera y suave. Delicioso aroma.',
'precio':'87.00', 
'categoria':'Hidratación',
'id':'7'});

addItem({'nombre':'Spray Hidratante Bifasico aroma Coco 250 ml',
'img':'/img/Productos/hidratacion/Spray_Hidratante_Bifasico_COCO250ml.png',
'descripcion':'Hidrata y brinda suavidad a la piel. Humecta y es de rápida absorción. Sensación ligera y suave. Delicioso aroma.',
'precio':'87.00', 
'categoria':'Hidratación',
'id':'8'});

//---------------------------BÁSICOS-----------------------------------------------------------------
addItem({'nombre':'Lija pie de madera para pedicure',
'img':'/img/Productos/Basicos/Lija Pie Pedicure De Madera_.png',
'descripcion':'De Alta calidad, ergonómica, Para todo tipo de piel, elimina callos y piel muerta, dejando tus pies suaves y tersos.',
'precio':'18.00', 
'categoria':'Básicos',
'id':'9'});  

addItem({'nombre':'Ablandador de callosidades 60ml',
'img':'/img/Productos/Basicos/Ablandador de callosidades 60ml.png',
'descripcion':'Líquido Ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel.',
'precio':'57.00', 
'categoria':'Básicos',
'id':'10'});  

addItem({'nombre':'Ablandador de callosidades 1 litro',
'img':'/img/Productos/Basicos/Ablandador de callosidades 1 litro.png',
'descripcion':'Líquido Ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel.',
'precio':'490.00', 
'categoria':'Básicos',
'id':'11'}); 

addItem({'nombre':'Ablandador de callosidades galon 3,785 l',
'img':'/img/Productos/Basicos/Ablandador de callosidades Galon 3,785 l.png',
'descripcion':'Líquido Ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel.',
'precio':'997.00', 
'categoria':'Básicos',
'id':'12'}); 

addItem({'nombre':'Removedor de cuticulas 60ml',
'img':'/img/Productos/Basicos/BG SPA BASICOS REMOVEDOR DE CUTICULA.png',
'descripcion':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas.',
'precio':'37.00', 
'categoria':'Básicos',
'id':'13'}); 

addItem({'nombre':'Removedor de cuticulas 1 litro',
'img':'/img/Productos/Basicos/Removedor de cuticulas 1 litro.png',
'descripcion':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas.',
'precio':'445.00', 
'categoria':'Básicos',
'id':'14'}); 

addItem({'nombre':'Removedor de cuticulas galon 3,785 l',
'img':'/img/Productos/Basicos/Removedor de cuticulas  Galon 3,785 l.png',
'descripcion':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas.',
'precio':'945.00', 
'categoria':'Básicos',
'id':'15'}); 

//---------------------------COMPLEMENTOS-----------------------------------------------------------------
addItem({'nombre':'Serum ácido hialurónico + vitamina c 60ml',
'img':'/img/Productos/complementos/Sèrum Ácido Hialurónico + Vitamina C 60ml.png',
'descripcion':'Detiene el avance de la onicomicosis. Contiene vitamina E, Calcio y proteína natural. Su fórmula está diluida con extracto de glicerina para una consistencia flexible. Promueve el crecimiento de las uñas y aumenta su resistencia, ayudando a evitar su rotura. Favorece la remineralización y reestructuración de las uñas, gracias al aumento de la cantidad y calidad de silicio y keratina. Devuelve el aspecto natural a las uñas y cutículas.',
'precio':'129.00', 
'categoria':'Complementos',
'id':'16'}); 

addItem({'nombre':'Removedor de gel y acrilico 15ml',
'img':'/img/Productos/complementos/Removedor de Gel y acrilico 15ml.png',
'descripcion':'Simplemente quite el brillo, aplique suavemente, espere de 2 a 5 minutos, se vera el progreso en la superficie de la uña, luego retire suavemente la uña con un pequeño empujador de acero. Sin tedioso proceso de eliminación, sin largos tiempos de espera, ahorre tiempo.',
'precio':'45.00', 
'categoria':'Complementos',
'id':'17'}); 

addItem({'nombre':'Aceite de cuticula 15ml',
'img':'/img/Productos/complementos/Aceite de cuticula 15ml.png',
'descripcion':'Hidratante especial para cutícula, con esencias aromáticas. Ideal para hidratar, nutrir y lubricar la piel del área de las cutícula.',
'precio':'21.00', 
'categoria':'Complementos',
'id':'18'}); 

addItem({'nombre':'Pegamento para foil  15ml',
'img':'/img/Productos/complementos/Pegamento para foil  15ml.png',
'descripcion':'Aplicar y expandir con la brocha, el producto es de color blanco y solo hay que esperar de 60 a 90 segundos, para que este seque y al hacerlo el producto esta listo, ¿Como sabemos que ya esta listo? Es sencillo hasta que el pegamento de color blanco al aplicar, se vuelva transparente.',
'precio':'25.00', 
'categoria':'Complementos',
'id':'19'}); 

addItem({'nombre':'Latex líquido (cubre cuticula) 15ml',
'img':'/img/Productos/complementos/Latex líquido (cubre cuticula) 15ml.png',
'descripcion':'Fácil de quitar y respetuoso con el medio ambiente. Aplique a las áreas que desee sin esmalte cuando esté pintando sus uñas.',
'precio':'25.00', 
'categoria':'Complementos',
'id':'20'}); 

//---------------------------HERRAMIENTAS-----------------------------------------------------------------

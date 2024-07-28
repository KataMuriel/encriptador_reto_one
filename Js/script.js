 //-------seleccion funcionalidad elementos------//

 const btnEncriptar= document.querySelector(".boton__encriptar");
 const txtEncriptar= document.querySelector(".encriptar");
 const aviso= document.querySelector(".texto__aviso");
 const respuesta= document.querySelector(".evaluar");
 const contenido= document.querySelector(".tarjeta__contenedor");
 const btnCopiar= document.querySelector(".boton__copiar");
 const btnDesencriptar= document.querySelector(".boton__desencriptar");



//--------botom de encriptar-------//
btnEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    
    if(texto ==""){
      aviso.style.background= "#0A3871";
      aviso.style.color= "#FFF";
      aviso.style.fontWsight = "800";
      aviso.textContent = "El campo de texto no debe estar vacio";

      setTimeout(()=>{
        aviso.removeAttribute ("style");
      },1500);

    }

    else if(texto !== txt){
        aviso.style.background= "#0A3871";
        aviso.style.color= "#FFF";
        aviso.style.fontWsight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
  
        setTimeout(()=>{
          aviso.removeAttribute ("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background= "#0A3871";
        aviso.style.color= "#FFF";
        aviso.style.fontWsight = "800";
        aviso.textContent = "El texto solo debe contener minúsculas";
  
        setTimeout(()=>{
          aviso.removeAttribute ("style");
        },1500);
    }
    else{
     texto = texto.replace(/e/mg, "enter");
     texto = texto.replace(/i/mg,  "imes");
     texto = texto.replace(/a/mg, "ai");  
     texto = texto.replace(/o/mg, "ober");
     texto = texto.replace(/u/mg, "ufat");
     
     respuesta.innerHTML = texto;
     btnCopiar.style.visibility = "inherit";
     contenido.remove();
    }
    
});

//--------botom de desencriptar-------//
btnDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    
    if(texto ==""){
      aviso.style.background= "#0A3871";
      aviso.style.color= "#FFF";
      aviso.style.fontWsight = "800";
      aviso.textContent = "El campo de texto no debe estar vacio";

      setTimeout(()=>{
        aviso.removeAttribute ("style");
      },1500);

    }

    else if(texto !== txt){
        aviso.style.background= "#0A3871";
        aviso.style.color= "#FFF";
        aviso.style.fontWsight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
  
        setTimeout(()=>{
          aviso.removeAttribute ("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background= "#0A3871";
        aviso.style.color= "#FFF";
        aviso.style.fontWsight = "800";
        aviso.textContent = "El texto solo debe contener minúsculas";
  
        setTimeout(()=>{
          aviso.removeAttribute ("style");
        },1500);
    }
    else{
     texto = texto.replace(/enter/mg, "e");
     texto = texto.replace(/imes/mg,  "i");
     texto = texto.replace(/ai/mg, "a");
     texto = texto.replace(/ober/mg, "o");
     texto = texto.replace(/ufat/mg, "u");
     
     respuesta.innerHTML = texto;
     btnCopiar.style.visibility = "inherit";
     contenido.remove();
    }
    
});

//--------botom de copiar-------//
btnCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});






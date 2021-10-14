function desplegarNavIndex() {
  var x = document.getElementById("index-nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function desplegarNavPrograma() {

  var x = document.getElementById("programa-nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function desplegarNavInscribirse() {

  var x = document.getElementById("inscribirse-nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validacion() {
  //validar nombre
  let nombre = document.forms["form1"]["fname"].value;
  if (nombre == "" || nombre == null) {
    document.querySelector("#alert-name").innerHTML = "* Este campo es obligatorio";
    return false;
  } 

  //validar mail
  let mail = document.querySelector("#email-input").value;
  re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

  if (mail == "" || mail == null) {
    document.querySelector("#alert-mail").innerHTML = "* Este campo es obligatorio";
    return false;
  } else if(!re.exec(mail)) {
      alert('El mail ingresado no es válido. Chequee su respuesta!');
      return (false);
}

 //checkbox
  var checkArray = document.getElementsByName("carrera");
  var chequeados = false;
    for(var i=0; i < checkArray.length; i++) 
    {
        if(checkArray[i].checked==true) 
        {
            chequeados = true;
            break;
        }
    }

    if(chequeados==false) 
    {
      document.querySelector("#alert-chk").innerHTML = "* Debe seleccionar una opción";
      return false;
    }

    //radio input
    var radioArray =  document.getElementsByName("deseo");
    chequeados=false; //reutilizo
    for(var i=0; i < radioArray.length; i++) 
    {
        if(radioArray[i].checked==true) 
        {
            chequeados = true;
            break;
        }
    }

    if(chequeados==false) 
    {
      document.querySelector("#alert-radio").innerHTML = "* Debe seleccionar una opción";
      return false;
    }

            

}

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
  let nombre = document.forms["form1"]["fname"].value;
  if (nombre == "" || nombre == null) {
    document.querySelector("#alert-name").innerHTML = "* Este campo es obligatorio";
    return false;
  } 

  let mail = document.querySelector("#email-input").value;
  if (mail == "" || mail == null) {
    document.querySelector("#alert-mail").innerHTML = "* Este campo es obligatorio";
    return false;
  }

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
      document.querySelector("#alert-check").innerHTML = "* Debe seleccionar una opción";
      return false;
    }

 
            

}


function validarCedula() {

    var c = document.getElementById("ced").value
    //c=parseInt(c)


    if (parseInt(c[c.length - 1]) >= 0 && parseInt(c[c.length - 1]) <= 9) {
        console.log(c[c.length - 1])
        document.getElementById("mensajeCedula").innerHTML = ''

        if (c.length > 10) {
            document.getElementById("mensajeCedula").innerHTML = 'error mas de 10 caracteres'
        }

    } else {

        document.getElementById("mensajeCedula").innerHTML = 'Ingresar solo numeros'
        document.getElementById("ced").value = ""
    }
    console.log("validando ced " + c)

    var pares = 0
    var impar = 0

    if (c.length == 10) {

        for (let i = 0; i < c.length - 1; i++) {

            if ((i + 1) % 2 == 0) {

                if (parseInt(c[i]) >= 9) {
                    pares += parseInt(c[i]) - 9
                }

                pares += parseInt(c[i])

            } else {
                let im = parseInt(c[i]) * 2
                if (im >= 9) {
                    im = im - 9
                }
                impar += im
            }
        }

        var sum = pares + impar
        var res = sum % 10
        console.log("*" + res)

        if (res != 0) {
            res = 10 - res
            if (res == parseInt(c[c.length - 1])) {
                document.getElementById("mensajeCedula").innerHTML = 'cedula valida'
            }
        } 
        if(res==parseInt(c[c.length - 1])){
            document.getElementById("mensajeCedula").innerHTML = 'cedula valida'
        }else{
                
        //if(res!=parseInt(c[c.length - 1])){
            document.getElementById("mensajeCedula").innerHTML = 'cedula invalida'
        }

    }


}




function validar() {




    var ban = true;

    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]

        if (elemento.type == 'tex') {
            console.log(elemento)
            console.log("entro a ced")
        }

        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == "ced") {

                document.getElementById("mensajeCedula").innerHTML = 'error'

            }
            elemento.getElementsByClassName.border = '1px red solid'
            elemento.className = "error"
            ban = false

        }

    }

    if (!ban) {
        alert('ella no te ama')

    }
    return ban;

}
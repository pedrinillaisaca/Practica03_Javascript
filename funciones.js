
//<span id="mensajePass" class="error"></span>

function valPass(elemento) {

    var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
    var vect = elemento.value
     console.log(vect)
    if (vect.length >= 8) {

        document.getElementById("mensajePass").innerHTML = ''
        let b1 = false//minusculas
        let b2 = false//mayusculas
        let b3 = false//especiales



        for (let i = 0; i < vect.length - 1; i++) {
            let asc = vect[i].charCodeAt()
          
            if (asc >= 97 && asc <= 122) {
                b1 = true
            } else {
                document.getElementById("mensajePass").innerHTML = 'ingresar min/mayus/carac Especiales'
            }

            if (asc >= 65 && asc <= 90) {
                b2 = true
            } else {
                document.getElementById("mensajePass").innerHTML = 'ingresar min/mayus/carac Especiales'
            }

            if (asc == 36 || asc == 95 || asc==64) {
                b3 = true
            } else {
                document.getElementById("mensajePass").innerHTML = 'ingresar min/mayus/carac Especiales'
            }

        }

        if (b1==true && b2==true && b3==true) {
            document.getElementById("mensajePass").innerHTML = 'contraseña valida'
        }


        return true
    } else {
        document.getElementById("mensajePass").innerHTML = 'minimo 8 caracteres'
    }



}



function valMail(elemento) {

    console.log(elemento.value)
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)


        if (miAscii >= 46 && miAscii <= 122) {
            valMail2(elemento)
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }


}


function valMail2(elemento) {
    var vector = elemento.value.split("@")
    console.log(vector[0].length)



    if (vector[1] == "ups.edu.ec" || vector[1] == "est.ups.edu.ec") {
        if (vector[0].length >= 3) {
            document.getElementById("mensajeMail").innerHTML = 'dominio/correo valido'
        }

    } else {
        document.getElementById("mensajeMail").innerHTML = 'correo no valido'
    }

}



function valFechNac(elemento) {

    //document.getElementById("mensajeFechaNac").innerHTML = 'formato imcompleto'
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        //console.log(miAscii)

        if (miAscii >= 48 && miAscii <= 57 || miAscii == 47) {

            valFechNac2(elemento)
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }


}


function valFechNac2(elemento) {
    var fech = elemento.value
    var arry = elemento.value.split("/")
    document.getElementById("mensajeFechaNac").innerHTML = ''


    if (arry.length < 3) {
        document.getElementById("mensajeFechaNac").innerHTML = 'formato imcompleto'
        return false
    }

    if (arry.length == 3 && arry[0].length <= 2 && arry[1].length <= 2 && arry[2].length <= 4) {

        if (parseInt(arry[0]) > 0 && parseInt(arry[0]) <= 32 &&
            parseInt(arry[1]) > 0 && parseInt(arry[1]) <= 12 &&
            parseInt(arry[2]) > 0 && parseInt(arry[2]) <= 2100
        ) {
            //document.getElementById("mensajeFechaNac").innerHTML = 'fechas fuera de rango'
            return true
        }

    } else {
        document.getElementById("mensajeFechaNac").innerHTML = 'formato imcompleto'
    }

    document.getElementById("mensajeFechaNac").innerHTML = 'formato valido'

}




function valTelefono(elemento) {
    console.log(elemento.value)
    document.getElementById("mensajeTelefono").innerHTML = ''

    var num = elemento.value

    if (parseInt(num[num.length - 1]) >= 0 && parseInt(num[num.length - 1]) <= 9 && num.length <= 10) {
        return true
    } else {
        elemento.value = elemento.value.substring(0, elemento.value.length - 1)
        document.getElementById("mensajeTelefono").innerHTML = 'solo numeros, no mas de 10 digitos'
        return false
    }
    return true
}

function validarApellido(elemento) {
    document.getElementById("mensajeApellido").innerHTML = ''
    //console.log(elemento.value)
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        //console.log(miAscii)

        if (miAscii >= 97 && miAscii <= 122 || miAscii == 32) {

            var vector = elemento.value.split(" ")
            //
            console.log(vector.length)
            if (vector.length > 2) {
                elemento.value = elemento.value.substring(0, elemento.value.length - 1)
                document.getElementById("mensajeApellido").innerHTML = 'No se haceptan mas de 2 apellidos'
            }
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }
}


function validarNombres(elemento) {
    document.getElementById("mensajeNombre").innerHTML = ''
    //console.log(elemento.value)
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        //console.log(miAscii)

        if (miAscii >= 97 && miAscii <= 122 || miAscii == 32) {

            nombres(elemento)
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }
}

function nombres(e) {

    var vector = e.value.split(" ")
    //
    console.log(vector.length)
    if (vector.length > 2) {
        e.value = e.value.substring(0, e.value.length - 1)
        document.getElementById("mensajeNombre").innerHTML = 'No se haceptan mas de 2 nombres'
    }

}

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
        if (res == parseInt(c[c.length - 1])) {
            document.getElementById("mensajeCedula").innerHTML = 'cedula valida'
        } else {

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
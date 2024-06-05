$(document).ready(function() {
    // Agregar método de validación para RUT chileno
    $.validator.addMethod("rutChileno", function(value, element) {
        // Eliminar puntos y guión del RUT
        value = value.replace(/[.-]/g, "");
    
        // Validar que el RUT tenga 8 o 9 dígitos
        if (value.length < 8 || value.length > 9) {
        return false;
        }
    
        // Validar que el último dígito sea un número o una 'K'
        var validChars = "0123456789K";
        var lastChar = value.charAt(value.length - 1).toUpperCase();
        if (validChars.indexOf(lastChar) == -1) {
        return false;
        }
    
        // Calcular el dígito verificador
        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
        }
        var dv = 11 - (sum % 11);
        dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
    
        // Validar que el dígito verificador sea correcto
        return dv === lastChar;
    }, "Por favor ingrese un RUT válido."); 

    $.validator.addMethod("emailCompleto", function(value, element) {

        // Expresión regular para validar correo electrónico
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
    
        // Validar correo electrónico con la expresión regular
        return regex.test(value);
    
    }, 'Ingrese un correo válido');

    $.validator.addMethod("nombrevali", function(value, element) {
        // Expresión regular que verifica si la cadena contiene solo letras
        var regex = /^[a-zA-Z]+$/;
        return this.optional(element) || regex.test(value);
    }, "Ingrese solo letras");
    
    $.validator.addMethod("apellidovali", function(value, element) {
        // Expresión regular que verifica si la cadena contiene solo letras
        var regex = /^[a-zA-Z]+$/;
        return this.optional(element) || regex.test(value);
    }, "Ingrese solo letras");
    

    $("#registrar").validate({
        rules: {
        rut: {
            required: true,
            rutChileno: true
        },
        nombre:{
            required: true,
            nombrevali:true,
        },
        apellido:{
            required: true,
            apellidovali:true,
        },
        correo:{
            required: true,
            emailCompleto: true,
        },
        direccion:{
            required: true,
        },
        password: {
            required: true,
            minlength:5,
            maxlength:15,
            
        },
        password2: {
            required: true,
            equalTo: "#password",
            minlength:5,
            maxlength:15,
            
        },
        }, // --> Fin de reglas
        messages: {
        rut: {
            required: "Campo obligatorio",
            rutChileno: "Rut no válido"
        },
        nombre:{
            required: "Campo obligatorio",
            nombrevali:"no valido con numeros",
        },
        apellido:{
            required: "Campo obligatorio",
            apellidovali:"no valido con numeros",
        },
        correo: {
            required: "Campo obligatorio",
            emailCompleto: "Mail no valido",
        },
        direccion:{
            required: "Campo obligatorio",
        },
        password:{
            required: "Campo obligatorio",
            minlength: "La contraseña debe tener un minimo de 5 caracteres",
            maxlength:"La contraseña debe tener un maximo de 15 caracteres",
        },
        password2: {
            required: "Repita la Contraseña anterior",
            equalTo: "Las contraseñas deben coincidir",
            minlength: "La contraseña debe tener un minimo de 5 caracteres",
            maxlength:"La contraseña debe tener un maximo de 15 caracteres",
            

        },
        },
    });
    });
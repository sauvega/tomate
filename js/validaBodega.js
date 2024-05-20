$(document).ready(function() {
    // Agregar método de validación para que el nombre solo contenga letras y espacios
    $.validator.addMethod("letrasYEspacios", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Solo letras y espacios son permitidos.");

    $("#bodegaForm").validate({
        rules: {
            categoria: {
                required: true
            },
            nombre: {
                required: true,
                letrasYEspacios: true
            },
            cantidad: {
                required: true,
                digits: true,
                min: 1
            }
        },
        messages: {
            categoria: {
                required: "Campo obligatorio"
            },
            nombre: {
                required: "Campo obligatorio",
                letrasYEspacios: "Solo letras y espacios son permitidos"
            },
            cantidad: {
                required: "Campo obligatorio",
                digits: "Solo se permiten números",
                min: "Debe ser al menos 1"
            }
        },
        submitHandler: function(form) {
            // Aquí puedes agregar la lógica para manejar el formulario
            // Ejemplo: enviar el formulario usando AJAX
            alert("Formulario válido. Puedes enviarlo al servidor.");
        }
    });
});

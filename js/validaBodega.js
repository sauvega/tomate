$(document).ready(function() {
    // Método de validación para que el nombre solo contenga letras y espacios
    $.validator.addMethod("letrasYEspacios", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Solo letras y espacios son permitidos.");

    // Método de validación para la selección de categoría
    $.validator.addMethod("noElige", function(value, element) {
        return value !== "Elige";
    }, "Por favor, selecciona una categoría válida.");

    $("#bodegaForm").validate({
        rules: {
            categoria: {
                required: true,
                noElige: true
            },
            nombre: {
                required: true,
                letrasYEspacios: false,
                noElige: true
            },
            cantidad: {
                required: true,
                digits: true,
                min: 1
            }
        },
        messages: {
            categoria: {
                required: "Campo obligatorio",
                noElige: "Por favor, selecciona una categoría válida"
            },
            nombre: {
                required: "Campo obligatorio",
                letrasYEspacios: "Solo letras y espacios son permitidos",
                noElige: "Por favor, selecciona un nombre válido"
            },
            cantidad: {
                required: "Campo obligatorio",
                digits: "Solo se permiten números",
                min: "Debe ser al menos 1"
            }
        },
        errorPlacement: function(error, element) {
            // Colocar los mensajes de error en una posición específica
            error.insertAfter(element);
        },
        highlight: function(element) {
            // Resaltar el elemento con error
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function(element) {
            // Quitar la clase de error y agregar la clase de éxito
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        submitHandler: function(form) {
            alert("Formulario válido. Puedes enviarlo al servidor.");
            
        }
    });

    $('#nombre').change(function() {
        var selectedGame = $(this).val();
        var imagePath;

        switch(selectedGame) {
            case '1':
                imagePath = 'img/dbzFighter copy.png';
                break;
            case '2':
                imagePath = 'img/afterimage_icon_by_pronemo_dfwlqbk-375w-2x.png'; 
                break;
            case '3':
                imagePath = 'img/nba2k10inx.png'; 
                break;
            case '4':
                imagePath = 'img/ghost1.png'; 
                break;
            case '5':
                imagePath = 'img/tekken8.png'; 
                break;
            default:
                imagePath = 'img/default.png'; 
        }

        $('.registro_foto').attr('src', imagePath);
    });
});

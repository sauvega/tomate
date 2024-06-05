$.validator.addMethod("datonumeric", function(value, element) {
    // Expresión regular que verifica si la cadena contiene solo números
    var regex = /^[0-9]+$/;
    return this.optional(element) || regex.test(value);
}, "Ingrese solo números");


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

$(document).ready(function() {
        $("#productos").validate({
            rules: {
                id: {
                    required: true,
                    datonumeric: true,
                },
                categoria: {
                    required: true
                },
                nombre: {
                required: true,
                letrasYEspacios: false,
                noElige: true
                },
                descripcion: {
                    required: true
                },
                precio: {
                    required: true,
                    datonumeric: true,
                    minlength: 4,
                    
                },
                descuentosubscriptor: {
                    required: true,
                    datonumeric:true,
                },
                descuentoOferta: {
                    required: true,
                    datonumeric:true,
                }
            },
            messages: {
                id: {
                    required: "Campo obligatorio",
                    datonumeric:"solo numeros",
                },
                categoria: {
                    required: "Campo obligatorio"
                },
                nombre: {
                    required: "Campo obligatorio"
                },
                descripcion: {
                    required: "Campo obligatorio"
                },
                precio: {
                    required: "Campo obligatorio",
                    minlength: "El precio debe tener un mínimo de 4 caracteres",
                    datonumeric:"solo numeros",
                },
                descuentosubscriptor: {
                    required: "Campo obligatorio",
                    datonumeric:"solo numeros",
                },
                descuentoOferta: {
                    required: "Campo obligatorio",
                    datonumeric:"solo numeros",
                }
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element);
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    });


$(document).ready(function() {
    $("#loginForm").validate({
        rules: {
            cuenta: {
                required: true
            },
            contrasena: {
                required: true
            }
        },
        messages: {
            cuenta: {
                required: "Campo obligatorio"
            },
            contrasena: {
                required: "Campo obligatorio"
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

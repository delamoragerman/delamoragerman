$(document).ready(function () {

    $("#form_consulta").submit(function (e) {
        e.preventDefault();

        $.ajax({
            cache: false,
            type: 'POST',
            url: '/multiple/index/sendConsulta',
            data: $(this).serialize(),
            success: function (resp) {
                if(resp = true){
                    alert("Tu consulta a sido enviada");
                }else{
                    alert("Vuelve a intarlo mas tarde")
                }
            }
        });
    });
});

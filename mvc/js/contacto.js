$("#enviar_consulta").submit(function (e) {
    e.preventDefault();

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/multiple/contacto/guardar_form',
        data: $(this).serialize(),
        success: function (resp) {
            $("#respuestas").html(resp);
            console.log(resp);
        }
    });
});

$("#enviar_consulta").submit(function (e) {
    e.preventDefault();

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/multiple/contacto/send_consulta',
        data: $(this).serialize(),
        success: function (resp) {
            console.log(resp);
        }
    });
});
$("#enviar_consulta").submit(function (e) {
    e.preventDefault();

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/multiple/log/log',
        data: $(this).serialize(),
        success: function (resp) {
            console.log(resp);
        }
    });
});

//function loadRespuestaTemplate() {
//    // Si existe el DIV lo borro
//    if (elemExist('_preguntas')) {
//        $("#_preguntas").remove();
//    }
//    var _preguntas = document.createElement('div');
//    _preguntas.setAttribute("id", "_preguntas");
//    _preguntas.setAttribute("style", "display:none");
//    document.body.appendChild(_preguntas);
//    // Cargo el template e inyecto dentro del div creado previamente
//    $("#_preguntas").load(
//            "../../mvc/templates/last_post.html",
//            {'rand': Math.random()},
//            function () {
//                loadRespuestaData();
//            }
//    );
//}
//
//function loadRespuestaData() {
//    $.ajax({
//        cache: false,
//        type: 'GET',
//        url: '/multiple/contacto/getdata',
//        success: function (resp) {
//            var response = $.parseJSON(resp);
//
//            if (response.state != true)
//            {
//                console.log("ERROR");
//
//            } else  //Sin errores de logica de negocio
//            {
//                var data = response.data
//
//                // Recorro el template e inyecto la informacion
//                $('#_preguntas').html(data.map(tplLastData).join(''));
//                $('#respuestas').html($('#_preguntas').html());
//            }
//        }
//    });
//}
//loadRespuestaTemplate();
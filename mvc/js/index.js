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



//-----------------------  TEXTO ANIMADO BIENVENIDOS!  ------------------------//

const texto = document.getElementById('logo');
const letras = texto.innerText.split("");

texto.innerText = '';

letras.forEach((letra) => {
    let caracter = letra === ' ' ? '&nbsp;' : letra;

    texto.innerHTML = texto.innerHTML + `
    <div>
    <span>${caracter}</span>
    <span class="segunda-linea">${caracter}</span>
    </div>
`;
})

texto.addEventListener('mouseenter', () => {
    let cuenta = 0;

    const intervalo = setInterval(() => {
        if (cuenta < texto.children.length) {
            texto.children[cuenta].classList.add('animacion');
            cuenta = cuenta + 1;
        } else {
            clearInterval(intervalo);
        }

    }, 30);
});

texto.addEventListener('mouseleave', () => {
    let cuenta = 0;

    const intervalo = setInterval(() => {
        if (cuenta < texto.children.length) {
            texto.children[cuenta].classList.remove('animacion');
            cuenta = cuenta + 1;
        } else {
            clearInterval(intervalo);
        }

    }, 30);
});
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }

});

btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const botoesServico = document.querySelectorAll(".btn-servico");
const descricaoServico = document.getElementById("descricao-servico");

const descricaoPadrao = descricaoServico.textContent;

botoesServico.forEach(function (botao) {

    botao.addEventListener("click", function () {

        let novaDescricao;

        if (botao.classList.contains("selecionado")) {

            botao.classList.remove("selecionado");
            novaDescricao = descricaoPadrao;

        } else {

            botoesServico.forEach(function (outroBotao) {
                outroBotao.classList.remove("selecionado");
            });

            botao.classList.add("selecionado");

            novaDescricao = botao.dataset.descricao;
        }

        descricaoServico.classList.add("trocando");

        setTimeout(function () {

            descricaoServico.textContent = novaDescricao;

            descricaoServico.classList.remove("trocando");

        }, 250);

    });

});

const carrossel = document.querySelector(".projetos-carrossel");

if (carrossel) {
    const slides = Array.from(carrossel.querySelectorAll(".carrossel-slide"));
    const indicadores = Array.from(carrossel.querySelectorAll(".indicador"));
    const anterior = carrossel.querySelector(".anterior");
    const proximo = carrossel.querySelector(".proximo");
    let slideAtual = 0;
    let intervalo;

    function mostrarSlide(indice) {
        slideAtual = (indice + slides.length) % slides.length;

        slides.forEach(function (slide, index) {
            slide.classList.toggle("ativo", index === slideAtual);
        });

        indicadores.forEach(function (indicador, index) {
            const estaAtivo = index === slideAtual;
            indicador.classList.toggle("ativo", estaAtivo);
            indicador.setAttribute("aria-selected", estaAtivo);
        });
    }

    function iniciarAutoplay() {
        clearInterval(intervalo);
        intervalo = setInterval(function () {
            mostrarSlide(slideAtual + 1);
        }, 5000);
    }

    anterior.addEventListener("click", function () {
        mostrarSlide(slideAtual - 1);
        iniciarAutoplay();
    });

    proximo.addEventListener("click", function () {
        mostrarSlide(slideAtual + 1);
        iniciarAutoplay();
    });

    indicadores.forEach(function (indicador, index) {
        indicador.addEventListener("click", function () {
            mostrarSlide(index);
            iniciarAutoplay();
        });
    });

    carrossel.addEventListener("mouseenter", function () {
        clearInterval(intervalo);
    });

    carrossel.addEventListener("mouseleave", iniciarAutoplay);
    iniciarAutoplay();
}

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
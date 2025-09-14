const btnPerguntas = document.querySelectorAll(".pergunta");
const boxTextos = document.querySelector("#textos");

const textos = [

    {
        id: 0,
        texto: "O nome do projeto “Farmando XP” vem de um abrasileiramento de  termos usados por jogadores em jogos de RPG  (farm e xp) que significa acumular experiência por meio de ações repetitivas ou atividades específicas, com o objetivo de evoluir o personagem e desbloquear novas habilidades ou níveis dentro do jogo. Trazendo para o contexto do projeto, os alunos irão desenvolver suas habilidades com desenvolvimento web, entregando páginas elaboradas para clientes reais. Dessa forma, o projeto consegue atender aos alunos com experiências enriquecedoras, ao mesmo tempo que entrega para a comunidade, resultados de seus esforços."
    },

    {
        id: 1,
        texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur atque aliquam eius, ad velit consectetur illum vitae. Atque nesciunt incidunt sapiente cupiditate corporis itaque numquam consectetur deleniti facere? Reprehenderit, nulla?"
    },

    {
        id: 2,
        texto: " Gilberto Viana de Oliveira. Possui bacharelado em Sistemas de Informação pela Universidade Federal de Viçosa - Campus Rio Paranaíba (2012), mestrado em Ciência da Computação pela Universidade Federal de Viçosa (2016). Participou de projetos relacionados a aprendizado de máquina, utilizando algoritmos de agrupamento. Atualmente é professor no Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro - Campus Patrocínio nos cursos integrados ao ensino médio e cursos superiores.Áreas de interesse: Desenvolvimento de sistemas, tecnologias web, jogos digitais e estratégias de gamificação aplicadas à educação."
    },

    {
        id: 3,
        texto: " Todas as páginas desenvolvidas pelo projeto farmando XP são gratuitas para a comunidade patrocinense, visando atender primeiramente pequenas empresas que ainda não  possuem identidades virtuais."
    }

]

// funcao para exibir o texto de acordo com o id
function carregarPerguntas(index) {

    boxTextos.style.opacity = 0;

    //trocar texto com transicao suave
    setTimeout(() => {

          boxTextos.textContent = textos[index].texto;
          boxTextos.style.opacity = 1;

    }, 200)
  
}

// exibir sempre o primeiro texto
carregarPerguntas(0)


// percorrer todos os btn e adicionar evento de click
btnPerguntas.forEach((btn) => {

    btn.addEventListener("click", (event) => {

        //remover class ativo de todos os btn
        btnPerguntas.forEach(b => b.classList.remove("ativo"));

        //adiciona class ativo ao btn
        event.currentTarget.classList.add("ativo");
        
        //pega o id do btn clicado
        const btnId = Number(event.currentTarget.id);

        //chama a funcao pra trocar o texto
        carregarPerguntas(btnId);
        
    })

})




// Abrir e Fechar Modal 


const fundo = document.querySelector("#fundoCard"); // Pega o fundo escuro que aprecerá quando o modal abrir

function toggleModal(id){
    const modal = document.getElementById(id); // Recebe o modal respectivo do id

    modal.classList.toggle("hide"); // mostra o modal 
    fundo.classList.toggle("hide"); // ativa o fundo escuro
}


// Mudança de seções



// Cria os botões de toggle no script
const togglerProgrammers = document.querySelectorAll(".t1");
const togglerDesigners = document.querySelectorAll(".t2");


//Cria os Times Programadores ou Designers no script
const programmers = document.querySelectorAll(".programmers");
const designers = document.querySelectorAll(".designers");

const togglersProgrammers = [...togglerProgrammers];

togglersProgrammers.forEach(item=>item.addEventListener("click", () => toggleSection(togglersProgrammers, programmers)));

const togglersDesigners = [...togglerDesigners];

togglersDesigners.forEach(item=>item.addEventListener("click", () => toggleSection(togglersDesigners, designers)));


function toggleSection(toggler, section){
    console.log("Entrou");

    [...togglersProgrammers, ...togglersDesigners].forEach(btn => {btn.classList.remove("active");});

    toggler.forEach(item=>item.classList.add("active")); // Ativa o botão respectivo da seção

    [...programmers, ...designers].forEach(element => element.classList.remove("active"));// pega cada seção e desativa para evitar conflito

    Array.from(section).forEach(item => item.classList.add("active")); // transforma a coleção HTML em Array e adiciona a tag active em cada um
}
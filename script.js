 let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

function cadastrarAluno() {
const nome = document.getElementById("nome").value;
const idade = document.getElementById("idade").value;

if(nome === "" || idade === ""){
alert("Preencha todos os campos!");
return;
}

alunos.push({
nome: nome,
idade: idade
});

localStorage.setItem("alunos", JSON.stringify(alunos));

document.getElementById("nome").value = "";
document.getElementById("idade").value = "";

mostrarAlunos();
}

function mostrarAlunos() {
const lista = document.getElementById("listaAlunos");

lista.innerHTML = "";

alunos.forEach((aluno, index) => {

lista.innerHTML += `
<li>
${aluno.nome} - ${aluno.idade} anos
<button onclick="removerAluno(${index})">
Excluir
</button>
</li>
`;
});
}

function removerAluno(index){
alunos.splice(index,1);

localStorage.setItem("alunos", JSON.stringify(alunos));

mostrarAlunos();
}

mostrarAlunos();

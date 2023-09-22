import { Project } from "./model/Project.js";
import { ProjectController } from "./controller/ProjectController.js";

window.onload = async function () {
    let c = new Project();
    c.descricao = "um teste de card feito com JS";
    c.deployLink = "google.com";
    c.gitLink = "github.com";
    c.name = "teste";
    c.type = "aa";
    c.tecnologias = "y"

    let ctrl = new ProjectController();
    let data = await ctrl.findAll();
    
    let conteiner = document.getElementById("cardConteiner");
    conteiner.innerHTML = "";
    data.forEach(element => {
        conteiner.appendChild(element.drawCard());
    });
}
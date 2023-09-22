import { Project } from "../model/Project.js";
export 
class ProjectsDAO{

    async findAll(){
        let lista = new Array();

        await fetch("./js/data/projects.json")
        .then((response) => response.json())
        .then((data) => {
            data.projects.forEach(element => {
                let p = new Project();
                p.type = element.type;
                p.name = element.name;
                p.image = element.image;
                p.tecnologias = element.tecs;
                p.descricao = element.description;
                p.gitLink = element.gitLink;
                p.deployLink = element.deployLink;
                p.priority = element.priority;
                
                lista.push(p);
            });
        })
        .catch((e) => console.log(e));
        
        return lista;
    }
}
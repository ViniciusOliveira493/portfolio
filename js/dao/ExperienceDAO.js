import { Experience } from "../model/Experience.js";
export 
class ExperienceDAO{

    async findAll(){
        let lista = new Array();

        await fetch("./js/data/experiences.json")
        .then((response) => response.json())
        .then((data) => {
            data.experiences.forEach(element => {
                let c = new Experience();
                c.name = element.name;
                c.institution = element.institution;
                c.startDate = element.startDate;
                c.endDate = element.endDate;
                c.priority = element.priority;
                
                lista.push(c);
            });
        })
        .catch((e) => console.log(e));
        
        return lista;
    }
}
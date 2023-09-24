import { Course } from "../model/Course.js";
export 
class CourseDAO{

    async findAll(){
        let lista = new Array();

        await fetch("./js/data/courses.json")
        .then((response) => response.json())
        .then((data) => {
            data.courses.forEach(element => {
                let c = new Course();
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
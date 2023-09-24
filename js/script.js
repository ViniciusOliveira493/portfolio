import { Project } from "./model/Project.js";
import { ProjectController } from "./controller/ProjectController.js";

import { Course } from "./model/Course.js";
import { CourseController } from "./controller/CourseController.js";

window.onload = async function () {
    let ctrl = new ProjectController();
    let data = await ctrl.findAll();
    
    let conteiner = document.getElementById("cardConteiner");
    conteiner.innerHTML = "";
    data.forEach(element => {
        conteiner.appendChild(element.drawCard());
    });

    let ctrlCourse = new CourseController;
    let courses = await ctrlCourse.findAll();
    
    let conteinerCourse = document.getElementById("listaFormacoes");
    conteinerCourse.innerHTML = "";
    courses.forEach(element => {
        conteinerCourse.appendChild(element.draw());
    });
}
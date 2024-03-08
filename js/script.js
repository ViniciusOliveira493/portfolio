import { Project } from "./model/Project.js";
import { ProjectController } from "./controller/ProjectController.js";

import { Course } from "./model/Course.js";
import { CourseController } from "./controller/CourseController.js";

const state = {
    particles : false
    ,trigger : ""
    ,projects:""
    ,projectPage:1
    ,projectsByPage:10
}

window.onload = async function () {
    let ctrl = new ProjectController();
    state.projects = await ctrl.findAll();
    
    loadCardsProjects();

    let ctrlCourse = new CourseController;
    let courses = await ctrlCourse.findAll();
    
    let conteinerCourse = document.getElementById("listaFormacoes");
    conteinerCourse.innerHTML = "";
    courses.forEach(element => {
        conteinerCourse.appendChild(element.draw());
    });

    toggleParticles();
}

function loadCardsProjects() {
    let conteiner = document.getElementById("cardConteiner");
    conteiner.innerHTML = "";

    let numbers = document.getElementById("paginacaoPaginas");
    numbers.innerHTML = "";

    for (let i = 0; i < (state.projects.length/state.projectsByPage); i++) {
        let span = document.createElement("span");
        span.setAttribute("id",i+1);
        span.setAttribute("class","pageNumber");
        
        if(i === 0){
            span.classList.add("active");
        }

        span.innerHTML = i+1;
        
        numbers.appendChild(span);
    }

    for (let i = (state.projectPage-1)*state.projectsByPage; 
                i < state.projectsByPage*state.projectPage;
                    i++) {

        if(i >= state.projects.length){
            break;
        }

        const element = state.projects[i];
        conteiner.appendChild(element.drawCard());
    }
}

function nextProjectPage() {
    if(state.projectPage < (state.projects.length/state.projectsByPage)){
        state.projectPage++;
        loadCardsProjects();
        changeActivePage()
    }
}

function prevProjectPage() {
    if(state.projectPage > 1){
        state.projectPage--;
        loadCardsProjects();
        changeActivePage()
    }
}

function changeActivePage(){
    let pages = document.querySelectorAll(".pageNumber")

    pages.forEach(element => {
        element.classList.remove("active");
    });

    document.getElementById(state.projectPage).classList.add("active");
}

document.getElementById("prevProjects").addEventListener("click",function () {
    prevProjectPage();
});

document.getElementById("nextProjects").addEventListener("click",function () {
    nextProjectPage();
});

document.getElementById("paginacaoPaginas").addEventListener("click",function(e) {
    if(Number.isInteger(parseInt(e.target.id))){
        state.projectPage = e.target.id;
    }

    loadCardsProjects();
    changeActivePage();
});

setTimeout(() => {
    particlesJS.load('particles-js', './js/libs/particlejs/particlesjs-config.json',function() {
            
    });
}, 10000);

window.addEventListener("keydown",function (e) {
    state.trigger += e.key;

    if(state.trigger.includes("particles")){
        toggleParticles();
        state.trigger = "";
    }
});

function toggleParticles(){
    document.getElementById('particles-js').classList.add("off");

    if(state.particles){
        document.getElementById('particles-js').classList.remove("off");
    }

    state.particles = !state.particles;
}
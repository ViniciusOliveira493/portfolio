import { ProjectsDAO } from "../dao/ProjectDAO.js";

export
class ProjectController{
    dao = new ProjectsDAO();

    async findAll(){
        let lista = await this.dao.findAll();
        return this.orderByPriority(lista);
    }

    orderByPriority(data){
        return data.sort((a,b) => b.priority-a.priority);
    }
}
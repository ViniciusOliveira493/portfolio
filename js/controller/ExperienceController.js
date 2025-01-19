import { ExperienceDAO } from "../dao/ExperienceDAO.js";

export
class ExperienceController{
    
    async findAll(){
        let dao = new ExperienceDAO();
        let data = await dao.findAll();
        return this.orderByPriority(data);
    }

    orderByPriority(data){
        return data.sort((a,b) => b.priority-a.priority);
    }
}
import { CourseDAO } from "../dao/CoursesDAO.js";

export
class CourseController{
    
    async findAll(){
        let dao = new CourseDAO();
        let data = await dao.findAll();
        return this.orderByPriority(data);
    }

    orderByPriority(data){
        return data.sort((a,b) => b.priority-a.priority);
    }
}
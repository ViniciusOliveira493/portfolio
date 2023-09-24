export
class Course{
    name
    institution
    startDate
    endDate
    priority

    draw(){
       let div = document.createElement("div"); 
       div.setAttribute("class","formacao");

       let span1 = document.createElement("span"); 
       let span2 = document.createElement("span"); 
       let span3 = document.createElement("span"); 

       span1.innerHTML = this.name;
       span2.innerHTML = this.institution
       span3.innerHTML = this.startDate + " - " + this.endDate;

       div.appendChild(span1);
       div.appendChild(span2);
       div.appendChild(span3);

       return div;
    }
}
export
class Experience{
    name
    institution
    startDate
    endDate
    priority

    draw(){
       let div = document.createElement("div"); 
       div.setAttribute("class","experiencia");

       let span1 = document.createElement("span"); 
       let span2 = document.createElement("span"); 
       let span3 = document.createElement("span"); 

       span1.innerHTML = this.name;
       span2.innerHTML = this.institution
       span3.innerHTML = this.startDate + " - " + this.endDate;

       div.appendChild(span1);
       div.appendChild(span2);

       if(this.startDate!=""){
        div.appendChild(span3);
       }

       return div;
    }
}
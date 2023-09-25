export
class Project{
    type;
    name;    
    image;
    tecnologias;
    descricao;
    gitLink;
    deployLink;
    priority = 0;

    drawCard(){
        if(this.image==""){
            this.image = "";
        }

        let card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute("style",
            "background-image: url(./img/"+this.image+");"
            )
        
        let title = document.createElement("span");
        title.setAttribute("class","typeIcon");

        let icon = "&lt;/&gt;";
        icon = document.createElement("span");
        icon.setAttribute("class","material-symbols-outlined");

        switch (this.type) {
            case "game":
                icon.innerHTML = "videogame_asset";
            break;
    
            case "back":
                icon.innerHTML = "dns";
            break;

            case "database":
                icon.innerHTML = "database";
            break;
            default:
                icon.innerHTML = "web";
                break;
        }
        
        title.appendChild(icon);
        title.append(" - "+this.name);

        card.appendChild(title);

        let desc = document.createElement("div");
        desc.setAttribute("class","descricao");

        let techs = document.createElement("div");
        techs.setAttribute("class","tecIcons");

        this.tecnologias.forEach(element => {
            let tec = document.createElement("span");
            tec.setAttribute("class","devicon-"+element+"-plain colored");
            techs.appendChild(tec);
        });

        desc.appendChild(techs);

        let text = document.createElement("div");
        text.setAttribute("class","descText");

        text.innerHTML = this.descricao;

        desc.appendChild(text);

        card.appendChild(desc);

        let links = document.createElement("div");
        links.setAttribute("class","cardLinks");

        let linksD = document.createElement("div");

        if(this.gitLink!=""){
            let git = document.createElement("a");
            git.setAttribute("href","http://"+this.gitLink);
            git.setAttribute("target","_blank");
            git.innerHTML = "Github";

            linksD.appendChild(git);
        }

        if(this.deployLink!=""){
            let visit = document.createElement("a");
            visit.setAttribute("href","http://"+this.deployLink);
            visit.setAttribute("target","_blank");
            visit.innerHTML = "Ver Site";
            linksD.appendChild(visit);
        }

        links.appendChild(linksD);
        card.appendChild(links);
        
        return card;
    }
}
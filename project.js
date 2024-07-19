class project{
    // Static property to hold all instances
    static allProjects = [];
    static allTags = [];

    constructor(id,name,date,shotDis,longDis,tags,mainImg,code,site,comps,Qimages){
        this.id = id,
        this.name = name;
        this.date = date;
        this.shotDis = shotDis;
        this.longDis = longDis;
        this.tags = tags;
        this.mainImg = mainImg;
        this.code = code;
        this.site = site;
        this.comps = comps;
        this.Qimages = Qimages;

        // Add the current instance to the array of all projects
        project.allProjects.push(this);
        this.tags.forEach(tag => {
            if (!project.allTags.includes(tag)) {
                project.allTags.push(tag);
            }
        });
    }

    shortDisplay(){
        const display = document.getElementById("display");
        const newProject = document.createElement('div');
        newProject.classList.add('project-div');
        newProject.classList.add('projectEventHandler');
        display.appendChild(newProject);
        const newProjectImg = document.createElement('div');
        newProjectImg.classList.add('prject-div-img');
        newProject.appendChild(newProjectImg);
        newProjectImg.style.backgroundImage=`url("${this.mainImg}")`
        const newProjectBody = document.createElement('div');
        newProjectBody.classList.add('project-body');
        newProject.appendChild(newProjectBody);
        const newProjectBodyh1 = document.createElement('h2');
        const newProjectBodyp = document.createElement('p');
        newProjectBody.appendChild(newProjectBodyh1);
        newProjectBody.appendChild(newProjectBodyp);
        newProjectBodyh1.innerText=this.name;
        newProjectBodyp.innerText = this.shotDis;
        const tagUl = document.createElement('ul');
        newProjectBody.appendChild(tagUl);
        const tagLi = document.createElement('li');
        tagUl.appendChild(tagLi)
        for (let i = 0; i < this.tags.length; i++) {
            const e = this.tags[i];
            const tagBtn = document.createElement('button');
            tagUl.appendChild(tagBtn);
            tagBtn.innerText=e;
            tagBtn.classList.add('BS1');
            tagBtn.classList.add('tagBtn');
            tagBtn.classList.add('e');
        }
        let LargeDisplay = document.getElementById('LD');

            let projectSelection = document.getElementsByClassName('projectEventHandler');
            for (let i = 0; i < projectSelection.length; i++) {
                const iProject = projectSelection[i];
                iProject.addEventListener('click',function () {
                    let clickedProejct = this.childNodes[1].childNodes[0].innerText
                    for (let i = 0; i < AllProjects.length; i++) {
                        const Iproject = AllProjects[i];
                        if(Iproject.name == clickedProejct){
                            Iproject.longDisplay();
                            LargeDisplay.style.left="0"
                        }
                    }
                })
            }
    }
    longDisplay(){
        let LargeDisplay = document.getElementById('LD');
        LargeDisplay.style.left="0";    

        let projectName = document.getElementById("LD_projectName");
        let projectMainImg = document.getElementById("LD_mainImage");
        let projectDescription = document.getElementById("LD_discription");
        let projectPreview = document.getElementById("LD_preview");
        let projectCode = document.getElementById("LD_code");
        let projectTagButtons = document.getElementById("LD_tagButtons");
        let projectComponents = document.getElementById("LD_components");
        let projectImageView = document.getElementById("LD_imgView");
        let projectDate = document.getElementById("date");

        projectDate.innerText=""
        projectName.innerHTML="";
        projectMainImg.innerHTML="";
        projectDescription.innerHTML="";
        projectComponents.innerHTML="";
        projectImageView.innerHTML="";
        projectTagButtons.innerHTML="";

        projectName.innerText=this.name;
        projectMainImg.style.backgroundImage=`url("${this.mainImg}")`;
        projectDescription.innerText=this.longDis;
        projectDate.innerText="Date: "+this.date

        for (let i = 0; i < this.tags.length; i++) {
            const tag = this.tags[i];
            let btn = document.createElement('button');
            btn.innerText=tag;
            btn.classList.add('BS1');
            projectTagButtons.appendChild(btn)
        }
        for (let i = 0; i < this.comps.length; i++) {
            const component = this.comps[i];
            let comp = document.createElement('li');
            comp.innerText=component;
            projectComponents.appendChild(comp)
        }
        for (let i = 0; i < this.Qimages.length; i++) {
            const image = this.Qimages[i];
            let img = document.createElement('img');
            img.src=image;
            projectImageView.appendChild(img)
        }
    }
    // Static method to get all projects
    static getAllProjects() {
        return project.allProjects;
    }
    static getAllTags() {
        return project.allTags;
    }
}
let displayStatus = 0


// ADD TAGS 
AllProjects = project.getAllProjects();
AllTags = project.getAllTags();

const displayTags = document.getElementById('project-type-lang');
AllTags.forEach(element => {
    let tempBtn = document.createElement('button');
    tempBtn.classList.add('BS1');
    tempBtn.classList.add('tagBtn');
    displayTags.appendChild(tempBtn);
    tempBtn.textContent=element;
});
//DISPLAY PROJECTS TO TAGS 
if (displayStatus == 0) {
    AllProjects.forEach(element=>{
        element.shortDisplay();
    })   
}
tagBtns = document.getElementsByClassName('tagBtn');
for (let i = 0; i < tagBtns.length; i++) {
    btn = tagBtns[i]
    btn.addEventListener('click', function () {
        for (let j = 0; j < tagBtns.length; j++) {
            tagBtns[j].classList.remove('active');
        }
        const display = document.getElementById("display");
        display.innerHTML="";
        let selectedTag = this.innerText

        AllProjects.forEach(element=>{
            if(element.tags.includes(selectedTag)){
                element.shortDisplay();
            }
        });
        this.classList.add('active')
    });
}
//CHANGE THEME
themeBtn = document.getElementById('themeButton');
themeBtn.addEventListener('click',function(){
    var theme = document.querySelector(':root');
    var currentDarkTheme = getComputedStyle(theme).getPropertyValue('--DarkTheme').trim();
    var currentLightTheme = getComputedStyle(theme).getPropertyValue('--LightTheme').trim();
    if (currentDarkTheme === '#000' && currentLightTheme === '#fff') {
        theme.style.setProperty('--DarkTheme', '#fff');
        theme.style.setProperty('--LightTheme', '#000');
        theme.style.setProperty('--lightBack1', '#1c1c1c');
        theme.style.setProperty('--lightBack2', '#151515');
        theme.style.setProperty('--lightBack3', '#232323');
    } else {
        theme.style.setProperty('--DarkTheme', '#000');
        theme.style.setProperty('--LightTheme', '#fff');
        theme.style.setProperty('--lightBack1', '#fff');
        theme.style.setProperty('--lightBack2', '#bfbfbf');
        theme.style.setProperty('--lightBack3', '#fff');
    }
})
// Show Informed view
let exitBtn = document.getElementById('LD_exit');
let LargeDisplay = document.getElementById('LD');
exitBtn.addEventListener('click',function () {
    LargeDisplay.style.left="-100vw";
})

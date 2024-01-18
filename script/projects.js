
let parts = ["All", "Web Design","HTML & CSS & JS" ,'HTML CSS', 'ComKet', 'SASS',"API" ]
let Projects = [
    {parts: ["All","Web Design", "ComKet"], img: "1.png", title: "Travel-Ket site", text: "cooperative with team " ,vew : 'https://geslam587.github.io/travelket-site/'},
    {parts: ["All","Web Design","ComKet" ], img: "2.png", title: "Filter Cards", text: "Built by JS using comKet library " ,vew : "https://geslam587.github.io/Filter_Cards/"},
    {parts: ["All","Web Design","SASS"], img: "3.png", title: "Portfolio", text: "simple portfolio  " ,vew : "https://geslam587.github.io/Eslam-Gamal-Portfolio"},
    {parts: ["All","Web Design", "ComKet"], img: "4.png", title: "Figma Design", text: "Built like a design from Figma " ,vew : "https://geslam587.github.io/figma/"},
    {parts: ["All","Web Design", "SASS"], img: "5.png", title: "Project SASS", text: "Built like a design from Figma using SASS " ,vew : "https://geslam587.github.io/project_sass/"},
    {parts: ["All","HTML CSS"], img: "8.png", title: "Activ Pricing", text: "Built and activated without js " ,vew : "https://geslam587.github.io/webket-training/Active-Pricing/"},
    {parts: ["All","HTML & CSS & JS"], img: "9.png", title: "CHoose a user", text: "You can select or delete users " ,vew : "https://geslam587.github.io/webket-training/Choose%20A%20User/"},
    {parts: ["All","HTML & CSS & JS"], img: "10.png", title: "Countries toggle", text: "Construction is done based on the choice of the country " ,vew : "https://geslam587.github.io/Countries-Toggle/"},
    {parts: ["All","HTML & CSS & JS"], img: "11.png", title: "Hover move", text: "simple effect in css using js " ,vew : "https://geslam587.github.io/webket-training/Hover-move/"},
    {parts: ["All","HTML & CSS & JS"], img: "12.png", title: "snapping duble click", text: "simple effect using function on scroll " ,vew : "https://geslam587.github.io/webket-training/Snapping&bubleClikc/"},
    {parts: ["All","HTML CSS"], img: "13.png", title: "Open img", text: "Built and activated without js " ,vew : "https://geslam587.github.io/webket-training/Open%20imge/"},
    {parts: ["All","API"], img: "14.png", title: "Quiz app", text: "Built using fetch API " ,vew : "https://geslam587.github.io/quiz-App/"},
    {parts: ["All","API"], img: "15.png", title: "Filter search", text: "Built using fetch API  " ,vew : "https://geslam587.github.io/filter-search/"},
]

export default function appendCards(activpart) {
    let projectsNav = document.getElementById("nav")
    projectsNav.innerHTML = ""
    for (let part of parts) {
      let button = document.createElement("button")
      button.innerHTML= part
      if (part == activpart) {
        button.classList.add("activ")
      }
      projectsNav.appendChild(button)
      //   button.addEventListener("click",  appendCards);
      button.addEventListener("click",  () => { appendCards(part);});
    }
    
    document.getElementById("cards").innerHTML= ""
    for (let x of Projects) {
        
        if (x.parts.includes(activpart)) {

            let project= document.createElement("div")
            project.classList.add("project")
            
            let img=document.createElement("img")
            img.src = "./media/"+ x.img
            project.appendChild(img)
            
            let h2=document.createElement("h2")
            h2.innerHTML = x.title
            project.appendChild(h2)
            
            let p=document.createElement("p")
            p.innerHTML = x.text
            project.appendChild(p)
            
            let button =document.createElement("button")
            button.addEventListener("click", () => { 
              // window.location.href = x.vew
              window.open(x.vew)
            })
            button.innerHTML= "View Project"
            project.appendChild(button)
            
            document.getElementById("cards").appendChild(project)
        }
    }


}
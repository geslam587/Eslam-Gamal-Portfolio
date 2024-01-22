function activ(e) {
   let children=  document.querySelector("#center").children
   for (const child of children) {
        if (e.target==child) {
            e.target.classList.add("activ")
        }
        else{
            child.classList.remove("activ")
        }  
        
    }
   }
    
function scroll() {
    document.querySelector("#center").children[0].addEventListener("click",scrollhome),
    document.querySelector("#center").children[0].addEventListener("click", activ),
    document.querySelector("#center").children[1].addEventListener("click",scrollExp),
    document.querySelector("#center").children[1].addEventListener("click", activ),
    document.querySelector("#center").children[2].addEventListener("click",scrollPro),
    document.querySelector("#center").children[2].addEventListener("click", activ),
    document.querySelector("#center").children[3].addEventListener("click",scrollSkills),
    document.querySelector("#center").children[3].addEventListener("click", activ),
    document.querySelector("#center").children[4].addEventListener("click", activ),
    document.querySelector("#center").children[4].addEventListener("click",scrollCon)

    function scrollhome(e) {window.scrollBy({
        left : 0,
        top : document.querySelector("#home").getBoundingClientRect().top - 50 ,
        behavior : "smooth"
    } );  }
    function scrollExp(e) {window.scrollBy({
        left: 0 ,
        top : document.querySelector("#experience").getBoundingClientRect().top - 50 ,
        behavior : "smooth"
    } );  }
    function scrollPro() {window.scrollBy( {
        left : 0,
        top : document.querySelector("#projects").getBoundingClientRect().top - 50 ,
        behavior : "smooth",
        } );
      }
    function scrollSkills(e) {window.scrollBy({
        left : 0,
        top : document.querySelector("#skills").getBoundingClientRect().top - 70 ,
        behavior : "smooth"
    } );  }
    function scrollCon(e) {window.scrollBy({
        left:0,
        top : document.querySelector("#contact").getBoundingClientRect().top - 70 ,
        behavior : "smooth"
    })}
    document.querySelectorAll(".buttons")[0].addEventListener("click", scrollCon)

}
import nav from"./script/nav.js"
import home from"./script/home.js"
import experience from"./script/experience.js"
import appendCards from"./script/projects.js"
import skills from"./script/skills.js"
import contact from"./script/contact.js"

nav();
home();
experience();
appendCards('All');
skills();
contact();
scroll();


    document.querySelector("#center").children[0].addEventListener("click",scrollhome),
    document.querySelector("#center").children[1].addEventListener("click",scrollExp),
    document.querySelector("#center").children[2].addEventListener("click",scrollPro),
    document.querySelector("#center").children[3].addEventListener("click",scrollSkills),
    document.querySelector("#center").children[4].addEventListener("click",scrollCon)

function scrollhome(e) {window.scrollBy(0, document.querySelector("#home").getBoundingClientRect().top - 50 );  }
function scrollExp(e) {window.scrollBy(0, document.querySelector("#experience").getBoundingClientRect().top - 50 );  }
function scrollPro(e) {window.scrollBy(0, document.querySelector("#projects").getBoundingClientRect().top - 50 );  }
function scrollSkills(e) {window.scrollBy(0, document.querySelector("#skills").getBoundingClientRect().top - 70 );  }
function scrollCon(e) {window.scrollBy(0, document.querySelector("#contact").getBoundingClientRect().top - 70 )}

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

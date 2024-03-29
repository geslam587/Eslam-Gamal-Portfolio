export default function nav() {
    document.body.querySelector(".circle").addEventListener('click',them)
    let hometitle = document.querySelector('.home').children[1].classList
    let homep = document.querySelector('.home').children[2].classList
    let homebutton1 = document.querySelector('.home').children[3].children[0].classList
    let homebutton2 = document.querySelector('.home').children[3].children[1].classList
    let conTitle = document.querySelector('#conTitle').classList
    let conBottom = document.querySelector('#conBottom').classList

    function them() {
        let nav =document.body.querySelector(".circle").classList
            if (nav.contains("dark")) {
                nav.add('light')
                nav.remove('dark')
                hometitle.add('titleDark')
                hometitle.remove('titleLight')
                homep.add('pDark')
                homep.remove('pLight')
                homebutton1.add('buttonDark')
                homebutton1.remove('buttonLight')
                homebutton2.add('buttonDark')
                homebutton2.remove('buttonLight')
                
                conTitle.add('title')
                conTitle.remove('titleLight')
                conBottom.add('bottom')
                conBottom.remove('bottomlight')

                document.querySelector('.experience').classList.add('exDark')
                document.querySelector('.experience').classList.remove('exLight')
                document.body.querySelector('.them').style.backgroundColor= '#fff'
                document.body.querySelector('.nav').style.backgroundColor= '#222'
                document.body.querySelector('.nav').style.color= '#fff'
                document.body.querySelector('.desktop').classList.remove("desktoplight")
                document.body.style.backgroundColor= '#222'
                // document.body.style.color= '#fff'
            }
            else{
                nav.add('dark')
                nav.remove('light')
                hometitle.add('titleLight')
                hometitle.remove('titleDark')
                homep.add('pLight')
                homep.remove('pDark')
                homebutton1.add('buttonLight')
                homebutton1.remove('buttonDark')
                homebutton2.add('buttonLight')
                homebutton2.remove('buttonDark')
                
                conTitle.add('titleLight')
                conTitle.remove('title')
                conBottom.add('bottomlight')
                conBottom.remove('bottom')
                
                document.querySelector('.experience').classList.add('exLight')
                document.querySelector('.experience').classList.remove('exDark')
                document.body.querySelector('.them').style.backgroundColor= '#222'
                document.body.querySelector('.nav').style.backgroundColor= '#ECF1F0'
                document.body.querySelector('.nav').style.color= '#222'
                document.body.querySelector('.desktop').classList.add("desktoplight")
                document.body.style.backgroundColor= '#ECF1F0'
            }
    }
    function open() {
        if ( document.querySelector('.phone').style.display!= "flex") {
            document.querySelector('.phone').style.display= "flex"
        }
        else{
            document.querySelector('.phone').style.display= "none"
        } 
    }
    function resize() {
        if (window.innerWidth <= 850) {
        document.querySelector('#center').classList.add('phone')
        document.querySelector('#center').classList.remove('desktop')
        document.querySelector('#center').classList.remove('desktoplight')
        document.querySelector('.parent').style.display = "flex"
        document.querySelector('.parent').addEventListener('click',open)
        document.querySelector('.them').style.display = "none"
        document.querySelector('.phone').style.display= "none"
        
    }
    else if( window.innerWidth >= 850) {
        document.querySelector('#center').classList.remove('phone')        
        document.querySelector('.parent').style.display = "none"
        // document.querySelector('.parent').removeEventListener('click',open)
        document.querySelector('.them').style.display = "flex"
        document.querySelector('#center').classList.add('desktop')
        document.querySelector('.desktop').style.display = "flex"
        
    };
}
document.body.onload = resize 
document.body.onresize = resize
}
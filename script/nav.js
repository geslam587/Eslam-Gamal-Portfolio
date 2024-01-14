export default function nav() {
    document.body.querySelector(".circle").addEventListener('click',them)
    function them() {
        let div =document.body.querySelector(".circle").classList
            if (div.contains("dark")) {
                div.add('light')
                div.remove('dark')
                document.body.querySelector('.them').style.backgroundColor= '#fff'
                document.body.querySelector('.nav').style.backgroundColor= '#222'
                document.body.querySelector('.nav').style.color= '#fff'
                document.body.style.backgroundColor= '#222'
            }
            else{
                div.add('dark')
                div.remove('light')
                document.body.querySelector('.them').style.backgroundColor= '#222'
                document.body.querySelector('.nav').style.backgroundColor= '#fff'
                document.body.querySelector('.nav').style.color= '#222'
                document.body.style.backgroundColor= '#eee'
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
        document.querySelector('.parent').style.display = "flex"
        document.querySelector('.parent').addEventListener('click',open)
        document.querySelector('.them').style.display = "none"
        
    }
    else if( window.innerWidth >= 850) {
        // document.querySelector('.phone').style.display= "none"
        console.log(34);
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
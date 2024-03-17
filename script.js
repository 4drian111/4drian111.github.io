const text = document.querySelector(".txt");

const textLoad = () => {
    setTimeout( () => {
        text.textContent = "Web Designer"
    }, 0);
 
    setTimeout( () => {
        text.textContent = "Web Developer"
    }, 3000);

    setTimeout( () => {
        text.textContent = "UI/UX Designer"
    }, 6000);
}

textLoad()
setInterval(textLoad , 9000);

let btn = document.querySelector("#btn");

   btn.addEventListener("click" ,  () =>{
   document.querySelector("#ul").classList.toggle("open")
   })

 const nav1 = document.getElementById("nav1");
nav2 = document.getElementById("nav2");
nav3 = document.getElementById("nav3");
nav4 = document.getElementById("nav4");

nav1.onclick = () =>{
    ul.classList.remove('open');
}

nav2.onclick = () =>{
    ul.classList.remove('open');
}
nav3.onclick = () =>{
    ul.classList.remove('open');
}
nav4.onclick = () =>{
    ul.classList.remove('open');
}

window.addEventListener ( 'scroll' , hidden);

function hidden(){
    let sections = document.querySelectorAll('.hidden');

    for(let x = 0 ; x < sections.length; x++){

        let windowheight = window.innerHeight;
        let revealtop = sections[x].getBoundingClientRect().top;
        let revealheight = 150;

        if(revealtop < windowheight - revealheight){
            sections[x].classList.add('active');
        }
        else{
            sections[x].classList.remove('active')
        }
    }

}
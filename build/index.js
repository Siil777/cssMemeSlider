//realization slider functionality
let currSlide = 0;

var container = document.getElementById('slider');

    const ImgArray = [
        'img/fit.jpg',
        'img/fit1.jpg',
        'img/fit3.jpg'

    ];

function slider(arrayOfSlides){
    for(let d=0; d<arrayOfSlides.length;d++){
        const Image = document.createElement('img');
        Image.src = arrayOfSlides[d];
        Image.style.position = 'absolute';
        Image.style.transition = `transform 500ms ease-out, opacity 500ms ease-out`;
        Image.id = `slide${d+1}`;
        container.appendChild(Image);
    }
    updateVisibility();
}
function updateVisibility(){
    for(let a=0; a<ImgArray.length;a++){
        const pi = document.getElementById(`slide${a+1}`);
        if(pi){
            if(a===currSlide){
                pi.style.transform = `translateX(0)`;
                pi.style.opacity = '1';
            }else if(a<currSlide){
                pi.style.transform = `translateX(-100%)`;
                pi.style.opacity = '0';
            }else{
                pi.style.transform = `translateX(100%)`;
                pi.style.opacity = '0';
            }
        }
    }
}
function nextBtn(){
    if(currSlide<ImgArray.length -1){
        currSlide++;
    }else{
        currSlide = 0;
    }
    updateVisibility();
    updateCircleColor();
}
function PreviousBtn(){
    if(currSlide>0){
        currSlide--;
    }else{
        currSlide = ImgArray.length -1;
    }
    updateVisibility();
    updateCircleColor();
}
slider(ImgArray);
//resize a bit
document.getElementById('next').addEventListener('click', nextBtn);
document.getElementById('previous').addEventListener('click', PreviousBtn);

//what if we want to make progress bar for the slider ?

document.addEventListener('DOMContentLoaded', ()=>{
    const box = document.getElementById('box-progress');
    box.classList.add('pb-5')
    const top = document.createElement('div');
    top.classList.add('d-flex','justify-content-center','gap-4')
    for(let c=0; c<ImgArray.length;c++){
        const li = document.createElement('li');
        li.classList.add('custom-li')
        top.appendChild(li);
        box.appendChild(top);


        li.addEventListener('click', (event)=>{
            const pi = event.target;

            if(pi.classList.contains('custom-li')){
                console.log('element clicked!');
                //check if we can get these li
                nextBtn();
            }
        })
    }
})
//forgot set css style
function updateCircleColor(){
    Circles('#box-progress li', currSlide);
}

function Circles(element){
    var circles = document.querySelectorAll(element);

    circles.forEach((circle,index)=>{
        if(index<=currSlide){
            circle.classList.add('green');
        }else{
            circle.classList.remove('green');
        }
    })
}
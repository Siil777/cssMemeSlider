let currSlide = 0;
let visibleSlide = 1;

var container = document.getElementById('slider');
    container.innerHTML = '';
     const ImgArray = [
        'img/fit.jpg',
        'img/fit1.jpg'
    ];  


function slider(arrayOfSlides){
    container.innerHTML = '';
    for(let x=0; x < arrayOfSlides.length; x++){
        const Image = document.createElement('img');
        Image.src = arrayOfSlides[x];
        Image.style.position = 'absolute';
        Image.style.transition = `transform 500ms ease-out, opacity 500ms ease-out`;
        Image.id = `slide${x + 1}`;
        Image.style.opacity = '0';
        //Image.style.visibility = 'hidden';
        Image.classList.add('img-fluid');
        container.appendChild(Image);
    }
    updateVisibility();
}
function updateVisibility(){
    for(let s=0; s < ImgArray.length; s++){
        const pi = document.getElementById(`slide${s + 1}`);

        if(pi){
            if(s===currSlide){
                pi.style.transform = `translateX(0)`;
                pi.style.opacity = '1';
            }
            else if(s<currSlide){
                pi.style.transform = `translateX(-100%)`;
                pi.style.opacity = '0';
            }else{
                pi.style.transform = `translateX(100%)`;
                pi.style.opacity = '0';
            }
        }
    }
}
function next(){
    if(currSlide < ImgArray.length -1){
        currSlide++;
    }else{
        currSlide = 0;
    }
    updateVisibility();
}
function previous(){
    if(currSlide>0){
        currSlide--;
    }else{
        currSlide = ImgArray.length -1;
    }
    updateVisibility();
}
slider(ImgArray);

document.getElementById('right').addEventListener('click', next);
document.getElementById('left').addEventListener('click', previous);
//paths of the images
let imagesPaths = {
    path1:'images/mount-everest.jpg',
    path2:'images/mount-machha.jpg',
    path3:'images/mount-kanchan.jpg',
    path4: 'images/mount-k2.jpg',
    path5: 'images/mount-fuji.jpeg',
};

// dimensions of images
let dimensionsImages = {
    imageWidth: '800',
    imageHeight: '500',
};

// dimensions of the containers
let lengthOfPath = Object.keys(imagesPaths).length;

let dimensionsWarpers = {
    sliderWarperWidth: '800',
    sliderWarperHeight: '500',
    sliderWidth: dimensionsImages.imageWidth*lengthOfPath, 
    sliderHeight: '500',
};


//Vissible window for the slider
let getSliderWarper = document.getElementById('image-slider-warper-id');

let sliderWarper = () =>{
    let sW = getSliderWarper.style;
    sW.position = 'absolute';
    sW.width = `${dimensionsWarpers.sliderWarperWidth}px`;
    sW.height = `${dimensionsImages.imageHeight}px`;
    sW.border = '1px solid black';
    sW.left = '50%';
    sW.top = '50%';
    sW.transform = 'translate(-50%, -50%)';
    sW.overflow = 'hidden';
};

sliderWarper();

//slider contains the images horzontally stacked to slide it horizontally
let imageSlider = document.getElementById('image-slider-id');
let values = Object.values(imagesPaths);

let slider = () =>{

    imageSlider.style.width = dimensionsWarpers.sliderWidth + 'px';
    imageSlider.style.height = dimensionsWarpers.sliderHeight + 'px';
    imageSlider.style.position = 'relative';
    imageSlider.style.transition = '500ms'

    for(let i = 0; i < values.length; i++){
        let img = new Image();
        img.style.position = 'absolute'
        img.style.width = `${dimensionsImages.imageWidth}px`;
        img.style.height = `${dimensionsImages.imageHeight}px`;
        img.style.left = `${dimensionsImages.imageWidth * i}px`;
        img.style.float = 'right';
        img.src = values[i];
        imageSlider.appendChild(img);

    };
};

slider();

//next button container
let currentIndex = 0;
let btnRight = () => {
    let btnTemp = document.getElementById('right-btn-id');
    let bT = btnTemp.style;
    bT.position = 'absolute';
    bT.width = '35px';
    bT.float = 'right';
    bT.top = '45%';
    bT.left = '93%';   
    bT.border = '0px';
    bT.background = 'black';
    bT.cursor = 'pointer';
    bT.borderRadius = '50%';
    bT.opacity = '0.5';
    bT.width = '50px';
    btnTemp.onclick = () => {
        currentIndex++;
        changeColor(currentIndex)
        if(currentIndex > lengthOfPath-1){
            currentIndex = 0;
        };
        imageSlider.style.left = `-${currentIndex * dimensionsImages.imageWidth}px`;

    }
}

btnRight();

//previous button
let btnLeft = () => {
    let btnTemp = document.getElementById('left-btn-id');
    let bT = btnTemp.style;
    bT.position = 'absolute';
    bT.width = '35px';
    bT.float = 'left';
    bT.top = '45%';   
    bT.border = '0px';    
    bT.background = 'black';
    bT.opacity = '0.5';
    bT.width = '50px';
    bT.borderRadius = '50%';
    bT.cursor = 'pointer';
    
    btnTemp.onclick = () => {
        currentIndex--;
        changeColor(currentIndex)
        if(currentIndex<0){
            currentIndex = lengthOfPath -1;
        };
        imageSlider.style.left = `-${currentIndex * dimensionsImages.imageWidth}px`;
    };
};

btnLeft();

//dot buttons container
let getBtnContainer = document.getElementById('btn-container-id');
let btns = getBtnContainer.children;
let btnContainer = () => {
    let bC = getBtnContainer.style;
    bC.position = 'absolute';
    bC.width = '100%';
    bC.display = 'block';
    bC.top = '95%';
    bC.textAlign = 'center';

    for(let i = 0; i < values.length; i++){
        let btn = document.createElement('button');
        btn.setAttribute('class', 'radioBtn');
        let b = btn.style;
        b.marginLeft = '10px';
        b.marginRight = '10px';
        b.width = '15px';
        b.height = '15px';
        b.borderRadius = '50%';
        b.border = '0px';
        b.cursor = 'pointer';
        getBtnContainer.appendChild(btn);
    };

    for(let i = 0; i < btns.length; i++){
        btns[i].onclick = () => {
            imageSlider.style.left = `-${i * dimensionsImages.imageWidth}px`;
        };
    };
};

btnContainer();

function changeColor(){
for (let i = 0; i< btns.length; i++)
if(currentIndex == i){
    btns[i].style.background = 'skyblue'
}else{
    btns[i].style.background = '#666'
}
}





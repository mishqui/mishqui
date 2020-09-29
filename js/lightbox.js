const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.add-image')
const contLight = document.querySelector('.image-light')
const copy = document.querySelector('.copy')
const btnMain1 = document.querySelector('.buttonMain')

images.forEach(image => {
    image.addEventListener('click', () => {
        addImage(image.getAttribute('src'), image.getAttribute('alt'))
    })
})

contLight.addEventListener('click', (e) => {
    if (e.target != imagesLight) {
        contLight.classList.toggle('show')
        contLight.classList.toggle('showImage')
        btnMain1.style.opacity = '1'
    }
})

const addImage = (srcImage, altImage) => {
    imagesLight.src = srcImage;
    copy.innerHTML = altImage;
    contLight.classList.toggle('show')
    contLight.classList.toggle('showImage')
    btnMain1.style.opacity = '0'
}

const imges = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-imgEvent');
const imgEventContainer = document.querySelector('.img-showEvent');
const copyEvent = document.querySelector('.copyEvent');
const closeEvent = document.querySelector('.bx.bx-x');

imges.forEach(image => {
    image.addEventListener('click', () => {

        addImageEvent(image.getAttribute('src'), image.getAttribute('alt'));
    })
})

const addImageEvent = (srcEvent, altEvent) => {
    containerImage.classList.toggle('moveEvent');
    imgEventContainer.classList.toggle('showEvent');
    imgEventContainer.src = srcEvent;
    copyEvent.innerHTML = altEvent;
}

closeEvent.addEventListener('click', () => {
    containerImage.classList.toggle('moveEvent');
    imgEventContainer.classList.toggle('showEvent');
})
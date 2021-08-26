import {images} from '../gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxButton = document.querySelector('.lightbox__button'); 
const overlay = document.querySelector('.lightbox__overlay');

let index = 0;
const arrImg = [];

function renderImg(arr) {
    arr.forEach(img => {
        const li = `
        <li class="gallery__item">
        <a
          class="gallery__link"
          href=${img.original}
        >
          <img
            class="gallery__image"
            src=${img.preview}
            data-source=${img.original}
            alt="Tulips"
          />
        </a>
      </li>
        `
        arrImg.push(img.original);
        gallery.insertAdjacentHTML('afterbegin', li)
    })
}
renderImg(images)


function openModal(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    lightbox.classList.add('is-open');
    lightboxImg.src = event.target.dataset.source;
    window.addEventListener('keydown', toggleImg);
}

function closeModal() {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
}

function toggleImg(event) {
    if(event.key === 'Escape') {
        closeModal();
    }

    if(event.key === 'ArrowRight') {
        index += 1;
        if(index >= arrImg.length){
            index = 0
        }
        lightboxImg.src = arrImg[index];
    }
    
    if(event.key === 'ArrowLeft') {
        index -= 1;
        if(index < 0) {
            index = arrImg.length - 1
        }
        lightboxImg.src = arrImg[index];
    }
}


overlay.addEventListener('click', closeModal);
lightboxButton.addEventListener('click', closeModal);
gallery.addEventListener('click', openModal);


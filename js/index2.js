import {images} from '../gallery-items.js';
import Gallery from './class.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxButton = document.querySelector('.lightbox__button'); 
const overlay = document.querySelector('.lightbox__overlay');

let index = 0;
const arrImg = [];


const galler = new Gallery(arrImg, gallery, lightbox, lightboxImg, index);
galler.renderImg(images);
gallery.addEventListener('click', galler.openModal.bind(galler));
lightboxButton.addEventListener('click', galler.closeModal.bind(galler));
overlay.addEventListener('click', galler.closeModal.bind(galler));



// static Class
// Gallery.renderImg(images, arrImg, gallery)
// gallery.addEventListener('click', (event) => {
//     Gallery.openModal(event, lightbox, lightboxImg, index, arrImg)
// });
// lightboxButton.addEventListener('click', Gallery.closeModal.bind(null, lightbox, lightboxImg));
// overlay.addEventListener('click', Gallery.closeModal.bind(this, lightbox, lightboxImg));


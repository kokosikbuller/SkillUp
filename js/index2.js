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















// export default class Gallery {
//     constructor(index, arrImg, gallery, lightbox, lightboxImg) {
//         this.index = index;
//         this.arrImg = arrImg;
//         this.gallery = gallery;
//         this.lightbox = lightbox;
//         this.lightboxImg = lightboxImg;
//     }

//     renderImg(arr) {
//         arr.forEach(img => {
//             const li = `
//             <li class="gallery__item">
//             <a
//               class="gallery__link"
//               href=${img.original}
//             >
//               <img
//                 class="gallery__image"
//                 src=${img.preview}
//                 data-source=${img.original}
//                 alt="Tulips"
//               />
//             </a>
//           </li>
//             `
//             this.arrImg.push(img.original);
//             this.gallery.insertAdjacentHTML('afterbegin', li);
//         })
//     };

//     static openModal(event, lightbox, lightboxImg, index, arrImg) {
//         event.preventDefault();
//         if(event.target.nodeName !== 'IMG') {
//             return;
//         }
//         lightbox.classList.add('is-open');
//         lightboxImg.src = event.target.dataset.source;

//         const toggleImg = (event) => {
//             if(event.key === 'Escape') {
//                 this.closeModal(lightbox, lightboxImg);
//             }
            
//             if(event.key === 'ArrowRight') {
//                 index += 1;
//                 if(index >= arrImg.length){
//                     index = 0
//                 }
//                 lightboxImg.src = arrImg[index];
//             }

//             if(event.key === 'ArrowLeft') {
//                 index -= 1;
//                 if(index < 0) {
//                     index = arrImg.length - 1
//                 }
//                 lightboxImg.src = arrImg[index];
//             }
//         }
//         window.addEventListener('keydown', toggleImg);
//     }

//     static closeModal(lightbox, lightboxImg) {
//         lightbox.classList.remove('is-open');
//         lightboxImg.src = ''
//     }
// }

export default class Gallery {
    constructor(arrImg, gallery, lightbox, lightboxImg, index) {
        this.arrImg = arrImg;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.lightboxImg = lightboxImg;
        this.index = index;
    }
    renderImg(arr) {
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
            this.arrImg.push(img.original);
            this.gallery.insertAdjacentHTML('afterbegin', li);
        })
    };

    openModal(event) {
        event.preventDefault();
        if(event.target.nodeName !== 'IMG') {
            return;
        }

        this.lightbox.classList.add('is-open');
        this.lightboxImg.src = event.target.dataset.source;

        window.addEventListener('keydown', this.toggleImg.bind(this));
    }

    closeModal() {
        this.lightbox.classList.remove('is-open');
        this.lightboxImg.src = ''
    }

    toggleImg(event) {
        if(event.code === 'Escape') {
            this.closeModal();
        }

        if(event.key === 'ArrowRight') {
            this.index += 1;
            if(this.index >= this.arrImg.length){
                this.index = 0
            }
            this.lightboxImg.src = this.arrImg[this.index];
        }

        if(event.key === 'ArrowLeft') {
            this.index -= 1;
            if(this.index <0){
                this.index = this.arrImg.length - 1
            }
            this.lightboxImg.src = this.arrImg[this.index];
        }
    }
}








// export default class Gallery {
//     static renderImg(arr, arrImg, gallery) {
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
//             arrImg.push(img.original);
//             gallery.insertAdjacentHTML('afterbegin', li);
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

            // if(event.key === 'ArrowRight') {
            //     index += 1;
            //     if(index >= arrImg.length){
            //         index = 0
            //     }
            //     lightboxImg.src = arrImg[index];
            // }

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








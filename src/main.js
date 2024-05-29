import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//----------------------------------
import { getImages } from './js/pixabay-api.js';
const searchForm = document.querySelector('.search-form');

//----------------------------------

let imageName = '';

searchForm.addEventListener('input', (event) => {
  imageName = event.target.value.trim();
});

searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (imageName === '') {
    return;
  }


  getImages(imageName)

  return event.target.reset();
}


//-----------------simpleBox-----------------

let galleryModal = new SimpleLightbox('.gallery gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

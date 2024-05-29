import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//----------------------------------
import { getImages } from './js/pixabay-api.js';
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

//----------------------------------

let imageName = '';

searchForm.addEventListener('input', (event) => {
  imageName = event.target.value.trim();
});

searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  showLoader();

  if (imageName === '') {
    return;
  }

  getImages(imageName)
    .finally(() => {
      hideLoader();
    });
  return event.target.reset();
}

//---------------------Loader-----------------------

function showLoader() {
  loader.style.display = 'inline-block';
}

function hideLoader() {
  loader.style.display = 'none';
}
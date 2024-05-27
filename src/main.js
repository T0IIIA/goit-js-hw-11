import { getImages } from './js/pixabay-api.js';
import {  } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const imageGallery = document.querySelector('.gallery');



let imageName = "";

searchForm.addEventListener('input', (event) => {
  imageName = event.target.value.trim();
});

searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (imageName === '') {
    return;
  }

  return getImages(imageName)
}







// У файлі main.js напиши всю логіку роботи додатка.
// У файлі pixabay-api.js зберігай функції для HTTP-запитів.
// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

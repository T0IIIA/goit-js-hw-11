import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import { imageTamplate } from './render-functions.js';
export { getImages }

const imageGallery = document.querySelector('.gallery');
//----------------------------------

function getImages(imageName) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44085737-801aedd726c9c1496368a8656',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  })

  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
      imageGallery.innerHTML = '';
      return iziToast.error({ ...errorParams });
      }

      const markup = imageTamplate(data.hits);
      imageGallery.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => console.log(error))
}

//------------------iziToast params----------------

const errorParams = {
  position: 'topRight',
  timeout: 1800,
  maxWidth: 300,
  icon: 'none',
  message: 'Sorry, there are no images matching your search query. Please try again!',
}

//------------------Simple Light box----------------

let lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
















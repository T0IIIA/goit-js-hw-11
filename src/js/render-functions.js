export { createMarkup };

//----------------------------------

function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `<li class="gallery-item">

        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
        </a>

        <ul class="info">
          <li class="info-item"> <b>Likes</b> ${likes} </li>
          <li class="info-item"> <b>Views</b> ${views} </li>
          <li class="info-item"> <b>Comments</b> ${comments} </li>
          <li class="info-item"> <b>Downloads</b> ${downloads} </li>
        </ul>

      </li>`).join('');
  }


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";














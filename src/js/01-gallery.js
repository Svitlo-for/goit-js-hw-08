// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const galleryFoto = galleryItems.map(url => `
<li class="gallery__item">
  <a class="gallery__link" href="${url.original}">
    <img
      class="gallery__image"
      src="${url.preview}"
      alt="${url.description}"
    />
  </a>
</li>
`).join("");

galleryBox.insertAdjacentHTML('beforeend', galleryFoto);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
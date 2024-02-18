import { fetchImages } from './js/pixabay-api';
import { templateImages } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  loadEl: document.querySelector('.loader'),
  GalleryEl: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', onFormSabmit);

function onFormSabmit(e) {
  e.preventDefault();

  showLoader();

  const query = e.target.elements.query.value.trim(); //діставання значення input без пробілів
  if (!query) {
    showError();
    hideLoader();
    return;
  }

  fetchImages(query)
    .then(data => {
      showLoader();

      hideLoader();
      if (data.hits.length === 0) {
        showErrorMessenge();
        hideLoader();
      } else {
        refs.GalleryEl.innerHTML = ''; //скидання розмітки після submit, але до рендеру
        renderHits(data.hits);
      }
    })
    .catch(error => {
      showLoader();

      showError(error);
      hideLoader();

      refs.GalleryEl.innerHTML = ''; //скидання розмітки після
    })

    .finally(() => {
      e.target.reset(); //очистка форми
    });
}
// =====================================================================
function renderHits(hits) {
  const markup = templateImages(hits);
  refs.GalleryEl.insertAdjacentHTML('beforeend', markup); // додає нову розмітку

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    animation: 250,
    widthRatio: 0.8,
    scaleImageToRatio: true,
  });

  lightbox.refresh();
}

function showError() {
  iziToast.error({
    message: 'Please enter a search query.',
    position: 'topRight',
  });
}
function showErrorMessenge() {
  iziToast.error({
    backgroundColor: '#EF4040',
    position: 'topRight',
    maxWidth: 500,
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

const showLoader = () => {
  refs.loadEl.classList.remove('hidden');
};

const hideLoader = () => {
  refs.loadEl.classList.add('hidden');
};

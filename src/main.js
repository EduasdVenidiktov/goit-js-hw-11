import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import renderGallery from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  document.body.append(loader);
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

form.addEventListener('submit', event => {
  showLoader();
  event.preventDefault();
  const nameImage = event.target.elements.query.value;
  if (nameImage.trim() === '') {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    hideLoader();
  } else {
    gallery.innerHTML = '';
    fetchImages(nameImage);
    event.target.reset();
  }
});

// ======= pixabay функція відправленя на бек запиту, отримання  та обробки відповіді
function fetchImages(nameImage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '42263617-81d7156b9f7b88cd7b1016c2a',
    q: nameImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${searchParams}`;
  hideLoader();

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        iziToast.error({
          backgroundColor: '#EF4040',
          position: 'topRight',
          maxWidth: 500,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      iziToast
        .error({
          // Вивести повідомлення про помилку користувачеві
          backgroundColor: '#EF4040',
          position: 'topRight',
          maxWidth: 500,
          message: 'Oops! Something went wrong. Please try again later.',
        })
        .finally(() => {
          hideLoader();
        });
    });

  // ============ функція повертає розмітку галереї +++++
  function templateImage({
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) {
    return `<li class="gallery-item" >
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="item-text">
    <p><strong>Likes:</strong> ${likes}</p>
    <p><strong>Views:</strong> ${views}</p>
    <p><strong>Comments:</strong> ${comments}</p>
    <p><strong>Downloads:</strong> ${downloads}</p>
    </div>
  </li>`;
  }

  // ===========render-function відображення зображень у галереї, отриманих від сервера
  function renderGallery(data) {
    const markup = data.hits.map(templateImage).join('');
    gallery.innerHTML = markup;

    const galleryLinks = document.querySelectorAll('.gallery-link');
    galleryLinks.forEach(link => {
      link.setAttribute('href', link.querySelector('img').getAttribute('src'));
    });

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
}

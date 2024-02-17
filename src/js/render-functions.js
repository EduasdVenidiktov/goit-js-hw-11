export default function renderGallery(data) {
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

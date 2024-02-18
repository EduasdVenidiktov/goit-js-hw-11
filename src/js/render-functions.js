export function templateImage(hit) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = hit;

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

export function templateImages(hits) {
  return hits.map(templateImage).join('');
}

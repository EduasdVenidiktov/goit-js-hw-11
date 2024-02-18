// ==========функція відправлення кур'єра на сервер===========

export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '42263617-81d7156b9f7b88cd7b1016c2a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${searchParams}`;
  return fetch(url).then(res => res.json());
}

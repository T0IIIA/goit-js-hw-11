export { getImages }

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
}


















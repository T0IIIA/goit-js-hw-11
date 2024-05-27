export { getImages }

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
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => console.log(data.hits))
    .catch(error => console.log(error))
}





















const alertMessage = "Sorry, there are no images matching your search query. Please try again!";





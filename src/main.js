// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
//     const options = {
//       headers: {
//         Authorization: '5e37a58009d54154bf14bebf401d237f',
//       },
//     };

//     return fetch(url, options)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         this.incrementPage();
//         return data.articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.query;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

import ImagesApiService from './js/image-service';

const imagesApiService = new ImagesApiService();

const list = document.querySelector('.list');
const loadMore = document.querySelector('.load-more__btn');

loadMore.addEventListener('click', onLoadMore);

loadImages();

function loadImages() {
  imagesApiService
    .fetchImages()
    .then(images => renderImages(images))
    .catch(error => console.log(error));
}

function renderImages(images) {
  const markUp = images
    .map(image => {
      return `
        <li class="item">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <p class="user">User: ${image.user}</p>
            <p class="likes">Likes: ${image.likes}</p>
            <p class="comments">Comments: ${image.comments}</p>
        </li>
        `;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markUp);
}

function onLoadMore() {
  loadImages();
}

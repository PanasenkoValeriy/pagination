export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    const options = {
      headers: {
        Authorization: '5e37a58009d54154bf14bebf401d237f',
      },
    };

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.incrementPage();
        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.query;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

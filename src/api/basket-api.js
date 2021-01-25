export function getBasketItems() {
  // fetch - это встроенная функция в браузере, которая позволяет отправлять http запросы.
  // Она является обёрткой над XMLHttpRequest https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  // Подробнее про fetch тут https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  return fetch('http://localhost:8000/api/basket')
    .then(result => {
      return result.json();
    })
    .catch(err => console.log(err));
}

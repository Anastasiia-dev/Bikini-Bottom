export function getBasketItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(basketItems);
    }, 300);
  });
}

const basketItems = [
  {
    type: 0,
    title: 'hotel'
  },
  {
    type: 1,
    title: 'activity'
  },
  {
    type: 2,
    title: 'dining'
  },
  {
    type: 3,
    title: 'package'
  }
];


const run = () => {
let items = document.querySelectorAll<HTMLElement>('.item');
let currentItem:number = 0;
setInterval(nextSlide,6000);
function nextSlide() {
    let count: number = currentItem;
    items[count].classList.add('to-left')
    items[count].addEventListener('animationend',  () => {
      items[count].classList.remove('active', 'to-left');
    });

    currentItem = (currentItem + 1) % items.length;

    items[currentItem].classList.add('next', 'from-right')
    items[currentItem].addEventListener('animationend', () => {
      items[currentItem].classList.remove('next', 'from-right')
      items[currentItem].classList.add('active')
    });
}
}

export default run
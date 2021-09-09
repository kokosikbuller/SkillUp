const colors = [
  'red',
  'green',
  'violet',
  'gray',
  'blue',
  'yellow',
];


const body = document.querySelector('body');
const start = document.querySelectorAll('button');
let interval;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


start.forEach(item => {
  if(item.dataset.action === 'start') {
    item.addEventListener('click', setColor)
  }

  if(item.dataset.action === 'stop') {
    item.addEventListener('click', () => {
      clearInterval(interval)
      start[0].removeAttribute('disabled', 'disabled')
    })
  }
})

function setColor() {
    interval = setInterval(() => {
      const index = randomIntegerFromInterval(0, 5)
      body.style.background = colors[index]
    }, 1000)

    start[0].setAttribute('disabled', 'disabled')
}

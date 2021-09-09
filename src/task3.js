export default class Timer {
  constructor(finishDay, spanRef) {
    this.finishDay = finishDay;
    this.spanRef = spanRef;
  }

  setDate() {
    const interval = setInterval(() => {
          const dayNow = Date.now();
          const distance = this.finishDay - dayNow;
          if(distance < 0) {
            clearInterval(interval);
            return
          }
          let days = Math.floor(distance / 1000 / 60 / 60 / 24);
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          this.spanRef.forEach(item => {
            if(item.dataset.value === 'days') {
              item.innerText = result(days);
            }

            if(item.dataset.value === 'hours') {
              item.innerText = result(hours);
            }

            if(item.dataset.value === 'mins') {
              item.innerText = result(minutes);
            }

            if(item.dataset.value === 'secs') {
              item.innerText = result(seconds);
            }
          })

          function result(text) {
            return text.toString().length === 1 ? `0${text}` : text;
          }

          }, 1000);
  }

}
